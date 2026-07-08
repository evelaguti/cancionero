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
}
