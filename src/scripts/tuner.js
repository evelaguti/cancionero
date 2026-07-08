// Afinador de Ukelele (100% local, sin internet)
export function initTuner() {
  const panel = document.getElementById("panel-afinador");
  if (!panel) return;

  const micBtn      = panel.querySelector("[data-mic-btn]");
  const micLabel    = panel.querySelector("[data-mic-label]");
  const micMsg      = panel.querySelector("[data-mic-msg]");
  const display     = panel.querySelector("[data-tuner-display]");
  const noteNameEl  = panel.querySelector("[data-note-name]");
  const freqEl       = panel.querySelector("[data-freq]");
  const statusEl     = panel.querySelector("[data-status]");
  const centsEl       = panel.querySelector("[data-cents]");
  const needleEl      = panel.querySelector("[data-needle]");
  const stringBtns    = panel.querySelectorAll("[data-string]");

  const UKE_STRINGS = [
    { id: "G4", freq: 392.00 },
    { id: "C4", freq: 261.63 },
    { id: "E4", freq: 329.63 },
    { id: "A4", freq: 440.00 }
  ];

  const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  let audioCtx = null;
  let analyser = null;
  let sourceNode = null;
  let mediaStream = null;
  let rafId = null;
  let listening = false;
  let sampleBuf = null;
  let smoothedFreq = null;

  function frequencyToNote(freq) {
    const midi = 69 + 12 * Math.log2(freq / 440);
    const roundedMidi = Math.round(midi);
    const name = NOTE_NAMES[(roundedMidi % 12 + 12) % 12];
    const octave = Math.floor(roundedMidi / 12) - 1;
    const exactFreq = 440 * Math.pow(2, (roundedMidi - 69) / 12);
    const cents = 1200 * Math.log2(freq / exactFreq);
    return { name: name + octave, cents: cents, midi: roundedMidi };
  }

  function closestUkeString(freq) {
    let best = null, bestCents = Infinity;
    UKE_STRINGS.forEach(function(s) {
      const cents = 1200 * Math.log2(freq / s.freq);
      if (Math.abs(cents) < Math.abs(bestCents)) { bestCents = cents; best = s; }
    });
    return { string: best, cents: bestCents };
  }

  function autoCorrelate(buf, sampleRate) {
    const SIZE = buf.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) { rms += buf[i] * buf[i]; }
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.012) return -1;

    let r1 = 0, r2 = SIZE - 1;
    const thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) { if (Math.abs(buf[i]) < thres) { r1 = i; break; } }
    for (let i = 1; i < SIZE / 2; i++) { if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; } }

    const trimmed = buf.slice(r1, r2);
    const n = trimmed.length;
    if (n < 8) return -1;

    const c = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n - i; j++) { sum += trimmed[j] * trimmed[j + i]; }
      c[i] = sum;
    }

    let d = 0;
    while (d + 1 < n && c[d] > c[d + 1]) { d++; }

    let maxVal = -1, maxPos = -1;
    for (let i = d; i < n; i++) {
      if (c[i] > maxVal) { maxVal = c[i]; maxPos = i; }
    }
    if (maxPos <= 0 || maxPos >= n - 1) return -1;

    const x1 = c[maxPos - 1], x2 = c[maxPos], x3 = c[maxPos + 1];
    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;
    let T0 = maxPos;
    if (a !== 0) { T0 = maxPos - b / (2 * a); }

    if (T0 <= 0) return -1;
    return sampleRate / T0;
  }

  function resetDisplay() {
    display.setAttribute("hidden", "");
    noteNameEl.textContent = "–";
    freqEl.textContent = "0.0 Hz";
    statusEl.textContent = "—";
    statusEl.className = "tuner-status";
    centsEl.textContent = "0 cents";
    needleEl.style.transform = "rotate(0deg)";
    stringBtns.forEach(function(b) { b.classList.remove("active-string", "in-tune"); });
    smoothedFreq = null;
  }

  function updateUI(freq) {
    if (freq === -1 || !freq || !isFinite(freq) || freq < 60 || freq > 1200) {
      return;
    }

    smoothedFreq = (smoothedFreq === null) ? freq : (smoothedFreq * 0.72 + freq * 0.28);

    const note = frequencyToNote(smoothedFreq);
    const near = closestUkeString(smoothedFreq);

    noteNameEl.textContent = note.name;
    freqEl.textContent = smoothedFreq.toFixed(1) + " Hz";

    const cents = near.cents;
    centsEl.textContent = (cents > 0 ? "+" : "") + cents.toFixed(0) + " cents (" + near.string.id + ")";

    const clamped = Math.max(-50, Math.min(50, cents));
    const angle = (clamped / 50) * 45;
    needleEl.style.transform = "rotate(" + angle + "deg)";

    const inTune = Math.abs(cents) <= 5;
    statusEl.className = "tuner-status " + (inTune ? "in-tune" : (cents < 0 ? "flat" : "sharp"));
    statusEl.textContent = inTune ? "✓ Afinado" : (cents < 0 ? "▲ Sube (tensa) la cuerda" : "▼ Baja (afloja) la cuerda");

    stringBtns.forEach(function(b) {
      const isNear = b.getAttribute("data-string") === near.string.id;
      b.classList.toggle("active-string", isNear);
      b.classList.toggle("in-tune", isNear && inTune);
    });
  }

  function loop() {
    if (!listening) return;
    analyser.getFloatTimeDomainData(sampleBuf);
    const freq = autoCorrelate(sampleBuf, audioCtx.sampleRate);
    updateUI(freq);
    rafId = requestAnimationFrame(loop);
  }

  async function startMic() {
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        }
      });
    } catch (err) {
      micMsg.textContent = "No se pudo acceder al micrófono. Revisa los permisos del navegador, o si abriste este archivo como archivo local prueba servirlo desde un servidor local o HTTPS.";
      micMsg.classList.add("error");
      return;
    }

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") { await audioCtx.resume(); }

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    sampleBuf = new Float32Array(analyser.fftSize);

    sourceNode = audioCtx.createMediaStreamSource(mediaStream);
    sourceNode.connect(analyser);

    listening = true;
    micBtn.classList.add("listening");
    micLabel.textContent = "Detener micrófono";
    micMsg.classList.remove("error");
    micMsg.textContent = "Escuchando… acerca el ukelele al micrófono y toca una cuerda a la vez.";
    display.removeAttribute("hidden");

    loop();
  }

  function stopMic() {
    listening = false;
    if (rafId) cancelAnimationFrame(rafId);
    if (mediaStream) { mediaStream.getTracks().forEach(function(t) { t.stop(); }); }
    if (sourceNode) { sourceNode.disconnect(); }
    if (audioCtx) { audioCtx.close(); }
    audioCtx = null; analyser = null; sourceNode = null; mediaStream = null;

    micBtn.classList.remove("listening");
    micLabel.textContent = "Activar micrófono";
    micMsg.classList.remove("error");
    micMsg.textContent = "Todo el procesamiento ocurre en tu celular; no se envía audio a ningún servidor.";
    resetDisplay();
  }

  micBtn.addEventListener("click", function() {
    if (listening) { stopMic(); } else { startMic(); }
  });

  document.addEventListener("visibilitychange", function() {
    if (document.hidden && listening) {
      if (rafId) cancelAnimationFrame(rafId);
    } else if (!document.hidden && listening) {
      loop();
    }
  });
}
