(function () {
  'use strict';

  var CFG = window.OTTLEY_CONFIG || {};
  var KEY_SESSION = 'ottley.session';
  var KEY_LANG = 'ottley.lang';

  var I18N = {
    id: {
      login_title: 'Selamat datang',
      login_sub: 'Masuk dengan akun Google yang terdaftar untuk mengelola jadwal, surat, dan catatan.',
      login_note: 'Akses terbatas. Akun lain akan ditolak.',
      signing_in: 'Memeriksa akun...',
      conn_title: 'Status koneksi',
      conn_sub: 'Pemeriksaan sistem.',
      btn_refresh: 'Segarkan',
      agenda_title: 'Agenda',
      agenda_sub: '7 hari ke depan (jadwal yang dibatalkan tidak ditampilkan).',
      agenda_empty: 'Tidak ada jadwal dalam 7 hari ke depan.',
      surat_title: 'Riwayat surat',
      surat_sub: '15 surat terakhir yang dikirim.',
      surat_empty: 'Belum ada surat terkirim.',
      today: 'Hari ini', tomorrow: 'Besok', allday: 'Seharian', draft: 'Draf', guests_n: '{n} undangan',
      maps: 'Peta', to_: 'Kepada', cc_: 'Cc', att_: 'Lampiran', by_: 'oleh', sent: 'Terkirim',
      loading: 'Memuat...',
      row_user: 'Masuk sebagai',
      row_sender: 'Pengirim email dan kalender',
      row_time: 'Waktu server (WIB)',
      row_sheet: 'Baris di tab Jadwal',
      row_status: 'Status',
      status_ok: 'Semua terhubung',
      status_warn: 'Perlu dicek',
      sender_bad: 'Skrip tidak berjalan sebagai akun Secretariat. Deploy ulang dengan "Execute as: Me" memakai akun Secretariat.',
      sheet_bad: 'Sheet bermasalah: ',
      btn_check: 'Periksa lagi',
      btn_logout: 'Keluar',
      checking: 'Memeriksa...',
      err_config: 'Konfigurasi belum lengkap. Isi GOOGLE_CLIENT_ID dan API_URL di config.js.',
      err_network: 'Tidak bisa menghubungi server. Cek koneksi internet lalu coba lagi.',
      err_bad_response: 'Jawaban server tidak terbaca. Pastikan deployment Apps Script berakses "Anyone" dan memakai versi terbaru.',
      err_forbidden: 'Akun {email} tidak diizinkan.',
      err_bad_credential: 'Login Google ditolak. Coba lagi.',
      err_unauthorized: 'Sesi berakhir. Silakan masuk lagi.',
      err_server_error: 'Terjadi kesalahan di server.',
      err_server_config: 'Server belum siap: CLIENT_ID di Api.gs belum diisi.',
      err_google_load: 'Tombol login Google belum termuat. Muat ulang halaman.'
    },
    en: {
      login_title: 'Welcome',
      login_sub: 'Sign in with your registered Google account to manage schedules, letters and notes.',
      login_note: 'Restricted access. Other accounts will be rejected.',
      signing_in: 'Checking account...',
      conn_title: 'Connection status',
      conn_sub: 'System check.',
      btn_refresh: 'Refresh',
      agenda_title: 'Agenda',
      agenda_sub: 'Next 7 days (cancelled items are hidden).',
      agenda_empty: 'No schedule in the next 7 days.',
      surat_title: 'Letter history',
      surat_sub: 'Last 15 letters sent.',
      surat_empty: 'No letters sent yet.',
      today: 'Today', tomorrow: 'Tomorrow', allday: 'All day', draft: 'Draft', guests_n: '{n} invited',
      maps: 'Map', to_: 'To', cc_: 'Cc', att_: 'Attachments', by_: 'by', sent: 'Sent',
      loading: 'Loading...',
      row_user: 'Signed in as',
      row_sender: 'Email and calendar sender',
      row_time: 'Server time (WIB)',
      row_sheet: 'Rows in Schedule tab',
      row_status: 'Status',
      status_ok: 'All connected',
      status_warn: 'Needs attention',
      sender_bad: 'The script is not running as the Secretariat account. Redeploy with "Execute as: Me" using the Secretariat account.',
      sheet_bad: 'Sheet problem: ',
      btn_check: 'Check again',
      btn_logout: 'Sign out',
      checking: 'Checking...',
      err_config: 'Configuration incomplete. Fill in GOOGLE_CLIENT_ID and API_URL in config.js.',
      err_network: 'Cannot reach the server. Check your internet connection and try again.',
      err_bad_response: 'Unreadable server response. Make sure the Apps Script deployment allows "Anyone" and uses the latest version.',
      err_forbidden: 'Account {email} is not allowed.',
      err_bad_credential: 'Google sign-in was rejected. Please try again.',
      err_unauthorized: 'Session expired. Please sign in again.',
      err_server_error: 'A server error occurred.',
      err_server_config: 'Server not ready: CLIENT_ID in Api.gs is not set.',
      err_google_load: 'Google sign-in button did not load. Reload the page.'
    }
  };

  var state = { lang: 'id', session: null, busy: false };

  function $(id) { return document.getElementById(id); }

  // ---------- storage (aman kalau diblokir) ----------
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* abaikan */ } }
  function lsDel(k) { try { window.localStorage.removeItem(k); } catch (e) { /* abaikan */ } }

  // ---------- bahasa ----------
  function t(key, vars) {
    var s = (I18N[state.lang] && I18N[state.lang][key]) || I18N.id[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }

  function applyLang() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $('btn-lang').textContent = state.lang === 'id' ? 'EN' : 'ID';
    renderGoogleButton();
    if (state.session && !$('view-app').hidden) { renderConn(lastPing); renderDash(lastDash); }
  }

  function setLang(l) {
    state.lang = l === 'en' ? 'en' : 'id';
    lsSet(KEY_LANG, state.lang);
    applyLang();
  }

  // ---------- pesan ----------
  function say(id, text, cls) {
    var el = $(id);
    el.textContent = text || '';
    el.className = 'msg' + (cls ? ' ' + cls : '');
  }

  function errText(e) {
    var key = 'err_' + (e && e.code);
    if (e && I18N.id[key]) return t(key, { email: (e && e.email) || '' });
    return (e && e.message) || t('err_server_error');
  }

  // ---------- tampilan ----------
  function show(view) {
    ['view-boot', 'view-login', 'view-app'].forEach(function (v) { $(v).hidden = (v !== view); });
  }

  function configOk() {
    return CFG.GOOGLE_CLIENT_ID && CFG.API_URL && !/ISI-/.test(CFG.GOOGLE_CLIENT_ID) && !/ISI-/.test(CFG.API_URL);
  }

  // ---------- API ----------
  function api(action, payload) {
    var body = JSON.stringify(Object.assign({ action: action, token: state.session ? state.session.token : undefined }, payload || {}));
    // text/plain = "simple request": tidak ada preflight CORS, yang tidak didukung Apps Script
    return fetch(CFG.API_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body })
      .catch(function () { throw { code: 'network' }; })
      .then(function (res) { return res.json().catch(function () { throw { code: 'bad_response' }; }); })
      .then(function (json) {
        if (!json || json.ok !== true) throw { code: json && json.error, message: json && json.message, email: json && json.email };
        return json.data;
      });
  }

  // ---------- sesi ----------
  function loadSession() {
    try {
      var s = JSON.parse(lsGet(KEY_SESSION) || 'null');
      if (s && s.token && s.expiresAt > Date.now()) return s;
    } catch (e) { /* abaikan */ }
    return null;
  }

  function logout(msg) {
    state.session = null;
    lastPing = null; lastDash = null;
    lsDel(KEY_SESSION);
    if (window.google && google.accounts && google.accounts.id) google.accounts.id.disableAutoSelect();
    show('view-login');
    say('login-msg', msg || '', msg ? 'err' : '');
    renderGoogleButton();
  }

  // ---------- login Google ----------
  var googleReady = false;

  function initGoogle() {
    if (!window.google || !google.accounts || !google.accounts.id) { setTimeout(initGoogle, 200); return; }
    google.accounts.id.initialize({ client_id: CFG.GOOGLE_CLIENT_ID, callback: onCredential, auto_select: false, ux_mode: 'popup' });
    googleReady = true;
    renderGoogleButton();
  }

  function renderGoogleButton() {
    if (!googleReady || $('view-login').hidden) return;
    var box = $('gbtn');
    box.innerHTML = '';
    google.accounts.id.renderButton(box, { theme: 'outline', size: 'large', shape: 'pill', text: 'signin_with', width: 280, locale: state.lang });
  }

  function onCredential(resp) {
    if (state.busy) return;
    state.busy = true;
    say('login-msg', t('signing_in'));
    api('login', { credential: resp.credential })
      .then(function (data) {
        state.session = { token: data.token, expiresAt: data.expiresAt, user: data.user };
        lsSet(KEY_SESSION, JSON.stringify(state.session));
        say('login-msg', '');
        enterApp();
      })
      .catch(function (e) { say('login-msg', errText(e), 'err'); })
      .then(function () { state.busy = false; });
  }

  // ---------- halaman utama ----------
  var lastPing = null, lastDash = null;

  function enterApp() {
    var u = state.session.user || {};
    $('who-name').textContent = u.name || u.email || '';
    $('who-email').textContent = u.email || '';
    var pic = $('who-pic');
    if (u.picture) { pic.src = u.picture; pic.hidden = false; } else { pic.hidden = true; }
    show('view-app');
    refresh();
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var MONTHS = {
    id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  var DAYS = {
    id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };

  // ymd = 'YYYYMMDD'
  function dayLabel(ymd) {
    var y = +ymd.slice(0, 4), m = +ymd.slice(4, 6), d = +ymd.slice(6, 8);
    var wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    return DAYS[state.lang][wd] + ', ' + d + ' ' + MONTHS[state.lang][m - 1] + ' ' + y;
  }

  function addDaysYmd(isoDate, n) {
    var p = isoDate.split('-');
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2] + n));
    return d.getUTCFullYear() + ('0' + (d.getUTCMonth() + 1)).slice(-2) + ('0' + d.getUTCDate()).slice(-2);
  }

  function safeUrl(u) { return /^https:\/\//i.test(u || '') ? u : ''; }

  function renderDash(data) {
    var ag = $('agenda'), su = $('surat');
    ag.innerHTML = ''; su.innerHTML = '';
    if (!data) return;

    if (!data.agenda.length) ag.appendChild(el('p', 'empty', t('agenda_empty')));
    var todayYmd = data.today.replace(/-/g, ''), tomorrowYmd = addDaysYmd(data.today, 1);
    var cur = null, box = null;
    data.agenda.forEach(function (it) {
      if (it.ymd !== cur) {
        cur = it.ymd;
        box = el('div', 'day');
        var h = el('div', 'day-h');
        h.appendChild(el('b', '', dayLabel(it.ymd)));
        if (it.ymd === todayYmd) h.appendChild(el('span', 'tag', t('today')));
        else if (it.ymd === tomorrowYmd) h.appendChild(el('span', 'tag', t('tomorrow')));
        box.appendChild(h);
        ag.appendChild(box);
      }
      var ev = el('div', 'ev' + (it.status === 'Draf' ? ' draft' : ''));
      ev.appendChild(el('div', 'ev-time', it.allDay ? t('allday') : it.start + (it.end ? ' - ' + it.end : '')));
      var main = el('div', 'ev-main');
      main.appendChild(el('div', 'ev-title', it.title));
      var sub = [];
      if (it.status === 'Draf') sub.push(t('draft'));
      if (it.location && !safeUrl(it.location)) sub.push(it.location);
      if (it.guests) sub.push(t('guests_n', { n: it.guests }));
      var s2 = el('div', 'ev-sub', sub.join(' · '));
      var mu = safeUrl(it.maps);
      if (mu) {
        if (sub.length) s2.appendChild(document.createTextNode(' · '));
        var a = el('a', '', t('maps'));
        a.href = mu; a.target = '_blank'; a.rel = 'noopener noreferrer';
        s2.appendChild(a);
      }
      if (s2.textContent) main.appendChild(s2);
      ev.appendChild(main);
      box.appendChild(ev);
    });

    if (!data.surat.length) su.appendChild(el('p', 'empty', t('surat_empty')));
    data.surat.forEach(function (m) {
      var d = el('div', 'mail');
      d.appendChild(el('div', 'mail-subj', m.subject || '-'));
      var meta = el('div', 'mail-meta');
      var ok = (m.result || '').toLowerCase() === 'terkirim';
      meta.appendChild(el('span', 'mail-res' + (ok ? '' : ' bad'), ok ? t('sent') : (m.result || '?')));
      var parts = [m.time, t('to_') + ': ' + m.to];
      if (m.cc) parts.push(t('cc_') + ': ' + m.cc);
      if (m.attachments) parts.push(t('att_') + ': ' + m.attachments);
      if (m.by) parts.push(t('by_') + ' ' + m.by);
      meta.appendChild(document.createTextNode(parts.join(' · ')));
      d.appendChild(meta);
      su.appendChild(d);
    });
  }

  function renderConn(p) {
    var dl = $('conn');
    dl.innerHTML = '';
    if (!p) return;
    var problems = [];
    if (!p.senderOk) problems.push(t('sender_bad'));
    if (p.sheetError) problems.push(t('sheet_bad') + p.sheetError);

    function row(label, value, cls) {
      var r = el('div', 'row');
      r.appendChild(el('dt', '', label));
      r.appendChild(el('dd', cls || '', value));
      dl.appendChild(r);
    }
    row(t('row_user'), p.user);
    row(t('row_sender'), p.sender, p.senderOk ? '' : 'err');
    row(t('row_time'), p.serverTime);
    row(t('row_sheet'), p.jadwalRows == null ? '-' : String(p.jadwalRows), p.sheetError ? 'err' : '');
    row(t('row_status'), problems.length ? t('status_warn') : t('status_ok'), problems.length ? 'err' : 'ok');
    return problems;
  }

  function handleErr(e) {
    if (e && e.code === 'unauthorized') { logout(t('err_unauthorized')); return true; }
    say('app-msg', errText(e), 'err');
    return false;
  }

  function refresh() {
    if (state.refreshing) return;
    state.refreshing = true;
    $('btn-refresh').disabled = true;
    say('app-msg', t('loading'));
    var msgs = [];
    Promise.all([
      api('ping').then(function (p) { lastPing = p; var pr = renderConn(p); if (pr) msgs = msgs.concat(pr); }),
      api('dashboard').then(function (d) { lastDash = d; renderDash(d); })
    ])
      .then(function () { say('app-msg', msgs.join(' '), msgs.length ? 'err' : ''); })
      .catch(function (e) { handleErr(e); })
      .then(function () { state.refreshing = false; $('btn-refresh').disabled = false; });
  }

  // ---------- mulai ----------
  function boot() {
    var saved = lsGet(KEY_LANG);
    state.lang = saved === 'en' ? 'en' : 'id';

    $('btn-lang').addEventListener('click', function () { setLang(state.lang === 'id' ? 'en' : 'id'); });
    $('btn-refresh').addEventListener('click', refresh);
    $('btn-logout').addEventListener('click', function () { logout(''); });

    applyLang();

    if (!configOk()) {
      show('view-login');
      say('login-msg', t('err_config'), 'err');
      return;
    }

    state.session = loadSession();
    if (state.session) { enterApp(); initGoogle(); return; }

    show('view-login');
    initGoogle();
    setTimeout(function () { if (!googleReady) say('login-msg', t('err_google_load'), 'err'); }, 8000);
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { /* abaikan */ }); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
