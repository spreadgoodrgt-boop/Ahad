/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/i18n.js
   All UI strings in English, Hindi, Urdu.
   applyI18n() is attached to window so every
   module can call it safely.
══════════════════════════════════════════════════ */

const I18N = {
  en: {
    appTitle:'Ahad — Surah Al-Mulk', appShort:'Ahad',
    surahName:'Surah Al-Mulk', surahMeaning:'The Sovereignty · The Kingdom',
    ayahs:'Ayaat', makki:'Makki', alsoKnown:'Also:', alWaqiya:'Al-Wāqiya',
    bismillah:'In the name of Allah, the Most Gracious, the Most Merciful',
    loading:'Loading Surah Al-Mulk', fullSurah:'Full Surah',
    tabStudy:'Study', tabFlashcard:'Flashcards', tabQuiz:'Quiz',
    card:'Card', prev:'← Prev', flip:'Flip', next:'Next →',
    secTranslation:'Translation', secTranslit:'Transliteration',
    secWordByWord:'Word by Word', secGrammar:'Grammar Analysis',
    secTafsir:'Tafsir', secNotes:'My Notes',
    secIrab:"Sentence Analysis (I'rāb)",
    tafsirBrief:'Brief', tafsirDetailed:'Detailed',
    grammarBasic:'Basic', grammarInter:'Intermediate', grammarMax:'Maximum',
    btnPlayAyah:'Play', btnSaveNote:'Save Note',
    btnNoteSaved:'✓ Saved', btnAnalyse:'📐 View Sentence Analysis', btnClose:'Close',
    gpWord:'Word', gpMeaning:'Meaning', gpTranslit:'Transliteration',
    gpRoot:"Root (Jizr)", gpPOS:'Part of Speech', gpVerbForm:'Verb Form',
    gpConjugation:'Conjugation', gpCase:"Case (I'rab)", gpGender:'Gender',
    gpNumber:'Number', gpPattern:'Pattern (Wazn)',
    gpDerivatives:'Root Derivatives in Quran',
    gpImplications:'Deeper Implications', gpExamples:'Other Quranic Examples',
    irabTitle:"Sentence Analysis (I'rāb)",
    irabColWord:'Word', irabColArabic:'Arabic', irabColRole:'Role',
    irabColCase:'Case', irabColDetail:'Detail', irabSummary:'Summary',
    roleMusnad:"Mubtada (Subject)", roleKhabar:'Khabar (Predicate)',
    roleFail:"Fi'l (Verb)", roleFaail:"Fā'il (Doer)",
    roleMafool:"Maf'ūl (Object)", roleJum:'Jumlah (Clause)',
    roleSifah:'Ṣifah (Adjective)', roleHarf:'Harf (Particle)',
    quizQuestion:'Question', quizOf:'of',
    quizWhat:'What is the translation of this ayah?',
    quizScore:'Your Score', quizExcellent:"Masha'Allah! Excellent! 🌟",
    quizGood:'Jazakallah Khair! Keep studying! 📖',
    quizKeepGoing:"Keep reviewing — you've got this! 💪",
    quizTryAgain:'Try Again', quizCorrect:"✓ Correct! Masha'Allah!",
    quizWrong:'Not quite — review this ayah',
    fcTap:'Tap to reveal translation', fcAyah:'Ayah',
    notesPlaceholder:'Write your personal reflections on this ayah...',
    audioAyah:'Ayah', navPrev:'Prev', navNext:'Next',
    errLoad:'Failed to load. Please check your connection and refresh.',
    errAudio:'Audio not available for this ayah',
    errTafsir:'Could not load detailed tafsir.',
  },
  hi: {
    appTitle:'अहद — सूरत अल-मुल्क', appShort:'अहद',
    surahName:'सूरत अल-मुल्क', surahMeaning:'बादशाहत · साम्राज्य',
    ayahs:'आयतें', makki:'मक्की', alsoKnown:'भी:', alWaqiya:'अल-वाक़िया',
    bismillah:'अल्लाह के नाम से, जो बड़ा मेहरबान, निहायत रहम वाला है',
    loading:'सूरत अल-मुल्क लोड हो रही है', fullSurah:'पूरी सूरत',
    tabStudy:'अध्ययन', tabFlashcard:'फ़्लैशकार्ड', tabQuiz:'प्रश्नोत्तरी',
    card:'कार्ड', prev:'← पिछला', flip:'पलटें', next:'अगला →',
    secTranslation:'अनुवाद', secTranslit:'उच्चारण',
    secWordByWord:'शब्द-दर-शब्द', secGrammar:'व्याकरण विश्लेषण',
    secTafsir:'तफ़सीर', secNotes:'मेरे नोट्स',
    secIrab:"वाक्य संरचना (इ'राब)",
    tafsirBrief:'संक्षिप्त', tafsirDetailed:'विस्तृत',
    grammarBasic:'बुनियादी', grammarInter:'मध्यम', grammarMax:'अधिकतम',
    btnPlayAyah:'सुनें', btnSaveNote:'नोट सहेजें',
    btnNoteSaved:'✓ सहेजा गया', btnAnalyse:'📐 वाक्य विश्लेषण देखें', btnClose:'बंद करें',
    gpWord:'शब्द', gpMeaning:'अर्थ', gpTranslit:'उच्चारण',
    gpRoot:'मूल (जिज़्र)', gpPOS:'शब्द-भेद', gpVerbForm:'क्रिया रूप',
    gpConjugation:'विभक्ति', gpCase:"कारक (इ'राब)", gpGender:'लिंग',
    gpNumber:'वचन', gpPattern:'वज़्न (पैटर्न)',
    gpDerivatives:'क़ुरआन में मूल शब्द के रूप',
    gpImplications:'गहरे निहितार्थ', gpExamples:'क़ुरआन के अन्य उदाहरण',
    irabTitle:"वाक्य विश्लेषण (इ'राब)",
    irabColWord:'शब्द', irabColArabic:'अरबी', irabColRole:'भूमिका',
    irabColCase:'कारक', irabColDetail:'विवरण', irabSummary:'सारांश',
    roleMusnad:'मुब्तदा (उद्देश्य)', roleKhabar:'ख़बर (विधेय)',
    roleFail:"फ़े'ल (क्रिया)", roleFaail:'फ़ाइल (कर्ता)',
    roleMafool:"मफ़'ऊल (कर्म)", roleJum:'जुमला (वाक्यांश)',
    roleSifah:'सिफ़ह (विशेषण)', roleHarf:'हर्फ़ (अव्यय)',
    quizQuestion:'प्रश्न', quizOf:'में से',
    quizWhat:'इस आयत का अनुवाद क्या है?',
    quizScore:'आपका स्कोर', quizExcellent:'माशाअल्लाह! शानदार! 🌟',
    quizGood:'जज़ाकल्लाह ख़ैर! पढ़ते रहें! 📖',
    quizKeepGoing:'दोहराते रहें — आप कर सकते हैं! 💪',
    quizTryAgain:'फिर कोशिश करें', quizCorrect:'✓ सही! माशाअल्लाह!',
    quizWrong:'लगभग सही — इस आयत को दोहराएं',
    fcTap:'अनुवाद देखने के लिए टैप करें', fcAyah:'आयत',
    notesPlaceholder:'इस आयत पर अपने विचार लिखें...',
    audioAyah:'आयत', navPrev:'पिछला', navNext:'अगला',
    errLoad:'लोड नहीं हो सका। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें।',
    errAudio:'इस आयत का ऑडियो उपलब्ध नहीं है',
    errTafsir:'विस्तृत तफ़सीर लोड नहीं हो सकी।',
  },
  ur: {
    appTitle:'احد — سورۃ الملک', appShort:'احد',
    surahName:'سورۃ الملک', surahMeaning:'بادشاہی · سلطنت',
    ayahs:'آیات', makki:'مکی', alsoKnown:'یہ بھی:', alWaqiya:'الواقیہ',
    bismillah:'اللہ کے نام سے جو بڑا مہربان، نہایت رحم والا ہے',
    loading:'سورۃ الملک لوڈ ہو رہی ہے', fullSurah:'پوری سورت',
    tabStudy:'مطالعہ', tabFlashcard:'فلیش کارڈ', tabQuiz:'کوئز',
    card:'کارڈ', prev:'پچھلا ←', flip:'پلٹیں', next:'اگلا →',
    secTranslation:'ترجمہ', secTranslit:'تلفظ',
    secWordByWord:'لفظ بہ لفظ', secGrammar:'نحوی تجزیہ',
    secTafsir:'تفسیر', secNotes:'میرے نوٹس',
    secIrab:'جملے کا تجزیہ (اعراب)',
    tafsirBrief:'مختصر', tafsirDetailed:'تفصیلی',
    grammarBasic:'بنیادی', grammarInter:'درمیانی', grammarMax:'مکمل',
    btnPlayAyah:'سنیں', btnSaveNote:'نوٹ محفوظ کریں',
    btnNoteSaved:'✓ محفوظ', btnAnalyse:'📐 جملے کا تجزیہ دیکھیں', btnClose:'بند کریں',
    gpWord:'لفظ', gpMeaning:'معنی', gpTranslit:'تلفظ',
    gpRoot:'مادہ (جذر)', gpPOS:'کلمے کی قسم', gpVerbForm:'فعل کی قسم',
    gpConjugation:'صرف', gpCase:'اعراب', gpGender:'جنس',
    gpNumber:'عدد', gpPattern:'وزن',
    gpDerivatives:'قرآن میں مادے کے مشتقات',
    gpImplications:'گہرے مفاہیم', gpExamples:'قرآن کی دیگر مثالیں',
    irabTitle:'جملے کا اعرابی تجزیہ',
    irabColWord:'لفظ', irabColArabic:'عربی', irabColRole:'کردار',
    irabColCase:'اعراب', irabColDetail:'تفصیل', irabSummary:'خلاصہ',
    roleMusnad:'مبتدا', roleKhabar:'خبر',
    roleFail:'فعل', roleFaail:'فاعل',
    roleMafool:'مفعول', roleJum:'جملہ',
    roleSifah:'صفت', roleHarf:'حرف',
    quizQuestion:'سوال', quizOf:'میں سے',
    quizWhat:'اس آیت کا ترجمہ کیا ہے؟',
    quizScore:'آپ کا سکور', quizExcellent:'ماشاءاللہ! بہترین! 🌟',
    quizGood:'جزاک اللہ خیر! پڑھتے رہیں! 📖',
    quizKeepGoing:'دہراتے رہیں — آپ کر سکتے ہیں! 💪',
    quizTryAgain:'دوبارہ کوشش کریں', quizCorrect:'✓ درست! ماشاءاللہ!',
    quizWrong:'تقریباً درست — اس آیت کو دہرائیں',
    fcTap:'ترجمہ دیکھنے کے لیے ٹیپ کریں', fcAyah:'آیت',
    notesPlaceholder:'اس آیت پر اپنے خیالات لکھیں...',
    audioAyah:'آیت', navPrev:'پچھلا', navNext:'اگلا',
    errLoad:'لوڈ نہ ہو سکا۔ براہ کرم اپنا کنکشن چیک کریں اور دوبارہ کوشش کریں۔',
    errAudio:'اس آیت کی آڈیو دستیاب نہیں',
    errTafsir:'تفصیلی تفسیر لوڈ نہ ہو سکی۔',
  },
};

/* ── t() — get string in current lang, fallback EN ── */
window.t = function(key) {
  const lang = window.AppState?.lang || 'en';
  return I18N[lang]?.[key] ?? I18N.en[key] ?? key;
};

/* ── applyI18n — update all data-i18n elements ── */
window.applyI18n = function() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = window.t(el.dataset.i18n);
  });
  /* Update tab labels too */
  document.querySelectorAll('[data-i18n-tab]').forEach(el => {
    const label = el.querySelector('.tab-label');
    if (label) label.textContent = window.t('tab' + el.dataset.i18nTab.charAt(0).toUpperCase() + el.dataset.i18nTab.slice(1));
  });
  /* FC nav buttons */
  const lang = window.AppState?.lang || 'en';
  const prev = document.querySelector('.fc-btn:first-child');
  const flip = document.querySelector('.fc-flip');
  const next = document.querySelector('.fc-btn:last-child');
  if (prev) prev.textContent = I18N[lang]?.prev ?? I18N.en.prev;
  if (flip) flip.textContent = I18N[lang]?.flip ?? I18N.en.flip;
  if (next) next.textContent = I18N[lang]?.next ?? I18N.en.next;
};
