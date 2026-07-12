const CACHE = 'cancionero-offline-v2';
const PRECACHE = [
  '/cancionero/',
  '/cancionero/index.html',
  '/cancionero/manifest.webmanifest',
  '/cancionero/icon-192.png',
  '/cancionero/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = event.request.url;

  // Handle Google Fonts (Cache first, then network fallback)
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 204 }));
      })
    );
    return;
  }

  // Stale-While-Revalidate strategy for all other GET requests (pages, assets)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse.ok) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, cacheCopy));
        }
        return networkResponse;
      }).catch(err => {
        if (cachedResponse) return cachedResponse;
        throw err;
      });

      // Serve instantly from cache if available, otherwise fetch from network
      return cachedResponse || fetchPromise;
    }).catch(() => {
      return new Response('Offline', { status: 503 });
    })
  );
});
