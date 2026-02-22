/* ══════════════════════════════════════════════════
   QURAN STUDY APP — js/firebase.js
   Firebase Firestore — cross-device sync.
   Fails silently to localStorage on any error
   (permissions, network, unconfigured, etc.)

   SETUP (one-time, ~5 min):
   1. console.firebase.google.com → New project
   2. Add Web app → copy firebaseConfig below
   3. Authentication → Sign-in method → Anonymous → Enable
   4. Firestore Database → Create → Start in test mode
   5. Firestore → Rules → paste the rules block below → Publish

   FIRESTORE SECURITY RULES:
   ─────────────────────────
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{document=**} {
         allow read, write: if request.auth != null
                            && request.auth.uid == userId;
       }
     }
   }
   ─────────────────────────
══════════════════════════════════════════════════ */

const FB = (() => {

  // ── Paste your Firebase config here ───────────
  const firebaseConfig = {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID",
  };

  let _db    = null;
  let _uid   = null;
  let _ready = false; // only true when auth + Firestore both confirmed working

  function _isConfigured() {
    return typeof firebase !== 'undefined' &&
           firebaseConfig.apiKey !== 'YOUR_API_KEY';
  }

  // ── Safe Firestore wrapper ────────────────────
  // Any permission / network error silently falls
  // back to localStorage and clears _ready so we
  // don't keep hammering a broken connection.
  async function _safe(fn, fallback = null) {
    if (!_ready) return fallback;
    try {
      return await fn();
    } catch (e) {
      if (e.code === 'permission-denied' || e.code === 'unauthenticated') {
        console.warn('[FB] Permission denied — switching to localStorage-only mode.');
        _ready = false; // stop retrying Firestore
      } else {
        console.warn('[FB] Firestore error:', e.message);
      }
      return fallback;
    }
  }

  function _doc(name) {
    return _db.collection('users').doc(_uid)
              .collection('data').doc(name);
  }

  // ── init ──────────────────────────────────────
  async function init() {
    if (!_isConfigured()) {
      console.info('[FB] Not configured — using localStorage.');
      return false;
    }
    try {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
      _db = firebase.firestore();
      const auth   = firebase.auth();
      const result = await auth.signInAnonymously();
      _uid   = result.user.uid;

      // Probe with a cheap read to confirm Firestore rules are live
      // before declaring _ready = true
      await _db.collection('users').doc(_uid)
               .collection('data').doc('profile').get();

      _ready = true;
      localStorage.setItem('qs_uid', _uid);
      console.info('[FB] Ready. uid =', _uid);
      return true;
    } catch (e) {
      // Auth might succeed but Firestore rules might deny — that's fine,
      // we just stay in localStorage-only mode.
      if (e.code !== 'permission-denied') {
        console.warn('[FB] Init error:', e.code, e.message);
      } else {
        console.info('[FB] Firestore rules not configured yet — localStorage mode.');
      }
      return false;
    }
  }

  // ══════════════════════════════════════════════
  // PROFILE
  // ══════════════════════════════════════════════
  async function saveProfile(profile) {
    // Always save locally first — instant, never fails
    localStorage.setItem('qs_user', JSON.stringify(profile));
    localStorage.setItem('qs_lang', profile.lang || 'en');

    await _safe(() => _doc('profile').set(
      { ...profile, updatedAt: firebase.firestore.FieldValue.serverTimestamp() },
      { merge: true }
    ));
  }

  async function loadProfile() {
    const snap = await _safe(() => _doc('profile').get());
    if (snap?.exists) return snap.data();

    // Fallback
    const raw = localStorage.getItem('qs_user');
    return raw ? JSON.parse(raw) : null;
  }

  // ══════════════════════════════════════════════
  // PROGRESS
  // ══════════════════════════════════════════════
  async function saveProgress(surahNum, ayahIdx) {
    localStorage.setItem('qs_progress', JSON.stringify({ surahNum, ayahIdx }));

    await _safe(() => _doc('progress').set(
      { surahNum, ayahIdx, updatedAt: firebase.firestore.FieldValue.serverTimestamp() },
      { merge: true }
    ));
  }

  async function loadProgress() {
    const snap = await _safe(() => _doc('progress').get());
    if (snap?.exists) return snap.data();

    const raw = localStorage.getItem('qs_progress');
    return raw ? JSON.parse(raw) : { surahNum: 67, ayahIdx: 0 };
  }

  // ══════════════════════════════════════════════
  // NOTES
  // ══════════════════════════════════════════════
  async function saveNote(surahNum, ayahNum, text) {
    const key = `${surahNum}_${ayahNum}`;
    localStorage.setItem(`note_${key}`, text);

    await _safe(() => _doc('notes').set(
      { [key]: text, updatedAt: firebase.firestore.FieldValue.serverTimestamp() },
      { merge: true }
    ));
  }

  async function loadNote(surahNum, ayahNum) {
    const key     = `${surahNum}_${ayahNum}`;
    const cached  = localStorage.getItem(`note_${key}`);
    if (cached !== null) return cached;

    const snap = await _safe(() => _doc('notes').get());
    const text = snap?.exists ? (snap.data()[key] || '') : '';
    localStorage.setItem(`note_${key}`, text);
    return text;
  }

  async function prefetchNotes(surahNum) {
    const snap = await _safe(() => _doc('notes').get());
    if (!snap?.exists) return;
    Object.entries(snap.data()).forEach(([k, v]) => {
      if (typeof v === 'string' && k.startsWith(`${surahNum}_`)) {
        localStorage.setItem(`note_${k}`, v);
      }
    });
  }

  function getUID()  { return _uid; }
  function isReady() { return _ready; }

  return {
    init,
    saveProfile, loadProfile,
    saveProgress, loadProgress,
    saveNote, loadNote, prefetchNotes,
    getUID, isReady,
  };
})();
