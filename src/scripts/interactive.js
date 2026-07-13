export function initInteractivity() {
  /* ---------------- RAIN MOTIF (song 2) ---------------- */
  function renderRain(container) {
    let html = "";
    const positions = [12, 30, 50, 68, 85];
    positions.forEach(function(pct, idx) {
      const delay = (idx * 1.1).toFixed(1);
      html += '<span class="rain-drop" style="left:' + pct + '%; animation-delay:-' + delay + 's;"></span>';
    });
    container.innerHTML = html;
  }

  // Initialize rain on panels that have it
  document.querySelectorAll("[data-rain]").forEach(function(rainEl) {
    renderRain(rainEl);
  });

  /* ---------------- TAB SWITCHING ---------------- */
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".song-panel");
  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      // Pause auto-scroll when switching tabs
      stopAllAutoScroll();

      tabs.forEach(function(t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      panels.forEach(function(p) {
        p.classList.toggle("active", p.dataset.song === tab.dataset.song);
      });
    });
  });

  /* ---------------- CLICK-TO-HIGHLIGHT CHORD DIAGRAM ---------------- */
  document.addEventListener("click", function(e) {
    const badge = e.target.closest(".chord-badge");
    if (!badge) return;
    const panel = badge.closest(".song-panel");
    if (!panel) return;
    const chord = badge.getAttribute("data-chord");
    const card = panel.querySelector('.chord-card[data-chord="' + chord + '"]');
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.remove("pulse");
    void card.offsetWidth; // restart animation
    card.classList.add("pulse");
    clearTimeout(card._pulseTimer);
    card._pulseTimer = setTimeout(function() {
      card.classList.remove("pulse");
    }, 1400);
  });

  /* ---------------- KARAOKE AUTO-SCROLL ---------------- */
  let scrollAnimationFrameId = null;
  let scrollIsPlaying = false;
  let scrollLastTime = 0;
  let scrollAccumulator = 0;

  function getActiveControls() {
    const activePanel = document.querySelector(".song-panel.active");
    if (!activePanel) return null;

    const controls = activePanel.querySelector(".karaoke-controls");
    if (!controls) return null;

    return {
      panel: activePanel,
      controls: controls,
      playPauseBtn: controls.querySelector(".play-pause-btn"),
      playIcon: controls.querySelector(".play-icon"),
      pauseIcon: controls.querySelector(".pause-icon"),
      stopBtn: controls.querySelector(".stop-btn"),
      slider: controls.querySelector(".speed-slider"),
      display: controls.querySelector(".speed-display"),
      baseSpeed: parseFloat(controls.getAttribute("data-base-speed") || "20"),
      songId: controls.getAttribute("data-song-id")
    };
  }

  function stopAllAutoScroll() {
    if (scrollAnimationFrameId) {
      cancelAnimationFrame(scrollAnimationFrameId);
      scrollAnimationFrameId = null;
    }
    scrollIsPlaying = false;
    scrollLastTime = 0;
    scrollAccumulator = 0;

    // Reset all play buttons visually
    document.querySelectorAll(".karaoke-controls").forEach(function(ctrl) {
      const playIcon = ctrl.querySelector(".play-icon");
      const pauseIcon = ctrl.querySelector(".pause-icon");
      const playPauseBtn = ctrl.querySelector(".play-pause-btn");
      if (playIcon) playIcon.style.display = "block";
      if (pauseIcon) pauseIcon.style.display = "none";
      if (playPauseBtn) playPauseBtn.setAttribute("aria-label", "Reproducir desplazamiento automático");
    });
  }

  function startAutoScroll() {
    const active = getActiveControls();
    if (!active) return;

    stopAllAutoScroll(); // Clear any existing loop first

    scrollIsPlaying = true;
    scrollLastTime = 0;

    active.playIcon.style.display = "none";
    active.pauseIcon.style.display = "block";
    active.playPauseBtn.setAttribute("aria-label", "Pausar desplazamiento automático");

    function scrollStep(time) {
      if (!scrollIsPlaying) return;

      const currentActive = getActiveControls();
      if (!currentActive || currentActive.songId !== active.songId) {
        stopAllAutoScroll();
        return;
      }

      if (!scrollLastTime) {
        scrollLastTime = time;
        scrollAnimationFrameId = requestAnimationFrame(scrollStep);
        return;
      }

      const dt = (time - scrollLastTime) / 1000;
      scrollLastTime = time;

      // Prevent sudden jumps (e.g. if the tab went to the background)
      if (dt > 0.1) {
        scrollAnimationFrameId = requestAnimationFrame(scrollStep);
        return;
      }

      const multiplier = parseFloat(currentActive.slider.value || "1.0");
      const speed = currentActive.baseSpeed * multiplier;

      scrollAccumulator += speed * dt;
      if (scrollAccumulator >= 1) {
        const scrollPx = Math.floor(scrollAccumulator);
        scrollAccumulator -= scrollPx;
        window.scrollBy(0, scrollPx);
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 1) {
        stopAllAutoScroll();
      } else {
        scrollAnimationFrameId = requestAnimationFrame(scrollStep);
      }
    }

    scrollAnimationFrameId = requestAnimationFrame(scrollStep);
  }

  function pauseAutoScroll() {
    stopAllAutoScroll();
  }

  // Initialize event listeners on all panels' controls
  document.querySelectorAll(".karaoke-controls").forEach(function(controls) {
    const playPauseBtn = controls.querySelector(".play-pause-btn");
    const stopBtn = controls.querySelector(".stop-btn");
    const slider = controls.querySelector(".speed-slider");
    const display = controls.querySelector(".speed-display");
    const panel = controls.closest(".song-panel");

    if (playPauseBtn) {
      playPauseBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (scrollIsPlaying) {
          if (panel.classList.contains("active")) {
            pauseAutoScroll();
          }
        } else {
          if (panel.classList.contains("active")) {
            startAutoScroll();
          }
        }
      });
    }

    if (stopBtn) {
      stopBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        pauseAutoScroll();

        // Scroll back to the top of this song panel
        const offset = panel.offsetTop - 16;
        window.scrollTo({
          top: Math.max(0, offset),
          behavior: "smooth"
        });
      });
    }

    if (slider && display) {
      slider.addEventListener("input", function() {
        const val = parseFloat(slider.value).toFixed(1);
        display.textContent = val + "x";
      });
    }
  });
}
