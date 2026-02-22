/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/app.js
   Central controller — state, routing, boot,
   Firebase auth, dark mode, surah navigation
══════════════════════════════════════════════════ */

window.AppState = {
  lang:           'en',
  mode:           'study',
  surahNum:       67,    // active surah (67 = Al-Mulk)
  ayahs:          [],
  currentAyahIdx: 0,
  user:           null,
  dark:           true,
};

const App = (() => {

  // ─────────────────────────────────────────────
  // BOOT
  // ─────────────────────────────────────────────
  async function init() {
    UI.initStarfield();
    loadTheme();

    // Init Firebase (non-blocking — falls back gracefully)
    await FB.init();

    // Fast-read lang from localStorage (avoids flicker)
    const savedLang = localStorage.getItem('qs_lang');
    if (savedLang) {
      AppState.lang = savedLang;
      window.applyI18n();
      _updateLangToggle();
    }

    // Try to restore session
    const profile = await FB.loadProfile();
    if (profile?.name) {
      AppState.user = profile;
      AppState.lang = profile.lang || AppState.lang;
      window.applyI18n();
      _updateLangToggle();
      _hideLangOverlay();
      _updateUserUI();
      await _loadAndRender();
    } else if (savedLang) {
      _showLoginStep();
    }
    // No saved lang → lang picker overlay stays visible (default HTML)
  }

  // ─────────────────────────────────────────────
  // STEP 1 — Language selection
  // ─────────────────────────────────────────────
  async function setLang(lang) {
    AppState.lang = lang;
    localStorage.setItem('qs_lang', lang);
    window.applyI18n();
    _updateLangToggle();
    _showLoginStep();
  }

  // ─────────────────────────────────────────────
  // STEP 2 — Name / login
  // ─────────────────────────────────────────────
  function _showLoginStep() {
    const overlay = document.getElementById('langOverlay');
    overlay.style.display    = 'flex';
    overlay.style.opacity    = '1';
    overlay.style.transition = '';

    const lang = AppState.lang;
    const L = {
      en: { title:'What should we call you?', ph:'Your name',  btn:'Begin Study',       back:'← Change Language', sub:'Synced across your devices' },
      hi: { title:'हम आपको क्या बुलाएं?',      ph:'आपका नाम',  btn:'अध्ययन शुरू करें',  back:'← भाषा बदलें',      sub:'आपके सभी डिवाइस पर सिंक होता है' },
      ur: { title:'آپ کا نام کیا ہے؟',          ph:'آپ کا نام', btn:'مطالعہ شروع کریں',  back:'زبان بدلیں ←',      sub:'تمام ڈیوائسز پر سنک ہوتا ہے' },
    }[lang] || { title:'What should we call you?', ph:'Your name', btn:'Begin Study', back:'← Change Language', sub:'Synced across your devices' };

    document.querySelector('#langOverlay .overlay-inner').innerHTML = `
      <div class="overlay-moon animate-float">📖</div>
      <p class="overlay-bismillah arabic-quran" style="font-size:26px;">سُورَةُ ٱلْمُلْك</p>
      <h2 class="overlay-title">${L.title}</h2>
      <p class="overlay-sub">${L.sub}</p>
      <div class="login-input-wrap">
        <input id="loginNameInput" class="login-name-input" type="text"
          placeholder="${L.ph}" maxlength="40" autocomplete="off"
          onkeydown="if(event.key==='Enter') App.submitLogin()" />
        <button class="login-submit-btn" onclick="App.submitLogin()">${L.btn} →</button>
      </div>
      <button class="login-back-btn" onclick="App.goBackToLangPicker()">${L.back}</button>
    `;
    setTimeout(() => document.getElementById('loginNameInput')?.focus(), 150);
  }

  function goBackToLangPicker() {
    document.querySelector('#langOverlay .overlay-inner').innerHTML = `
      <div class="overlay-moon animate-float">🌙</div>
      <p class="overlay-bismillah arabic-quran">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
      <h2 class="overlay-title">Choose Your Study Language</h2>
      <p class="overlay-sub">You can change this anytime from the top bar</p>
      <div class="lang-choices">
        <button class="lang-choice-btn" onclick="App.setLang('en')">
          <span class="lang-flag">🇬🇧</span><span class="lang-name">English</span><span class="lang-script">Roman Script</span>
        </button>
        <button class="lang-choice-btn" onclick="App.setLang('hi')">
          <span class="lang-flag">🇮🇳</span><span class="lang-name">हिंदी</span><span class="lang-script">देवनागरी</span>
        </button>
        <button class="lang-choice-btn" onclick="App.setLang('ur')">
          <span class="lang-flag">🇵🇰</span><span class="lang-name">اردو</span><span class="lang-script">نستعلیق</span>
        </button>
      </div>
    `;
  }

  async function submitLogin() {
    const input = document.getElementById('loginNameInput');
    const name  = (input?.value || '').trim();
    if (!name) {
      input?.classList.add('shake');
      setTimeout(() => input?.classList.remove('shake'), 500);
      return;
    }
    const profile = { name, avatar: name[0].toUpperCase(), lang: AppState.lang };
    AppState.user = profile;
    await FB.saveProfile(profile);
    _hideLangOverlay();
    _updateUserUI();
    await _loadAndRender();
  }

  function _hideLangOverlay() {
    const overlay = document.getElementById('langOverlay');
    if (!overlay) return;
    overlay.style.transition = 'opacity 0.35s ease';
    overlay.style.opacity    = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 360);
  }

  // ─────────────────────────────────────────────
  // USER UI
  // ─────────────────────────────────────────────
  function _updateUserUI() {
    if (!AppState.user) return;
    const el = document.getElementById('userAvatar');
    const nm = document.getElementById('userName');
    const wb = document.getElementById('userBadge');
    if (el) el.textContent = AppState.user.avatar || AppState.user.name?.[0] || '?';
    if (nm) nm.textContent = AppState.user.name;
    if (wb) wb.classList.remove('hidden');
  }

  async function logout() {
    const msgs = {
      en: 'Log out? Your notes and progress are synced.',
      hi: 'लॉग आउट करें? आपके नोट्स सिंक हैं।',
      ur: 'لاگ آؤٹ کریں؟ آپ کے نوٹس سنک ہیں۔',
    };
    if (!confirm(msgs[AppState.lang] || msgs.en)) return;
    AppState.user = null;
    localStorage.removeItem('qs_user');
    localStorage.removeItem('qs_uid');
    document.getElementById('userBadge')?.classList.add('hidden');
    _showLoginStep();
  }

  // ─────────────────────────────────────────────
  // THEME
  // ─────────────────────────────────────────────
  function loadTheme() {
    const saved = localStorage.getItem('qs_theme');
    AppState.dark = saved !== 'light';
    _applyTheme();
  }

  function toggleTheme() {
    AppState.dark = !AppState.dark;
    localStorage.setItem('qs_theme', AppState.dark ? 'dark' : 'light');
    _applyTheme();
  }

  function _applyTheme() {
    document.documentElement.classList.toggle('light-mode', !AppState.dark);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.textContent = AppState.dark ? '☀️' : '🌙';
  }

  // ─────────────────────────────────────────────
  // DATA LOADING
  // ─────────────────────────────────────────────
  async function _loadAndRender() {
    try {
      // Load progress (surah + ayah position) from Firebase / localStorage
      const progress = await FB.loadProgress();
      AppState.surahNum      = progress.surahNum || 67;
      AppState.currentAyahIdx = progress.ayahIdx  || 0;

      // Prefetch notes into localStorage cache for instant reads
      await FB.prefetchNotes(AppState.surahNum);

      if (!AppState.ayahs.length) {
        AppState.ayahs = await API.loadSurah(AppState.surahNum);
      }

      // Ensure translation for active language is loaded before render
      await API.ensureTranslation(AppState.surahNum, AppState.lang);

      // Clamp idx in case surah changed
      AppState.currentAyahIdx = Math.min(
        AppState.currentAyahIdx, AppState.ayahs.length - 1
      );

      document.getElementById('loadingState')?.classList.add('hidden');
      document.getElementById('mainContent')?.classList.remove('hidden');
      UI.renderCurrentAyah();
      Modes.initFlashcards();
      Modes.initQuiz();
    } catch (err) {
      console.error('Load error:', err);
      const ls = document.getElementById('loadingState');
      if (ls) ls.innerHTML = `
        <span style="font-size:40px;">⚠️</span>
        <p style="color:var(--rb);margin-top:16px;">${window.t('errLoad')}</p>
        <button onclick="App._retry()"
          style="margin-top:16px;padding:10px 24px;border-radius:10px;
                 border:1px solid var(--em);background:var(--em-dim);
                 color:var(--em);cursor:pointer;font-size:15px;">Retry</button>
      `;
    }
  }

  // ─────────────────────────────────────────────
  // AYAH NAVIGATION
  // ─────────────────────────────────────────────
  function goToAyah(idx) {
    if (!AppState.ayahs.length) return;
    const clamped = Math.max(0, Math.min(AppState.ayahs.length - 1, idx));
    AppState.currentAyahIdx = clamped;
    FB.saveProgress(AppState.surahNum, clamped); // fire-and-forget
    UI.renderCurrentAyah();
    document.getElementById('ayah-card')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function nextAyah() { goToAyah(AppState.currentAyahIdx + 1); }
  function prevAyah() { goToAyah(AppState.currentAyahIdx - 1); }

  // ─────────────────────────────────────────────
  // LANGUAGE TOGGLE
  // ─────────────────────────────────────────────
  async function changeLang(lang) {
    AppState.lang = lang;
    localStorage.setItem('qs_lang', lang);
    window.applyI18n();
    _updateLangToggle();
    // Persist lang in profile
    if (AppState.user) {
      FB.saveProfile({ ...AppState.user, lang });
    }
    if (AppState.ayahs.length) {
      // Fetch translation for this lang if not already cached, then re-render
      await API.ensureTranslation(AppState.surahNum, lang);
      UI.renderCurrentAyah();
      Modes.onLangChange();
    }
  }

  function _updateLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === AppState.lang);
    });
  }

  // ─────────────────────────────────────────────
  // MODE SWITCHING
  // ─────────────────────────────────────────────
  function switchMode(mode) {
    AppState.mode = mode;
    ['study', 'flashcard', 'quiz'].forEach(m => {
      document.getElementById(`${m}Mode`)?.classList.toggle('hidden', m !== mode);
    });
    document.querySelectorAll('.mode-tab').forEach(tab => {
      const active = tab.id === `tab-${mode}`;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    if (mode === 'quiz' && AppState.ayahs.length) Modes.initQuiz();
    if (mode === 'flashcard') Modes.renderFlashcard();
  }

  return {
    init,
    setLang, submitLogin, logout, goBackToLangPicker,
    changeLang, switchMode, toggleTheme,
    goToAyah, nextAyah, prevAyah,
    _retry: _loadAndRender,
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
