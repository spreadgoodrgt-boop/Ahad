/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/grammar.js
   Grammar popup (word analysis) + I'rab diagram
══════════════════════════════════════════════════ */

const Grammar = (() => {

  let currentDepth = 'basic'; // 'basic' | 'inter' | 'max'

  // ── Open Word Grammar Popup ──────────────────────
  function openWord(ayahNum, wordIndex) {
    const data = GRAMMAR_DATA[ayahNum];
    if (!data) return;
    const word = data.words[wordIndex];
    if (!word) return;

    const lang = AppState.lang;
    const popup  = document.getElementById('grammarPopup');
    const backdrop = document.getElementById('grammarBackdrop');
    const content  = document.getElementById('grammarContent');

    content.innerHTML = renderWordGrammar(word, lang, currentDepth);
    popup.classList.remove('hidden');
    backdrop.classList.remove('hidden');

    // Bind depth tabs
    popup.querySelectorAll('.gp-depth-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentDepth = btn.dataset.depth;
        popup.querySelectorAll('.gp-depth-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('gpBody').innerHTML = renderGpBody(word, lang, currentDepth);
      });
    });
  }

  function renderWordGrammar(word, lang, depth) {
    const meaning = word.meaning[lang] || word.meaning.en;
    return `
      <div class="gp-word-arabic">${word.ar}</div>
      <div class="gp-word-english">${meaning}</div>
      <div class="gp-transliteration">${word.translit}</div>

      <div class="gp-depth-tabs">
        <button class="gp-depth-tab ${depth==='basic'?'active':''}" data-depth="basic">${t('grammarBasic')}</button>
        <button class="gp-depth-tab ${depth==='inter'?'active':''}" data-depth="inter">${t('grammarInter')}</button>
        <button class="gp-depth-tab ${depth==='max'?'active':''}" data-depth="max">${t('grammarMax')}</button>
      </div>

      <div id="gpBody">${renderGpBody(word, lang, depth)}</div>
    `;
  }

  function renderGpBody(word, lang, depth) {
    const meaning = word.meaning[lang] || word.meaning.en;
    let html = '';

    // ── Basic ────────────────────────────────────
    html += `
      <div class="gp-grid">
        <div class="gp-field">
          <div class="gp-field-label">${t('gpRoot')}</div>
          <div class="gp-field-value arabic">${word.root}</div>
        </div>
        <div class="gp-field">
          <div class="gp-field-label">${t('gpPOS')}</div>
          <div class="gp-field-value">${posLabel(word.pos, lang)}</div>
        </div>
        <div class="gp-field">
          <div class="gp-field-label">${t('gpMeaning')}</div>
          <div class="gp-field-value">${meaning}</div>
        </div>
        <div class="gp-field">
          <div class="gp-field-label">${t('gpTranslit')}</div>
          <div class="gp-field-value">${word.translit}</div>
        </div>
      </div>
      <div class="gp-field" style="margin-bottom:10px;">
        <div class="gp-field-label">${t('gpRoot')} — ${word.rootMeaning?.en || ''}</div>
        <div class="gp-field-value arabic" style="font-size:28px;">${word.root}</div>
      </div>
    `;

    if (depth === 'basic') return html;

    // ── Intermediate ─────────────────────────────
    html += `
      <div class="gp-section-title">${t('grammarInter')}</div>
      <div class="gp-grid">
        ${word.verbForm && word.verbForm !== 'N/A' ? `
          <div class="gp-field">
            <div class="gp-field-label">${t('gpVerbForm')}</div>
            <div class="gp-field-value">${word.verbForm}</div>
          </div>
          <div class="gp-field">
            <div class="gp-field-label">${t('gpConjugation')}</div>
            <div class="gp-field-value">${word.conjugation}</div>
          </div>
        ` : ''}
        <div class="gp-field">
          <div class="gp-field-label">${t('gpCase')}</div>
          <div class="gp-field-value">${word.case}</div>
        </div>
        <div class="gp-field">
          <div class="gp-field-label">${t('gpGender')}</div>
          <div class="gp-field-value">${word.gender}</div>
        </div>
        <div class="gp-field">
          <div class="gp-field-label">${t('gpNumber')}</div>
          <div class="gp-field-value">${word.number}</div>
        </div>
        <div class="gp-field">
          <div class="gp-field-label">${t('gpPattern')}</div>
          <div class="gp-field-value">${word.pattern}</div>
        </div>
      </div>
    `;

    if (depth === 'inter') return html;

    // ── Maximum ──────────────────────────────────
    html += `<div class="gp-section-title">${t('gpImplications')}</div>`;
    const impl = word.implications?.[lang] || word.implications?.en || '';
    if (impl) {
      html += `<div class="gp-implications">${impl}</div>`;
    }

    // Root derivatives
    if (word.derivatives?.length) {
      html += `<div class="gp-section-title">${t('gpDerivatives')}</div>
      <div class="gp-derivatives">
        ${word.derivatives.map(d => `
          <div class="gp-derivative-chip" title="${d.surah}:${d.ayah}">${d.ar}</div>
        `).join('')}
      </div>`;
    }

    // Quranic examples
    if (word.quranicExamples?.length) {
      html += `<div class="gp-section-title">${t('gpExamples')}</div>
      <div class="gp-quran-examples">
        ${word.quranicExamples.map(ex => `
          <div class="gp-example">
            <div class="gp-example-arabic">${ex.ar}</div>
            <div class="gp-example-ref">${ex.ref}</div>
          </div>
        `).join('')}
      </div>`;
    }

    return html;
  }

  function posLabel(pos, lang) {
    const map = {
      en: { VERB:'Verb (Fi\'l)', NOUN:'Noun (Ism)', ADJ:'Adjective (Ṣifah)', 'REL.PRON':'Relative Pronoun', 'CONJ+NOUN':'Conjunction + Noun', 'CONJ+PRON':'Conjunction + Pronoun', PREP:'Preposition (Harf Jarr)', 'PREP+NOUN':'Preposition + Noun', INTERROG:'Interrogative', },
      hi: { VERB:'क्रिया (फ़े\'ल)', NOUN:'संज्ञा (इस्म)', ADJ:'विशेषण (सिफ़त)', 'REL.PRON':'सम्बन्धवाचक सर्वनाम', 'CONJ+NOUN':'समुच्चयबोधक + संज्ञा', 'CONJ+PRON':'समुच्चयबोधक + सर्वनाम', PREP:'सम्बन्धसूचक (हर्फ़ जर)', 'PREP+NOUN':'सम्बन्धसूचक + संज्ञा', INTERROG:'प्रश्नवाचक', },
      ur: { VERB:'فعل', NOUN:'اسم', ADJ:'صفت', 'REL.PRON':'موصول ضمیر', 'CONJ+NOUN':'حرف عطف + اسم', 'CONJ+PRON':'حرف عطف + ضمیر', PREP:'حرف جر', 'PREP+NOUN':'حرف جر + اسم', INTERROG:'استفہامیہ', },
    };
    return (map[lang] || map.en)[pos] || pos;
  }

  // ── Close Grammar Popup ──────────────────────
  function close() {
    document.getElementById('grammarPopup').classList.add('hidden');
    document.getElementById('grammarBackdrop').classList.add('hidden');
  }

  // ── Open I'rab Popup ─────────────────────────
  function openIrab(ayahNum) {
    const data = GRAMMAR_DATA[ayahNum];
    if (!data?.irab) {
      // Show a popup explaining analysis is available for ayahs 1-2
      const popup    = document.getElementById('irabPopup');
      const backdrop = document.getElementById('irabBackdrop');
      const content  = document.getElementById('irabContent');
      const ayah     = AppState.ayahs.find(a => a.number === ayahNum);
      const arabicLine = ayah ? `<div class="irab-full-arabic arabic-quran">${ayah.arabic}</div>` : '';
      const msgs = {
        en: `<div class="irab-coming-soon">
               <div class="irab-cs-icon">📐</div>
               <h3>Full Analysis Coming Soon</h3>
               <p>Detailed I\'rāb (sentence analysis) is currently available for <strong>Ayahs 1–2</strong>. Linguistic analysis for all 30 ayaat is being prepared.</p>
               <p style="margin-top:10px;color:var(--t3);font-size:13px;">In the meantime, explore the <strong>Word by Word</strong> section for grammar details on each word.</p>
             </div>`,
        hi: `<div class="irab-coming-soon">
               <div class="irab-cs-icon">📐</div>
               <h3>विश्लेषण शीघ्र आ रहा है</h3>
               <p>विस्तृत इ\'राब (वाक्य विश्लेषण) अभी <strong>आयत 1–2</strong> के लिए उपलब्ध है। सभी 30 आयतों का विश्लेषण तैयार किया जा रहा है।</p>
             </div>`,
        ur: `<div class="irab-coming-soon">
               <div class="irab-cs-icon">📐</div>
               <h3>تجزیہ جلد آ رہا ہے</h3>
               <p>تفصیلی اعراب (جملے کا تجزیہ) ابھی <strong>آیات 1–2</strong> کے لیے دستیاب ہے۔ تمام 30 آیات کا تجزیہ تیار کیا جا رہا ہے۔</p>
             </div>`,
      };
      const lang = AppState.lang;
      content.innerHTML = arabicLine + (msgs[lang] || msgs.en);
      const titleEl = document.querySelector('.irab-title'); if (titleEl) titleEl.textContent = t('irabTitle');
      popup.classList.remove('hidden');
      backdrop.classList.remove('hidden');
      return;
    }

    const lang = AppState.lang;
    const popup    = document.getElementById('irabPopup');
    const backdrop = document.getElementById('irabBackdrop');
    const content  = document.getElementById('irabContent');

    // Full Arabic of the ayah
    const ayah = AppState.ayahs.find(a => a.number === ayahNum);
    const arabicLine = ayah ? `<div class="irab-full-arabic arabic-quran">${ayah.arabic}</div>` : '';

    // Diagram
    const diagramSVG = buildDiagramSVG(data.irab, lang);

    // Table
    const table = buildIrabTable(data.irab, lang);

    // Summary
    const summary = data.irab.summary[lang] || data.irab.summary.en;

    content.innerHTML = `
      ${arabicLine}
      <div class="section-label vt" style="margin-top:0;">📐 ${t('secIrab')}</div>
      <div class="irab-diagram">
        <div class="irab-diagram-svg-wrap">${diagramSVG}</div>
      </div>
      ${table}
      <div class="section-label vt">${t('irabSummary')}</div>
      <div class="irab-summary">${summary}</div>
    `;

    const titleEl = document.querySelector('.irab-title'); if (titleEl) titleEl.textContent = t('irabTitle');
    popup.classList.remove('hidden');
    backdrop.classList.remove('hidden');
  }

  function buildDiagramSVG(irab, lang) {
    const clauses = irab.clauses;
    const W = 680, H = 200;
    const colW = Math.min(140, Math.floor((W - 40) / clauses.length));
    const totalW = clauses.length * colW + 40;

    const colorMap = {
      mubtada: '#10b981', khabar: '#5b8af5', fail: '#e05252',
      faail:   '#c9963c', mafool:  '#a78bfa', jum: '#888',
      sifah:   '#10b981', harf:    '#ffc850',
    };

    let svgParts = [`<svg viewBox="0 0 ${totalW} ${H}" xmlns="http://www.w3.org/2000/svg" style="font-family:serif;">`];

    // Background
    svgParts.push(`<rect width="${totalW}" height="${H}" fill="#0b1020" rx="12"/>`);

    clauses.forEach((clause, i) => {
      const x = 20 + i * colW;
      const cx = x + colW / 2;
      const color = colorMap[clause.roleKey] || '#666';

      // Box
      svgParts.push(`<rect x="${x+4}" y="10" width="${colW-8}" height="80" rx="8" fill="${color}22" stroke="${color}" stroke-width="1.2"/>`);

      // Arabic word (RTL, centered)
      svgParts.push(`<text x="${cx}" y="50" text-anchor="middle" font-family="Amiri, serif" font-size="20" fill="${color}">${clause.arabic}</text>`);

      // Role label
      const roleText = clause.role.length > 14 ? clause.role.substring(0,13)+'…' : clause.role;
      svgParts.push(`<text x="${cx}" y="80" text-anchor="middle" font-size="9" fill="${color}" letter-spacing="0.3">${roleText}</text>`);

      // Case label
      svgParts.push(`<text x="${cx}" y="95" text-anchor="middle" font-size="8" fill="#888">${clause.caseLabel.substring(0,16)}</text>`);

      // Connector line to next
      if (i < clauses.length - 1) {
        const nx = x + colW + 4;
        svgParts.push(`<line x1="${x+colW-4}" y1="50" x2="${nx}" y2="50" stroke="#ffffff22" stroke-width="1" stroke-dasharray="3,3"/>`);
      }
    });

    // Legend
    const legendItems = [
      { key:'mubtada', label:'Subject' },
      { key:'khabar',  label:'Predicate' },
      { key:'fail',    label:'Verb' },
      { key:'faail',   label:'Doer' },
      { key:'mafool',  label:'Object' },
      { key:'jum',     label:'Clause' },
      { key:'harf',    label:'Particle' },
    ];
    let lx = 20;
    svgParts.push(`<text x="20" y="${H-40}" font-size="9" fill="#555">LEGEND:</text>`);
    legendItems.forEach(item => {
      const color = colorMap[item.key] || '#666';
      svgParts.push(`<rect x="${lx}" y="${H-28}" width="10" height="10" rx="2" fill="${color}"/>`);
      svgParts.push(`<text x="${lx+13}" y="${H-19}" font-size="9" fill="#888">${item.label}</text>`);
      lx += item.label.length * 6 + 20;
    });

    svgParts.push('</svg>');
    return svgParts.join('\n');
  }

  function buildIrabTable(irab, lang) {
    const rows = irab.clauses.map(clause => {
      const detail = clause.detail[lang] || clause.detail.en;
      const roleBadgeClass = clause.roleKey;
      return `
        <tr>
          <td class="arabic-cell">${clause.arabic}</td>
          <td><span class="role-badge ${roleBadgeClass}">${clause.role}</span></td>
          <td>${clause.caseLabel}</td>
          <td>${detail}</td>
        </tr>
      `;
    }).join('');

    return `
      <table class="irab-table">
        <thead>
          <tr>
            <th>${t('irabColArabic')}</th>
            <th>${t('irabColRole')}</th>
            <th>${t('irabColCase')}</th>
            <th>${t('irabColDetail')}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  // ── Close I'rab Popup ────────────────────────
  function closeIrab() {
    document.getElementById('irabPopup').classList.add('hidden');
    document.getElementById('irabBackdrop').classList.add('hidden');
  }

  // ── Keyboard close ───────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { close(); closeIrab(); }
  });

  return { openWord, close, openIrab, closeIrab };
})();
