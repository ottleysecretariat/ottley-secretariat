(function () {
  'use strict';

  var CFG = window.OTTLEY_CONFIG || {};
  var KEY_SESSION = 'ottley.session';
  var KEY_LANG = 'ottley.lang';

  var I18N = {
    id: {
      login_title: 'Selamat datang kembali.',
      login_sub: 'Jadwal, surat, dan catatan Office of Noel Ottley ada di sini. Masuk dengan akun Google yang terdaftar.',
      login_note: 'Hanya untuk akun yang terdaftar.',
      signing_in: 'Memeriksa akun...',
      conn_title: 'Kondisi sistem',
      conn_sub: 'Pemeriksaan sistem.',
      btn_refresh: 'Segarkan',
      agenda_title: 'Agenda',
      agenda_sub: 'Tujuh hari ke depan.',
      agenda_empty: 'Seminggu ini masih kosong. Waktu yang bagus untuk bernapas.',
      hello_pagi: 'Selamat pagi', hello_siang: 'Selamat siang', hello_sore: 'Selamat sore', hello_malam: 'Selamat malam',
      sum_zero: 'Tidak ada agenda hari ini.', sum_one: 'Ada satu agenda hari ini.', sum_n: 'Ada {n} agenda hari ini.',
      surat_title: 'Riwayat surat',
      surat_sub: 'Lima belas surat terakhir.',
      surat_empty: 'Belum ada surat yang keluar.',
      today: 'Hari ini', tomorrow: 'Besok', allday: 'Seharian', draft: 'Draf', guests_n: '{n} undangan',
      maps: 'Peta', to_: 'Kepada', cc_: 'Cc', att_: 'Lampiran', by_: 'oleh', sent: 'Terkirim',
      loading: 'Memuat...',
      tab_home: 'Beranda', tab_jadwal: 'Jadwal', tab_surat: 'Surat', tab_catatan: 'Catatan',
      jadwal_title: 'Jadwal', jadwal_sub: 'Semua yang tercatat di sini ikut masuk ke Google Calendar.',
      j_add: 'Tambah jadwal', scope_upcoming: 'Mendatang', scope_past: 'Lalu', scope_cancelled: 'Dibatalkan',
      j_empty_upcoming: 'Belum ada jadwal mendatang. Tekan "Tambah jadwal" untuk mulai.', j_empty_past: 'Tidak ada jadwal yang sudah lewat.', j_empty_cancelled: 'Tidak ada jadwal yang dibatalkan.',
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
      catatan_title: 'Catatan', catatan_sub: 'Tempat menaruh apa pun yang tidak boleh terlupa.', n_add: 'Tulis catatan',
      n_search: 'Cari', n_all: 'Semua', n_empty: 'Belum ada catatan. Tulis yang pertama.', n_none: 'Tidak ada catatan yang cocok.',
      n_f_title: 'Judul (opsional)', n_f_body: 'Isi', n_f_tags: 'Tag (pisahkan koma)', n_new: 'Catatan baru', n_edit_t: 'Ubah catatan',
      n_edit: 'Ubah', n_del: 'Hapus', n_more: 'Selengkapnya', n_less: 'Ringkas', n_del_confirm: 'Hapus catatan ini? Tidak bisa dibatalkan.', n_saved: 'Catatan tersimpan.', n_deleted: 'Catatan dihapus.',
      v_note: 'Catatan masih kosong.',
      surat_page_sub: 'Surat yang sudah keluar, dan tempat menulis yang baru.', s_write: 'Tulis surat', s_back: '\u2190 Riwayat surat',
      sh_empty: 'Belum ada surat yang keluar. Tekan "Tulis surat" untuk mulai.',
      d_mail: 'Tulis surat untuk jadwal ini', d_loc: 'Lokasi', d_guests: 'Undangan', d_rem: 'Pengingat', d_notes: 'Catatan', d_sync: 'Kalender', d_before: 'sebelumnya', d_no_rem: 'Tanpa pengingat', d_none: '-',
      v_to: 'Kepada', v_cc: 'Cc', v_by: 'Dikirim oleh', v_lang: 'Bahasa', v_tpl: 'Template', v_att: 'Lampiran',
      s_upload: 'Lampiran dari perangkat ini (maks. {mb} MB per file)', s_pick: 'Pilih file', s_drop: 'atau tarik file ke sini',
      s_up_busy: 'mengunggah...', s_up_big: 'Lebih dari {mb} MB.', s_up_type: 'Jenis file diblokir Gmail.', s_up_x: 'Hapus',
      view_list: 'Daftar', view_day: 'Hari', view_3day: '3 Hari', view_week: 'Minggu', view_month: 'Bulan', cal_today: 'Hari ini',
      cal_more: '+{n} lagi', cal_prev: 'Sebelumnya', cal_next: 'Berikutnya', f_clash: 'Bentrok dengan: {x}', cal_empty_hint: 'Ketuk area kosong untuk menambah jadwal di jam itu.',
      s_e_uploading: 'Tunggu, file masih diunggah.', s_e_limit_files: 'Maksimal {n} lampiran per email.', s_e_limit_mb: 'Total lampiran melebihi {mb} MB.',
      v_loading: 'Memuat surat...', v_nodata: 'Isi surat ini tidak tersimpan, karena dikirim sebelum riwayat isi aktif atau terlalu panjang. Yang tersedia hanya keterangannya.',
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
      login_title: 'Welcome back.',
      login_sub: 'The schedule, letters and notes of the Office of Noel Ottley live here. Sign in with your registered Google account.',
      login_note: 'Registered accounts only.',
      signing_in: 'Checking account...',
      conn_title: 'System status',
      conn_sub: 'System check.',
      btn_refresh: 'Refresh',
      agenda_title: 'Agenda',
      agenda_sub: 'The coming seven days.',
      agenda_empty: 'A clear week ahead. A good time to breathe.',
      hello_pagi: 'Good morning', hello_siang: 'Good afternoon', hello_sore: 'Good afternoon', hello_malam: 'Good evening',
      sum_zero: 'Nothing on the agenda today.', sum_one: 'One item on the agenda today.', sum_n: '{n} items on the agenda today.',
      surat_title: 'Letter history',
      surat_sub: 'The last fifteen letters.',
      surat_empty: 'No letters have gone out yet.',
      today: 'Today', tomorrow: 'Tomorrow', allday: 'All day', draft: 'Draft', guests_n: '{n} invited',
      maps: 'Map', to_: 'To', cc_: 'Cc', att_: 'Attachments', by_: 'by', sent: 'Sent',
      loading: 'Loading...',
      tab_home: 'Home', tab_jadwal: 'Schedule', tab_surat: 'Letters', tab_catatan: 'Notes',
      jadwal_title: 'Schedule', jadwal_sub: 'Everything recorded here also goes into Google Calendar.',
      j_add: 'Add item', scope_upcoming: 'Upcoming', scope_past: 'Past', scope_cancelled: 'Cancelled',
      j_empty_upcoming: 'Nothing upcoming yet. Press "Add item" to begin.', j_empty_past: 'No past items.', j_empty_cancelled: 'No cancelled items.',
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
      catatan_title: 'Notes', catatan_sub: 'A place for anything that must not be forgotten.', n_add: 'Write a note',
      n_search: 'Search', n_all: 'All', n_empty: 'No notes yet. Write the first one.', n_none: 'No matching notes.',
      n_f_title: 'Title (optional)', n_f_body: 'Body', n_f_tags: 'Tags (comma separated)', n_new: 'New note', n_edit_t: 'Edit note',
      n_edit: 'Edit', n_del: 'Delete', n_more: 'Read more', n_less: 'Collapse', n_del_confirm: 'Delete this note? This cannot be undone.', n_saved: 'Note saved.', n_deleted: 'Note deleted.',
      v_note: 'The note is empty.',
      surat_page_sub: 'Letters already sent, and a place to write new ones.', s_write: 'Write letter', s_back: '\u2190 Letter history',
      sh_empty: 'No letters have gone out yet. Press "Write letter" to begin.',
      d_mail: 'Write a letter for this item', d_loc: 'Location', d_guests: 'Invited', d_rem: 'Reminders', d_notes: 'Notes', d_sync: 'Calendar', d_before: 'before', d_no_rem: 'No reminder', d_none: '-',
      v_to: 'To', v_cc: 'Cc', v_by: 'Sent by', v_lang: 'Language', v_tpl: 'Template', v_att: 'Attachments',
      s_upload: 'Attachments from this device (max {mb} MB per file)', s_pick: 'Choose files', s_drop: 'or drag files here',
      s_up_busy: 'uploading...', s_up_big: 'Larger than {mb} MB.', s_up_type: 'File type blocked by Gmail.', s_up_x: 'Remove',
      view_list: 'List', view_day: 'Day', view_3day: '3 Days', view_week: 'Week', view_month: 'Month', cal_today: 'Today',
      cal_more: '+{n} more', cal_prev: 'Previous', cal_next: 'Next', f_clash: 'Clashes with: {x}', cal_empty_hint: 'Tap an empty area to add an item at that time.',
      s_e_uploading: 'Please wait, files are still uploading.', s_e_limit_files: 'Maximum {n} attachments per email.', s_e_limit_mb: 'Total attachments exceed {mb} MB.',
      v_loading: 'Loading letter...', v_nodata: 'The content of this letter was not saved, because it was sent before content history was enabled or it was too long. Only the details are available.',
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
    if (state.session && !$('view-app').hidden) { renderConn(lastPing); renderDash(lastDash); renderJadwal(); if (!$('sheet').hidden) buildForm(formState); renderSuratLang(); renderNotes(); renderHist(); setUploadLabel(); renderUps(); renderCal(); }
  }

  function setLang(l) {
    state.lang = l === 'en' ? 'en' : 'id';
    lsSet(KEY_LANG, state.lang);
    var sv = lsGet('ottley.view');
    calMode = CAL_VIEWS.indexOf(sv) >= 0 ? sv : (isNarrow() ? '3day' : 'week');
    setViewUi();
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
    if (e && e.code === 'server_error' && e.message) return e.message;
    if (e && I18N.id[key]) return t(key, { email: (e && e.email) || '' });
    return (e && e.message) || t('err_server_error');
  }

  // ---------- tampilan ----------
  function show(view) {
    ['view-boot', 'view-login', 'view-app'].forEach(function (v) { $(v).hidden = (v !== view); });
    $('nav').hidden = view !== 'view-app';
    document.body.classList.toggle('in-app', view === 'view-app');
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
    lastPing = null; lastDash = null; jData = null; calData = null; sCtx = null; nData = null; sHist = null; sHistStale = true; sMode = 'list'; closeDetail(); closeMail(); closeForm(); closeNote(); resetSurat(true);
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

  // Satu hari = tanggal besar di margin (seperti buku agenda) + daftar acara di sebelahnya
  function dayBlock(ymd, todayYmd, tomorrowYmd) {
    var y = +ymd.slice(0, 4), m = +ymd.slice(4, 6), d = +ymd.slice(6, 8);
    var wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    var box = el('div', 'day' + (ymd === todayYmd ? ' is-today' : ''));
    var left = el('div', 'day-l');
    left.appendChild(el('div', 'day-num', String(d)));
    left.appendChild(el('div', 'day-mon', MONTHS[state.lang][m - 1].slice(0, 3)));
    var body = el('div', 'day-r');
    var h = el('div', 'day-h');
    h.appendChild(el('b', '', DAYS[state.lang][wd] + (y !== wibNow().getFullYear() ? ' ' + y : '')));
    if (ymd === todayYmd) h.appendChild(el('span', 'tag', t('today')));
    else if (ymd === tomorrowYmd) h.appendChild(el('span', 'tag', t('tomorrow')));
    body.appendChild(h);
    box.appendChild(left); box.appendChild(body);
    return { box: box, body: body };
  }

  // Jam dinding WIB (Asia/Jakarta), apa pun zona waktu perangkatnya
  function wibNow() { return new Date(Date.now() + (7 * 60 + new Date().getTimezoneOffset()) * 60000); }

  function greetWord() {
    var h = wibNow().getHours();
    var k = h >= 4 && h < 11 ? 'pagi' : h >= 11 && h < 15 ? 'siang' : h >= 15 && h < 18 ? 'sore' : 'malam';
    return t('hello_' + k);
  }

  function renderHero(data) {
    var u = (state.session && state.session.user) || {};
    var first = String(u.name || '').split(/\s+/)[0];
    if (!first || /^ottley$/i.test(first)) first = '';
    var now = wibNow();
    $('hero-date').textContent = DAYS[state.lang][now.getDay()] + ', ' + now.getDate() + ' ' + MONTHS[state.lang][now.getMonth()] + ' ' + now.getFullYear();
    $('hero-hello').textContent = greetWord() + (first ? ', ' + first : '') + '.';
    var sum = '';
    if (data) {
      var ty = data.today.replace(/-/g, '');
      var n = data.agenda.filter(function (a) { return a.ymd === ty; }).length;
      sum = n === 0 ? t('sum_zero') : n === 1 ? t('sum_one') : t('sum_n', { n: n });
    }
    $('hero-sum').textContent = sum;
  }

  function renderDash(data) {
    renderHero(data);
    var ag = $('agenda'), su = $('surat');
    ag.innerHTML = ''; su.innerHTML = '';
    if (!data) return;

    if (!data.agenda.length) ag.appendChild(el('p', 'empty', t('agenda_empty')));
    var todayYmd = data.today.replace(/-/g, ''), tomorrowYmd = addDaysYmd(data.today, 1);
    var cur = null, blk = null;
    data.agenda.forEach(function (it) {
      if (it.ymd !== cur) { cur = it.ymd; blk = dayBlock(it.ymd, todayYmd, tomorrowYmd); ag.appendChild(blk.box); }
      var ev = el('div', 'ev' + (it.status === 'Draf' ? ' draft' : ''));
      ev.appendChild(el('div', 'ev-time', it.allDay ? t('allday') : it.start + (it.end ? ' - ' + it.end : '')));
      var main = el('div', 'ev-main');
      main.appendChild(titleBtn(it));
      var sub = [];
      if (it.status === 'Draf') sub.push(t('draft'));
      if (it.location && !safeUrl(it.location)) sub.push(it.location);
      var gn = Array.isArray(it.guests) ? it.guests.length : it.guests;
      if (gn) sub.push(t('guests_n', { n: gn }));
      var s2 = el('div', 'ev-sub', sub.join(' · '));
      var mu = safeUrl(it.maps);
      if (mu) {
        if (sub.length) s2.appendChild(document.createTextNode(' · '));
        var a = el('a', '', t('maps')); a.href = mu; a.target = '_blank'; a.rel = 'noopener noreferrer';
        s2.appendChild(a);
      }
      if (s2.textContent) main.appendChild(s2);
      ev.appendChild(main);
      blk.body.appendChild(ev);
    });

    if (!data.surat.length) su.appendChild(el('p', 'empty', t('surat_empty')));
    data.surat.forEach(function (m) {
      var d = el('div', 'mail');
      var msb = el('div', 'mail-subj');
      var mob = el('button', 'mail-open', m.subject || '-'); mob.type = 'button';
      mob.addEventListener('click', function () { openMail(m); });
      msb.appendChild(mob); d.appendChild(msb);
      var meta = el('div', 'mail-meta');
      var ok = (m.result || '').toLowerCase() === 'terkirim';
      meta.appendChild(el('span', 'mail-res' + (ok ? '' : ' bad'), ok ? t('sent') : (m.result || '?')));
      var parts = [t('to_') + ' ' + m.to];
      if (m.attachments) parts.push(t('att_') + ': ' + m.attachments);
      parts.push(String(m.time || '').slice(0, 16));
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
    $('sys').open = problems.length > 0;
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
    $('tab-catatan').hidden = name !== 'catatan';
    if (name === 'jadwal') reloadJadwalView();
    if (name === 'surat') { if (sMode === 'compose') showCompose(); else showSuratList(); }
    if (name === 'catatan') loadCatatan();
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
        if (it.error) {
          day = el('div', 'day');
          day.appendChild(el('div', 'day-l', ''));
          day.firstChild.appendChild(el('div', 'day-num', '!'));
          var bd = el('div', 'day-r');
          var hh = el('div', 'day-h'); hh.appendChild(el('b', '', t('j_fix').replace(/: $/, ''))); bd.appendChild(hh);
          day.appendChild(bd);
          day.body = bd;
          box.appendChild(day);
        } else {
          day = dayBlock(it.ymd, todayYmd, tomorrowYmd);
          box.appendChild(day.box);
        }
      }
      var ev = el('div', 'ev' + (it.error ? ' bad' : it.status === 'Draf' ? ' draft' : ''));
      ev.appendChild(el('div', 'ev-time', it.error ? '-' : it.allDay ? t('allday') : it.start + (it.end ? ' - ' + it.end : '')));
      var main = el('div', 'ev-main');
      main.appendChild(titleBtn(it));
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
      (day.body || day).appendChild(ev);
    });
    if (jData.total > jData.items.length) box.appendChild(el('p', 'more', t('j_more', { n: jData.total })));
  }

  function changeStatus(it, btn) {
    var cancelling = it.status !== 'Batal';
    if (cancelling && !window.confirm(t('j_confirm_cancel', { t: it.title }))) return;
    btn.disabled = true;
    lockBox($('j-list'), true);
    say('j-msg', t('saving'));
    api('jadwalStatus', { id: it.id, status: cancelling ? 'Batal' : 'Aktif' })
      .then(function (r) {
        homeStale = true;
        say('j-msg', r.syncError ? t('j_sync_err') + r.syncError : t('j_saved'), r.syncError ? 'err' : 'ok');
        if (calMode !== 'list') { loadCal(); return; }
        return api('jadwalList', { scope: jScope }).then(function (d) { jData = d; renderJadwal(); });
      })
      .catch(function (e) { btn.disabled = false; if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('j-msg', errText(e), 'err'); })
      .then(function () { lockBox($('j-list'), false); });
  }

  // ---------- kalender ----------
  var CAL_VIEWS = ['list', 'day', '3day', 'week', 'month'];
  var calMode = 'week', calAnchor = '', calData = null, calSeq = 0, clashTimer = null, clashSeq = 0;

  function isNarrow() { return window.innerWidth < 700; }
  function pad2(n) { return ('0' + n).slice(-2); }
  function isoOf(y, m, d) { return y + '-' + pad2(m) + '-' + pad2(d); }
  function parseIso(iso) { var p = iso.split('-'); return { y: +p[0], m: +p[1], d: +p[2] }; }
  function isoAdd(iso, n) { var p = parseIso(iso), d = new Date(Date.UTC(p.y, p.m - 1, p.d + n)); return isoOf(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()); }
  function wdOf(iso) { var p = parseIso(iso); return new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay(); }
  function todayIso() { var w = wibNow(); return isoOf(w.getFullYear(), w.getMonth() + 1, w.getDate()); }
  function mondayOf(iso) { return isoAdd(iso, -((wdOf(iso) + 6) % 7)); }
  function toM(hhmm) { var m = /^(\d{1,2}):(\d{2})/.exec(hhmm || ''); return m ? (+m[1]) * 60 + (+m[2]) : null; }

  function calRange() {
    var a = calAnchor;
    if (calMode === 'day') return [a, a];
    if (calMode === '3day') return [a, isoAdd(a, 2)];
    if (calMode === 'week') { var m = mondayOf(a); return [m, isoAdd(m, 6)]; }
    var p = parseIso(a), g = mondayOf(isoOf(p.y, p.m, 1));
    return [g, isoAdd(g, 41)];
  }
  function calStep(dir) {
    if (calMode === 'day') return isoAdd(calAnchor, dir);
    if (calMode === '3day') return isoAdd(calAnchor, 3 * dir);
    if (calMode === 'week') return isoAdd(calAnchor, 7 * dir);
    var p = parseIso(calAnchor), d = new Date(Date.UTC(p.y, p.m - 1 + dir, 1));
    return isoOf(d.getUTCFullYear(), d.getUTCMonth() + 1, 1);
  }
  function calLabel() {
    var L = state.lang, mon = MONTHS[L];
    if (calMode === 'month') { var p = parseIso(calAnchor); return mon[p.m - 1] + ' ' + p.y; }
    if (calMode === 'day') return dayLabel(calAnchor.replace(/-/g, ''));
    var r = calRange(), a = parseIso(r[0]), b = parseIso(r[1]);
    if (a.m === b.m && a.y === b.y) return a.d + ' – ' + b.d + ' ' + mon[a.m - 1] + ' ' + a.y;
    return a.d + ' ' + mon[a.m - 1].slice(0, 3) + (a.y !== b.y ? ' ' + a.y : '') + ' – ' + b.d + ' ' + mon[b.m - 1].slice(0, 3) + ' ' + b.y;
  }

  function setViewUi() {
    document.querySelectorAll('.vb').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-view') === calMode); });
    $('j-listview').hidden = calMode !== 'list';
    $('j-calview').hidden = calMode === 'list';
  }
  function setView(v) {
    calMode = CAL_VIEWS.indexOf(v) >= 0 ? v : 'week';
    lsSet('ottley.view', calMode);
    setViewUi();
    reloadJadwalView();
  }
  function reloadJadwalView() { if (calMode === 'list') loadJadwal(); else loadCal(); }

  function loadCal() {
    if (!calAnchor) calAnchor = todayIso();
    var r = calRange(), seq = ++calSeq;
    $('cal-label').textContent = calLabel();
    if (!calData) say('j-msg', t('loading'));
    api('jadwalRange', { from: r[0], to: r[1] })
      .then(function (d) {
        if (seq !== calSeq) return;
        calData = d;
        if ($('j-msg').textContent === t('loading')) say('j-msg', '');
        renderCal();
      })
      .catch(function (e) { if (seq !== calSeq) return; if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('j-msg', errText(e), 'err'); });
  }

  function spanOf(it) {
    var s = toM(it.start), e = it.end ? toM(it.end) : null;
    if (e == null || e <= s) e = s + 60;
    return [s, Math.min(e, 1440)];
  }

  // Susun acara yang berimpit: tiap kelompok dibagi kolom berdampingan; tandai yang bentrok
  function layoutDay(list) {
    list.sort(function (a, b) { return a._s - b._s || a._e - b._e; });
    var clusters = [], cur = [], end = 0;
    list.forEach(function (it) {
      if (cur.length && it._s >= end) { clusters.push(cur); cur = []; end = 0; }
      cur.push(it); end = Math.max(end, it._e);
    });
    if (cur.length) clusters.push(cur);
    clusters.forEach(function (cl) {
      var cols = [];
      cl.forEach(function (it) {
        var placed = false;
        for (var i = 0; i < cols.length; i++) { if (cols[i] <= it._s) { cols[i] = it._e; it._c = i; placed = true; break; } }
        if (!placed) { it._c = cols.length; cols.push(it._e); }
      });
      cl.forEach(function (it) {
        it._n = cols.length;
        it._clash = cl.some(function (o) { return o !== it && o._s < it._e && it._s < o._e; });
      });
    });
  }

  function evText(it) { return (it.allDay ? '' : it.start + ' ') + it.title; }
  function chipBtn(it) {
    var b = el('button', 'cal-chip' + (it.status === 'Draf' ? ' draft' : '') + (it._clash ? ' clash' : ''), evText(it));
    b.type = 'button'; b.title = it.title;
    b.addEventListener('click', function (e) { e.stopPropagation(); openDetail(it); });
    return b;
  }
  function shortDay(wd) { return DAYS[state.lang][wd].slice(0, 3); }

  function renderCal() {
    var box = $('cal');
    if (!box) return;
    box.innerHTML = '';
    if (calMode === 'list') return;
    $('cal-label').textContent = calLabel();
    $('cal-prev').setAttribute('aria-label', t('cal_prev')); $('cal-next').setAttribute('aria-label', t('cal_next'));
    if (!calData) return;
    if (calMode === 'month') renderMonth(box); else renderGrid(box);
  }

  function groupByDay() {
    var by = {};
    calData.items.forEach(function (it) { (by[it.date] = by[it.date] || []).push(it); });
    return by;
  }

  function renderGrid(box) {
    var r = calRange(), n = calMode === 'day' ? 1 : calMode === '3day' ? 3 : 7;
    var days = []; for (var i = 0; i < n; i++) days.push(isoAdd(r[0], i));
    var by = groupByDay(), today = todayIso();
    var minH = 7, maxH = 21, anyAllDay = false, timed = {};
    days.forEach(function (d) {
      timed[d] = [];
      (by[d] || []).forEach(function (it) {
        if (it.allDay) { anyAllDay = true; return; }
        var sp = spanOf(it); it._s = sp[0]; it._e = sp[1]; it._clash = false;
        timed[d].push(it);
        minH = Math.min(minH, Math.floor(sp[0] / 60)); maxH = Math.max(maxH, Math.ceil(sp[1] / 60));
      });
      layoutDay(timed[d]);
    });
    var PX = isNarrow() ? 46 : 54, H = (maxH - minH) * PX;
    var wrap = el('div', 'cal-wrap'), grid = el('div', 'cal-grid' + (n > 3 && isNarrow() ? ' scroll' : ''));
    grid.style.setProperty('--n', n);

    var head = el('div', 'cal-row');
    head.appendChild(el('div', 'cal-corner', ''));
    days.forEach(function (d) {
      var b = el('button', 'cal-dh' + (d === today ? ' today' : '')); b.type = 'button';
      b.appendChild(el('span', 'dw', shortDay(wdOf(d)))); b.appendChild(el('span', 'dn', String(parseIso(d).d)));
      b.addEventListener('click', function () { if (calMode !== 'day') { calAnchor = d; setView('day'); } });
      head.appendChild(b);
    });
    grid.appendChild(head);

    if (anyAllDay) {
      var ad = el('div', 'cal-row');
      ad.appendChild(el('div', 'cal-corner', t('allday')));
      days.forEach(function (d) {
        var cell = el('div', 'cal-ad');
        (by[d] || []).filter(function (it) { return it.allDay; }).forEach(function (it) { cell.appendChild(chipBtn(it)); });
        ad.appendChild(cell);
      });
      grid.appendChild(ad);
    }

    var body = el('div', 'cal-row');
    var tc = el('div', 'cal-tcol'); tc.style.height = H + 'px';
    for (var h = minH; h < maxH; h++) { var l = el('span', 'hl', pad2(h) + ':00'); l.style.top = ((h - minH) * PX + (h === minH ? 8 : 0)) + 'px'; tc.appendChild(l); }
    body.appendChild(tc);
    var nowM = (function () { var w = wibNow(); return w.getHours() * 60 + w.getMinutes(); })();
    days.forEach(function (d) {
      var col = el('div', 'cal-col'); col.style.height = H + 'px'; col.style.backgroundSize = '100% ' + PX + 'px';
      col.addEventListener('click', function (e) {
        if (e.target !== col) return;
        var m = minH * 60 + Math.floor((e.offsetY / PX) * 2) * 30;
        ensureJData(function () { openForm(null, { date: d, start: pad2(Math.floor(m / 60)) + ':' + pad2(m % 60) }); });
      });
      timed[d].forEach(function (it) {
        var b = el('button', 'cal-ev' + (it.status === 'Draf' ? ' draft' : '') + (it._clash ? ' clash' : '')); b.type = 'button';
        b.appendChild(el('b', '', it.start + (it.end ? '–' + it.end : '')));
        b.appendChild(document.createTextNode(it.title));
        b.title = it.title + (it._clash ? ' (' + t('f_clash', { x: '' }).replace(/:\s*$/, '') + ')' : '');
        b.style.top = ((it._s - minH * 60) / 60 * PX) + 'px';
        b.style.height = Math.max(22, (it._e - it._s) / 60 * PX - 2) + 'px';
        b.style.left = 'calc(' + (it._c / it._n * 100) + '% + 1px)';
        b.style.width = 'calc(' + (100 / it._n) + '% - 3px)';
        b.addEventListener('click', function (e) { e.stopPropagation(); openDetail(it); });
        col.appendChild(b);
      });
      if (d === today && nowM >= minH * 60 && nowM <= maxH * 60) { var nl = el('div', 'cal-now'); nl.style.top = ((nowM - minH * 60) / 60 * PX) + 'px'; col.appendChild(nl); }
      body.appendChild(col);
    });
    grid.appendChild(body);
    wrap.appendChild(grid); box.appendChild(wrap);
    if (!calData.items.length) box.appendChild(el('p', 'tiny', t('cal_empty_hint')));
  }

  function renderMonth(box) {
    var r = calRange(), cur = parseIso(calAnchor), by = groupByDay(), today = todayIso();
    var m = el('div', 'cal-month'), hd = el('div', 'cal-mh');
    [1, 2, 3, 4, 5, 6, 0].forEach(function (w) { hd.appendChild(el('div', '', shortDay(w))); });
    m.appendChild(hd);
    for (var wk = 0; wk < 6; wk++) {
      var row = el('div', 'cal-mrow');
      for (var k = 0; k < 7; k++) {
        (function (d) {
          var p = parseIso(d), list = (by[d] || []).slice();
          var tm = list.filter(function (it) { return !it.allDay; });
          tm.forEach(function (it) { var sp = spanOf(it); it._s = sp[0]; it._e = sp[1]; it._clash = false; });
          layoutDay(tm);
          var cell = el('div', 'cal-mc' + (p.m !== cur.m ? ' other' : '') + (d === today ? ' today' : ''));
          var nb = el('button', 'mn', String(p.d)); nb.type = 'button';
          cell.appendChild(nb);
          cell.addEventListener('click', function () { calAnchor = d; setView('day'); });
          var max = isNarrow() ? 2 : 3;
          list.slice(0, max).forEach(function (it) { cell.appendChild(chipBtn(it)); });
          if (list.length > max) { var mb = el('span', 'cal-more', t('cal_more', { n: list.length - max })); cell.appendChild(mb); }
          row.appendChild(cell);
        })(isoAdd(r[0], wk * 7 + k));
      }
      m.appendChild(row);
    }
    box.appendChild(m);
  }

  // ---------- cek bentrok saat mengisi form ----------
  function schedClash() { clearTimeout(clashTimer); clashTimer = setTimeout(doClash, 400); }
  function doClash() {
    var d = $('f-date').value, s = $('f-start').value, e = $('f-end').value;
    if (!d || !s || !formState) { say('f-clash', ''); return; }
    var seq = ++clashSeq;
    api('jadwalCheck', { date: d, start: s, end: e, id: formState.id || '' })
      .then(function (r) {
        if (seq !== clashSeq) return;
        if (!r.conflicts.length) { say('f-clash', ''); return; }
        say('f-clash', t('f_clash', { x: r.conflicts.map(function (c) { return c.title + ' (' + c.start + (c.end ? '–' + c.end : '') + ')'; }).join('; ') }), 'warn');
      })
      .catch(function () { /* peringatan saja, abaikan */ });
  }

  // ---------- form jadwal ----------
  // Saat menyimpan/mengirim: semua bagian jadi abu-abu dan tidak bisa disentuh, supaya tidak ada klik atau edit di tengah loading
  function lockUi(root, on, keepSel) {
    if (!root) return;
    Array.prototype.forEach.call(root.children, function (c) {
      if (keepSel && c.matches(keepSel)) return;
      c.inert = !!on;
      c.classList.toggle('locked', !!on);
    });
  }
  function lockBox(box, on) { if (!box) return; box.inert = !!on; box.classList.toggle('locked', !!on); }

  function newKey() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }

  function openForm(it, preset) {
    preset = preset || {};
    formState = it ? JSON.parse(JSON.stringify(it)) : {
      id: '', title: '', date: preset.date || (jData ? jData.today : ''), start: preset.start || '', end: '', location: '', maps: '', notes: '', guests: [],
      reminders: jData ? jData.defaults.slice() : [], status: 'Aktif'
    };
    formState._key = newKey();
    buildForm(formState);
    $('sheet').hidden = false;
    document.body.style.overflow = 'hidden';
    say('jf-msg', '');
    setTimeout(function () { $('f-title').focus(); }, 50);
  }

  function syncScroll() {
    var any = document.querySelector('.sheet:not([hidden])');
    document.body.style.overflow = any ? 'hidden' : '';
  }

  function closeForm() {
    var sh = $('sheet');
    if (sh) sh.hidden = true;
    formState = null;
    clashSeq++; say('f-clash', '');
    syncScroll();
  }

  function buildForm(f) {
    if (!f) return;
    var editing = !!f.id;
    $('jf-title').textContent = editing ? t('j_edit_title') : t('j_new');
    $('f-title').value = f.title; $('f-date').value = f.date; $('f-start').value = f.start; $('f-end').value = f.end;
    schedClash();
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
    lockUi($('jf'), true, '.msg');
    say('jf-msg', t('saving'));
    api('jadwalSave', { item: item, key: formState._key })
      .then(function (r) {
        closeForm();
        homeStale = true;
        if (tab === 'home') { homeStale = false; refresh(); }
        say('j-msg', r.syncError ? t('j_sync_err') + r.syncError : t('j_saved'), r.syncError ? 'err' : 'ok');
        if (calMode !== 'list') { loadCal(); return; }
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
      .then(function () { state.saving = false; $('jf-save').disabled = false; lockUi($('jf'), false); });
  }

  // ---------- catatan ----------
  var nData = null, nTag = '', nForm = null, nSaving = false;

  function loadCatatan() {
    say('n-msg', t('loading'));
    api('catatanList')
      .then(function (d) { nData = d; say('n-msg', ''); renderNotes(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('n-msg', errText(e), 'err'); });
  }

  function renderNotes() {
    var tb = $('n-tags'), box = $('n-list');
    if (!tb || !box) return;
    tb.innerHTML = ''; box.innerHTML = '';
    if (!nData) return;
    if (nData.tags.length) {
      var all = el('button', 'chip-t' + (nTag ? '' : ' on'), t('n_all')); all.type = 'button';
      all.addEventListener('click', function () { nTag = ''; renderNotes(); });
      tb.appendChild(all);
      nData.tags.forEach(function (g) {
        var b = el('button', 'chip-t' + (nTag.toLowerCase() === g.toLowerCase() ? ' on' : ''), g); b.type = 'button';
        b.addEventListener('click', function () { nTag = (nTag.toLowerCase() === g.toLowerCase()) ? '' : g; renderNotes(); });
        tb.appendChild(b);
      });
    }
    var q = ($('n-q').value || '').trim().toLowerCase();
    var list = nData.items.filter(function (n) {
      if (nTag && n.tags.map(function (x) { return x.toLowerCase(); }).indexOf(nTag.toLowerCase()) < 0) return false;
      return !q || (n.title + ' ' + n.body + ' ' + n.tags.join(' ')).toLowerCase().indexOf(q) >= 0;
    });
    if (!list.length) { box.appendChild(el('p', 'empty', t(nData.items.length ? 'n_none' : 'n_empty'))); return; }
    list.forEach(function (n) {
      var d = el('article', 'note');
      if (n.title) d.appendChild(el('h3', 'note-t', n.title));
      d.appendChild(el('div', 'note-time', String(n.time || '').slice(0, 16)));
      d.appendChild(el('p', 'note-b', n.body));
      if (n.tags.length) { var tg = el('div', 'note-tags'); n.tags.forEach(function (x) { tg.appendChild(el('span', 'note-tag', x)); }); d.appendChild(tg); }
      var act = el('div', 'note-act');
      if (n.body.length > 220 || n.body.split('\n').length > 5) {
        var mb = el('button', 'lnk', t('n_more')); mb.type = 'button';
        mb.addEventListener('click', function () { var o = d.classList.toggle('open'); mb.textContent = t(o ? 'n_less' : 'n_more'); });
        act.appendChild(mb);
      }
      var be = el('button', 'lnk', t('n_edit')); be.type = 'button'; be.addEventListener('click', function () { openNote(n); });
      var bd = el('button', 'lnk danger', t('n_del')); bd.type = 'button'; bd.addEventListener('click', function () { delNote(n, bd); });
      act.appendChild(be); act.appendChild(bd);
      d.appendChild(act);
      box.appendChild(d);
    });
  }

  function openNote(n) {
    nForm = { id: n ? n.id : '', _key: newKey() };
    $('nf-title').textContent = t(n ? 'n_edit_t' : 'n_new');
    $('nf-t').value = n ? n.title : ''; $('nf-b').value = n ? n.body : ''; $('nf-g').value = n ? n.tags.join(', ') : '';
    say('nf-msg', '');
    $('nsheet').hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(function () { $('nf-b').focus(); }, 50);
  }
  function closeNote() {
    var sh = $('nsheet');
    if (sh) sh.hidden = true;
    nForm = null;
    syncScroll();
  }

  function submitNote(ev) {
    ev.preventDefault();
    if (nSaving || !nForm) return;
    var item = { id: nForm.id || undefined, title: $('nf-t').value.trim(), body: $('nf-b').value, tags: $('nf-g').value };
    if (!item.title && !item.body.trim()) { say('nf-msg', t('v_note'), 'err'); return; }
    nSaving = true; $('nf-save').disabled = true; lockUi($('nf'), true, '.msg'); say('nf-msg', t('saving'));
    api('catatanSave', { item: item, key: nForm._key })
      .then(function () { closeNote(); return api('catatanList').then(function (d) { nData = d; renderNotes(); say('n-msg', t('n_saved'), 'ok'); }); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('nf-msg', errText(e), 'err'); })
      .then(function () { nSaving = false; $('nf-save').disabled = false; lockUi($('nf'), false); });
  }

  function delNote(n, btn) {
    if (!window.confirm(t('n_del_confirm'))) return;
    btn.disabled = true;
    lockBox($('n-list'), true);
    api('catatanDelete', { id: n.id })
      .then(function () { return api('catatanList').then(function (d) { nData = d; renderNotes(); say('n-msg', t('n_deleted'), 'ok'); }); })
      .catch(function (e) { btn.disabled = false; if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('n-msg', errText(e), 'err'); })
      .then(function () { lockBox($('n-list'), false); });
  }

  // ---------- kartu detail jadwal ----------
  function titleBtn(it) {
    var b = el('button', 'ev-title ev-open', it.title); b.type = 'button';
    b.addEventListener('click', function () { openDetail(it); });
    return b;
  }

  function dlRow(dl, label, val) {
    var r = el('div', 'row');
    r.appendChild(el('dt', '', label));
    var dd = el('dd', '');
    if (val && val.nodeType) dd.appendChild(val); else dd.textContent = val == null || val === '' ? t('d_none') : val;
    r.appendChild(dd); dl.appendChild(r);
  }

  function ensureJData(cb) {
    if (jData) { cb(); return; }
    api('jadwalList', { scope: 'upcoming' }).then(function (d) { jData = d; cb(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('app-msg', errText(e), 'err'); });
  }

  function openDetail(it) {
    var w = wibNow();
    var todayYmd = w.getFullYear() + ('0' + (w.getMonth() + 1)).slice(-2) + ('0' + w.getDate()).slice(-2);
    $('d-when').textContent = it.error ? t('j_fix').replace(/: $/, '') : dayLabel(it.ymd) + ' · ' + (it.allDay ? t('allday') : it.start + (it.end ? ' - ' + it.end : '') + ' WIB');
    $('d-title').textContent = it.title;
    var tg = $('d-tags'); tg.innerHTML = '';
    if (it.status === 'Draf' || it.status === 'Batal') tg.appendChild(el('span', 'note-tag', t(it.status === 'Draf' ? 'st_Draf' : 'st_Batal')));
    var dl = $('d-rows'); dl.innerHTML = '';
    if (it.error) dlRow(dl, '!', it.error);
    var loc = document.createDocumentFragment();
    if (it.location) loc.appendChild(document.createTextNode(it.location));
    var mu = safeUrl(it.maps);
    if (mu) {
      if (it.location) loc.appendChild(document.createTextNode('\n'));
      var a = el('a', '', t('maps')); a.href = mu; a.target = '_blank'; a.rel = 'noopener noreferrer'; loc.appendChild(a);
    }
    dlRow(dl, t('d_loc'), loc.childNodes.length ? loc : '');
    dlRow(dl, t('d_guests'), it.guests && it.guests.length ? it.guests.join('\n') : '');
    dlRow(dl, t('d_rem'), it.reminders && it.reminders.length ? it.reminders.map(remLabel).join(', ') + ' ' + t('d_before') : t('d_no_rem'));
    dlRow(dl, t('d_notes'), it.notes);
    dlRow(dl, t('d_sync'), it.sync);
    say('d-msg', '');
    var cancelled = it.status === 'Batal';
    $('d-cancel').textContent = t(cancelled ? 'j_restore' : 'j_cancel');
    $('d-mail').hidden = !(it.status === 'Aktif' && !it.error && it.ymd >= todayYmd);
    $('d-edit').onclick = function () { closeDetail(); ensureJData(function () { openForm(it); }); };
    $('d-mail').onclick = function () { closeDetail(); pendingEvent = it.id; switchTab('surat'); showCompose(); };
    $('d-cancel').onclick = function () {
      if (!cancelled && !window.confirm(t('j_confirm_cancel', { t: it.title }))) return;
      var card = $('dsheet').firstElementChild;
      lockUi(card, true, '.msg'); say('d-msg', t('saving'));
      api('jadwalStatus', { id: it.id, status: cancelled ? 'Aktif' : 'Batal' })
        .then(function (r) {
          closeDetail(); homeStale = true;
          if (tab === 'jadwal') reloadJadwalView(); else if (tab === 'home') { homeStale = false; refresh(); }
          if (r.syncError) say(tab === 'jadwal' ? 'j-msg' : 'app-msg', t('j_sync_err') + r.syncError, 'err');
        })
        .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('d-msg', errText(e), 'err'); })
        .then(function () { lockUi(card, false); });
    };
    $('dsheet').hidden = false; syncScroll();
  }
  function closeDetail() { $('dsheet').hidden = true; syncScroll(); }

  // ---------- riwayat surat ----------
  var sMode = 'list', sHist = null, sHistStale = true, sBannerTried = false, pendingEvent = '', vSeq = 0;

  function showSuratList() {
    sMode = 'list';
    $('s-list-view').hidden = false; $('s-compose-view').hidden = true;
    if (sHistStale || !sHist) loadSuratHist(); else renderHist();
  }
  function showCompose() {
    sMode = 'compose';
    $('s-list-view').hidden = true; $('s-compose-view').hidden = false;
    loadSurat();
    applyPendingEvent();
    window.scrollTo(0, 0);
  }
  function applyPendingEvent() {
    if (!pendingEvent || !sCtx) return;
    var sel = $('s-ev'), want = pendingEvent;
    pendingEvent = '';
    sel.value = want;
    if (sel.value === want) sel.dispatchEvent(new Event('change'));
  }

  function loadSuratHist() {
    if (!sHist) say('sh-msg', t('loading'));
    api('suratHistory')
      .then(function (d) { sHist = d; sHistStale = false; say('sh-msg', ''); renderHist(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('sh-msg', errText(e), 'err'); });
  }

  function renderHist() {
    var box = $('sh-list');
    box.innerHTML = '';
    if (!sHist) return;
    if (!sHist.items.length) { box.appendChild(el('p', 'empty', t('sh_empty'))); return; }
    var todayYmd = sHist.today.replace(/-/g, ''), tomorrowYmd = addDaysYmd(sHist.today, 1);
    var cur = null, blk = null;
    sHist.items.forEach(function (m) {
      var ymd = String(m.time || '').slice(0, 10).replace(/-/g, '');
      if (!/^\d{8}$/.test(ymd)) ymd = todayYmd;
      if (ymd !== cur) { cur = ymd; blk = dayBlock(ymd, todayYmd, tomorrowYmd); box.appendChild(blk.box); }
      var d = el('div', 'mail hmail');
      var sb = el('div', 'mail-subj');
      var ob = el('button', 'mail-open', m.subject || '-'); ob.type = 'button';
      ob.addEventListener('click', function () { openMail(m); });
      sb.appendChild(ob); d.appendChild(sb);
      var meta = el('div', 'mail-meta');
      var ok = (m.result || '').toLowerCase() === 'terkirim';
      meta.appendChild(el('span', 'mail-res' + (ok ? '' : ' bad'), ok ? t('sent') : (m.result || '?')));
      var parts = [t('to_') + ' ' + m.to];
      if (m.attachments) parts.push(t('att_') + ': ' + m.attachments);
      parts.push(String(m.time || '').slice(11, 16));
      meta.appendChild(document.createTextNode(parts.join(' · ')));
      d.appendChild(meta);
      blk.body.appendChild(d);
    });
  }

  function ensureBanner(cb) {
    if (sBanner || sBannerTried) { cb(); return; }
    sBannerTried = true;
    api('suratBanner').then(function (b) { sBanner = b.banner || ''; cb(); }).catch(function () { cb(); });
  }

  function openMail(m) {
    var seq = ++vSeq;
    $('v-time').textContent = String(m.time || '').slice(0, 16);
    $('v-subj').textContent = m.subject || '-';
    var dl = $('v-rows'); dl.innerHTML = '';
    dlRow(dl, t('v_to'), m.to);
    if (m.cc) dlRow(dl, t('v_cc'), m.cc);
    if (m.attachments) dlRow(dl, t('v_att'), m.attachments);
    dlRow(dl, t('v_by'), m.by);
    dlRow(dl, t('v_lang') + ' / ' + t('v_tpl'), (m.lang || '-') + ' · ' + (m.template || '-'));
    say('v-note', t('v_loading'));
    var fr = $('v-prev'); fr.hidden = true; fr.srcdoc = '';
    $('vsheet').hidden = false; syncScroll();
    api('suratView', { row: m.row, time: m.time })
      .then(function (r) {
        if (seq !== vSeq) return;
        if (!r.html) { say('v-note', t('v_nodata')); return; }
        ensureBanner(function () {
          if (seq !== vSeq) return;
          fr.srcdoc = sBanner ? r.html.split('cid:banner').join(sBanner) : r.html;
          fr.hidden = false; say('v-note', '');
        });
      })
      .catch(function (e) {
        if (seq !== vSeq) return;
        if (e && e.code === 'unauthorized') { closeMail(); logout(t('err_unauthorized')); } else say('v-note', errText(e), 'err');
      });
  }
  function closeMail() { vSeq++; $('vsheet').hidden = true; $('v-prev').srcdoc = ''; syncScroll(); }

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

  function setUploadLabel() {
    var lb = document.querySelector('[data-i18n="s_upload"]');
    if (lb) lb.textContent = t('s_upload', { mb: upMB() });
  }

  function loadSurat() {
    if (sCtx) return;
    say('s-msg', t('s_loading'));
    api('suratContext')
      .then(function (d) {
        sCtx = d;
        $('s-sender').textContent = d.sender;
        setUploadLabel();
        var w = $('s-warn');
        w.hidden = true;
        if (lastPing && !lastPing.senderOk) { w.hidden = false; w.textContent = t('s_sender_warn'); }
        fillEvents(); fillTemplates(); fillParts();
        applyPendingEvent();
        say('s-msg', '');
        doPreview();
        if (d.hasBanner && !sBanner) api('suratBanner').then(function (b) { sBanner = b.banner || ''; doPreview(); }).catch(function () { /* abaikan */ });
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
      title: $('s-card').value, maps: $('s-maps').value, fields: fields, files: $('s-files').value,
      uploads: sUps.filter(function (u) { return u.status === 'ok'; }).map(function (u) { return u.id; })
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

  // ---------- lampiran dari perangkat ----------
  var sUps = [], sUpQueue = Promise.resolve(), sDriveCount = 0, sDriveBytes = 0;
  var BLOCKED_EXT = /\.(exe|bat|cmd|com|scr|vbs|vbe|js|jse|jar|msi|msp|dll|cpl|lnk|pif|reg|wsf|wsh|ps1|apk|dmg)$/i;

  function fmtSize(n) { return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB'; }
  function upMB() { return (sCtx && sCtx.uploadMaxMB) || 10; }
  function readB64(file) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { var x = String(r.result); res(x.slice(x.indexOf(',') + 1)); };
      r.onerror = function () { rej({ code: 'read', message: file.name }); };
      r.readAsDataURL(file);
    });
  }

  function limitMsg() {
    if (!sCtx) return '';
    var okUps = sUps.filter(function (u) { return u.status === 'ok'; });
    if (sDriveCount + okUps.length > sCtx.attachMax) return t('s_e_limit_files', { n: sCtx.attachMax });
    var bytes = sDriveBytes; okUps.forEach(function (u) { bytes += u.size; });
    if (bytes > sCtx.attachMaxMB * 1048576) return t('s_e_limit_mb', { mb: sCtx.attachMaxMB });
    return '';
  }

  function renderUps() {
    var box = $('s-ups'); box.innerHTML = '';
    sUps.forEach(function (u) {
      var row = el('div', 'up ' + (u.status === 'ok' ? 'good' : u.status === 'err' ? 'bad err' : 'busy'));
      row.appendChild(el('span', 'up-name', (u.status === 'ok' ? '✓ ' : u.status === 'err' ? '✗ ' : '') + u.name + (u.status === 'err' ? ': ' + u.msg : u.status === 'busy' ? ' (' + t('s_up_busy') + ')' : '')));
      row.appendChild(el('span', 'up-size', fmtSize(u.size)));
      if (u.status !== 'busy') {
        var x = el('button', 'lnk danger', t('s_up_x')); x.type = 'button';
        x.addEventListener('click', function () { removeUp(u); });
        row.appendChild(x);
      }
      box.appendChild(row);
    });
    var lm = limitMsg(), lb = $('s-limit'); lb.innerHTML = '';
    if (lm) lb.appendChild(el('div', 'bad', lm));
  }

  function removeUp(u) {
    sUps = sUps.filter(function (x) { return x !== u; });
    renderUps();
    if (u.status === 'ok' && u.id) api('suratUploadRemove', { id: u.id }).catch(function () { /* abaikan */ });
  }

  function addFiles(list) {
    if (!sCtx || sBusy || sDone) return;
    Array.prototype.forEach.call(list, function (file) {
      var u = { name: file.name, size: file.size, status: 'busy', id: '', msg: '' };
      sUps.push(u);
      if (file.size > upMB() * 1048576) { u.status = 'err'; u.msg = t('s_up_big', { mb: upMB() }); return; }
      if (BLOCKED_EXT.test(file.name)) { u.status = 'err'; u.msg = t('s_up_type'); return; }
      // satu per satu, supaya koneksi HP tidak tersedak
      sUpQueue = sUpQueue.then(function () {
        if (sUps.indexOf(u) < 0) return;
        return readB64(file)
          .then(function (data) { return api('suratUpload', { name: file.name, mime: file.type || '', data: data }); })
          .then(function (r) { u.id = r.id; u.name = r.name; u.size = r.size; u.status = 'ok'; })
          .catch(function (e) {
            if (e && e.code === 'unauthorized') { logout(t('err_unauthorized')); return; }
            u.status = 'err'; u.msg = errText(e);
          });
      }).then(renderUps, renderUps);
    });
    renderUps();
  }

  function schedFiles() {
    clearTimeout(sFileTimer);
    var txt = $('s-files').value.trim(), box = $('s-filelist');
    sFilesBad = false; box.innerHTML = '';
    if (!txt) { sFilesBusy = false; sDriveCount = 0; sDriveBytes = 0; renderUps(); return; }
    box.appendChild(el('span', 'tiny', t('s_checking')));
    sFilesBusy = true;
    sFileTimer = setTimeout(function () {
      api('suratCheckFiles', { files: $('s-files').value })
        .then(function (items) {
          sFilesBusy = false; box.innerHTML = '';
          var n = 0; sDriveBytes = 0;
          items.forEach(function (it) {
            if (it.ok) { n++; sDriveBytes += it.size || 0; box.appendChild(el('div', 'good', '✓ ' + it.name + (it.size ? ' (' + (it.size / 1048576).toFixed(2) + ' MB)' : ''))); }
            else { sFilesBad = true; box.appendChild(el('div', 'bad', '✗ ' + it.name + ': ' + it.reason)); }
          });
          sDriveCount = n;
          if (sCtx && n > sCtx.attachMax) { sFilesBad = true; box.appendChild(el('div', 'bad', t('s_max_files', { n: sCtx.attachMax }))); }
          renderUps();
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
  function setBusy(b) { sBusy = b; $('s-send').disabled = b || sDone; $('s-test').disabled = b || sDone; lockUi($('sf'), b || sDone, '.msg, .bar'); }

  function doSend(test) {
    if (sBusy || sDone) return;
    if (!test && !$('s-to').value.trim()) { say('s-msg', t('s_e_to'), 'err'); return; }
    if (!$('s-subject').value.trim()) { say('s-msg', t('s_e_subject'), 'err'); return; }
    if (!$('s-body').value.trim()) { say('s-msg', t('s_e_body'), 'err'); return; }
    var miss = sKeys().filter(function (k) { return !(sValues[k] || '').trim(); }).map(labelOf);
    if (miss.length) { say('s-msg', t('s_e_fields', { f: miss.join(', ') }), 'err'); return; }
    if ($('s-files').value.trim() && sFilesBusy) { say('s-msg', t('s_e_files_busy'), 'err'); return; }
    if (sFilesBad) { say('s-msg', t('s_e_files_bad'), 'err'); return; }
    if (sUps.some(function (u) { return u.status === 'busy'; })) { say('s-msg', t('s_e_uploading'), 'err'); return; }
    var lm = limitMsg();
    if (lm) { say('s-msg', lm, 'err'); return; }
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
        sHistStale = true;
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
    sUps = []; sDriveCount = 0; sDriveBytes = 0; if ($('s-ups')) renderUps();
    sValues = {}; sShape = ''; sDirty = false; sDone = false; sFilesBad = false; sFilesBusy = false; sMapsAuto = '';
    sKey = newKey();
    if ($('s-fields')) $('s-fields').innerHTML = '';
    if ($('s-filelist')) $('s-filelist').innerHTML = '';
    if ($('s-new')) $('s-new').hidden = true;
    if ($('sf')) lockUi($('sf'), false);
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
    $('btn-refresh').addEventListener('click', function () { if (tab === 'jadwal') reloadJadwalView(); else if (tab === 'catatan') loadCatatan(); else refresh(); });
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
    $('s-write').addEventListener('click', showCompose);
    document.querySelectorAll('.vb').forEach(function (b) { b.addEventListener('click', function () { setView(b.getAttribute('data-view')); }); });
    $('cal-prev').addEventListener('click', function () { calAnchor = calStep(-1); loadCal(); });
    $('cal-next').addEventListener('click', function () { calAnchor = calStep(1); loadCal(); });
    $('cal-today').addEventListener('click', function () { calAnchor = todayIso(); loadCal(); });
    ['f-date', 'f-start', 'f-end'].forEach(function (id) { $(id).addEventListener('input', schedClash); $(id).addEventListener('change', schedClash); });
    window.addEventListener('resize', function () { clearTimeout(window.__rz); window.__rz = setTimeout(renderCal, 200); });
    $('s-pick').addEventListener('click', function () { $('s-file').click(); });
    $('s-file').addEventListener('change', function () { addFiles($('s-file').files); $('s-file').value = ''; });
    ['dragenter', 'dragover'].forEach(function (n) { $('s-drop').addEventListener(n, function (e) { e.preventDefault(); $('s-drop').classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (n) { $('s-drop').addEventListener(n, function (e) { e.preventDefault(); $('s-drop').classList.remove('over'); }); });
    $('s-drop').addEventListener('drop', function (e) { if (e.dataTransfer && e.dataTransfer.files) addFiles(e.dataTransfer.files); });
    $('s-back').addEventListener('click', function () { if (!sBusy) showSuratList(); });
    $('d-close').addEventListener('click', closeDetail);
    $('v-close').addEventListener('click', closeMail);
    $('dsheet').addEventListener('click', function (e) { if (e.target === $('dsheet')) closeDetail(); });
    $('vsheet').addEventListener('click', function (e) { if (e.target === $('vsheet')) closeMail(); });
    $('sf').addEventListener('submit', function (e) { e.preventDefault(); });
    resetSurat(true);
    $('n-add').addEventListener('click', function () { openNote(null); });
    $('n-q').addEventListener('input', renderNotes);
    $('nf').addEventListener('submit', submitNote);
    $('nf-cancel').addEventListener('click', closeNote);
    $('nsheet').addEventListener('click', function (e) { if (e.target === $('nsheet')) closeNote(); });
    $('j-add').addEventListener('click', function () { openForm(null); });
    $('jf').addEventListener('submit', submitForm);
    $('jf-cancel').addEventListener('click', closeForm);
    $('sheet').addEventListener('click', function (e) { if (e.target === $('sheet')) closeForm(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (!$('sheet').hidden) closeForm(); else if (!$('nsheet').hidden) closeNote(); else if (!$('dsheet').hidden) closeDetail(); else if (!$('vsheet').hidden) closeMail(); } });
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
