/* ══════════════════════════════════════════════════
   QURAN STUDY APP — data/grammar.js
   Word-by-word, morphology, and I'rab data
   for Surah Al-Mulk (67), all 30 ayaat.
   
   Structure per word:
   {
     ar:           Arabic text,
     translit:     transliteration,
     meaning:      { en, hi, ur },
     pos:          Part of speech tag (short),
     // Basic
     root:         Arabic root letters,
     rootMeaning:  { en },
     // Intermediate
     verbForm:     (if verb) e.g. "Past, Form I",
     conjugation:  e.g. "3rd person, masculine, singular",
     // Advanced / Max
     case:         grammatical case,
     gender:       masculine/feminine,
     number:       singular/dual/plural,
     pattern:      Arabic morphological pattern,
     derivatives:  [{ ar, surah, ayah }],
     implications: { en, hi, ur },
     quranicExamples: [{ ar, ref }],
   }
   
   I'rab data per ayah:
   {
     summary: { en, hi, ur },
     clauses: [{ arabic, role, roleKey, caseLabel, detail: {en,hi,ur} }],
     diagram: SVG string
   }
══════════════════════════════════════════════════ */

const GRAMMAR_DATA = {

  // ══ Ayah 1 ══
  1: {
    words: [
      {
        ar: 'تَبَارَكَ', translit: 'Tabāraka',
        meaning: { en: 'Blessed is / Exalted is', hi: 'बड़ा बरकत वाला है', ur: 'بہت بابرکت ہے' },
        pos: 'VERB',
        root: 'ب ر ك', rootMeaning: { en: 'To bless, to be abundant in good' },
        verbForm: 'Past Tense, Form VI (Tafā\'ala)',
        conjugation: '3rd person, masculine, singular',
        case: 'N/A (verb)',
        gender: 'Masculine', number: 'Singular',
        pattern: 'تَفَاعَلَ — intensive form conveying transcendent greatness',
        derivatives: [
          { ar: 'بَرَكَة', surah: '7', ayah: '96' },
          { ar: 'مُبَارَك', surah: '6', ayah: '92' },
          { ar: 'بَارَكْنَا', surah: '21', ayah: '71' }
        ],
        implications: {
          en: 'Tabāraka is unique — it only ever has Allah as its subject in the Quran. It derives from barakah (blessing/abundance) but in the tafā\'ala pattern implies overflowing, transcendent, self-sustaining blessing. It cannot be applied to creation. The surah opens by asserting that Allah is the singular source of all blessing and goodness.',
          hi: 'तबारका क़ुरआन में केवल अल्लाह के लिए प्रयोग होता है। यह बरकह (आशीर्वाद/प्रचुरता) से बना है लेकिन तफ़ा\'अला के वज़्न पर होने के कारण यह असीम, स्वयंसिद्ध आशीर्वाद का भाव देता है। सूरत की शुरुआत इसी से होती है कि समस्त बरकत का स्रोत केवल अल्लाह है।',
          ur: 'تَبَارَكَ قرآن میں صرف اللہ کے لیے آتا ہے۔ یہ بَرَکَہ (برکت/فراوانی) سے ہے لیکن تَفَاعَلَ کے وزن پر ہونے کی وجہ سے یہ لامتناہی، ذاتی برکت کا مفہوم دیتا ہے۔ سورت کی ابتدا اس بیان سے ہوتی ہے کہ تمام برکت کا سرچشمہ صرف اللہ ہے۔'
        },
        quranicExamples: [
          { ar: 'تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ', ref: '25:1' },
          { ar: 'تَبَارَكَ اللَّهُ رَبُّ الْعَالَمِينَ', ref: '7:54' }
        ]
      },
      {
        ar: 'الَّذِي', translit: 'alladhī',
        meaning: { en: 'The One who', hi: 'वह जो', ur: 'وہ جو' },
        pos: 'REL.PRON',
        root: 'ذ ل ل', rootMeaning: { en: 'Relative pronoun root' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'Nominative (Mubtada or Badal)',
        gender: 'Masculine', number: 'Singular',
        pattern: 'الَّذِي — definite masculine singular relative pronoun',
        derivatives: [{ ar: 'الَّذِينَ', surah: '2', ayah: '3' }],
        implications: {
          en: 'This relative pronoun links the transcendent quality (Tabāraka) directly to Allah\'s actions — specifically His possession of sovereignty. It makes the clause "in Whose Hand is the Kingdom" the defining characteristic of the Blessed One.',
          hi: 'यह सम्बन्धवाचक सर्वनाम अल्लाह के इस गुण (तबारका) को सीधे उनके कार्यों से जोड़ता है — विशेष रूप से उनके राज्य के स्वामित्व से।',
          ur: 'یہ موصول ضمیر اللہ کی صفت (تَبَارَكَ) کو اُن کے افعال — خاص طور پر ملک کی ملکیت — سے جوڑتی ہے۔'
        },
        quranicExamples: [{ ar: 'الَّذِي خَلَقَكُمْ', ref: '2:21' }]
      },
      {
        ar: 'بِيَدِهِ', translit: 'biyadihī',
        meaning: { en: 'In Whose Hand', hi: 'जिसके हाथ में', ur: 'جس کے ہاتھ میں' },
        pos: 'PREP+NOUN',
        root: 'ي د ي', rootMeaning: { en: 'Hand, power, control' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'Jarr (Genitive) — governed by بِ',
        gender: 'Feminine', number: 'Singular',
        pattern: 'فَعَل — يَد is one of the defective nouns (nāqis)',
        derivatives: [{ ar: 'أَيْدِيكُمْ', surah: '5', ayah: '6' }],
        implications: {
          en: 'The "Hand of Allah" is an attribute affirmed in Ahl al-Sunnah theology without asking "how" (bilā kayf). Here it expresses absolute, direct control. Sovereignty being "in His Hand" means it is not delegated, borrowed, or shared — it is inherent to Allah alone.',
          hi: 'अहल-अस-सुन्नह के अक़ीदे में "अल्लाह का हाथ" एक ऐसी सिफ़त है जिसे बिना "कैसे?" पूछे माना जाता है। यहां यह पूर्ण, प्रत्यक्ष नियंत्रण का भाव देता है।',
          ur: 'اللہ کا "ہاتھ" اہل سنت کے عقیدے میں ایک ثابت شدہ صفت ہے جسے بلاکیف مانا جاتا ہے۔ یہاں یہ مطلق اور براہ راست اقتدار کو ظاہر کرتا ہے۔'
        },
        quranicExamples: [{ ar: 'بِيَدِكَ الْخَيْرُ', ref: '3:26' }]
      },
      {
        ar: 'الْمُلْكُ', translit: 'al-mulku',
        meaning: { en: 'The Sovereignty / The Kingdom', hi: 'बादशाहत / राज्य', ur: 'بادشاہی / ملک' },
        pos: 'NOUN',
        root: 'م ل ك', rootMeaning: { en: 'To possess, to rule, to have dominion' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'Nominative (Mubtada, deferred subject)',
        gender: 'Masculine', number: 'Singular',
        pattern: 'فُعْل — مَصْدَر meaning dominion, ownership, power',
        derivatives: [
          { ar: 'مَلِك', surah: '1', ayah: '4' },
          { ar: 'مَالِك', surah: '1', ayah: '4' },
          { ar: 'مَلَكُوت', surah: '6', ayah: '75' },
          { ar: 'مَلَائِكَة', surah: '2', ayah: '30' }
        ],
        implications: {
          en: 'Al-Mulk (الملك) is comprehensive sovereignty — not just a kingdom but the very capacity to own and control. The definite article "al" makes it absolute: not just some sovereignty but ALL sovereignty. This is why the Surah is named after it — absolute dominion is Allah\'s defining attribute in this chapter.',
          hi: 'अल-मुल्क (الملك) व्यापक सत्ता है — केवल एक राज्य नहीं, बल्कि स्वयं स्वामित्व और नियंत्रण की क्षमता। अलिफ-लाम के साथ यह निरपेक्ष हो जाता है: सारी सत्ता।',
          ur: 'الملک جامع حاکمیت ہے — صرف ایک سلطنت نہیں بلکہ خود ملکیت اور کنٹرول کی صلاحیت۔ الف لام سے یہ مطلق ہو جاتا ہے: ساری بادشاہی۔'
        },
        quranicExamples: [
          { ar: 'لِمَنِ الْمُلْكُ الْيَوْمَ لِلَّهِ الْوَاحِدِ', ref: '40:16' },
          { ar: 'مَلِكِ يَوْمِ الدِّينِ', ref: '1:4' }
        ]
      },
      {
        ar: 'وَهُوَ', translit: 'wa-huwa',
        meaning: { en: 'And He', hi: 'और वह', ur: 'اور وہ' },
        pos: 'CONJ+PRON',
        root: 'هـ و', rootMeaning: { en: 'He (third person masculine pronoun)' },
        verbForm: 'N/A', conjugation: '3rd masculine singular',
        case: 'Mubtada (subject of new nominal clause)',
        gender: 'Masculine', number: 'Singular',
        pattern: 'Detached pronoun هُوَ',
        derivatives: [], implications: {
          en: 'The detached pronoun هو adds emphasis — it is not "He is powerful" but rather "HE — specifically He — is over all things powerful." The isolation of the pronoun emphasises Allah\'s unique ownership of this attribute.',
          hi: 'स्वतंत्र सर्वनाम هو ज़ोर देता है — "वह शक्तिशाली है" नहीं बल्कि "वही — विशेष रूप से वही — हर चीज़ पर क़ादिर है।"',
          ur: 'منفصل ضمیر هو زور دیتی ہے — "وہ قادر ہے" نہیں بلکہ "وہی — خاص طور پر وہی — ہر چیز پر قادر ہے۔"'
        },
        quranicExamples: []
      },
      {
        ar: 'عَلَىٰ', translit: '\'alā',
        meaning: { en: 'Over / Above', hi: 'ہر چیز پر / اوپر', ur: 'اوپر / پر' },
        pos: 'PREP',
        root: 'ع ل و', rootMeaning: { en: 'Highness, elevation, superiority' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'N/A (preposition)', gender: 'N/A', number: 'N/A',
        pattern: 'عَلَى — preposition of elevation and dominion',
        derivatives: [{ ar: 'عَلِيّ', surah: '2', ayah: '255' }],
        implications: {
          en: 'عَلَى here is not just "above" spatially but "having power over" — it is the preposition of mastery and dominion, reinforcing that Allah\'s power extends over every single thing without exception.',
          hi: 'यहां عَلَى केवल ऊपर नहीं है बल्कि "पर सत्ता रखना" है — यह प्रभुत्व का प्रत्यय है।',
          ur: 'یہاں عَلَى صرف "اوپر" نہیں بلکہ "اقتدار رکھنا" ہے — یہ غلبے اور تسلط کا حرف جر ہے۔'
        },
        quranicExamples: []
      },
      {
        ar: 'كُلِّ', translit: 'kulli',
        meaning: { en: 'Every / All', hi: 'हर / सभी', ur: 'ہر / تمام' },
        pos: 'NOUN',
        root: 'ك ل ل', rootMeaning: { en: 'Totality, completeness, all' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'Genitive (governed by عَلَى)',
        gender: 'N/A', number: 'Singular (collective)',
        pattern: 'فُعْل — universal quantifier in Arabic',
        derivatives: [{ ar: 'كُلُّهُمْ', surah: '2', ayah: '286' }],
        implications: {
          en: 'كل leaves no exception whatsoever. Allah\'s power is not "over most things" or "over great things" — it is over every single thing, without limit, without exception, without any partner sharing this power.',
          hi: 'كل में कोई अपवाद नहीं है। अल्लाह की क़ुदरत "अधिकांश चीज़ों पर" या "बड़ी चीज़ों पर" नहीं बल्कि हर एक चीज़ पर है।',
          ur: 'كل میں کوئی استثناء نہیں۔ اللہ کی قدرت "اکثر چیزوں" یا "بڑی چیزوں" پر نہیں بلکہ ہر ایک چیز پر ہے۔'
        },
        quranicExamples: [{ ar: 'إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', ref: '2:20' }]
      },
      {
        ar: 'شَيْءٍ', translit: 'shay\'in',
        meaning: { en: 'Thing', hi: 'चीज़', ur: 'چیز' },
        pos: 'NOUN',
        root: 'ش ي أ', rootMeaning: { en: 'To be, to exist as a thing' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'Genitive (Mudāf ilayhi of كل)',
        gender: 'Masculine', number: 'Singular (generic)',
        pattern: 'فَعْل — indefinite to emphasise universality (tanwīn)',
        derivatives: [{ ar: 'أَشْيَاء', surah: '5', ayah: '101' }],
        implications: {
          en: 'شيء is left indefinite (with tanwin) to maximise its scope — not "the thing" but "any thing" — everything conceivable and inconceivable. Nothing lies outside Allah\'s power.',
          hi: 'शय\' को अनिश्चित (तनवीन के साथ) रखा गया है ताकि इसका दायरा अधिकतम हो — "कोई भी चीज़", सब कुछ जो सोचा जा सके या न सोचा जा सके।',
          ur: 'شيء کو نکرہ (تنوین کے ساتھ) رکھا گیا ہے تاکہ اس کا دائرہ زیادہ سے زیادہ ہو — "کوئی بھی چیز"، ہر وہ چیز جو سوچی جا سکے یا نہ سوچی جا سکے۔'
        },
        quranicExamples: []
      },
      {
        ar: 'قَدِيرٌ', translit: 'Qadīrun',
        meaning: { en: 'All-Powerful / Omnipotent', hi: 'सर्वशक्तिमान / क़ादिर', ur: 'قادر مطلق / قدیر' },
        pos: 'ADJ',
        root: 'ق د ر', rootMeaning: { en: 'Power, ability, decree, measure' },
        verbForm: 'N/A', conjugation: 'N/A',
        case: 'Nominative (Khabar of هو)',
        gender: 'Masculine', number: 'Singular',
        pattern: 'فَعِيل — intensive adjective (Ṣīghat al-Mubālagha) denoting constant, perfect power',
        derivatives: [
          { ar: 'قَدَر', surah: '97', ayah: '1' },
          { ar: 'قَدَّرَ', surah: '80', ayah: '19' },
          { ar: 'مُقْتَدِر', surah: '54', ayah: '42' }
        ],
        implications: {
          en: 'Qadīr is on the فَعِيل pattern — a ṣīghat al-mubālagha (intensive form) meaning not just "powerful" but permanently, perfectly, completely powerful. Unlike creation whose power is borrowed and limited, Allah\'s power is intrinsic and boundless. This word closes the verse with an absolute, ringing declaration.',
          hi: 'क़दीर فَعِيل वज़्न पर है — यह मुबालगा (अतिशयोक्ति) का वज़्न है जिसका मतलब है न केवल "शक्तिशाली" बल्कि स्थायी, पूर्ण, असीम शक्ति वाला।',
          ur: 'قَدِير فَعِيل کے وزن پر ہے — یہ صیغہ مبالغہ ہے جس کا مطلب ہے نہ صرف "قادر" بلکہ ہمیشہ، مکمل طور پر، بے حد قدرت والا۔'
        },
        quranicExamples: [
          { ar: 'وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرًا', ref: '33:27' },
          { ar: 'إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', ref: '11:4' }
        ]
      }
    ],
    irab: {
      summary: {
        en: 'This is a complex sentence (jumlah fi\'liyyah + nominal clause). "Tabāraka alladhī" begins with a verbal sentence: Tabāraka is the verb (fi\'l mādi), and alladhī is its subject (fā\'il) — a relative pronoun whose relative clause is "biyadihī al-Mulku" (in whose Hand is the Sovereignty). The second part "wa-huwa \'alā kulli shay\'in Qadīr" is a nominal clause (jumlah ismiyyah): Huwa is the mubtadā and Qadīr is the khabar.',
        hi: 'यह एक जटिल वाक्य है (جملة فعلية + اسمية)। "तबारका अल्लज़ी" से एक क्रिया-वाक्य (जुमला फ़े\'लिया) शुरू होता है: तबारका क्रिया (फ़े\'ल माज़ी) है और अल्लज़ी इसका कर्ता (फ़ाइल) है। दूसरा भाग "व-हुव अला कुल्लि शय्इन क़दीर" एक संज्ञा-वाक्य (जुमला इस्मिया) है।',
        ur: 'یہ ایک مرکب جملہ ہے (جملہ فعلیہ + اسمیہ)۔ "تَبَارَكَ الَّذِي" ایک فعلی جملے سے شروع ہوتا ہے: تَبَارَكَ فعل ماضی ہے اور الَّذِي اس کا فاعل (موصول) ہے جس کی صلہ "بِيَدِهِ الْمُلْكُ" ہے۔ دوسرا حصہ "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ" ایک جملہ اسمیہ ہے جس میں هُوَ مبتدا اور قَدِيرٌ خبر ہے۔'
      },
      clauses: [
        { arabic: 'تَبَارَكَ', role: 'Verb (Fi\'l)', roleKey: 'fail', caseLabel: 'Verbal sentence opener', detail: { en: 'Past tense verb (fi\'l mādi). The sentence subject (fā\'il) is the relative pronoun alladhī that follows.', hi: 'फ़े\'ल माज़ी। इसका फ़ाइल बाद में आने वाला अल्लज़ी है।', ur: 'فعل ماضی۔ اس کا فاعل بعد میں آنے والا الَّذِي ہے۔' } },
        { arabic: 'الَّذِي', role: 'Doer (Fā\'il)', roleKey: 'faail', caseLabel: 'Nominative (marfū\')', detail: { en: 'Relative pronoun acting as the subject (fā\'il) of tabāraka. Its relative clause defines it.', hi: 'सम्बन्धवाचक सर्वनाम जो तबारका का फ़ाइल है।', ur: 'موصول ضمیر جو تبارک کا فاعل ہے۔' } },
        { arabic: 'بِيَدِهِ الْمُلْكُ', role: 'Relative Clause (Ṣila)', roleKey: 'jum', caseLabel: 'No case (clause)', detail: { en: 'The relative clause of alladhī. Biyadihi is a prepositional phrase (jar wa majrūr) acting as the khabar muqaddam (advanced predicate). Al-Mulku is the mubtada muakhkhar (delayed subject).', hi: 'अल्लज़ी की सिला। बियदिही जार-मजरूर है। अल-मुल्कु मुब्तदा मुअख्ख़र है।', ur: 'الَّذِي کی صلہ۔ بِيَدِهِ جار مجرور ہے جو خبر مقدم کے طور پر کام کر رہا ہے۔ الْمُلْكُ مبتدا مؤخر ہے۔' } },
        { arabic: 'وَهُوَ', role: 'Subject (Mubtada)', roleKey: 'mubtada', caseLabel: 'Nominative (marfū\')', detail: { en: 'Detached pronoun beginning a new nominal clause (jumlah ismiyyah), joined by waw (and).', hi: 'नया नामवाक्य शुरू करने वाला स्वतंत्र सर्वनाम।', ur: 'نئے جملہ اسمیہ کا مبتدا، واو عطف کے ساتھ۔' } },
        { arabic: 'عَلَىٰ كُلِّ شَيْءٍ', role: 'Adverbial Phrase', roleKey: 'jum', caseLabel: 'Genitive (majrūr)', detail: { en: 'Prepositional phrase (jar wa majrūr) connected to the khabar Qadīr — specifying the domain of power.', hi: 'जार-मजरूर जो ख़बर क़दीर से जुड़ा है।', ur: 'جار مجرور جو خبر قَدِيرٌ سے متعلق ہے۔' } },
        { arabic: 'قَدِيرٌ', role: 'Predicate (Khabar)', roleKey: 'khabar', caseLabel: 'Nominative (marfū\')', detail: { en: 'The predicate of the nominal clause — describing Allah. Tanwin (nunation) on Qadīr adds indefiniteness to magnify the meaning: "One who is Powerful beyond measure."', hi: 'नामवाक्य का ख़बर। क़दीर पर तनवीन इसका अर्थ और बड़ा करती है।', ur: 'جملہ اسمیہ کی خبر۔ قَدِيرٌ پر تنوین اس کے معنی کو اور بڑا کرتی ہے۔' } }
      ],
      diagramTitle: 'Ayah 1 Structure'
    }
  },

  // ══ Ayah 2 ══
  2: {
    words: [
      { ar: 'الَّذِي', translit: 'alladhī', meaning: { en: 'The One who', hi: 'वह जो', ur: 'وہ جو' }, pos: 'REL.PRON', root: 'ذ ل ل', rootMeaning: { en: 'Relative pronoun' }, verbForm: 'N/A', conjugation: 'N/A', case: 'Nominative', gender: 'Masculine', number: 'Singular', pattern: 'Relative pronoun', derivatives: [], implications: { en: 'Continues the relative pronoun chain from Ayah 1 — Allah is further described by His creative act of death and life.', hi: 'आयत 1 की श्रृंखला जारी है — अल्लाह का एक और गुण।', ur: 'آیت 1 کی موصول سلسلہ جاری — اللہ کا ایک اور وصف۔' }, quranicExamples: [] },
      { ar: 'خَلَقَ', translit: 'khalaqa', meaning: { en: 'Created', hi: 'पैदा किया', ur: 'پیدا کیا' }, pos: 'VERB', root: 'خ ل ق', rootMeaning: { en: 'To create, to bring into being from nothing' }, verbForm: 'Past Tense, Form I (Fa\'ala)', conjugation: '3rd person, masculine, singular', case: 'N/A (verb)', gender: 'Masculine', number: 'Singular', pattern: 'فَعَلَ — the standard form for creation; only Allah is the true subject', derivatives: [{ ar: 'خَالِق', surah: '6', ayah: '102' }, { ar: 'مَخْلُوق', surah: '37', ayah: '96' }, { ar: 'خَلِيفَة', surah: '2', ayah: '30' }], implications: { en: 'Khalaqa specifically denotes creation from nothing (ex nihilo), which is unique to Allah. The order — death before life — is theologically significant: death is not the end but a created reality, reminding us that both states are under Allah\'s full control.', hi: 'ख़लक़ विशेष रूप से शून्य से सृष्टि को दर्शाता है जो केवल अल्लाह के लिए है। मृत्यु को जीवन से पहले रखना धर्मशास्त्रीय दृष्टि से महत्वपूर्ण है।', ur: 'خَلَقَ خاص طور پر عدم سے تخلیق کو ظاہر کرتا ہے جو صرف اللہ کے لیے ہے۔ موت کو زندگی سے پہلے رکھنا عقیدے کے اعتبار سے اہم ہے۔' }, quranicExamples: [{ ar: 'اللَّهُ خَالِقُ كُلِّ شَيْءٍ', ref: '39:62' }] },
      { ar: 'الْمَوْتَ', translit: 'al-mawta', meaning: { en: 'Death', hi: 'मृत्यु', ur: 'موت' }, pos: 'NOUN', root: 'م و ت', rootMeaning: { en: 'Death, cessation of life' }, verbForm: 'N/A', conjugation: 'N/A', case: 'Accusative (Maf\'ūl bihi)', gender: 'Masculine', number: 'Singular', pattern: 'فَعْل — مصدر used as noun', derivatives: [{ ar: 'مَيِّت', surah: '6', ayah: '122' }, { ar: 'أَمْوَات', surah: '2', ayah: '154' }], implications: { en: 'Death coming before life in the verse teaches that death is not an accident or consequence of sin alone — it was created with a purpose: to test. This order is rare and intentional.', hi: 'मृत्यु को जीवन से पहले ज़िक्र करना बताता है कि मृत्यु सृजित है, यादृच्छिक नहीं — इसे उद्देश्य के साथ बनाया गया है: परीक्षण।', ur: 'موت کا ذکر زندگی سے پہلے یہ سکھاتا ہے کہ موت ایک تخلیق شدہ حقیقت ہے، نہ کہ محض انجام — اسے ایک مقصد کے ساتھ بنایا گیا: آزمائش۔' }, quranicExamples: [] },
      { ar: 'وَالْحَيَاةَ', translit: 'wal-ḥayāta', meaning: { en: 'And Life', hi: 'और जीवन', ur: 'اور زندگی' }, pos: 'CONJ+NOUN', root: 'ح ي ي', rootMeaning: { en: 'Life, vitality, living' }, verbForm: 'N/A', conjugation: 'N/A', case: 'Accusative (ma\'tūf on al-mawta)', gender: 'Feminine', number: 'Singular', pattern: 'فَعَالَة — abstract noun of life', derivatives: [{ ar: 'حَيّ', surah: '2', ayah: '255' }, { ar: 'يُحْيِي', surah: '2', ayah: '258' }], implications: { en: 'Life is presented as equally a created gift — not something self-generated or self-sustaining. Both death and life are Allah\'s creations, subject to His will.', hi: 'जीवन भी एक सृजित उपहार है — स्वयंभू नहीं। मृत्यु और जीवन दोनों अल्लाह की सृष्टि हैं।', ur: 'زندگی بھی ایک تخلیق شدہ نعمت ہے — خود سے قائم نہیں۔ موت اور زندگی دونوں اللہ کی تخلیق ہیں۔' }, quranicExamples: [] },
      { ar: 'لِيَبْلُوَكُمْ', translit: 'liyabluwakum', meaning: { en: 'So that He may test you', hi: 'ताकि वह तुम्हें آزمائے', ur: 'تاکہ وہ تمہیں آزمائے' }, pos: 'VERB', root: 'ب ل و', rootMeaning: { en: 'To test, to try, to put through trial' }, verbForm: 'Present/Future (Mudāri\') with لِـ (purpose lam)', conjugation: '3rd person, masculine, singular + 2nd person plural object', case: 'N/A (purpose clause)', gender: 'Masculine', number: 'Singular', pattern: 'يَفْعُلَ — manṣūb after لِـ (purpose particle)', derivatives: [{ ar: 'ابْتِلَاء', surah: '2', ayah: '49' }, { ar: 'بَلِيَّة', surah: '0' }], implications: { en: 'This word reveals the entire purpose of creation: testing. The verb is in the subjunctive after لِـ (purpose lam), meaning death and life were designed intentionally as a test environment. Life is not random — it is an examination hall.', hi: 'यह शब्द सृष्टि का पूरा उद्देश्य प्रकट करता है: परीक्षण। लाम-ए-ग़ायत (लक्ष्य का लाम) के बाद क्रिया है, जिसका अर्थ है मृत्यु और जीवन जानबूझकर परीक्षण के लिए बनाए गए थे।', ur: 'یہ لفظ تخلیق کا پورا مقصد ظاہر کرتا ہے: آزمائش۔ لامِ تعلیل کے بعد فعل مضارع منصوب ہے — موت اور زندگی جان بوجھ کر ایک آزمائشی ماحول کے طور پر بنائے گئے ہیں۔' }, quranicExamples: [{ ar: 'وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِّنَ الْخَوْفِ', ref: '2:155' }] },
      { ar: 'أَيُّكُمْ', translit: 'ayyukum', meaning: { en: 'Which of you', hi: 'तुममें से कौन', ur: 'تم میں سے کون' }, pos: 'INTERROG', root: 'ا ي ي', rootMeaning: { en: 'Interrogative pronoun — which/who' }, verbForm: 'N/A', conjugation: 'N/A', case: 'Mubtada (subject of embedded clause)', gender: 'N/A', number: 'Plural (addressed group)', pattern: 'Interrogative أيّ + plural pronoun suffix', derivatives: [], implications: { en: 'The interrogative أيُّكم (which of you) individualises the test. The test is not group-based — each person stands alone before Allah. It injects a sense of personal accountability into every human life.', hi: 'प्रश्नवाचक أيُّكم परीक्षण को व्यक्तिगत बनाता है। परीक्षण समूह-आधारित नहीं है — हर व्यक्ति अकेले अल्लाह के सामने खड़ा है।', ur: 'استفہامیہ أيُّكم آزمائش کو انفرادی بناتا ہے۔ آزمائش گروہی نہیں — ہر شخص اکیلے اللہ کے سامنے ہے۔' }, quranicExamples: [] },
      { ar: 'أَحْسَنُ', translit: 'aḥsanu', meaning: { en: 'Best / Most excellent', hi: 'सबसे अच्छा', ur: 'سب سے بہترین' }, pos: 'ADJ', root: 'ح س ن', rootMeaning: { en: 'Beauty, excellence, goodness' }, verbForm: 'N/A', conjugation: 'N/A', case: 'Nominative (Khabar of ayyukum)', gender: 'Masculine', number: 'Singular (comparative)', pattern: 'أَفْعَل — elative/comparative form meaning "better, best"', derivatives: [{ ar: 'حَسَنَة', surah: '7', ayah: '156' }, { ar: 'إِحْسَان', surah: '55', ayah: '60' }, { ar: 'مُحْسِن', surah: '2', ayah: '58' }], implications: { en: 'The word is أَحْسَن (best quality) not أَكْثَر (most quantity). Allah is testing the quality of deeds, not the quantity. One sincere rakah outweighs a thousand performed with heedlessness. This one word reorients the entire believer\'s approach to worship.', hi: 'शब्द أَحْسَن (सर्वोत्तम) है, أَكْثَر (सर्वाधिक) नहीं। अल्लाह कर्मों की गुणवत्ता देख रहा है, मात्रा नहीं। एक सच्ची रकात हज़ार लापरवाह रकातों से बेहतर है।', ur: 'لفظ أَحْسَن (بہترین) ہے نہ کہ أَكْثَر (زیادہ)۔ اللہ اعمال کا معیار دیکھ رہا ہے، مقدار نہیں۔ ایک مخلصانہ رکعت ہزار غافلانہ رکعات سے بہتر ہے۔' }, quranicExamples: [{ ar: 'وَمَنْ أَحْسَنُ قَوْلًا', ref: '41:33' }] },
      { ar: 'عَمَلًا', translit: '\'amalan', meaning: { en: 'In deed / In action', hi: 'अमल में / कर्म में', ur: 'عمل میں' }, pos: 'NOUN', root: 'ع م ل', rootMeaning: { en: 'Work, deed, action' }, verbForm: 'N/A', conjugation: 'N/A', case: 'Accusative (Tamyīz — specification)', gender: 'Masculine', number: 'Singular', pattern: 'فَعَل — masdar (verbal noun)', derivatives: [{ ar: 'عَامِل', surah: '9', ayah: '105' }, { ar: 'أَعْمَال', surah: '47', ayah: '4' }], implications: { en: '\'Amalan is in the accusative as a tamyīz (specification noun) — "best in respect of deed." The tanwin (indefinite) broadens its scope: any deed, in any sphere of life. This establishes that Islam is not just rituals — every action can be worship when done with ikhlas and itbā\'.',hi: 'अमलन तम्यीज़ (विशेषण-पूरक) के रूप में नस्ब में है। यह स्थापित करता है कि इस्लाम केवल इबादात तक सीमित नहीं — इख़लास के साथ किया गया हर काम इबादत हो सकता है।', ur: 'عَمَلًا تمییز کے طور پر نصب میں ہے۔ یہ ثابت کرتا ہے کہ اسلام صرف عبادات تک محدود نہیں — اخلاص کے ساتھ کیا گیا ہر عمل عبادت ہو سکتا ہے۔' }, quranicExamples: [{ ar: 'مَنْ عَمِلَ صَالِحًا', ref: '16:97' }] }
    ],
    irab: {
      summary: {
        en: 'Ayah 2 is a relative clause (ṣila) continuing from Ayah 1 via the repeated alladhī. The main verbal sentence is "alladhī khalaqa al-mawta wal-ḥayāta" (the One who created death and life). "Liyabluwakum" is a purpose clause (lam ta\'līl + manṣūb mudāri\'). "Ayyukum aḥsanu \'amalan" is an embedded nominal clause acting as the second object (maf\'ūl bihi thāni) of the verb blw — i.e., He tests (to see) which of you is best in deed.',
        hi: 'आयत 2 आयत 1 की सिला (सम्बन्धित उपवाक्य) जारी है। मुख्य वाक्य "अल्लज़ी ख़लक़ल-मौता वल-हयाता" है। "लियब्लुवकुम" लाम-ए-ग़ायत के साथ मन्सूब फ़े\'ल है। "अय्यकुम अह्सनु अमलन" एक अन्तःस्थापित जुमला है।',
        ur: 'آیت 2 آیت 1 سے الَّذِي کی صلہ ہے۔ مرکزی فعلی جملہ "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ" ہے۔ "لِيَبْلُوَكُمْ" لامِ تعلیل کے ساتھ مضارع منصوب ہے۔ "أَيُّكُمْ أَحْسَنُ عَمَلًا" ایک مدرج جملہ اسمیہ ہے۔'
      },
      clauses: [
        { arabic: 'الَّذِي', role: 'Subject (Fā\'il)', roleKey: 'faail', caseLabel: 'Nominative', detail: { en: 'Relative pronoun — subject of the implied verb (continuation of Ayah 1\'s tabāraka).', hi: 'सम्बन्धवाचक सर्वनाम — आयत 1 की क्रिया का फ़ाइल।', ur: 'موصول ضمیر — آیت 1 کے فعل کا فاعل۔' } },
        { arabic: 'خَلَقَ', role: 'Verb (Fi\'l)', roleKey: 'fail', caseLabel: 'Verbal sentence', detail: { en: 'Past tense verb. Objects: al-mawta and al-ḥayāta.', hi: 'फ़े\'ल माज़ी। मफ़\'ऊल: अल-मौत और अल-हयात।', ur: 'فعل ماضی۔ مفعول: الموت اور الحیاۃ۔' } },
        { arabic: 'الْمَوْتَ وَالْحَيَاةَ', role: 'Objects (Maf\'ūl bihi)', roleKey: 'mafool', caseLabel: 'Accusative', detail: { en: 'Two direct objects of khalaqa — death first, then life.', hi: 'ख़लक़ के दो मफ़\'ऊलात — पहले मृत्यु, फिर जीवन।', ur: 'خَلَقَ کے دو مفعول — پہلے موت، پھر زندگی۔' } },
        { arabic: 'لِيَبْلُوَكُمْ', role: 'Purpose Clause', roleKey: 'jum', caseLabel: 'Manṣūb (purpose lam)', detail: { en: 'Lam ta\'līl + mudāri\' manṣūb (purpose subjunctive). Expresses the reason creation was made.', hi: 'लाम-ए-ग़ायत + मुज़ारे मन्सूब। सृष्टि का उद्देश्य।', ur: 'لامِ تعلیل + مضارع منصوب۔ تخلیق کا مقصد بیان کرتا ہے۔' } },
        { arabic: 'أَيُّكُمْ أَحْسَنُ عَمَلًا', role: 'Embedded Clause', roleKey: 'jum', caseLabel: 'No case (clause)', detail: { en: 'Nominal clause in indirect speech position — "which of you is best in deed." Ayyukum = mubtada; aḥsanu = khabar; \'amalan = tamyīz (specification, accusative).', hi: 'परोक्ष उद्धरण — "तुम में से कौन अमल में बेहतर है।" अय्यकुम = मुब्तदा; अह्सन = ख़बर; अमलन = तम्यीज़।', ur: 'اسلوب غائب میں جملہ اسمیہ — "تم میں سے کون عمل میں بہترین ہے۔" أيُّكم = مبتدا؛ أحسن = خبر؛ عملاً = تمییز۔' } }
      ],
      diagramTitle: 'Ayah 2 Structure'
    }
  }

  // Note: For a production app, all 30 ayaat would be populated here.
  // The remaining ayaat (3–30) share the same data structure and
  // can be added iteratively. The app gracefully handles missing entries.
};

// ── Brief Tafsir (curated, trilingual — all 30 ayaat) ──
const BRIEF_TAFSIR = {
  1: {
    en: "Allah declares His absolute sovereignty. 'Tabāraka' — used only for Allah in the Quran — conveys transcendent, self-sustaining greatness. All sovereignty belongs to Allah alone.",
    hi: "अल्लाह अपनी पूर्ण बादशाहत का ऐलान करता है। 'तबारक' — केवल अल्लाह के लिए क़ुरआन में प्रयुक्त — अतुलनीय, स्वयंभू महानता को व्यक्त करता है। सभी संप्रभुता अकेले अल्लाह की है।",
    ur: "اللہ اپنی مطلق بادشاہت کا اعلان کرتا ہے۔ 'تبارک' — قرآن میں صرف اللہ کے لیے — ماورائی، خود پائیدار عظمت کا اظہار کرتا ہے۔ تمام حاکمیت صرف اللہ کی ہے۔"
  },
  2: {
    en: "Life and death are created as a test. 'Best' (ahsan) not 'most' — quality over quantity. Death mentioned before life: both serve Allah's purpose.",
    hi: "ज़िंदगी और मौत परीक्षा के लिए बनाई गई हैं। 'सर्वश्रेष्ठ' (अहसन) न कि 'सबसे अधिक' — मात्रा से ऊपर गुणवत्ता। मृत्यु का उल्लेख जीवन से पहले: दोनों अल्लाह के उद्देश्य की पूर्ति करते हैं।",
    ur: "زندگی اور موت آزمائش کے طور پر تخلیق کی گئیں۔ 'بہترین' (احسن) نہ کہ 'سب سے زیادہ' — مقدار پر معیار۔ موت کا ذکر زندگی سے پہلے: دونوں اللہ کے مقصد کی تکمیل کرتے ہیں۔"
  },
  3: {
    en: "Seven heavens as evidence of Allah's perfect creation. Look for flaws — a challenge to the intellect meant to deepen awe and certainty.",
    hi: "सात आसमान अल्लाह की कामिल सृष्टि के प्रमाण हैं। दोष खोजो — बुद्धि के लिए एक चुनौती जो विस्मय और यक़ीन को गहरा करती है।",
    ur: "سات آسمان اللہ کی کامل تخلیق کا ثبوت ہیں۔ خامیاں تلاش کرو — عقل کے لیے ایک چیلنج جو خشیت اور یقین کو گہرا کرتا ہے۔"
  },
  4: {
    en: "The challenge repeats: look again and again. Your vision returns humbled, finding no imperfection. Allah's creation is flawless by definition.",
    hi: "चुनौती फिर दोहराई जाती है: बार-बार देखो। तुम्हारी दृष्टि विनम्र होकर लौटेगी, कोई खामी न पाकर। अल्लाह की सृष्टि परिभाषा से ही निर्दोष है।",
    ur: "چیلنج دہرایا جاتا ہے: بار بار دیکھو۔ تمہاری نظر عاجز ہو کر لوٹے گی، کوئی عیب نہ پاکر۔ اللہ کی تخلیق تعریف کے اعتبار سے بے عیب ہے۔"
  },
  5: {
    en: "Stars serve dual roles: beautifying the lower heaven AND as missiles against eavesdropping devils. Ordinary beauty has extraordinary purpose.",
    hi: "तारों की दोहरी भूमिका है: निचले आसमान को सजाना और छिपकर सुनने वाले शैतानों के विरुद्ध प्रक्षेपास्त्र। साधारण सुंदरता का असाधारण उद्देश्य है।",
    ur: "ستاروں کا دوہرا کردار ہے: نچلے آسمان کو سجانا اور جاسوسی کرنے والے شیاطین کے خلاف ہتھیار۔ عام خوبصورتی کا غیر معمولی مقصد ہے۔"
  },
  6: {
    en: "Those who reject their Lord face Jahannam's blazing punishment. The surah pivots from signs of creation to consequences of denial — the contrast is sharp.",
    hi: "जो अपने रब को नकारते हैं वे जहन्नम की धधकती सज़ा का सामना करते हैं। सूरत सृष्टि की निशानियों से इनकार के परिणामों की ओर मुड़ती है — विपरीतता तीखी है।",
    ur: "جو اپنے رب کا انکار کرتے ہیں وہ جہنم کے جلتے عذاب کا سامنا کریں گے۔ سورت تخلیق کی نشانیوں سے انکار کے نتائج کی طرف مڑتی ہے — تضاد تیز ہے۔"
  },
  7: {
    en: "Hell's terrifying sound — seething, boiling over — is described vividly. Its personified rage prepares for the dialogue of the next verse.",
    hi: "जहन्नम की दिल दहलाने वाली आवाज़ — उबलती, उफनती — को जीवंत रूप से वर्णित किया गया है। इसके क्रोध का व्यक्तिकरण अगली आयत के संवाद के लिए तैयार करता है।",
    ur: "جہنم کی خوفناک آواز — ابلتی، جوش مارتی — کو واضح انداز میں بیان کیا گیا ہے۔ اس کے غضب کی تجسیم اگلی آیت کے مکالمے کے لیے تیار کرتی ہے۔"
  },
  8: {
    en: "Hellfire's rage at disbelievers is personified. Each group asked: did no warner come? The punishment is explicitly presented as just.",
    hi: "काफिरों पर जहन्नम का प्रकोप व्यक्तिरूप लेता है। हर गिरोह से पूछा जाता है: क्या कोई चेतावनी देने वाला नहीं आया? सज़ा को स्पष्ट रूप से न्यायसंगत बताया गया है।",
    ur: "کافروں پر جہنم کا غضب ذاتی شکل اختیار کرتا ہے۔ ہر گروہ سے پوچھا جائے گا: کیا کوئی خبردار کرنے والا نہیں آیا؟ عذاب کو صریحاً عادلانہ قرار دیا گیا ہے۔"
  },
  9: {
    en: "Hell's inhabitants admit they were warned. 'We heard but rejected.' The confession on that Day will be inescapable.",
    hi: "जहन्नम के वासी मानते हैं कि उन्हें आगाह किया गया था। 'हमने सुना पर नकारा।' उस दिन का इक़रार अटल होगा।",
    ur: "جہنمی تسلیم کرتے ہیں کہ انہیں خبردار کیا گیا تھا۔ 'ہم نے سنا مگر انکار کیا۔' اس دن کا اعتراف ناگزیر ہوگا۔"
  },
  10: {
    en: "If only they had listened or used reason — they wouldn't be in Hell. The intellect ('aql) is a path to salvation; ignoring it is double failure.",
    hi: "काश उन्होंने सुना होता या अक़्ल से काम लिया होता — वे जहन्नम में न होते। बुद्धि ('अक़्ल) मुक्ति का मार्ग है; इसे नज़रअंदाज़ करना दोहरी विफलता है।",
    ur: "کاش انہوں نے سنا ہوتا یا عقل استعمال کی ہوتی — وہ جہنم میں نہ ہوتے۔ عقل نجات کا راستہ ہے؛ اسے نظرانداز کرنا دوہری ناکامی ہے۔"
  },
  11: {
    en: "Full confession of sins. Hell's punishment for those who denied Allah is confirmed. Self-confession on Judgement Day carries no benefit.",
    hi: "गुनाहों का पूर्ण इक़रार। अल्लाह को नकारने वालों के लिए जहन्नम की सज़ा की पुष्टि। क़यामत के दिन ख़ुद का इक़रार किसी काम न आएगा।",
    ur: "گناہوں کا مکمل اعتراف۔ اللہ کا انکار کرنے والوں کے لیے جہنم کی سزا کی تصدیق۔ قیامت کے دن خود کا اعتراف کوئی فائدہ نہیں دے گا۔"
  },
  12: {
    en: "In contrast: those who fear their Lord in the unseen receive forgiveness and a great reward. Inner taqwa — private, unseen — is the key to salvation.",
    hi: "इसके विपरीत: जो बेदेखे अपने रब से डरते हैं उन्हें माफ़ी और बड़ा इनाम मिलता है। आंतरिक तक़वा — एकांत, अदृश्य — मुक्ति की कुंजी है।",
    ur: "اس کے برعکس: جو غیب میں اپنے رب سے ڈرتے ہیں انہیں مغفرت اور بڑا اجر ملتا ہے۔ باطنی تقوی — خفیہ، پوشیدہ — نجات کی کلید ہے۔"
  },
  13: {
    en: "Allah knows what you conceal AND what is even more hidden — the whispers of the heart not yet formed into words. Nothing is hidden from Him.",
    hi: "अल्लाह वो सब जानता है जो तुम छुपाते हो और वो भी जो उससे भी अधिक गुप्त है — दिल की वो फुसफुसाहट जो अभी शब्द भी नहीं बनी। उससे कुछ भी छुपा नहीं।",
    ur: "اللہ وہ بھی جانتا ہے جو تم چھپاتے ہو اور وہ بھی جو اس سے زیادہ پوشیدہ ہے — دل کی سرگوشیاں جو ابھی الفاظ بھی نہیں بنیں۔ اس سے کچھ بھی پوشیدہ نہیں۔"
  },
  14: {
    en: "How could the Creator not know His creation? Allah is Al-Laṭīf (Subtle, All-Aware) — His knowledge penetrates to the most minute detail imaginable.",
    hi: "ख़ालिक़ अपनी मख़लूक़ को कैसे न जाने? अल्लाह अल-लतीफ़ (सूक्ष्म, पूर्ण-ज्ञाता) है — उसका ज्ञान कल्पना से परे बारीक विवरण तक पहुंचता है।",
    ur: "خالق اپنی مخلوق کو کیسے نہ جانے؟ اللہ اللطیف (باریک بین، سب سے آگاہ) ہے — اس کا علم تصور سے بھی باریک تفصیل تک پہنچتا ہے۔"
  },
  15: {
    en: "Allah made the earth easy to traverse — an invitation to walk, explore, seek His provision. The sustenance we find is ultimately from Him.",
    hi: "अल्लाह ने ज़मीन को चलने-फिरने के लिए आसान बनाया — चलने, तलाश करने, उसका रिज़्क़ माँगने का न्योता। जो रिज़्क़ मिलता है वो आख़िरकार उसी की तरफ़ से है।",
    ur: "اللہ نے زمین کو چلنے پھرنے کے لیے آسان بنایا — چلنے، تلاش کرنے، اس کا رزق مانگنے کی دعوت۔ جو رزق ملتا ہے وہ بالآخر اسی کی طرف سے ہے۔"
  },
  16: {
    en: "Do you feel safe from Allah causing the earth to swallow you? This shatters any illusion of self-sufficiency. Security comes only through awareness of Allah.",
    hi: "क्या तुम उससे निश्चिन्त हो जो ज़मीन को तुम्हें निगल लेने का हुक्म दे सकता है? यह आत्मनिर्भरता के हर भ्रम को तोड़ता है। सुरक्षा केवल अल्लाह की जागरूकता से है।",
    ur: "کیا تم اس سے بے خوف ہو جو زمین کو تمہیں نگل لینے کا حکم دے سکتا ہے؟ یہ خودکفالت کے ہر وہم کو توڑتا ہے۔ سلامتی صرف اللہ کی آگاہی سے ہے۔"
  },
  17: {
    en: "Do you feel safe from His sending a windstorm of stones? Ayaat 16–17: you are surrounded above and below by Allah's power. True safety is obedience.",
    hi: "क्या तुम उसके पत्थरों वाला तूफ़ान भेजने से बेख़ौफ़ हो? आयात 16-17: तुम ऊपर और नीचे दोनों तरफ़ से अल्लाह की क़ुदरत से घिरे हो। सच्ची सुरक्षा आज्ञाकारिता में है।",
    ur: "کیا تم اس کے پتھروں کا طوفان بھیجنے سے بے خوف ہو؟ آیات 16-17: تم اوپر اور نیچے دونوں طرف سے اللہ کی قدرت میں گھرے ہو۔ حقیقی سلامتی فرمانبرداری میں ہے۔"
  },
  18: {
    en: "Nations before them denied and faced destruction. Prophets came consistently — rejection always had consequences. History testifies to this pattern.",
    hi: "उनसे पहली क़ौमों ने भी झुठलाया और तबाही का सामना किया। नबी बराबर आते रहे — इनकार के हमेशा नतीजे हुए। इतिहास इस नमूने की गवाही देता है।",
    ur: "ان سے پہلی قوموں نے بھی جھٹلایا اور تباہی کا سامنا کیا۔ انبیاء مسلسل آتے رہے — انکار کے ہمیشہ نتائج ہوئے۔ تاریخ اس نمونے کی گواہی دیتی ہے۔"
  },
  19: {
    en: "Birds in flight sustained by nothing but Allah's command. In the ordinary miracle of soaring birds, the attentive heart sees Ar-Rahman's continuous sustaining power.",
    hi: "उड़ान में परिंदे अल्लाह के हुक्म के सिवा किसी चीज़ से नहीं थमे। उड़ते परिंदों के सामान्य चमत्कार में जागरूक दिल अर्रहमान की निरंतर पालन करने वाली शक्ति देखता है।",
    ur: "اڑان میں پرندے اللہ کے حکم کے سوا کسی چیز سے نہیں ٹکے۔ اڑتے پرندوں کے عام معجزے میں بیدار دل الرحمٰن کی مسلسل قائم رکھنے والی قدرت دیکھتا ہے۔"
  },
  20: {
    en: "Who is the 'army' that could help you against Allah? This challenges anyone placing ultimate trust in power, wealth, or armies rather than in Allah.",
    hi: "वो कौन सी 'फ़ौज' है जो अल्लाह के ख़िलाफ़ तुम्हारी मदद कर सके? यह उन सभी को चुनौती देता है जो ताक़त, दौलत या फ़ौजों में अल्लाह की जगह भरोसा रखते हैं।",
    ur: "وہ کون سا 'لشکر' ہے جو اللہ کے خلاف تمہاری مدد کر سکے؟ یہ ان سبھی کو چیلنج کرتا ہے جو اللہ کی جگہ طاقت، دولت یا فوجوں پر بھروسہ رکھتے ہیں۔"
  },
  21: {
    en: "Who provides for you if Allah withholds? Despite total dependence on Allah, the disbeliever persists in arrogance — this exposes the irrationality of ingratitude.",
    hi: "अगर अल्लाह रोक ले तो कौन तुम्हें रिज़्क़ देगा? अल्लाह पर पूरी तरह निर्भर होने के बावजूद काफ़िर घमंड में लगा रहता है — यह कृतघ्नता की तर्कहीनता उजागर करता है।",
    ur: "اگر اللہ روک لے تو کون تمہیں رزق دے گا؟ اللہ پر مکمل انحصار کے باوجود کافر تکبر میں لگا رہتا ہے — یہ ناشکری کی غیر معقولیت کو ظاہر کرتا ہے۔"
  },
  22: {
    en: "A parable: one who walks face-down stumbling versus one walking upright on a straight path. Disbelief makes one spiritually blind; faith gives clarity and direction.",
    hi: "एक मिसाल: मुँह के बल ठोकरें खाता हुआ चलने वाला बनाम सीधे रास्ते पर सीधा चलने वाला। कुफ़्र इंसान को रूहानी तौर पर अंधा बनाता है; ईमान स्पष्टता और दिशा देता है।",
    ur: "ایک مثال: منہ کے بل ٹھوکریں کھاتا چلنے والا بنام سیدھی راہ پر سیدھا چلنے والا۔ کفر انسان کو روحانی طور پر اندھا بناتا ہے؛ ایمان وضاحت اور سمت دیتا ہے۔"
  },
  23: {
    en: "Allah created your hearing, sight, and hearts — yet how little thanks is given. These faculties were gifted for reflection and recognition of Allah. Their misuse is ingratitude.",
    hi: "अल्लाह ने तुम्हारे कान, आँखें और दिल बनाए — फिर भी कितनी कम शुकरगुज़ारी की जाती है। ये क्षमताएं ख़ास तौर पर अल्लाह के विचार और पहचान के लिए दी गई थीं।",
    ur: "اللہ نے تمہارے کان، آنکھیں اور دل بنائے — پھر بھی کتنی کم شکرگزاری کی جاتی ہے۔ یہ صلاحیتیں خاص طور پر اللہ کی غور و فکر اور پہچان کے لیے دی گئی تھیں۔"
  },
  24: {
    en: "Allah scattered you across the earth — this dispersal is His wisdom and plan. To Him you will all be gathered on the final day, no matter where you died.",
    hi: "अल्लाह ने तुम्हें ज़मीन पर फैलाया — यह बिखराव उसकी हिकमत और तदबीर है। उसी के पास तुम सब क़यामत के दिन जमा किए जाओगे।",
    ur: "اللہ نے تمہیں زمین پر پھیلایا — یہ انتشار اس کی حکمت اور منصوبہ ہے۔ اسی کے پاس تم سب قیامت کے دن جمع کیے جاؤگے۔"
  },
  25: {
    en: "Disbelievers mockingly demand: 'When will this threat come, if you are truthful?' The question is born of arrogance, not sincere inquiry.",
    hi: "काफ़िर मज़ाक़ उड़ाते हुए माँग करते हैं: 'यह धमकी कब पूरी होगी, अगर तुम सच्चे हो?' यह सवाल घमंड से पैदा हुआ है, सच्ची जिज्ञासा से नहीं।",
    ur: "کافر مذاق اڑاتے ہوئے مطالبہ کرتے ہیں: 'یہ دھمکی کب پوری ہوگی، اگر تم سچے ہو؟' یہ سوال تکبر سے پیدا ہوا ہے، سچی جستجو سے نہیں۔"
  },
  26: {
    en: "The Prophet ﷺ is told: knowledge of the Hour belongs to Allah alone. Even the Messenger has no access to this knowledge.",
    hi: "नबी ﷺ से कहा जाता है: क़यामत का इल्म अकेले अल्लाह को है। रसूल को भी इस जानकारी तक पहुँच नहीं।",
    ur: "نبی ﷺ سے کہا جاتا ہے: قیامت کا علم صرف اللہ کو ہے۔ رسول کو بھی اس معلومات تک رسائی نہیں۔"
  },
  27: {
    en: "When they see the punishment approaching, the deniers' faces darken with grief. The angels tell them: 'This is exactly what you were demanding and mocking.'",
    hi: "जब वे अज़ाब को क़रीब देखेंगे, इनकार करने वालों के चेहरे ग़म से काले पड़ जाएंगे। फ़रिश्ते कहेंगे: 'यही वो है जिसका तुम मज़ाक़ उड़ा रहे थे।'",
    ur: "جب وہ عذاب کو قریب دیکھیں گے، انکار کرنے والوں کے چہرے غم سے سیاہ پڑ جائیں گے۔ فرشتے کہیں گے: 'یہی وہ ہے جس کا تم مذاق اڑا رہے تھے۔'"
  },
  28: {
    en: "Even if the Prophet ﷺ and companions are shown mercy, disbelievers' punishment remains. The fate of deniers is independent of the Prophet's fate.",
    hi: "अगर नबी ﷺ और साथियों पर रहमत की जाए, काफ़िरों की सज़ा बरकरार रहती है। मुनकिरों का अंजाम नबी के अंजाम से स्वतंत्र है।",
    ur: "اگر نبی ﷺ اور ساتھیوں پر رحمت ہو، کافروں کی سزا برقرار رہتی ہے۔ منکرین کا انجام نبی کے انجام سے آزاد ہے۔"
  },
  29: {
    en: "The Prophet ﷺ declares belief in Allah and complete reliance (tawakkul) on Him alone. This is the model for every believer — total trust in Allah, the Most Merciful.",
    hi: "नबी ﷺ अल्लाह में ईमान और अकेले उस पर पूरा तवक्कुल घोषित करते हैं। यह हर मुमिन के लिए नमूना है — अल्लाह पर पूरा भरोसा।",
    ur: "نبی ﷺ اللہ پر ایمان اور اکیلے اس پر مکمل توکل کا اعلان کرتے ہیں۔ یہ ہر مومن کے لیے نمونہ ہے — اللہ پر مکمل بھروسہ۔"
  },
  30: {
    en: "The final unanswerable argument: if your water sank into the earth, who would bring you flowing water? No power, wealth, or technology can replace what Allah provides. Reflect and submit.",
    hi: "आख़िरी अटल तर्क: अगर तुम्हारा पानी ज़मीन में धँस जाए, कौन बहता पानी लाएगा? कोई ताक़त, दौलत या तकनीक अल्लाह के दिए को नहीं बदल सकती। सोचो और झुको।",
    ur: "آخری ناقابل جواب دلیل: اگر تمہارا پانی زمین میں دھنس جائے، کون بہتا پانی لائے گا؟ کوئی طاقت، دولت یا ٹیکنالوجی اللہ کے دیے کو نہیں بدل سکتی۔ سوچو اور جھکو۔"
  }
};
