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
      tab_home: 'Beranda', tab_jadwal: 'Jadwal', tab_surat: 'Surat',
      jadwal_title: 'Jadwal', jadwal_sub: 'Tersinkron otomatis ke Google Calendar.',
      j_add: '+ Tambah', scope_upcoming: 'Mendatang', scope_past: 'Lalu', scope_cancelled: 'Dibatalkan',
      j_empty_upcoming: 'Belum ada jadwal mendatang.', j_empty_past: 'Tidak ada jadwal yang sudah lewat.', j_empty_cancelled: 'Tidak ada jadwal yang dibatalkan.',
      j_edit: 'Ubah', j_cancel: 'Batalkan', j_restore: 'Aktifkan lagi', j_confirm_cancel: 'Batalkan jadwal "{t}"? Event di Google Calendar ikut dihapus.',
      j_fix: 'Perlu diperbaiki: ', j_more: 'Menampilkan 200 dari {n} jadwal.', j_sync_err: 'Tersimpan di Sheet, tapi sinkron ke Calendar bermasalah: ',
      j_saved: 'Tersimpan.', j_new: 'Jadwal baru', j_edit_title: 'Ubah jadwal',
      f_title: 'Judul', f_date: 'Tanggal', f_start: 'Mulai', f_end: 'Selesai', f_time_hint: 'Kosongkan jam mulai untuk acara seharian.',
      f_loc: 'Lokasi / tautan', f_maps: 'Tautan Google Maps (opsional)', f_guests: 'Undang (email, pisahkan koma)', f_rem: 'Pengingat (maks. 5)',
      f_rem_none: 'Tanpa pengingat', f_notes: 'Catatan', f_status: 'Status',
      st_Aktif: 'Aktif', st_Draf: 'Draf', st_Batal: 'Batal',
      btn_save: 'Simpan', btn_close: 'Tutup', saving: 'Menyimpan...',
      u_min: 'menit', u_hour: 'jam', u_day: 'hari', u_week: 'minggu',
      v_title: 'Judul belum diisi.', v_date: 'Tanggal belum dipilih.',
      surat_form_title: 'Tulis email', s_from: 'Dikirim dari', s_to: 'Kepada', s_cc: 'Cc (opsional)', s_nama: 'Nama penerima (untuk salam pembuka)',
      s_lang: 'Bahasa email', s_part: 'Salam sesuai waktu', s_event: 'Jadwal terkait (opsional)', s_tpl: 'Template (mengikuti bahasa email)',
      s_cardtitle: 'Judul kartu (opsional)', s_maps: 'Link Google Maps (opsional)', s_subject: 'Subjek',
      s_body: 'Isi (tanpa salam pembuka dan tanda tangan; keduanya otomatis)',
      s_body_hint: 'Paragraf dipisah baris kosong. Baris "- Label: isi" jadi kartu rincian. **tebal**, [teks](https://tautan).',
      s_files: 'Lampiran dari Google Drive (opsional): tempel tautan file, satu per baris', s_subj_prev: 'Subjek:',
      s_test: 'Kirim tes ke saya', s_send: 'Kirim', s_new: 'Surat baru', s_send_confirm: 'Klik lagi untuk kirim ke {to}',
      s_part_auto: 'Otomatis (sesuai jam kirim)', s_part_pagi: 'Pagi / Good morning', s_part_siang: 'Siang / Good afternoon', s_part_sore: 'Sore / Good afternoon', s_part_malam: 'Malam / Good evening', s_part_none: 'Tanpa salam waktu (Yth. / Dear)',
      s_free: '(Tulis bebas)', s_none: '(tidak ada)', s_no_ver: '(belum ada versi {l})',
      s_loading: 'Memuat...', s_checking: 'Memeriksa lampiran...', s_sending: 'Mengirim...', s_sending_test: 'Mengirim tes...',
      s_e_to: 'Isi alamat penerima (Kepada).', s_e_subject: 'Subjek masih kosong.', s_e_body: 'Isi email masih kosong.', s_e_fields: 'Isi dulu kolom: {f}',
      s_e_files_busy: 'Tunggu, lampiran sedang diperiksa.', s_e_files_bad: 'Ada lampiran yang bermasalah (tanda merah di bawah kolom lampiran). Perbaiki atau hapus dulu.',
      s_tpl_loaded: 'Template dimuat.', s_tpl_dirty: 'Teks sudah Anda sunting, jadi tidak diganti otomatis. Pilih template lagi untuk memuat versi bahasa ini.',
      s_ok_sent: 'Terkirim ke {to}.', s_ok_test: 'Tes terkirim ke {to}. Cek kotak masuk Anda.', s_att: ' Lampiran ({n}): {names}.', s_noatt: ' Tanpa lampiran.',
      s_log_err: ' Email terkirim, tapi gagal dicatat di Surat Keluar: ',
      s_sender_warn: 'Skrip tidak berjalan sebagai akun Secretariat, jadi email tidak bisa dikirim.',
      s_max_files: 'Maksimal {n} lampiran.',
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
      tab_home: 'Home', tab_jadwal: 'Schedule', tab_surat: 'Letters',
      jadwal_title: 'Schedule', jadwal_sub: 'Automatically synced to Google Calendar.',
      j_add: '+ Add', scope_upcoming: 'Upcoming', scope_past: 'Past', scope_cancelled: 'Cancelled',
      j_empty_upcoming: 'No upcoming items.', j_empty_past: 'No past items.', j_empty_cancelled: 'No cancelled items.',
      j_edit: 'Edit', j_cancel: 'Cancel item', j_restore: 'Reactivate', j_confirm_cancel: 'Cancel "{t}"? The Google Calendar event will be removed too.',
      j_fix: 'Needs fixing: ', j_more: 'Showing 200 of {n} items.', j_sync_err: 'Saved to the Sheet, but syncing to Calendar had a problem: ',
      j_saved: 'Saved.', j_new: 'New item', j_edit_title: 'Edit item',
      f_title: 'Title', f_date: 'Date', f_start: 'Start', f_end: 'End', f_time_hint: 'Leave start empty for an all-day event.',
      f_loc: 'Location / link', f_maps: 'Google Maps link (optional)', f_guests: 'Invite (emails, comma separated)', f_rem: 'Reminders (max 5)',
      f_rem_none: 'No reminder', f_notes: 'Notes', f_status: 'Status',
      st_Aktif: 'Active', st_Draf: 'Draft', st_Batal: 'Cancelled',
      btn_save: 'Save', btn_close: 'Close', saving: 'Saving...',
      u_min: 'min', u_hour: 'h', u_day: 'd', u_week: 'w',
      v_title: 'Title is required.', v_date: 'Pick a date.',
      surat_form_title: 'Write email', s_from: 'Sent from', s_to: 'To', s_cc: 'Cc (optional)', s_nama: 'Recipient name (for the greeting)',
      s_lang: 'Email language', s_part: 'Time-of-day greeting', s_event: 'Related schedule (optional)', s_tpl: 'Template (follows the email language)',
      s_cardtitle: 'Card title (optional)', s_maps: 'Google Maps link (optional)', s_subject: 'Subject',
      s_body: 'Body (without greeting and signature; both are automatic)',
      s_body_hint: 'Separate paragraphs with a blank line. A line "- Label: text" becomes a detail card. **bold**, [text](https://link).',
      s_files: 'Attachments from Google Drive (optional): paste file links, one per line', s_subj_prev: 'Subject:',
      s_test: 'Send test to me', s_send: 'Send', s_new: 'New letter', s_send_confirm: 'Click again to send to {to}',
      s_part_auto: 'Automatic (by send time)', s_part_pagi: 'Morning / Pagi', s_part_siang: 'Afternoon / Siang', s_part_sore: 'Afternoon / Sore', s_part_malam: 'Evening / Malam', s_part_none: 'No time greeting (Dear / Yth.)',
      s_free: '(Write freely)', s_none: '(none)', s_no_ver: '(no {l} version yet)',
      s_loading: 'Loading...', s_checking: 'Checking attachments...', s_sending: 'Sending...', s_sending_test: 'Sending test...',
      s_e_to: 'Enter the recipient address (To).', s_e_subject: 'Subject is empty.', s_e_body: 'Body is empty.', s_e_fields: 'Fill in first: {f}',
      s_e_files_busy: 'Please wait, attachments are being checked.', s_e_files_bad: 'Some attachments have problems (red marks under the attachment box). Fix or remove them first.',
      s_tpl_loaded: 'Template loaded.', s_tpl_dirty: 'You edited the text, so it was not replaced. Pick the template again to load this language version.',
      s_ok_sent: 'Sent to {to}.', s_ok_test: 'Test sent to {to}. Check your inbox.', s_att: ' Attachments ({n}): {names}.', s_noatt: ' No attachments.',
      s_log_err: ' Email sent, but logging to Surat Keluar failed: ',
      s_sender_warn: 'The script is not running as the Secretariat account, so email cannot be sent.',
      s_max_files: 'Maximum {n} attachments.',
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
    if (state.session && !$('view-app').hidden) { renderConn(lastPing); renderDash(lastDash); renderJadwal(); if (!$('sheet').hidden) buildForm(formState); renderSuratLang(); }
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
    lastPing = null; lastDash = null; jData = null; sCtx = null; closeForm(); resetSurat(true);
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
    switchTab('home');
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

  // ---------- tab ----------
  var tab = 'home', jScope = 'upcoming', jData = null, homeStale = false, formState = null;

  function switchTab(name) {
    tab = name;
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === name); });
    $('tab-home').hidden = name !== 'home';
    $('tab-jadwal').hidden = name !== 'jadwal';
    $('tab-surat').hidden = name !== 'surat';
    if (name === 'jadwal') loadJadwal();
    if (name === 'surat') loadSurat();
    if (name === 'home' && homeStale) { homeStale = false; refresh(); }
  }

  // ---------- jadwal ----------
  function remLabel(m) {
    var u = function (k) { return t(k); };
    if (m === 0) return '0 ' + u('u_min');
    if (m % 10080 === 0) return (m / 10080) + ' ' + u('u_week');
    if (m % 1440 === 0) return (m / 1440) + ' ' + u('u_day');
    if (m % 60 === 0) return (m / 60) + ' ' + u('u_hour');
    return m + ' ' + u('u_min');
  }

  function loadJadwal() {
    say('j-msg', t('loading'));
    var scope = jScope;
    api('jadwalList', { scope: scope })
      .then(function (d) { if (scope !== jScope) return; jData = d; say('j-msg', ''); renderJadwal(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('j-msg', errText(e), 'err'); });
  }

  function renderJadwal() {
    var box = $('j-list');
    box.innerHTML = '';
    if (!jData) return;
    if (!jData.items.length) { box.appendChild(el('p', 'empty', t('j_empty_' + jData.scope))); return; }
    var todayYmd = jData.today.replace(/-/g, ''), tomorrowYmd = addDaysYmd(jData.today, 1);
    var cur = null, day = null;
    jData.items.forEach(function (it) {
      var key = it.error ? 'bad' : it.ymd;
      if (key !== cur) {
        cur = key;
        day = el('div', 'day');
        var h = el('div', 'day-h');
        h.appendChild(el('b', '', it.error ? t('j_fix').replace(/: $/, '') : dayLabel(it.ymd)));
        if (it.ymd === todayYmd) h.appendChild(el('span', 'tag', t('today')));
        else if (it.ymd === tomorrowYmd) h.appendChild(el('span', 'tag', t('tomorrow')));
        day.appendChild(h);
        box.appendChild(day);
      }
      var ev = el('div', 'ev' + (it.error ? ' bad' : it.status === 'Draf' ? ' draft' : ''));
      ev.appendChild(el('div', 'ev-time', it.error ? '-' : it.allDay ? t('allday') : it.start + (it.end ? ' - ' + it.end : '')));
      var main = el('div', 'ev-main');
      main.appendChild(el('div', 'ev-title', it.title));
      if (it.error) main.appendChild(el('div', 'ev-warn', t('j_fix') + it.error));
      var sub = [];
      if (it.status === 'Draf') sub.push(t('draft'));
      if (it.location) sub.push(it.location);
      if (it.guests.length) sub.push(t('guests_n', { n: it.guests.length }));
      var s2 = el('div', 'ev-sub', sub.join(' · '));
      var mu = safeUrl(it.maps);
      if (mu) {
        if (sub.length) s2.appendChild(document.createTextNode(' · '));
        var a = el('a', '', t('maps')); a.href = mu; a.target = '_blank'; a.rel = 'noopener noreferrer';
        s2.appendChild(a);
      }
      if (s2.textContent) main.appendChild(s2);
      if (/^Galat/.test(it.sync)) main.appendChild(el('div', 'ev-warn', it.sync));
      var act = el('div', 'ev-act');
      var be = el('button', 'lnk', t('j_edit')); be.type = 'button';
      be.addEventListener('click', function () { openForm(it); });
      act.appendChild(be);
      var bc = el('button', 'lnk' + (it.status === 'Batal' ? '' : ' danger'), it.status === 'Batal' ? t('j_restore') : t('j_cancel')); bc.type = 'button';
      bc.addEventListener('click', function () { changeStatus(it, bc); });
      act.appendChild(bc);
      main.appendChild(act);
      ev.appendChild(main);
      day.appendChild(ev);
    });
    if (jData.total > jData.items.length) box.appendChild(el('p', 'more', t('j_more', { n: jData.total })));
  }

  function changeStatus(it, btn) {
    var cancelling = it.status !== 'Batal';
    if (cancelling && !window.confirm(t('j_confirm_cancel', { t: it.title }))) return;
    btn.disabled = true;
    say('j-msg', t('saving'));
    api('jadwalStatus', { id: it.id, status: cancelling ? 'Batal' : 'Aktif' })
      .then(function (r) {
        homeStale = true;
        say('j-msg', r.syncError ? t('j_sync_err') + r.syncError : t('j_saved'), r.syncError ? 'err' : 'ok');
        return api('jadwalList', { scope: jScope }).then(function (d) { jData = d; renderJadwal(); });
      })
      .catch(function (e) { btn.disabled = false; if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('j-msg', errText(e), 'err'); });
  }

  // ---------- form jadwal ----------
  function newKey() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }

  function openForm(it) {
    formState = it ? JSON.parse(JSON.stringify(it)) : {
      id: '', title: '', date: jData ? jData.today : '', start: '', end: '', location: '', maps: '', notes: '', guests: [],
      reminders: jData ? jData.defaults.slice() : [], status: 'Aktif'
    };
    formState._key = newKey();
    buildForm(formState);
    $('sheet').hidden = false;
    document.body.style.overflow = 'hidden';
    say('jf-msg', '');
    setTimeout(function () { $('f-title').focus(); }, 50);
  }

  function closeForm() {
    var sh = $('sheet');
    if (sh) sh.hidden = true;
    document.body.style.overflow = '';
    formState = null;
  }

  function buildForm(f) {
    if (!f) return;
    var editing = !!f.id;
    $('jf-title').textContent = editing ? t('j_edit_title') : t('j_new');
    $('f-title').value = f.title; $('f-date').value = f.date; $('f-start').value = f.start; $('f-end').value = f.end;
    $('f-loc').value = f.location; $('f-maps').value = f.maps; $('f-notes').value = f.notes; $('f-guests').value = f.guests.join(', ');
    var st = $('f-status'); st.innerHTML = '';
    (editing ? ['Aktif', 'Draf', 'Batal'] : ['Aktif', 'Draf']).forEach(function (v) {
      var o = el('option', '', t('st_' + v)); o.value = v; if (v === f.status) o.selected = true; st.appendChild(o);
    });
    var box = $('f-rem'); box.innerHTML = '';
    var mins = (jData ? jData.presets : []).map(function (p) { return p.m; });
    f.reminders.forEach(function (m) { if (mins.indexOf(m) < 0) mins.push(m); });
    mins.sort(function (a, b) { return b - a; });
    mins.forEach(function (m) {
      var lb = el('label', 'chip-c');
      var cb = document.createElement('input'); cb.type = 'checkbox'; cb.value = String(m); cb.checked = f.reminders.indexOf(m) >= 0;
      lb.appendChild(cb); lb.appendChild(document.createTextNode(remLabel(m)));
      box.appendChild(lb);
    });
  }

  function readForm() {
    var rem = [];
    $('f-rem').querySelectorAll('input:checked').forEach(function (c) { rem.push(Number(c.value)); });
    return {
      id: formState.id || undefined, title: $('f-title').value.trim(), date: $('f-date').value, start: $('f-start').value, end: $('f-end').value,
      location: $('f-loc').value.trim(), maps: $('f-maps').value.trim(), notes: $('f-notes').value.trim(),
      guests: $('f-guests').value, reminders: rem, status: $('f-status').value
    };
  }

  function submitForm(ev) {
    ev.preventDefault();
    if (state.saving || !formState) return;
    var item = readForm();
    if (!item.title) { say('jf-msg', t('v_title'), 'err'); $('f-title').focus(); return; }
    if (!item.date) { say('jf-msg', t('v_date'), 'err'); $('f-date').focus(); return; }
    if (item.reminders.length > 5) { say('jf-msg', t('f_rem'), 'err'); return; }
    state.saving = true;
    $('jf-save').disabled = true;
    say('jf-msg', t('saving'));
    api('jadwalSave', { item: item, key: formState._key })
      .then(function (r) {
        closeForm();
        homeStale = true;
        say('j-msg', r.syncError ? t('j_sync_err') + r.syncError : t('j_saved'), r.syncError ? 'err' : 'ok');
        // lompat ke daftar yang memuat jadwal ini
        var today = jData ? jData.today : '';
        if (r.item.status === 'Batal') jScope = 'cancelled'; else if (r.item.date && r.item.date < today) jScope = 'past'; else jScope = 'upcoming';
        document.querySelectorAll('.seg-b').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-scope') === jScope); });
        return api('jadwalList', { scope: jScope }).then(function (d) { jData = d; renderJadwal(); });
      })
      .catch(function (e) {
        if (e && e.code === 'unauthorized') { logout(t('err_unauthorized')); return; }
        say('jf-msg', errText(e), 'err');
      })
      .then(function () { state.saving = false; $('jf-save').disabled = false; });
  }

  // ---------- surat ----------
  var sCtx = null, sBanner = '', sValues = {}, sDirty = false, sShape = '', sTimer = null, sFileTimer = null, sSeq = 0;
  var sArmed = false, sArmTimer = null, sBusy = false, sFilesBad = false, sFilesBusy = false, sKey = '', sDone = false, sMapsAuto = '';
  var EVENT_KEYS = ['judul', 'tanggal', 'jam', 'lokasi'];
  var PARTS = ['auto', 'pagi', 'siang', 'sore', 'malam', 'none'];

  function sl() { return $('s-lang').value; }
  function typeOf(k) {
    if (/(^tanggal$|_tanggal$|_date$)/.test(k)) return 'date';
    if (/(^jam$|_jam$|_time$)/.test(k)) return 'time';
    if (/(_panjang$|_long$)/.test(k)) return 'long';
    return 'text';
  }
  function labelOf(k) {
    var known = sCtx && sCtx.labels[k];
    if (known) return known[sl() === 'EN' ? 1 : 0];
    var x = k.replace(/(_panjang|_long|_tanggal|_date|_jam|_time)$/, '').replace(/_/g, ' ');
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
  function dayText(iso, l) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!m) return '';
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    var lk = l === 'EN' ? 'en' : 'id';
    return DAYS[lk][d.getUTCDay()] + ', ' + (+m[3]) + ' ' + MONTHS[lk][+m[2] - 1] + ' ' + m[1];
  }
  function sKeys() {
    var out = [], seen = {}, re = /\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, m, src = $('s-subject').value + '\n' + $('s-body').value;
    var auto = $('s-ev').value ? EVENT_KEYS.concat(['nama']) : ['nama'];
    while ((m = re.exec(src))) { if (auto.indexOf(m[1]) < 0 && !seen[m[1]]) { seen[m[1]] = 1; out.push(m[1]); } }
    return out;
  }

  function loadSurat() {
    if (sCtx) return;
    say('s-msg', t('s_loading'));
    api('suratContext')
      .then(function (d) {
        sCtx = d;
        $('s-sender').textContent = d.sender;
        var w = $('s-warn');
        w.hidden = true;
        if (lastPing && !lastPing.senderOk) { w.hidden = false; w.textContent = t('s_sender_warn'); }
        fillEvents(); fillTemplates(); fillParts();
        say('s-msg', '');
        doPreview();
        if (d.hasBanner) api('suratBanner').then(function (b) { sBanner = b.banner || ''; doPreview(); }).catch(function () { /* abaikan */ });
      })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('s-msg', errText(e), 'err'); });
  }

  function fillParts() {
    var sel = $('s-part'), cur = sel.value || 'auto';
    sel.innerHTML = '';
    PARTS.forEach(function (p) { var o = el('option', '', t('s_part_' + p)); o.value = p; sel.appendChild(o); });
    sel.value = cur;
  }
  function fillEvents() {
    var sel = $('s-ev'), cur = sel.value;
    sel.innerHTML = '';
    var o0 = el('option', '', t('s_none')); o0.value = ''; sel.appendChild(o0);
    sCtx.events.forEach(function (e) { var o = el('option', '', e.label); o.value = e.id; o.setAttribute('data-maps', e.maps || ''); sel.appendChild(o); });
    sel.value = cur;
  }
  function hasLang(tp, l) { return !!(tp[l] && tp[l].body); }
  function currentTpl() {
    var id = parseInt($('s-tpl').value, 10);
    if (!id || !sCtx) return null;
    return sCtx.templates.filter(function (x) { return x.id === id; })[0] || null;
  }
  function fillTemplates() {
    var l = sl(), sel = $('s-tpl'), prev = sel.value;
    sel.innerHTML = '';
    var o0 = el('option', '', t('s_free')); o0.value = ''; sel.appendChild(o0);
    sCtx.templates.forEach(function (x) {
      var ok = hasLang(x, l);
      var o = el('option', '', x.name + (ok ? '' : ' ' + t('s_no_ver', { l: l === 'EN' ? 'English' : 'Indonesia' })));
      o.value = x.id; o.disabled = !ok; sel.appendChild(o);
    });
    sel.value = prev;
    if (sel.value !== prev) sel.value = '';
  }
  function applyTemplate() {
    var tp = currentTpl(), v = tp && tp[sl()];
    if (!v || !v.body) return;
    $('s-subject').value = v.subject; $('s-body').value = v.body; $('s-card').value = v.title || '';
    sDirty = false;
    rebuildFields(true); schedPreview();
    say('s-msg', t('s_tpl_loaded'), 'ok');
  }

  function rebuildFields(force) {
    var keys = sKeys(), shape = keys.join('|');
    if (shape === sShape && !force) return;
    sShape = shape;
    var box = $('s-fields');
    box.innerHTML = '';
    keys.forEach(function (k) {
      var type = typeOf(k), wrap = el('label', 'fl');
      wrap.appendChild(el('span', '', labelOf(k)));
      var inp = document.createElement(type === 'long' ? 'textarea' : 'input');
      if (type === 'long') inp.rows = 3;
      else inp.type = type === 'date' ? 'date' : type === 'time' ? 'time' : 'text';
      if (type === 'date' && sCtx) inp.min = sCtx.today;
      inp.id = 'sf_' + k;
      inp.value = sValues[k] || '';
      inp.addEventListener('input', function () { sValues[k] = inp.value; updateDayNames(); schedPreview(); });
      wrap.appendChild(inp);
      if (type === 'date') { var dn = el('div', 'dn'); dn.id = 'dn_' + k; wrap.appendChild(dn); }
      box.appendChild(wrap);
    });
    updateDayNames();
  }
  function updateDayNames() {
    sKeys().forEach(function (k) { if (typeOf(k) === 'date') { var e = $('dn_' + k); if (e) e.textContent = dayText(sValues[k], sl()); } });
  }

  function collectMail() {
    var fields = {};
    sKeys().forEach(function (k) { fields[k] = (sValues[k] || '').trim(); });
    return {
      to: $('s-to').value, cc: $('s-cc').value, nama: $('s-nama').value, lang: sl(), part: $('s-part').value,
      eventId: $('s-ev').value, templateId: $('s-tpl').value, subject: $('s-subject').value, body: $('s-body').value,
      title: $('s-card').value, maps: $('s-maps').value, fields: fields, files: $('s-files').value
    };
  }

  function schedPreview() { disarm(); clearTimeout(sTimer); sTimer = setTimeout(doPreview, 500); }
  function doPreview() {
    if (!sCtx) return;
    var seq = ++sSeq;
    api('suratPreview', { mail: collectMail() })
      .then(function (r) {
        if (seq !== sSeq) return;
        $('s-subj').textContent = r.subject || '-';
        $('s-hello').textContent = r.greeting; $('s-close').textContent = r.closing;
        $('s-prev').srcdoc = sBanner ? r.html.split('cid:banner').join(sBanner) : r.html;
      })
      .catch(function (e) { if (seq === sSeq && !(e && e.code === 'unauthorized')) say('s-msg', errText(e), 'err'); else if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); });
  }

  function schedFiles() {
    clearTimeout(sFileTimer);
    var txt = $('s-files').value.trim(), box = $('s-filelist');
    sFilesBad = false; box.innerHTML = '';
    if (!txt) { sFilesBusy = false; return; }
    box.appendChild(el('span', 'tiny', t('s_checking')));
    sFilesBusy = true;
    sFileTimer = setTimeout(function () {
      api('suratCheckFiles', { files: $('s-files').value })
        .then(function (items) {
          sFilesBusy = false; box.innerHTML = '';
          var n = 0;
          items.forEach(function (it) {
            if (it.ok) { n++; box.appendChild(el('div', 'good', '✓ ' + it.name + (it.size ? ' (' + (it.size / 1048576).toFixed(2) + ' MB)' : ''))); }
            else { sFilesBad = true; box.appendChild(el('div', 'bad', '✗ ' + it.name + ': ' + it.reason)); }
          });
          if (sCtx && n > sCtx.attachMax) { sFilesBad = true; box.appendChild(el('div', 'bad', t('s_max_files', { n: sCtx.attachMax }))); }
        })
        .catch(function (e) { sFilesBusy = false; sFilesBad = true; box.innerHTML = ''; box.appendChild(el('div', 'bad', errText(e))); });
    }, 700);
  }

  function arm() {
    sArmed = true;
    $('s-send').textContent = t('s_send_confirm', { to: $('s-to').value.trim() });
    clearTimeout(sArmTimer); sArmTimer = setTimeout(disarm, 5000);
  }
  function disarm() { sArmed = false; clearTimeout(sArmTimer); $('s-send').textContent = t('s_send'); }
  function setBusy(b) { sBusy = b; $('s-send').disabled = b || sDone; $('s-test').disabled = b || sDone; }

  function doSend(test) {
    if (sBusy || sDone) return;
    if (!test && !$('s-to').value.trim()) { say('s-msg', t('s_e_to'), 'err'); return; }
    if (!$('s-subject').value.trim()) { say('s-msg', t('s_e_subject'), 'err'); return; }
    if (!$('s-body').value.trim()) { say('s-msg', t('s_e_body'), 'err'); return; }
    var miss = sKeys().filter(function (k) { return !(sValues[k] || '').trim(); }).map(labelOf);
    if (miss.length) { say('s-msg', t('s_e_fields', { f: miss.join(', ') }), 'err'); return; }
    if ($('s-files').value.trim() && sFilesBusy) { say('s-msg', t('s_e_files_busy'), 'err'); return; }
    if (sFilesBad) { say('s-msg', t('s_e_files_bad'), 'err'); return; }
    if (!test && !sArmed) { arm(); return; }
    disarm();
    setBusy(true);
    say('s-msg', t(test ? 's_sending_test' : 's_sending'));
    api('suratSend', { mail: collectMail(), test: test, key: test ? undefined : sKey })
      .then(function (r) {
        var att = r.attachments && r.attachments.length ? t('s_att', { n: r.attachments.length, names: r.attachments.join(', ') }) : t('s_noatt');
        if (test) { setBusy(false); say('s-msg', t('s_ok_test', { to: r.to }) + att, 'ok'); return; }
        sDone = true;
        homeStale = true;
        setBusy(false);
        $('s-new').hidden = false;
        say('s-msg', t('s_ok_sent', { to: r.to }) + att + (r.logError ? t('s_log_err') + r.logError : ''), r.logError ? 'err' : 'ok');
      })
      .catch(function (e) {
        setBusy(false);
        if (e && e.code === 'unauthorized') { logout(t('err_unauthorized')); return; }
        say('s-msg', errText(e), 'err');
      });
  }

  function resetSurat(silent) {
    ['s-to', 's-cc', 's-nama', 's-card', 's-maps', 's-subject', 's-body', 's-files'].forEach(function (id) { var e = $(id); if (e) e.value = ''; });
    if ($('s-tpl')) $('s-tpl').value = '';
    if ($('s-ev')) $('s-ev').value = '';
    sValues = {}; sShape = ''; sDirty = false; sDone = false; sFilesBad = false; sFilesBusy = false; sMapsAuto = '';
    sKey = newKey();
    if ($('s-fields')) $('s-fields').innerHTML = '';
    if ($('s-filelist')) $('s-filelist').innerHTML = '';
    if ($('s-new')) $('s-new').hidden = true;
    if (!silent) { say('s-msg', ''); setBusy(false); disarm(); doPreview(); }
  }

  function renderSuratLang() {
    if (!sCtx) return;
    fillParts(); fillEvents(); fillTemplates(); rebuildFields(true);
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
    $('btn-refresh').addEventListener('click', function () { if (tab === 'jadwal') loadJadwal(); else refresh(); });
    document.querySelectorAll('.tab').forEach(function (b) { b.addEventListener('click', function () { switchTab(b.getAttribute('data-tab')); }); });
    document.querySelectorAll('.seg-b').forEach(function (b) {
      b.addEventListener('click', function () {
        jScope = b.getAttribute('data-scope');
        document.querySelectorAll('.seg-b').forEach(function (x) { x.classList.toggle('on', x === b); });
        loadJadwal();
      });
    });
    $('s-lang').addEventListener('change', function () {
      fillTemplates();
      var tp = currentTpl();
      if (tp && sDirty) say('s-msg', t('s_tpl_dirty'), 'err'); else if (tp) applyTemplate(); else say('s-msg', '');
      rebuildFields(true); schedPreview();
    });
    $('s-tpl').addEventListener('change', function () { if ($('s-tpl').value) applyTemplate(); else schedPreview(); });
    $('s-part').addEventListener('change', schedPreview);
    $('s-ev').addEventListener('change', function () {
      var opt = $('s-ev').options[$('s-ev').selectedIndex], m = opt ? opt.getAttribute('data-maps') : '';
      if (!$('s-maps').value.trim() || $('s-maps').value === sMapsAuto) { $('s-maps').value = m || ''; sMapsAuto = m || ''; }
      rebuildFields(); schedPreview();
    });
    ['s-to', 's-cc', 's-nama', 's-card', 's-maps'].forEach(function (id) { $(id).addEventListener('input', schedPreview); });
    ['s-subject', 's-body'].forEach(function (id) { $(id).addEventListener('input', function () { sDirty = true; rebuildFields(); schedPreview(); }); });
    $('s-files').addEventListener('input', schedFiles);
    $('s-send').addEventListener('click', function () { doSend(false); });
    $('s-test').addEventListener('click', function () { doSend(true); });
    $('s-new').addEventListener('click', function () { resetSurat(false); });
    $('sf').addEventListener('submit', function (e) { e.preventDefault(); });
    resetSurat(true);
    $('j-add').addEventListener('click', function () { openForm(null); });
    $('jf').addEventListener('submit', submitForm);
    $('jf-cancel').addEventListener('click', closeForm);
    $('sheet').addEventListener('click', function (e) { if (e.target === $('sheet')) closeForm(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('sheet').hidden) closeForm(); });
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
