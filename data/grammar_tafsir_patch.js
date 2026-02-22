// Patch script — replaces BRIEF_TAFSIR with multilingual version
// Run with: node grammar_tafsir_patch.js
const fs = require('fs');
let content = fs.readFileSync('data/grammar.js', 'utf8');

const newTafsir = `// ── Brief Tafsir (curated, trilingual — all 30 ayaat) ──
const BRIEF_TAFSIR = {
  1: {
    en: "Allah declares His absolute sovereignty. 'Tabāraka' — used only for Allah in the Quran — conveys transcendent, self-sustaining greatness. All sovereignty belongs to Allah alone.",
    hi: "अल्लाह अपनी पूर्ण बादशाहत का ऐलान करता है। 'तबारक' — केवल अल्लाह के लिए क़ुरआन में प्रयुक्त — जो अतुलनीय, स्वयंभू महानता को व्यक्त करता है। सभी संप्रभुता अकेले अल्लाह की है।",
    ur: "اللہ اپنی مطلق بادشاہت کا اعلان کرتا ہے۔ 'تبارک' — قرآن میں صرف اللہ کے لیے استعمال — جو ماورائی، خود پائیدار عظمت کا اظہار کرتا ہے۔ تمام حاکمیت صرف اللہ کی ہے۔"
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
    en: "Hell's terrifying sound — seething, boiling over — is described vividly. Its rage personified prepares for the dialogue of the next verse.",
    hi: "जहन्नम की दिल दहलाने वाली आवाज़ — उबलती, उफनती — को जीवंत रूप से वर्णित किया गया है। इसके क्रोध का व्यक्तिकरण अगली आयत के संवाद के लिए तैयार करता है।",
    ur: "جہنم کی خوفناک آواز — ابلتی، جوش مارتی — کو واضح انداز میں بیان کیا گیا ہے۔ اس کے غضب کی تجسیم اگلی آیت کے مکالمے کے لیے تیار کرتی ہے۔"
  },
  8: {
    en: "Hellfire's rage at disbelievers is personified. Each group asked: did no warner come? The punishment is explicitly presented as just.",
    hi: "काफिरों पर जहन्नम का प्रकोप व्यक्तिरूप लेता है। हर गिरोह से पूछा जाता है: क्या कोई चेतावनी देने वाला नहीं आया? सज़ा को स्पष्ट रूप से न्यायसंगत बताया गया है।",
    ur: "کافروں پر جہنم کا غضب ذاتی شکل اختیار کرتا ہے۔ ہر گروہ سے پوچھا جائے گا: کیا کوئی خبردار کرنے والا نہیں آیا؟ عذاب کو صریحاً عادلانہ قرار دیا گیا ہے۔"
  },
  9: {
    en: "Hell's inhabitants admit they were warned. 'We heard but rejected.' The confession on that Day will be inescapable — their own words condemn them.",
    hi: "जहन्नम के वासी मानते हैं कि उन्हें आगाह किया गया था। 'हमने सुना पर नकारा।' उस दिन का इक़रार अटल होगा — उनके अपने शब्द उन्हें दोषी ठहराएंगे।",
    ur: "جہنمی تسلیم کرتے ہیں کہ انہیں خبردار کیا گیا تھا۔ 'ہم نے سنا مگر انکار کیا۔' اس دن کا اعتراف ناگزیر ہوگا — ان کے اپنے الفاظ انہیں مجرم ٹھہرائیں گے۔"
  },
  10: {
    en: "If only they had listened or used reason — they wouldn't be in Hell. The intellect ('aql) is presented as a path to salvation; ignoring it is double failure.",
    hi: "काश उन्होंने सुना होता या अक़्ल से काम लिया होता — वे जहन्नम में न होते। बुद्धि ('अक़्ल) को मुक्ति का मार्ग बताया गया है; इसे नज़रअंदाज़ करना दोहरी विफलता है।",
    ur: "کاش انہوں نے سنا ہوتا یا عقل استعمال کی ہوتی — وہ جہنم میں نہ ہوتے۔ عقل کو نجات کا راستہ قرار دیا گیا ہے؛ اسے نظرانداز کرنا دوہری ناکامی ہے۔"
  },
  11: {
    en: "Full confession of sins. Hellfire's punishment for wrongdoers who denied Allah is confirmed. Self-confession on Judgement Day carries no benefit.",
    hi: "गुनाहों का पूर्ण इक़रार। अल्लाह को नकारने वाले ज़ालिमों के लिए जहन्नम की सज़ा की पुष्टि। क़यामत के दिन ख़ुद का इक़रार किसी काम न आएगा।",
    ur: "گناہوں کا مکمل اعتراف۔ اللہ کا انکار کرنے والے ظالموں کے لیے جہنم کی سزا کی تصدیق۔ قیامت کے دن خود کا اعتراف کوئی فائدہ نہیں دے گا۔"
  },
  12: {
    en: "In contrast: those who fear their Lord in the unseen receive forgiveness and a great reward. Inner God-consciousness (taqwa) — private, unseen — is the key to salvation.",
    hi: "इसके विपरीत: जो बेदेखे अपने रब से डरते हैं उन्हें माफ़ी और बड़ा इनाम मिलता है। आंतरिक ईशभीरुता (तक़वा) — एकांत, अदृश्य — मुक्ति की कुंजी है।",
    ur: "اس کے برعکس: جو غیب میں اپنے رب سے ڈرتے ہیں انہیں مغفرت اور بڑا اجر ملتا ہے۔ باطنی خداترسی (تقوی) — خفیہ، پوشیدہ — نجات کی کلید ہے۔"
  },
  13: {
    en: "Allah knows what you conceal AND what is even more hidden — the whispers of the heart not yet formed into words. Nothing is hidden from Him.",
    hi: "अल्लाह वो सब जानता है जो तुम छुपाते हो और वो भी जो उससे भी अधिक गुप्त है — दिल की वो फुसफुसाहट जो अभी शब्द भी नहीं बनी। उससे कुछ भी छुपा नहीं।",
    ur: "اللہ وہ بھی جانتا ہے جو تم چھپاتے ہو اور وہ بھی جو اس سے بھی زیادہ پوشیدہ ہے — دل کی وہ سرگوشیاں جو ابھی الفاظ بھی نہیں بنیں۔ اس سے کچھ بھی پوشیدہ نہیں۔"
  },
  14: {
    en: "How could the Creator not know His creation? Allah is Al-Laṭīf (Subtle, All-Aware) — His knowledge penetrates to the most minute detail imaginable.",
    hi: "ख़ालिक़ अपनी मख़लूक़ को कैसे न जाने? अल्लाह अल-लतीफ़ (सूक्ष्म, पूर्ण-ज्ञाता) है — उसका ज्ञान कल्पना से परे बारीक से बारीक विवरण तक पहुंचता है।",
    ur: "خالق اپنی مخلوق کو کیسے نہ جانے؟ اللہ اللطیف (باریک بین، سب سے آگاہ) ہے — اس کا علم تصور سے بھی باریک تفصیل تک پہنچتا ہے۔"
  },
  15: {
    en: "Allah made the earth easy to traverse — an invitation to walk, explore, seek His provision. The sustenance we find is ultimately from Him.",
    hi: "अल्लाह ने ज़मीन को चलने-फिरने के लिए आसान बनाया — चलने, तलाश करने, उसका रिज़्क़ माँगने का न्योता। जो रिज़्क़ हमें मिलता है वो आख़िरकार उसी की तरफ़ से है।",
    ur: "اللہ نے زمین کو چلنے پھرنے کے لیے آسان بنایا — چلنے، تلاش کرنے، اس کا رزق مانگنے کی دعوت۔ جو رزق ہمیں ملتا ہے وہ بالآخر اسی کی طرف سے ہے۔"
  },
  16: {
    en: "Do you feel safe from Allah causing the earth to swallow you? This shatters any illusion of self-sufficiency. Security comes only through awareness of Allah.",
    hi: "क्या तुम उस (अल्लाह) से निश्चिन्त हो जो ज़मीन को तुम्हें निगल लेने का हुक्म दे सकता है? यह आत्मनिर्भरता के हर भ्रम को तोड़ता है। सुरक्षा केवल अल्लाह की जागरूकता से है।",
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
    en: "Allah created your hearing, sight, and hearts — yet how little thanks is given. These faculties were gifted specifically for reflection and recognition of Allah. Their misuse is ingratitude.",
    hi: "अल्लाह ने तुम्हारे कान, आँखें और दिल बनाए — फिर भी कितनी कम शुकरगुज़ारी की जाती है। ये क्षमताएं ख़ास तौर पर अल्लाह के विचार और पहचान के लिए दी गई थीं। इनका दुरुपयोग नाशुकरी है।",
    ur: "اللہ نے تمہارے کان، آنکھیں اور دل بنائے — پھر بھی کتنی کم شکرگزاری کی جاتی ہے۔ یہ صلاحیتیں خاص طور پر اللہ کی غور و فکر اور پہچان کے لیے دی گئی تھیں۔ ان کا غلط استعمال ناشکری ہے۔"
  },
  24: {
    en: "Allah scattered you across the earth — this dispersal is His wisdom and plan. To Him you will all be gathered on the final day, no matter where on earth you died.",
    hi: "अल्लाह ने तुम्हें ज़मीन पर फैलाया — यह बिखराव उसकी हिकमत और तदबीर है। उसी के पास तुम सब क़यामत के दिन जमा किए जाओगे, चाहे तुम ज़मीन पर कहीं भी मरो।",
    ur: "اللہ نے تمہیں زمین پر پھیلایا — یہ انتشار اس کی حکمت اور منصوبہ ہے۔ اسی کے پاس تم سب قیامت کے دن جمع کیے جاؤگے، چاہے تم زمین پر کہیں بھی مرو۔"
  },
  25: {
    en: "Disbelievers mockingly demand: 'When will this threat come, if you are truthful?' The question is born of arrogance, not sincere inquiry.",
    hi: "काफ़िर मज़ाक़ उड़ाते हुए माँग करते हैं: 'यह धमकी कब पूरी होगी, अगर तुम सच्चे हो?' यह सवाल घमंड से पैदा हुआ है, सच्ची जिज्ञासा से नहीं।",
    ur: "کافر مذاق اڑاتے ہوئے مطالبہ کرتے ہیں: 'یہ دھمکی کب پوری ہوگی، اگر تم سچے ہو؟' یہ سوال تکبر سے پیدا ہوا ہے، سچی جستجو سے نہیں۔"
  },
  26: {
    en: "The Prophet ﷺ is told: knowledge of the Hour belongs to Allah alone. Even the Messenger has no access to this knowledge. Proper boundaries of prophetic knowledge are established.",
    hi: "नबी ﷺ से कहा जाता है: क़यामत का इल्म अकेले अल्लाह को है। रसूल को भी इस जानकारी तक पहुँच नहीं। नबुव्वत के इल्म की उचित सीमाएं स्थापित की गई हैं।",
    ur: "نبی ﷺ سے کہا جاتا ہے: قیامت کا علم صرف اللہ کو ہے۔ رسول کو بھی اس معلومات تک رسائی نہیں۔ نبوت کے علم کی مناسب حدود قائم کی گئی ہیں۔"
  },
  27: {
    en: "When they finally see the punishment approaching, the deniers' faces darken with grief. The angels tell them: 'This is exactly what you were demanding and mocking.'",
    hi: "जब वे आख़िरकार अज़ाब को क़रीब देखेंगे, इनकार करने वालों के चेहरे ग़म से काले पड़ जाएंगे। फ़रिश्ते उनसे कहेंगे: 'यही वो है जिसकी तुम माँग कर रहे थे और जिसका मज़ाक़ उड़ा रहे थे।'",
    ur: "جب وہ بالآخر عذاب کو قریب دیکھیں گے، انکار کرنے والوں کے چہرے غم سے سیاہ پڑ جائیں گے۔ فرشتے انہیں کہیں گے: 'یہی وہ ہے جس کا تم مطالبہ کر رہے تھے اور جس کا مذاق اڑا رہے تھے۔'"
  },
  28: {
    en: "Even if the Prophet ﷺ and companions are shown mercy, disbelievers' punishment remains. The fate of deniers is independent of the Prophet's fate.",
    hi: "अगर नबी ﷺ और साथियों पर रहमत की जाए, काफ़िरों की सज़ा बरकरार रहती है। मुनकिरों का अंजाम नबी के अंजाम से स्वतंत्र है।",
    ur: "اگر نبی ﷺ اور ساتھیوں پر رحمت ہو، کافروں کی سزا برقرار رہتی ہے۔ منکرین کا انجام نبی کے انجام سے آزاد ہے۔"
  },
  29: {
    en: "The Prophet ﷺ declares belief in Allah and complete reliance (tawakkul) on Him alone. This is the model for every believer — total trust placed in Allah, the Most Merciful.",
    hi: "नबी ﷺ अल्लाह में ईमान और अकेले उस पर पूरा तवक्कुल घोषित करते हैं। यह हर मुमिन के लिए नमूना है — अल्लाह, सबसे रहीम पर पूरा भरोसा।",
    ur: "نبی ﷺ اللہ پر ایمان اور اکیلے اس پر مکمل توکل کا اعلان کرتے ہیں۔ یہ ہر مومن کے لیے نمونہ ہے — اللہ، سب سے رحیم پر مکمل بھروسہ۔"
  },
  30: {
    en: "The final unanswerable argument: if your water sank into the earth, who would bring you flowing water? No power, wealth, or technology can replace what Allah provides. Reflect and submit.",
    hi: "आख़िरी अटल तर्क: अगर तुम्हारा पानी ज़मीन में धँस जाए, कौन तुम्हारे लिए बहता पानी लाएगा? कोई ताक़त, दौलत या तकनीक अल्लाह के दिए को नहीं बदल सकती। सोचो और झुको।",
    ur: "آخری ناقابل جواب دلیل: اگر تمہارا پانی زمین میں دھنس جائے، کون تمہارے لیے بہتا پانی لائے گا؟ کوئی طاقت، دولت یا ٹیکنالوجی اللہ کے دیے کو نہیں بدل سکتی۔ سوچو اور جھکو۔"
  }
};`;

// Replace the old flat BRIEF_TAFSIR
const oldStart = content.indexOf('// ── Brief Tafsir');
const oldEnd = content.indexOf('\n};', oldStart) + 3;
content = content.slice(0, oldStart) + newTafsir + content.slice(oldEnd);
fs.writeFileSync('data/grammar.js', content);
console.log('grammar.js BRIEF_TAFSIR patched successfully');
