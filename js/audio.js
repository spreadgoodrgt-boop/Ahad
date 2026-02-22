/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/audio.js
   Audio player — Mishary Alafasy per-ayah playback
══════════════════════════════════════════════════ */

const Audio = (() => {
  const el = document.getElementById('mainAudio');
  let currentAyah = null;
  let playing = false;

  // ── Helpers ──────────────────────────────────
  function fmt(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  function setPlayIcon(isPlaying) {
    const btn = document.getElementById('playBtn');
    if (!btn) return;
    btn.textContent = isPlaying ? '⏸' : '▶';
    btn.classList.toggle('is-playing', isPlaying);
  }

  function clearPlayingCard() {
    document.querySelectorAll('.ayah-card.playing').forEach(c => c.classList.remove('playing'));
  }

  function setPlayingCard(num) {
    clearPlayingCard();
    const card = document.getElementById(`ayah-${num}`);
    if (card) card.classList.add('playing');
  }

  function updateLabel(num) {
    const label = document.getElementById('audioAyahLabel');
    if (label) {
      label.textContent = num
        ? `${t('audioAyah')} ${num} / ${AppState.ayahs.length}`
        : t('fullSurah');
    }
  }

  // ── Events ───────────────────────────────────
  el.addEventListener('timeupdate', () => {
    if (!el.duration) return;
    const pct = (el.currentTime / el.duration) * 100;
    const fill = document.getElementById('progressFill');
    const cur  = document.getElementById('currentTime');
    if (fill) fill.style.width = pct + '%';
    if (cur)  cur.textContent = fmt(el.currentTime);
  });

  el.addEventListener('loadedmetadata', () => {
    const dur = document.getElementById('durationTime');
    if (dur) dur.textContent = fmt(el.duration);
  });

  el.addEventListener('ended', () => {
    const nextNum = (currentAyah || 0) + 1;
    if (nextNum <= AppState.ayahs.length) {
      playAyah(nextNum);
    } else {
      playing = false;
      setPlayIcon(false);
      clearPlayingCard();
      updateLabel(null);
    }
  });

  el.addEventListener('error', () => {
    UI.toast(t('errAudio'));
    playing = false;
    setPlayIcon(false);
  });

  // ── Public API ───────────────────────────────
  function playAyah(num, stopPropagation) {
    const ayah = AppState.ayahs.find(a => a.number === num);
    if (!ayah || !ayah.audio) { UI.toast(t('errAudio')); return; }

    currentAyah = num;
    el.src = ayah.audio;
    el.play().catch(() => UI.toast(t('errAudio')));
    playing = true;
    setPlayIcon(true);
    setPlayingCard(num);
    updateLabel(num);
  }

  function toggle() {
    if (!currentAyah) { playAyah(1); return; }
    if (playing) {
      el.pause();
      playing = false;
      setPlayIcon(false);
    } else {
      el.play();
      playing = true;
      setPlayIcon(true);
    }
  }

  function prev() {
    const p = Math.max(1, (currentAyah || 2) - 1);
    playAyah(p);
  }

  function next() {
    const n = Math.min(AppState.ayahs.length, (currentAyah || 0) + 1);
    playAyah(n);
  }

  function seek(e) {
    const bar = document.getElementById('progressBar');
    if (!bar || !el.duration) return;
    const ratio = e.offsetX / bar.offsetWidth;
    el.currentTime = ratio * el.duration;
  }

  function getCurrentAyah() { return currentAyah; }
  function isPlaying() { return playing; }

  return { playAyah, toggle, prev, next, seek, getCurrentAyah, isPlaying };
})();
