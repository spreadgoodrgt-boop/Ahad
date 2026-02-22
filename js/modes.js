/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/modes.js
   Flashcard and Quiz mode logic
══════════════════════════════════════════════════ */

const Modes = (() => {

  // ── FLASHCARD ────────────────────────────────
  let fcIndex   = 0;
  let fcFlipped = false;

  function initFlashcards() {
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (!AppState.ayahs.length) return;
    const ayah = AppState.ayahs[fcIndex];
    fcFlipped = false;

    const card = document.getElementById('flashcard');
    const inner = document.getElementById('flashcardInner');
    card.classList.remove('flipped');

    inner.innerHTML = `
      <div class="fc-ayah-num">${t('fcAyah')} ${ayah.number}</div>
      <div class="fc-arabic arabic-quran">${ayah.arabic}</div>
      <div class="fc-hint">${t('fcTap')}</div>
    `;

    const cur   = document.getElementById('fcCurrent');
    const total = document.getElementById('fcTotal');
    if (cur)   cur.textContent   = fcIndex + 1;
    if (total) total.textContent = AppState.ayahs.length;
  }

  function flipCard() {
    if (!AppState.ayahs.length) return;
    const ayah  = AppState.ayahs[fcIndex];
    const card  = document.getElementById('flashcard');
    const inner = document.getElementById('flashcardInner');
    fcFlipped = !fcFlipped;

    if (fcFlipped) {
      card.classList.add('flipped');
      const lang = AppState.lang;
      const trans = ayah.translations[lang];
      const transClass = lang === 'ur' ? 'hi-ur' : lang === 'hi' ? 'hi' : '';
      inner.innerHTML = `
        <div class="fc-ayah-num">${t('fcAyah')} ${ayah.number}</div>
        <div class="fc-arabic arabic-quran" style="font-size:26px;">${ayah.arabic}</div>
        <div class="fc-transliteration">${ayah.transliteration}</div>
        <div class="fc-translation ${transClass}">${trans}</div>
      `;
    } else {
      renderFlashcard();
    }
  }

  function fcNav(dir) {
    fcIndex = Math.max(0, Math.min(AppState.ayahs.length - 1, fcIndex + dir));
    renderFlashcard();
  }

  // ── QUIZ ─────────────────────────────────────
  let quiz = {
    questions: [],
    current:   0,
    score:     0,
    answered:  false,
  };

  function initQuiz() {
    generateQuiz();
    renderQuiz();
  }

  function generateQuiz() {
    const lang = AppState.lang;
    const shuffled = [...AppState.ayahs].sort(() => Math.random() - 0.5).slice(0, 10);
    quiz.questions = shuffled.map(ayah => {
      const wrong = AppState.ayahs
        .filter(a => a.number !== ayah.number)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(a => a.translations[lang]);
      const opts = [...wrong, ayah.translations[lang]].sort(() => Math.random() - 0.5);
      return {
        ayah,
        correct: ayah.translations[lang],
        options: opts,
      };
    });
    quiz.current  = 0;
    quiz.score    = 0;
    quiz.answered = false;
  }

  function renderQuiz() {
    const container = document.getElementById('quizContent');
    const fill      = document.getElementById('quizProgressFill');
    if (!container) return;

    const pct = (quiz.current / quiz.questions.length) * 100;
    if (fill) fill.style.width = pct + '%';

    if (quiz.current >= quiz.questions.length) {
      renderQuizResult(container);
      return;
    }

    const q = quiz.questions[quiz.current];
    const lang = AppState.lang;
    const transClass = lang === 'ur' ? 'hi-ur' : lang === 'hi' ? 'hi' : '';

    container.innerHTML = `
      <div class="quiz-q-card">
        <div class="quiz-q-label">${t('quizQuestion')} ${quiz.current + 1} ${t('quizOf')} ${quiz.questions.length} — ${t('quizWhat')}</div>
        <div class="quiz-arabic arabic-quran">${q.ayah.arabic}</div>
        <div class="quiz-trans">${q.ayah.transliteration}</div>
        <div class="quiz-options" id="quizOptions">
          ${q.options.map((opt, i) => `
            <button class="quiz-opt ${transClass}" onclick="Modes.answerQuiz(${i})">${opt}</button>
          `).join('')}
        </div>
      </div>
      <button class="quiz-next-btn" id="quizNextBtn" style="display:none;" onclick="Modes.nextQuestion()">
        ${quiz.current + 1 < quiz.questions.length ? t('next') : '✓ ' + t('quizScore')}
      </button>
    `;
  }

  function answerQuiz(i) {
    if (quiz.answered) return;
    quiz.answered = true;

    const q    = quiz.questions[quiz.current];
    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach(o => o.disabled = true);

    const isCorrect = opts[i]?.textContent?.trim() === q.correct?.trim();
    if (isCorrect) {
      opts[i].classList.add('correct');
      quiz.score++;
      UI.toast(t('quizCorrect'));
    } else {
      opts[i].classList.add('wrong');
      opts.forEach(o => {
        if (o.textContent?.trim() === q.correct?.trim()) o.classList.add('correct');
      });
      UI.toast(t('quizWrong'));
    }

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) nextBtn.style.display = 'block';
  }

  function nextQuestion() {
    quiz.current++;
    quiz.answered = false;
    renderQuiz();
  }

  function renderQuizResult(container) {
    const pct = Math.round((quiz.score / quiz.questions.length) * 100);
    let msg = pct >= 80 ? t('quizExcellent') : pct >= 60 ? t('quizGood') : t('quizKeepGoing');

    container.innerHTML = `
      <div class="quiz-result">
        <div style="font-size:52px;">🎯</div>
        <div style="font-size:var(--fs-sm); color:var(--t3); text-transform:uppercase; letter-spacing:2px; margin-top:12px;">${t('quizScore')}</div>
        <div class="quiz-score-num">${quiz.score}/${quiz.questions.length}</div>
        <div class="quiz-score-pct">${pct}%</div>
        <div style="color:var(--t2); font-size:var(--fs-md);">${msg}</div>
        <button class="quiz-restart-btn" onclick="Modes.restartQuiz()">${t('quizTryAgain')}</button>
      </div>
    `;

    if (document.getElementById('quizProgressFill'))
      document.getElementById('quizProgressFill').style.width = '100%';
  }

  function restartQuiz() {
    generateQuiz();
    renderQuiz();
  }

  // Re-init when language changes
  function onLangChange() {
    generateQuiz();
    renderFlashcard();
  }

  return { initFlashcards, renderFlashcard, flipCard, fcNav, initQuiz, answerQuiz, nextQuestion, restartQuiz, onLangChange };
})();
