/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/ui.js
   DOM rendering, single-ayah view, dynamic updates
══════════════════════════════════════════════════ */

const UI = (() => {

  // ── Toast ─────────────────────────────────────
  let toastTimer = null;
  function toast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  // ── Starfield ─────────────────────────────────
  function initStarfield() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const stars = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 140; i++) {
      stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.2 + 0.2,
        speed: 0.001 + Math.random() * 0.003, phase: Math.random() * Math.PI * 2,
        baseOpacity: 0.1 + Math.random() * 0.5 });
    }
    let frame = 0;
    (function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      stars.forEach(s => {
        const op = s.baseOpacity * (0.5 + 0.5 * Math.sin(frame * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    })();
  }

  // ── Render current ayah (single-ayah view) ────
  function renderCurrentAyah() {
    const list = document.getElementById('ayahList');
    if (!list || !AppState.ayahs?.length) return;
    const ayah = AppState.ayahs[AppState.currentAyahIdx];
    if (!ayah) return;

    const idx     = AppState.currentAyahIdx;
    const total   = AppState.ayahs.length;
    const isFirst = idx === 0;
    const isLast  = idx === total - 1;

    list.innerHTML = '';

    // ── Nav bar ───────────────────────────────
    function makeNav(extraClass) {
      const nav = document.createElement('div');
      nav.className = `ayah-nav-bar${extraClass ? ' ' + extraClass : ''}`;
      nav.innerHTML = `
        <button class="ayah-nav-btn${isFirst ? ' disabled' : ''}"
          onclick="App.prevAyah()" ${isFirst ? 'disabled' : ''}>
          &#8592; ${t('navPrev')}
        </button>
        <div class="ayah-nav-counter">
          <span class="ayah-nav-num">${ayah.number}</span>
          <span class="ayah-nav-sep">/</span>
          <span class="ayah-nav-total">${total}</span>
        </div>
        <button class="ayah-nav-btn${isLast ? ' disabled' : ''}"
          onclick="App.nextAyah()" ${isLast ? 'disabled' : ''}>
          ${t('navNext')} &#8594;
        </button>`;
      return nav;
    }

    // ── Ayah card ─────────────────────────────
    const card = buildAyahCard(ayah);
    card.id = 'ayah-card';
    card.classList.add('expanded', 'single-mode');

    list.appendChild(makeNav());
    list.appendChild(card);
    list.appendChild(makeNav('ayah-nav-bottom'));

    const label = document.getElementById('audioAyahLabel');
    if (label) label.textContent = `${t('audioAyah')} ${ayah.number}`;
  }

  // ── Legacy alias ──────────────────────────────
  function renderAyahList() { renderCurrentAyah(); }

  // ── Build ayah card ───────────────────────────
  function buildAyahCard(ayah) {
    const num        = ayah.number;
    const surahNum   = AppState.surahNum;
    const lang       = AppState.lang;
    // Read from localStorage cache (prefetched by Firebase on load)
    const savedNote  = localStorage.getItem(`note_${surahNum}_${num}`) || '';

    // Word-by-word (only for ayahs with grammar data)
    const wbwData = GRAMMAR_DATA[num]?.words || [];
    const wbwHTML = wbwData.length ? `
      <div class="section-label sp">📝 ${t('secWordByWord')}</div>
      <div class="wbw-grid">
        ${wbwData.map((w, i) => {
          const meaning = w.meaning[lang] || w.meaning.en;
          return `<div class="wbw-chip" onclick="Grammar.openWord(${num},${i})">
            <span class="wbw-ar arabic-display">${w.ar}</span>
            <span class="wbw-meaning">${meaning}</span>
            <span class="wbw-pos-tag">${w.pos}</span>
          </div>`;
        }).join('')}
      </div>` : '';

    const trans      = ayah.translations[lang] || ayah.translations.en || '';
    const transClass = lang === 'ur' ? 'hi-ur' : lang === 'hi' ? 'hi' : '';

    const card = document.createElement('article');
    card.className = 'ayah-card';
    card.innerHTML = `
      <div class="ayah-card-header single-header">
        <div class="ayah-arabic-full arabic-quran">${ayah.arabic}</div>
        <div class="ayah-header-play">
          <button class="ayah-icon-btn" onclick="Audio.playAyah(${num})" title="${t('btnPlayAyah')}">
            ▶ ${t('btnPlayAyah')}
          </button>
        </div>
      </div>

      <div class="ayah-body">
        <div class="section-label em">🔤 ${t('secTranslit')}</div>
        <div class="transliteration-box">${ayah.transliteration || ''}</div>

        <div class="section-label em">🌍 ${t('secTranslation')}</div>
        <div class="translation-box">
          <div class="translation-text ${transClass}">${trans}</div>
        </div>

        ${wbwHTML}

        <button class="irab-trigger-btn" onclick="Grammar.openIrab(${num})">
          ${t('btnAnalyse')}
        </button>

        <div class="tafsir-header-row">
          <div class="section-label rb" style="margin:0;">📚 ${t('secTafsir')}</div>
          <div class="tafsir-depth-toggle">
            <button class="tafsir-depth-btn active"
              onclick="UI.switchTafsir(${surahNum},${num},'brief',this)">${t('tafsirBrief')}</button>
            <button class="tafsir-depth-btn"
              onclick="UI.switchTafsir(${surahNum},${num},'detailed',this)">${t('tafsirDetailed')}</button>
          </div>
        </div>
        <div class="tafsir-box" id="tafsir-${num}">${(BRIEF_TAFSIR[num]?.[AppState.lang] || BRIEF_TAFSIR[num]?.en || '')}</div>

        <div class="section-label gd" style="margin-top:20px;">✏️ ${t('secNotes')}</div>
        <textarea class="notes-box" id="note-text-${num}"
          placeholder="${t('notesPlaceholder')}">${savedNote}</textarea>
        <div class="notes-row">
          <button class="notes-save-btn" onclick="UI.saveNote(${surahNum},${num})">
            ${t('btnSaveNote')}
          </button>
          <span class="notes-saved" id="note-saved-${num}">${t('btnNoteSaved')}</span>
        </div>
      </div>
    `;
    return card;
  }

  // ── toggleAyah — no-op in single-ayah mode ───
  function toggleAyah() {}

  // ── Tafsir toggle ─────────────────────────────
  // Now fetches live from quranapi.pages.dev for detailed view.
  // Supports 3 tafsirs — Ibn Kathir shown first, tabs for others.
  async function switchTafsir(surahNum, ayahNum, mode, btn) {
    btn.parentElement.querySelectorAll('.tafsir-depth-btn')
       .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const box = document.getElementById(`tafsir-${ayahNum}`);
    if (!box) return;

    if (mode === 'brief') {
      const lang = AppState.lang;
      const entry = BRIEF_TAFSIR[ayahNum];
      box.textContent = entry?.[lang] || entry?.en || '';
      return;
    }

    // Detailed — fetched from quranapi.pages.dev.
    // Scholarly tafsirs (Ibn Kathir, Maarif ul Quran, Tazkirul Quran)
    // are available in English/Arabic only. Brief tafsir above is trilingual.
    box.innerHTML = `<div class="tafsir-loading">
      <span class="tafsir-loading-dot"></span>
      <span class="tafsir-loading-dot"></span>
      <span class="tafsir-loading-dot"></span>
    </div>`;

    try {
      const tafsirs = await API.loadTafsir(surahNum, ayahNum);
      if (!tafsirs?.length) { box.textContent = t('errTafsir'); return; }

      // Build tab UI for all 3 tafsirs
      const tabLabels  = tafsirs.map(tf => tf.author);
      const tabsHTML   = tabLabels.map((lbl, i) =>
        `<button class="tafsir-author-tab${i === 0 ? ' active' : ''}"
          onclick="UI.switchTafsirAuthor(this, ${ayahNum})" data-idx="${i}">${lbl}</button>`
      ).join('');

      // Render Markdown via marked.js if available, else plain text
      function renderMd(text) {
        if (window.marked) return window.marked.parse(text || '');
        return (text || '').replace(/\n/g, '<br>');
      }

      const panelsHTML = tafsirs.map((tf, i) => {
        const groupNote = tf.groupVerse
          ? `<div class="tafsir-group-note">📌 ${tf.groupVerse}</div>` : '';
        return `<div class="tafsir-panel${i === 0 ? '' : ' hidden'}" data-idx="${i}">
          ${groupNote}
          <div class="tafsir-md-content">${renderMd(tf.content)}</div>
        </div>`;
      }).join('');

      box.innerHTML = `
        <div class="tafsir-author-tabs">${tabsHTML}</div>
        ${panelsHTML}
      `;
    } catch(e) {
      box.textContent = t('errTafsir');
    }
  }

  // Switch between Ibn Kathir / Maarif / Tazkirul tabs
  function switchTafsirAuthor(btn, ayahNum) {
    const idx = parseInt(btn.dataset.idx);
    const box = document.getElementById(`tafsir-${ayahNum}`);
    if (!box) return;
    box.querySelectorAll('.tafsir-author-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    box.querySelectorAll('.tafsir-panel').forEach(p => {
      p.classList.toggle('hidden', parseInt(p.dataset.idx) !== idx);
    });
  }

  // ── Notes — saved via Firebase ─────────────────
  async function saveNote(surahNum, ayahNum) {
    const ta  = document.getElementById(`note-text-${ayahNum}`);
    const msg = document.getElementById(`note-saved-${ayahNum}`);
    if (!ta) return;
    const text = ta.value;
    await FB.saveNote(surahNum, ayahNum, text);
    if (msg) { msg.classList.add('show'); setTimeout(() => msg.classList.remove('show'), 2000); }
  }

  // ── Language change ───────────────────────────
  function onLangChange() { renderCurrentAyah(); }
  function updateSectionLabels() { onLangChange(); }

  return {
    toast, initStarfield,
    renderCurrentAyah, renderAyahList, buildAyahCard,
    toggleAyah, switchTafsir, switchTafsirAuthor, saveNote,
    onLangChange, updateSectionLabels,
  };
})();
