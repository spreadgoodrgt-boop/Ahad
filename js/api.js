/* ══════════════════════════════════════════════════
   Ahad — js/api.js
   Dual-source API layer:
     • Arabic text / audio / transliteration → alquran.cloud
     • Translations → alquran.cloud (lazy, per-language, cached)
     • Tafsir (3 scholars, Markdown)         → quranapi.pages.dev

   Translation design (scalable to all 114 surahs):
   Translations are NOT loaded upfront. Fetched on-demand
   the first time a language is needed for a given surah,
   then cached. Switching languages fires at most one fetch.
══════════════════════════════════════════════════ */

const API = (() => {

  const CLOUD  = "https://api.alquran.cloud/v1";
  const TAFSIR = "https://quranapi.pages.dev/api";

  const EDITIONS = {
    audio:    "ar.alafasy",
    translit: "en.transliteration",
    en:       "en.asad",
    hi:       "hi.hindi",
    ur:       "ur.jalandhry",
  };

  const _rawCache   = {};
  const _transCache = {}; // [surahNum][lang] = string[]

  async function _get(url, isCloudApi = true) {
    if (_rawCache[url]) return _rawCache[url];
    try {
      const res  = await fetch(url);
      if (!res.ok) { console.warn("[API] HTTP", res.status, url); return null; }
      const json = await res.json();
      if (isCloudApi && json.code !== undefined && json.code !== 200) {
        console.warn("[API] code!=200", url, json.code); return null;
      }
      _rawCache[url] = json;
      return json;
    } catch (e) {
      console.warn("[API] fetch failed:", url, e.message);
      return null;
    }
  }

  function _ayahs(d) { return d?.data?.ayahs ?? []; }

  // Fetches Arabic + transliteration + audio only.
  // translations:{} is left empty — filled by ensureTranslation().
  async function loadSurah(surahNum) {
    const n = surahNum || window.AppState?.surahNum || 67;
    const [arD, trD, auD] = await Promise.all([
      _get(`${CLOUD}/surah/${n}`),
      _get(`${CLOUD}/surah/${n}/${EDITIONS.translit}`),
      _get(`${CLOUD}/surah/${n}/${EDITIONS.audio}`),
    ]);
    if (!arD) throw new Error("Failed to load Arabic text for surah " + n);
    const ar = _ayahs(arD), tr = _ayahs(trD), au = _ayahs(auD);
    return ar.map((ayah, i) => ({
      number:          ayah.numberInSurah,
      arabic:          ayah.text,
      transliteration: tr[i]?.text  || "",
      audio:           au[i]?.audio || "",
      translations:    {},
    }));
  }

  // Fetches one translation language for one surah if not cached.
  // Merges texts into AppState.ayahs[i].translations[lang] in-place.
  // Returns true if translation is available after this call.
  async function ensureTranslation(surahNum, lang) {
    const edition = EDITIONS[lang];
    if (!edition) return false;
    if (_transCache[surahNum]?.[lang]) return true; // already done

    const data = await _get(`${CLOUD}/surah/${surahNum}/${edition}`);
    if (!data) { console.warn("[API] Translation unavailable:", lang, surahNum); return false; }

    const texts = _ayahs(data).map(a => a.text || "");
    if (!_transCache[surahNum]) _transCache[surahNum] = {};
    _transCache[surahNum][lang] = texts;

    // Merge into live AppState.ayahs
    if (window.AppState?.ayahs?.length) {
      AppState.ayahs.forEach((ayah, i) => { ayah.translations[lang] = texts[i] || ""; });
    }
    return true;
  }

  // Scholarly tafsir from quranapi.pages.dev — English/Arabic only.
  // Brief multilingual tafsir lives in data/grammar.js (BRIEF_TAFSIR).
  async function loadTafsir(surahNum, ayahNum) {
    const data = await _get(`${TAFSIR}/tafsir/${surahNum}_${ayahNum}.json`, false);
    return data?.tafsirs || null;
  }

  async function loadSurahList() {
    const data = await _get(`${CLOUD}/surah`);
    return data?.data ?? [];
  }

  return { loadSurah, ensureTranslation, loadTafsir, loadSurahList };
})();
