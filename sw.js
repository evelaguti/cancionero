const CACHE = 'cancionero-offline-v2';
const PRECACHE = [
  '/cancionero/',
  '/cancionero/index.html',
  '/cancionero/manifest.webmanifest',
  '/cancionero/icon-192.png',
  '/cancionero/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = event.request.url;
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith((async () => { const cached = await caches.match(event.request); if (cached) return cached; try { const r = await fetch(event.request); if (r.ok) { const cache = await caches.open(CACHE); cache.put(event.request, r.clone()); } return r; } catch { return new Response('', {status:204}); } })());
    return;
  }
  event.respondWith((async () => { try { const r = await fetch(event.request); if (r.ok) { const cache = await caches.open(CACHE); cache.put(event.request, r.clone()); } return r; } catch { const cached = await caches.match(event.request); if (cached) return cached; return new Response('Offline', {status:503}); } })());
});
