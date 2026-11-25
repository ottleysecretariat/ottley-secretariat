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
      tab_kelas: 'Kelas', kelas_title: 'Kelas', kelas_sub: 'Jadwal kuliah per semester. Pindah hari atau ganti online/offline tinggal satu tombol.', k_add: 'Tambah mata kuliah',
      k_new: 'Mata kuliah baru', k_f_name: 'Nama mata kuliah', k_f_lect: 'Dosen', k_f_room: 'Ruang', k_f_mode: 'Mode', k_offline: 'Offline', k_online: 'Online',
      k_f_remind: 'Pengingat (menit sebelum)', k_noremind: 'Tanpa pengingat', k_f_slots: 'Hari & jam kuliah', k_f_day: 'Hari', k_addslot: '+ Tambah hari lain',
      k_f_from: 'Mulai tanggal', k_f_to: 'Sampai tanggal', k_f_skip: 'Libur & ujian (dilewati)', k_skip_hint: 'Dari Kalender Akademik 2026/2027. Hilangkan centang kalau tetap ada kelas.',
      k_f_notes: 'Catatan (opsional)', k_count: '{n} pertemuan akan dibuat (ketuk ✕ untuk melewatkan satu tanggal)', k_count0: 'Belum ada pertemuan. Pilih hari, jam, dan periode.', k_rm: 'Hapus',
      k_makeup: 'Make-up Class', k_m_date: 'Tanggal baru', k_m_moved: 'Pindahkan ke tanggal/jam baru', k_m_msg: 'Pesan untuk dibagikan', k_copy: 'Salin pesan', k_copied: 'Pesan disalin.',
      k_none: 'Belum ada mata kuliah. Ketuk "Tambah mata kuliah".', k_next: 'Berikutnya', k_left: '{n} pertemuan lagi', k_done: 'Tidak ada pertemuan mendatang.', k_sessions: 'Lihat pertemuan', k_hide: 'Sembunyikan',
      k_stop: 'Hentikan', k_stop_confirm: 'Batalkan semua pertemuan {x} dari hari ini ke depan?', k_to_online: 'Jadikan online', k_to_offline: 'Jadikan offline', k_at: 'pukul',
      k_saving: 'Menyimpan...', k_saving_long: 'Menyimpan dan memasukkan ke Google Calendar. Bisa sampai 1 menit, jangan ditutup.', k_saved: '{n} pertemuan tersimpan.', k_made: 'Make-up tersimpan.', k_changed: 'Mode diubah.', k_stopped: 'Mata kuliah dihentikan.',
      k_sync_err: 'Tersimpan di Sheet, tapi sinkron ke Google Calendar belum selesai. Akan dilanjutkan otomatis.',
      k_v_name: 'Nama mata kuliah belum diisi.', k_v_slots: 'Isi jam mulai untuk setiap hari kuliah.', k_v_none: 'Tidak ada tanggal yang cocok. Cek hari dan periode.', k_v_when: 'Isi tanggal dan jam baru.', k_v_end: 'Jam selesai harus setelah jam mulai.',
      k_where_on: 'secara online', k_where_room: 'di ruang {r}', k_where_off: 'secara offline',
      k_msg_move: 'Halo, info perubahan jadwal: kelas {n} yang semula {a} dipindah (Make-up Class) menjadi {b}, {w}. Terima kasih.',
      k_msg_mode: 'Halo, info perubahan: kelas {n} pada {a} dilaksanakan {w}. Terima kasih.',
      tab_amb: 'Student Ambassador', amb_title: 'Student Ambassador', amb_sub: 'Penugasan ke sekolah: packing H-1, jadwal kegiatan, dan pengingat PUIS jam 18:00 dibuat otomatis.', a_add: 'Tambah penugasan',
      a_new: 'Penugasan baru', a_edit: 'Ubah penugasan', a_f_school: 'Nama sekolah', a_f_city: 'Kota / daerah', a_f_type: 'Jenis tujuan', a_in: 'Dalam kota (Jabodetabek)', a_out: 'Luar kota', a_in_s: 'Dalam kota', a_out_s: 'Luar kota',
      a_type_hint: 'Otomatis dari kota. Jabodetabek = dalam kota, selain itu luar kota (bisa lebih dari 1 hari).', a_f_maps: 'Link Google Maps sekolah (opsional)', a_f_purpose: 'Kegiatan (Purpose)', a_p_pres: 'Presentasi', a_p_both: 'Edufair & Presentasi', a_p_other: 'Lainnya (isi sendiri)', a_f_assign: 'Ditugaskan oleh (Assign By)',
      a_f_from: 'Tanggal', a_f_to: 'Sampai tanggal', a_f_partners: 'Partner', a_addp: '+ Tambah partner', a_pname: 'Nama', a_pphone: 'No. WhatsApp', a_f_lodge: 'Penginapan', a_l_name: 'Nama penginapan', a_l_addr: 'Alamat penginapan', a_l_maps: 'Link Google Maps penginapan',
      a_info: 'Akan dibuat {n} jadwal: packing H-1 di Ruang Marketing, kegiatan {d} hari, dan pengingat PUIS jam 18:00 tiap hari kegiatan.', a_none: 'Belum ada penugasan di sini.', a_puis: 'Salin isian PUIS', a_cancel: 'Batalkan',
      a_cancel_ask: 'Batalkan penugasan ke {x}? Tulis alasan (boleh kosong):', a_saved: '{n} jadwal dibuat.', a_cancelled: 'Penugasan dibatalkan.', a_lodging: 'Penginapan', a_maps: 'Buka Maps', a_by: 'Ditugaskan oleh', a_copied: 'Isian PUIS disalin.',
      a_badge_cx: 'Dibatalkan', a_reason: 'Alasan', a_v_school: 'Nama sekolah belum diisi.', a_v_date: 'Pilih tanggal kegiatan.', a_v_start: 'Isi jam mulai (dipakai untuk isian PUIS).', a_v_to: 'Tanggal selesai harus sama atau setelah tanggal mulai.', t_sync_warn: 'Tersimpan di Sheet, tapi sinkron ke Google Calendar belum selesai. Akan dilanjutkan otomatis.',
      k_l_ranges: 'Tanggal (bisa lebih dari satu rentang)', k_l_addr: '+ Tambah rentang tanggal', k_l_v_order: 'Tanggal akhir harus sama atau setelah tanggal mulai.',
      k_libur: 'Kelola libur', k_libur_t: 'Libur & semester', k_libur_sub: 'Dipakai saat membuat jadwal kelas. Ganti semester: tambahkan tanggal baru di sini.', k_l_label: 'Keterangan', k_l_to: 'Sampai tanggal', k_l_kind: 'Jenis',
      kind_libur: 'Libur', kind_ujian: 'Ujian', kind_sem_break: 'Libur semester', kind_semester: 'Periode semester', k_l_skip: 'Kelas dilewati', k_l_new: 'Baru', k_l_add_t: 'Tambah', k_l_edit_t: 'Ubah',
      k_l_skip_yes: 'dilewati', k_l_skip_no: 'tetap masuk', k_clash_t: 'Cek jadwal yang bentrok libur', k_clash_sub: 'Mencari pertemuan kelas mendatang yang jatuh di tanggal libur.', k_clash_btn: 'Cek sekarang', k_clash_none: 'Tidak ada pertemuan yang bentrok libur.',
      k_clash_cancel: 'Batalkan {n} pertemuan ini', k_clash_done: '{n} pertemuan dibatalkan.', k_l_saved: 'Tersimpan.', k_l_deleted: 'Dihapus.', k_l_del_confirm: 'Hapus "{x}"?', k_l_v: 'Isi keterangan dan tanggal mulai.', k_edit: 'Ubah', k_del: 'Hapus',
      k_att_t: 'Kehadiran', k_att_status: 'Status', k_att_reason: 'Keterangan (opsional)', k_att_present: 'Tandai hadir', att_absent: 'Absent', att_sakit: 'Sakit', att_izin: 'Izin', k_att_btn: 'Tidak hadir', k_att_edit: 'Ubah kehadiran', k_att_saved: 'Kehadiran disimpan.',
      k_l_ranges: 'Rentang tanggal', k_l_addr: '+ Tambah rentang tanggal', k_edit_t: 'Ubah mata kuliah', k_edit_hint: 'Perubahan berlaku untuk pertemuan dari hari ini ke depan. Pertemuan yang sudah dipindah atau diubah mode-nya tetap.', k_updated: '{n} pertemuan diperbarui.',
      k_noclass: 'Tidak ada kelas', k_noclass_ok: 'Pertemuan dibatalkan (tidak ada kelas).', k_reopen: 'Aktifkan lagi', k_reopened: 'Pertemuan diaktifkan lagi.',
      tab_kontak: 'Kontak', kontak_sub: 'Buku kontak dengan gelar. Dipakai untuk mengisi penerima dan salam pembuka surat.', c_add: 'Tambah kontak', c_search: 'Cari kontak', c_new: 'Kontak baru', c_edit: 'Ubah kontak',
      c_f_name: 'Nama (tanpa gelar)', c_f_title: 'Sapaan', c_f_front: 'Gelar depan', c_f_back: 'Gelar belakang', c_full: 'Ditulis di surat:', c_f_email: 'Email', c_f_org: 'Organisasi', c_f_role: 'Jabatan', c_f_phone: 'No. HP / WhatsApp',
      c_none: 'Belum ada kontak. Ketuk "Tambah kontak".', c_nomatch: 'Tidak ada kontak yang cocok.', c_none_pk: 'Belum ada kontak. Tambahkan dulu di tab Kontak.', c_no_email: '(tanpa email)', c_write: 'Tulis surat',
      c_saved: 'Kontak tersimpan.', c_deleted: 'Kontak dihapus.', c_del_confirm: 'Hapus kontak {x}?', c_v_name: 'Nama belum diisi.',
      s_contacts: 'Pilih dari kontak', pk_title: 'Pilih kontak', pk_to: 'Masukkan ke Kepada', pk_cc: 'Masukkan ke Cc', pk_none: 'Centang minimal satu kontak yang punya email.',
      s_sched: 'Jadwalkan pengiriman', s_sd: 'Tanggal kirim', s_st: 'Jam kirim (WIB)', s_sched_hint: 'Dikirim otomatis sekitar 0\u201310 menit setelah jam ini. Salam pembuka mengikuti waktu kirim.',
      s_schedule: 'Jadwalkan', s_sched_confirm: 'Klik lagi untuk menjadwalkan ke {to}', s_ok_sched: 'Terjadwal. Surat ke {to} akan dikirim sekitar {at} WIB.', s_e_sched: 'Pilih tanggal dan jam kirim.', s_e_sched_past: 'Waktu kirim harus di masa depan.',
      sq_title: 'Terjadwal', sq_at: 'dikirim sekitar {at}', sq_sending: 'sedang dikirim', sq_failed: 'gagal', sq_cancel: 'Batalkan', sq_dismiss: 'Buang',
      s_rsvp: 'Minta konfirmasi kehadiran (RSVP)', s_rsvp_by: 'Batas menjawab (opsional)', s_rsvp_hint: 'Tiap penerima dapat email sendiri dengan tautan unik. Cc tidak bisa dipakai bersama RSVP. Surat tes memakai tautan contoh.',
      rv_title: 'Balasan RSVP', rv_yes: 'Hadir', rv_no: 'Tidak hadir', rv_maybe: 'Mungkin', rv_wait: 'Menunggu',
      qa_ph: 'Tambah cepat: "Rapat dengan Pak Budi besok jam 3 sore di Kantor"', qa_go: 'Isi form', qa_empty: 'Tulis dulu kalimatnya.', qa_read: 'Terbaca: {x}. Cek dulu lalu simpan.', qa_nodate: 'tanggal tidak terbaca (diisi hari ini)', qa_notime: 'jam tidak terbaca', qa_date: 'tanggal', qa_time: 'jam', qa_loc: 'tempat',
      s_ics: 'Lampirkan undangan kalender (.ics) dari jadwal terkait', s_e_ics: 'Pilih jadwal terkait dulu untuk melampirkan undangan kalender.',
      tab_meeting: 'Meeting', meet_title: 'Meeting', meet_sub: 'Meeting online atau offline. Yang online otomatis dapat link Google Meet sesuai jamnya.', m_add: 'Tambah meeting', m_new: 'Meeting baru', m_edit: 'Ubah meeting',
      m_f_event: 'Nama acara', m_f_mode: 'Jenis', m_online: 'Online', m_offline: 'Offline', m_online_hint: 'Link Google Meet dibuat otomatis setelah disimpan.', m_f_people: 'Peserta', m_addp: 'Tambah peserta', m_pname: 'Nama', m_pemail: 'Email (opsional)',
      m_invite: 'Kirim undangan Google Calendar ke peserta yang punya email', m_title_prev: 'Judul di kalender:', m_none: 'Belum ada meeting di sini.', m_with: 'Peserta', m_nolink: 'Link Meet belum ada', m_join: 'Gabung', m_copy: 'Salin link', m_copied: 'Link Meet disalin.',
      m_mklink: 'Buat link Meet', m_making: 'Membuat link Meet\u2026', m_made: 'Link Meet dibuat.', m_invite_mail: 'Tulis undangan', m_saving: 'Menyimpan dan membuat link Meet\u2026', m_saved: 'Meeting tersimpan.', m_v_event: 'Nama acara belum diisi.', m_meet_err: 'Meeting tersimpan, tapi link Meet belum jadi: ', btn_remove: 'Hapus',
      todo_placeholder: '',
      tab_todo: 'To-do', todo_title: 'To-do', todo_sub: 'Yang harus dikerjakan. Dua tanggal, keduanya opsional: kapan mau dikerjakan dan deadline sebenarnya.', td_add: 'Tambah detail', td_ph: 'Tulis tugas lalu Enter (di tab Hari ini otomatis untuk hari ini)', td_quick: 'Tambah',
      td_today: 'Hari ini', td_all: 'Semua', td_done: 'Selesai', td_g_late: 'Terlambat', td_g_today: 'Hari ini', td_g_next: 'Mendatang', td_g_none: 'Tanpa tanggal', td_none: 'Belum ada tugas.', td_none_today: 'Tidak ada tugas untuk hari ini.', td_none_done: 'Belum ada tugas selesai.',
      td_new: 'Tugas baru', td_edit: 'Ubah tugas', td_f_title: 'Tugas', td_f_plan: 'Mau dikerjakan (opsional)', td_f_due: 'Deadline sebenarnya (opsional)', td_f_hint: 'Tugas muncul di Hari ini mulai tanggal "mau dikerjakan", atau saat deadline tiba. Keduanya juga masuk ke email briefing pagi.',
      td_plan: 'Dikerjakan', td_due: 'Deadline', td_mark: 'Tandai selesai', td_del_confirm: 'Hapus tugas "{x}"?', td_v_title: 'Tugas belum ditulis.', td_v_order: 'Tanggal mau dikerjakan tidak boleh setelah deadline.',
      p_pattern: 'Pola', p_one: 'Satu hari', p_multi: 'Beberapa hari', p_repeat: 'Berulang', p_wd: 'Hari dalam seminggu', p_from: 'Mulai tanggal', p_to: 'Sampai tanggal', p_make: 'Buat daftar hari', p_add: '+ Tambah hari', p_loc_day: 'Tempat hari ini (opsional)', p_count: '{n} hari akan dibuat. Tiap hari bisa diubah jam dan tempatnya.', p_count0: 'Belum ada hari.', p_need2: 'Isi minimal 2 hari.', p_need1: 'Belum ada hari. Pilih hari lalu ketuk Buat daftar hari.', p_nodate: 'Ada hari yang tanggalnya kosong.', p_dup: 'Ada dua entri di tanggal dan jam yang sama.', p_saved: '{n} entri jadwal dibuat.', p_cancel_series: 'Batalkan seri', p_confirm_series: 'Batalkan semua entri seri ini (mulai hari ini)?', p_series_done: '{n} entri dibatalkan.', p_rm: 'Hapus hari', menu: 'Menu',

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
      tab_kelas: 'Classes', kelas_title: 'Classes', kelas_sub: 'Your course timetable. Moving a class or switching online/offline is one tap.', k_add: 'Add a course',
      k_new: 'New course', k_f_name: 'Course name', k_f_lect: 'Lecturer', k_f_room: 'Room', k_f_mode: 'Mode', k_offline: 'Offline', k_online: 'Online',
      k_f_remind: 'Reminder (minutes before)', k_noremind: 'No reminder', k_f_slots: 'Days & times', k_f_day: 'Day', k_addslot: '+ Add another day',
      k_f_from: 'From', k_f_to: 'Until', k_f_skip: 'Holidays & exams (skipped)', k_skip_hint: 'From the 2026/2027 Academic Calendar. Untick if classes still run.',
      k_f_notes: 'Notes (optional)', k_count: '{n} sessions will be created (tap ✕ to skip a date)', k_count0: 'No sessions yet. Pick days, times and a period.', k_rm: 'Remove',
      k_makeup: 'Make-up Class', k_m_date: 'New date', k_m_moved: 'Move to a new date/time', k_m_msg: 'Message to share', k_copy: 'Copy message', k_copied: 'Message copied.',
      k_none: 'No courses yet. Tap "Add a course".', k_next: 'Next', k_left: '{n} sessions left', k_done: 'No upcoming sessions.', k_sessions: 'View sessions', k_hide: 'Hide',
      k_stop: 'Stop', k_stop_confirm: 'Cancel all sessions of {x} from today onward?', k_to_online: 'Make online', k_to_offline: 'Make offline', k_at: 'at',
      k_saving: 'Saving...', k_saving_long: 'Saving and adding to Google Calendar. This can take up to a minute, please keep this open.', k_saved: '{n} sessions saved.', k_made: 'Make-up saved.', k_changed: 'Mode changed.', k_stopped: 'Course stopped.',
      k_sync_err: 'Saved to the Sheet, but the Google Calendar sync is not finished. It will continue automatically.',
      k_v_name: 'Course name is empty.', k_v_slots: 'Set a start time for every class day.', k_v_none: 'No matching dates. Check days and period.', k_v_when: 'Fill in the new date and time.', k_v_end: 'End time must be after start time.',
      k_where_on: 'online', k_where_room: 'in room {r}', k_where_off: 'offline',
      k_msg_move: 'Hi, schedule change: the {n} class originally on {a} is moved (Make-up Class) to {b}, {w}. Thank you.',
      k_msg_mode: 'Hi, update: the {n} class on {a} will be held {w}. Thank you.',
      tab_amb: 'Student Ambassador', amb_title: 'Student Ambassador', amb_sub: 'School assignments: the day-before packing, the event itself and a 6 PM PUIS reminder are created automatically.', a_add: 'Add assignment',
      a_new: 'New assignment', a_edit: 'Edit assignment', a_f_school: 'School name', a_f_city: 'City / area', a_f_type: 'Destination type', a_in: 'In town (Greater Jakarta)', a_out: 'Out of town', a_in_s: 'In town', a_out_s: 'Out of town',
      a_type_hint: 'Detected from the city. Greater Jakarta = in town, anywhere else = out of town (can span several days).', a_f_maps: 'School Google Maps link (optional)', a_f_purpose: 'Purpose', a_p_pres: 'Presentation', a_p_both: 'Edufair & Presentation', a_p_other: 'Other (type your own)', a_f_assign: 'Assigned by (Assign By)',
      a_f_from: 'Date', a_f_to: 'Until', a_f_partners: 'Partners', a_addp: '+ Add partner', a_pname: 'Name', a_pphone: 'WhatsApp no.', a_f_lodge: 'Accommodation', a_l_name: 'Accommodation name', a_l_addr: 'Accommodation address', a_l_maps: 'Accommodation Google Maps link',
      a_info: '{n} items will be created: packing the day before at the Marketing Room, {d} event day(s), and a 6 PM PUIS reminder each event day.', a_none: 'No assignments here yet.', a_puis: 'Copy PUIS entries', a_cancel: 'Cancel',
      a_cancel_ask: 'Cancel the assignment to {x}? Enter a reason (optional):', a_saved: '{n} items created.', a_cancelled: 'Assignment cancelled.', a_lodging: 'Accommodation', a_maps: 'Open Maps', a_by: 'Assigned by', a_copied: 'PUIS entries copied.',
      a_badge_cx: 'Cancelled', a_reason: 'Reason', a_v_school: 'School name is empty.', a_v_date: 'Pick the event date.', a_v_start: 'Set a start time (used for the PUIS entry).', a_v_to: 'End date must be on or after the start date.', t_sync_warn: 'Saved to the Sheet, but the Google Calendar sync is not finished. It will continue automatically.',
      k_l_ranges: 'Dates (you can add several ranges)', k_l_addr: '+ Add another date range', k_l_v_order: 'End date must be on or after the start date.',
      k_libur: 'Manage holidays', k_libur_t: 'Holidays & semesters', k_libur_sub: 'Used when creating class schedules. New semester: add the new dates here.', k_l_label: 'Label', k_l_to: 'Until', k_l_kind: 'Type',
      kind_libur: 'Holiday', kind_ujian: 'Exam', kind_sem_break: 'Semester break', kind_semester: 'Semester period', k_l_skip: 'Skip classes', k_l_new: 'New', k_l_add_t: 'Add', k_l_edit_t: 'Edit',
      k_l_skip_yes: 'skipped', k_l_skip_no: 'classes still run', k_clash_t: 'Check classes on holidays', k_clash_sub: 'Finds upcoming class sessions that fall on a holiday.', k_clash_btn: 'Check now', k_clash_none: 'No sessions clash with a holiday.',
      k_clash_cancel: 'Cancel these {n} sessions', k_clash_done: '{n} sessions cancelled.', k_l_saved: 'Saved.', k_l_deleted: 'Deleted.', k_l_del_confirm: 'Delete "{x}"?', k_l_v: 'Fill in the label and start date.', k_edit: 'Edit', k_del: 'Delete',
      k_att_t: 'Attendance', k_att_status: 'Status', k_att_reason: 'Reason (optional)', k_att_present: 'Mark present', att_absent: 'Absent', att_sakit: 'Sick', att_izin: 'Excused', k_att_btn: 'Not attending', k_att_edit: 'Edit attendance', k_att_saved: 'Attendance saved.',
      k_l_ranges: 'Date ranges', k_l_addr: '+ Add date range', k_edit_t: 'Edit course', k_edit_hint: 'Changes apply to sessions from today onward. Sessions that were moved or switched online/offline keep their settings.', k_updated: '{n} sessions updated.',
      k_noclass: 'No class', k_noclass_ok: 'Session cancelled (no class).', k_reopen: 'Reactivate', k_reopened: 'Session reactivated.',
      tab_kontak: 'Contacts', kontak_sub: 'Address book with titles. Used to fill recipients and the greeting of letters.', c_add: 'Add contact', c_search: 'Search contacts', c_new: 'New contact', c_edit: 'Edit contact',
      c_f_name: 'Name (no titles)', c_f_title: 'Salutation', c_f_front: 'Prefix title', c_f_back: 'Suffix title', c_full: 'Written in letters as:', c_f_email: 'Email', c_f_org: 'Organization', c_f_role: 'Position', c_f_phone: 'Phone / WhatsApp',
      c_none: 'No contacts yet. Tap "Add contact".', c_nomatch: 'No matching contacts.', c_none_pk: 'No contacts yet. Add some in the Contacts tab first.', c_no_email: '(no email)', c_write: 'Write letter',
      c_saved: 'Contact saved.', c_deleted: 'Contact deleted.', c_del_confirm: 'Delete contact {x}?', c_v_name: 'Name is empty.',
      s_contacts: 'Pick from contacts', pk_title: 'Pick contacts', pk_to: 'Add to To', pk_cc: 'Add to Cc', pk_none: 'Tick at least one contact that has an email.',
      s_sched: 'Schedule sending', s_sd: 'Send date', s_st: 'Send time (WIB)', s_sched_hint: 'Sent automatically about 0\u201310 minutes after this time. The greeting follows the send time.',
      s_schedule: 'Schedule', s_sched_confirm: 'Click again to schedule to {to}', s_ok_sched: 'Scheduled. The letter to {to} will be sent around {at} WIB.', s_e_sched: 'Pick a send date and time.', s_e_sched_past: 'Send time must be in the future.',
      sq_title: 'Scheduled', sq_at: 'sends around {at}', sq_sending: 'sending now', sq_failed: 'failed', sq_cancel: 'Cancel', sq_dismiss: 'Dismiss',
      s_rsvp: 'Request attendance confirmation (RSVP)', s_rsvp_by: 'Reply by (optional)', s_rsvp_hint: 'Each recipient gets their own email with a unique link. Cc cannot be combined with RSVP. Test emails use a sample link.',
      rv_title: 'RSVP replies', rv_yes: 'Attending', rv_no: 'Not attending', rv_maybe: 'Maybe', rv_wait: 'Waiting',
      qa_ph: 'Quick add: "Meeting with Mr. Budi tomorrow at 3pm at the office"', qa_go: 'Fill form', qa_empty: 'Type a sentence first.', qa_read: 'Read: {x}. Check it, then save.', qa_nodate: 'date not found (set to today)', qa_notime: 'time not found', qa_date: 'date', qa_time: 'time', qa_loc: 'place',
      s_ics: 'Attach calendar invite (.ics) from the linked schedule', s_e_ics: 'Pick a linked schedule first to attach a calendar invite.',
      tab_meeting: 'Meetings', meet_title: 'Meetings', meet_sub: 'Online or offline meetings. Online ones automatically get a Google Meet link for their time.', m_add: 'Add meeting', m_new: 'New meeting', m_edit: 'Edit meeting',
      m_f_event: 'Event name', m_f_mode: 'Type', m_online: 'Online', m_offline: 'Offline', m_online_hint: 'A Google Meet link is created automatically after saving.', m_f_people: 'Participants', m_addp: 'Add participant', m_pname: 'Name', m_pemail: 'Email (optional)',
      m_invite: 'Send Google Calendar invites to participants who have an email', m_title_prev: 'Calendar title:', m_none: 'No meetings here yet.', m_with: 'With', m_nolink: 'No Meet link yet', m_join: 'Join', m_copy: 'Copy link', m_copied: 'Meet link copied.',
      m_mklink: 'Create Meet link', m_making: 'Creating Meet link\u2026', m_made: 'Meet link created.', m_invite_mail: 'Write invitation', m_saving: 'Saving and creating the Meet link\u2026', m_saved: 'Meeting saved.', m_v_event: 'Event name is empty.', m_meet_err: 'Meeting saved, but the Meet link failed: ', btn_remove: 'Remove',
      todo_placeholder: '',
      tab_todo: 'To-do', todo_title: 'To-do', todo_sub: 'Things to get done. Two optional dates: when you plan to do it and the real deadline.', td_add: 'Add details', td_ph: 'Type a task and press Enter (on the Today tab it is set for today)', td_quick: 'Add',
      td_today: 'Today', td_all: 'All', td_done: 'Done', td_g_late: 'Overdue', td_g_today: 'Today', td_g_next: 'Upcoming', td_g_none: 'No date', td_none: 'No tasks yet.', td_none_today: 'Nothing to do today.', td_none_done: 'No completed tasks yet.',
      td_new: 'New task', td_edit: 'Edit task', td_f_title: 'Task', td_f_plan: 'Plan to do on (optional)', td_f_due: 'Actual deadline (optional)', td_f_hint: 'A task shows under Today from its "plan" date, or when the deadline arrives. Both also go into the morning briefing email.',
      td_plan: 'Plan', td_due: 'Deadline', td_mark: 'Mark done', td_del_confirm: 'Delete task "{x}"?', td_v_title: 'Task is empty.', td_v_order: 'The plan date cannot be after the deadline.',
      p_pattern: 'Pattern', p_one: 'One day', p_multi: 'Several days', p_repeat: 'Repeating', p_wd: 'Days of the week', p_from: 'From date', p_to: 'Until date', p_make: 'Generate days', p_add: '+ Add day', p_loc_day: 'Place for this day (optional)', p_count: '{n} days will be created. You can change each day\'s time and place.', p_count0: 'No days yet.', p_need2: 'Add at least 2 days.', p_need1: 'No days yet. Pick weekdays, then tap Generate days.', p_nodate: 'A day has no date.', p_dup: 'Two entries share the same date and time.', p_saved: '{n} schedule entries created.', p_cancel_series: 'Cancel series', p_confirm_series: 'Cancel every entry of this series (from today)?', p_series_done: '{n} entries cancelled.', p_rm: 'Remove day', menu: 'Menu',

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
    document.querySelectorAll('[data-i18n-ph]').forEach(function (e) { e.placeholder = t(e.getAttribute('data-i18n-ph')); });
    $('btn-lang').textContent = state.lang === 'id' ? 'EN' : 'ID';
    renderGoogleButton();
    if (state.session && !$('view-app').hidden) { renderConn(lastPing); renderDash(lastDash); renderJadwal(); if (!$('sheet').hidden) buildForm(formState); renderSuratLang(); renderNotes(); renderHist(); setUploadLabel(); renderUps(); renderCal(); renderKelas(); renderAmb(); renderMeeting(); renderTodo(); (function () { var tl = document.querySelector('.tab[data-tab="' + tab + '"] span'); if (tl) $('top-tab').textContent = tl.textContent; })(); renderKontak(); renderPk(); renderQueue(); renderRsvp(); }
  }

  function setLang(l) {
    state.lang = l === 'en' ? 'en' : 'id';
    lsSet(KEY_LANG, state.lang);
    var sv = lsGet('ottley.view');
    calMode = 'week';
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
    $('btn-menu').hidden = view !== 'view-app'; if (view !== 'view-app') setMenu(false);
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
    lastPing = null; lastDash = null; jData = null; calData = null; calCache = {}; kData = null; kSess = {}; kLibur = null; aData = null; mData = null; tdData = null; cData = null; sQ = null; rvData = null; sCtx = null; nData = null; sHist = null; sHistStale = true; sMode = 'list'; closeDetail(); closeMail(); closeForm(); closeNote(); resetSurat(true);
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

  function setMenu(open) {
    var nav = $('nav'), mb = $('btn-menu');
    document.body.classList.toggle('menu-open', !!open);
    $('nav-ov').hidden = !open;
    mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var on = nav.querySelector('.tab.on'); if (on) on.focus(); } 
    syncScroll();
    if (open) document.body.style.overflow = 'hidden';
  }
  function switchTab(name) {
    var prevTab = tab;
    tab = name;
    setMenu(false);
    var tl = document.querySelector('.tab[data-tab="' + name + '"] span'); if (tl) $('top-tab').textContent = tl.textContent;
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === name); });
    $('tab-home').hidden = name !== 'home';
    $('tab-jadwal').hidden = name !== 'jadwal';
    $('tab-surat').hidden = name !== 'surat';
    $('tab-catatan').hidden = name !== 'catatan';
    $('tab-kelas').hidden = name !== 'kelas';
    $('tab-amb').hidden = name !== 'amb';
    $('tab-kontak').hidden = name !== 'kontak';
    $('tab-meeting').hidden = name !== 'meeting';
    $('tab-todo').hidden = name !== 'todo';
    if (name === 'todo') loadTodo();
    if (name === 'meeting') loadMeeting();
    if (name === 'kontak') loadKontak();
    if (name === 'amb') loadAmb();
    if (name === 'kelas') loadKelas();
    if (name === 'jadwal') { if (prevTab !== 'jadwal') calMode = 'week'; setViewUi(); reloadJadwalView(); }
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
        if (calMode !== 'list') { loadCal(true); return; }
        return api('jadwalList', { scope: jScope }).then(function (d) { jData = d; renderJadwal(); });
      })
      .catch(function (e) { btn.disabled = false; if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('j-msg', errText(e), 'err'); })
      .then(function () { lockBox($('j-list'), false); });
  }

  // ---------- kelas ----------
  var kLibur = null;
  var kData = null, kSess = {}, kOpen = {}, kForm = null, kSaving = false, mForm = null, mSaving = false;

  function modeLabel(m) { return t(m === 'Online' ? 'k_online' : 'k_offline'); }
  function stripMk(s) { return String(s || '').replace(/^\[Make-up\]\s*/i, ''); }
  function whenText(date, start, end) {
    return dayLabel(date.replace(/-/g, '')) + (start ? ' ' + t('k_at') + ' ' + start + (end ? '–' + end : '') : '');
  }

  function loadKelas() {
    if (!kData && !$('k-msg').textContent) say('k-msg', t('loading'));
    api('kelasList', {})
      .then(function (d) { kData = d; kSess = {}; if ($('k-msg').textContent === t('loading')) say('k-msg', ''); renderKelas(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('k-msg', errText(e), 'err'); });
  }

  function kChanged() { kData = null; kSess = {}; calCache = {}; calData = null; jData = null; homeStale = true; }

  function renderKelas() {
    var box = $('k-list');
    if (!box) return;
    box.innerHTML = '';
    if (!kData) return;
    if (!kData.courses.length) { box.appendChild(el('p', 'tiny', t('k_none'))); return; }
    kData.courses.forEach(function (c) {
      var card = el('div', 'kc');
      card.appendChild(el('h3', '', c.name));
      var meta = el('p', 'meta', [c.lecturer, c.room].filter(Boolean).join(' · ') + ' ');
      meta.appendChild(el('span', 'badge' + (c.mode === 'Online' ? ' on' : ''), modeLabel(c.mode)));
      card.appendChild(meta);
      if (c.slots) card.appendChild(el('p', 'meta', c.slots));
      card.appendChild(el('p', 'next', c.next ? t('k_next') + ': ' + whenText(c.next.date, c.next.start, c.next.end) + ' · ' + t('k_left', { n: c.upcoming }) : t('k_done')));
      var bar = el('div', 'bar');
      var open = !!kOpen[c.id];
      var b1 = el('button', 'btn ghost sm', t(open ? 'k_hide' : 'k_sessions')); b1.type = 'button';
      b1.addEventListener('click', function () { kOpen[c.id] = !kOpen[c.id]; renderKelas(); });
      var bu = el('button', 'btn ghost sm', t('k_edit')); bu.type = 'button';
      bu.addEventListener('click', function () { openUc(c); });
      var b2 = el('button', 'btn ghost sm', t('k_stop')); b2.type = 'button';
      b2.addEventListener('click', function () { stopKelas(c, b2); });
      bar.appendChild(b1); bar.appendChild(bu); bar.appendChild(b2);
      card.appendChild(bar);
      if (open) {
        var list = el('div', 'ks'); card.appendChild(list);
        if (kSess[c.id]) fillSessions(list, c, kSess[c.id]);
        else {
          list.appendChild(el('p', 'tiny', t('loading')));
          api('kelasSessions', { series: c.id }).then(function (d) { kSess[c.id] = d.items; if (kOpen[c.id]) { list.innerHTML = ''; fillSessions(list, c, d.items); } })
            .catch(function (e) { list.innerHTML = ''; list.appendChild(el('p', 'msg err', errText(e))); });
        }
      }
      box.appendChild(card);
    });
  }

  function fillSessions(list, c, items) {
    var from = isoAdd(kData.today, -21);
    var shown = items.filter(function (x) { return x.date >= from; });
    if (!shown.length) { list.appendChild(el('p', 'tiny', t('k_done'))); return; }
    shown.forEach(function (it) {
      var past = it.date < kData.today, cx = it.status === 'Batal';
      var row = el('div', 'ks-row'), w = el('div', 'w', whenText(it.date, it.start, it.end));
      var sm = el('small', '', cx ? '' : modeLabel(it.mode || c.mode) + (it.location && it.mode !== 'Online' ? ' · ' + it.location : ''));
      if (it.kind === 'Make-up') { sm.appendChild(document.createTextNode(' ')); sm.appendChild(el('span', 'badge mk', 'Make-up')); }
      if (cx) { sm.appendChild(el('span', 'badge cx', t('k_noclass'))); if (it.attNote) sm.appendChild(document.createTextNode(' ' + it.attNote)); }
      if (it.att) { sm.appendChild(document.createTextNode(' ')); sm.appendChild(el('span', 'badge cx', t('att_' + it.att.toLowerCase()))); if (it.attNote) sm.appendChild(document.createTextNode(' ' + it.attNote)); }
      w.appendChild(sm); row.appendChild(w);
      var bar = el('div', 'bar');
      var mkBtn = function (label, fn) { var b = el('button', 'btn ghost sm', label); b.type = 'button'; b.addEventListener('click', function () { fn(b); }); bar.appendChild(b); };
      if (cx) mkBtn(t('k_reopen'), function (b) { reopenSession(it, b); });
      else {
        if (!past) {
          mkBtn(t('k_makeup'), function () { openMakeup(it, c); });
          mkBtn(t((it.mode || c.mode) === 'Online' ? 'k_to_offline' : 'k_to_online'), function (b) { toggleMode(it, c, b); });
          mkBtn(t('k_noclass'), function (b) { noClass(it, b); });
        }
        mkBtn(t(it.att ? 'k_att_edit' : 'k_att_btn'), function () { openAtt(it, c); });
      }
      row.appendChild(bar);
      list.appendChild(row);
    });
  }

  function noClass(it, btn) {
    btn.disabled = true; say('k-msg', t('k_saving'));
    api('kelasCancelMany', { ids: [it.id] })
      .then(function (r) { kChanged(); say('k-msg', r.syncError ? t('k_sync_err') : t('k_noclass_ok'), r.syncError ? 'warn' : 'ok'); loadKelas(); })
      .catch(function (e) { btn.disabled = false; say('k-msg', errText(e), 'err'); });
  }
  function reopenSession(it, btn) {
    btn.disabled = true; say('k-msg', t('k_saving'));
    api('jadwalStatus', { id: it.id, status: 'Aktif' })
      .then(function (r) { kChanged(); say('k-msg', r.syncError ? t('k_sync_err') : t('k_reopened'), r.syncError ? 'warn' : 'ok'); loadKelas(); })
      .catch(function (e) { btn.disabled = false; say('k-msg', errText(e), 'err'); });
  }

  // ----- kehadiran -----
  var atForm = null;
  function openAtt(it, c) {
    atForm = { it: it, c: c };
    $('atf-info').textContent = stripMk(it.title) + ' — ' + whenText(it.date, it.start, it.end);
    $('atf-status').value = it.att || 'Absent'; $('atf-reason').value = it.attNote || '';
    $('atf-clear').hidden = !it.att; say('atf-msg', '');
    $('atsheet').hidden = false; document.body.style.overflow = 'hidden';
  }
  function closeAtt() { $('atsheet').hidden = true; atForm = null; syncScroll(); }
  function saveAtt(status) {
    if (!atForm || atForm.busy) return;
    atForm.busy = true; var form = $('atf'), c = atForm.c;
    lockUi(form, true, '.msg'); say('atf-msg', t('k_saving'));
    api('kelasAttend', { id: atForm.it.id, status: status, reason: status ? $('atf-reason').value.trim() : '' })
      .then(function () { lockUi(form, false, '.msg'); closeAtt(); if (c) delete kSess[c.id]; renderKelas(); say('k-msg', t('k_att_saved'), 'ok'); })
      .catch(function (e) { atForm.busy = false; lockUi(form, false, '.msg'); say('atf-msg', errText(e), 'err'); });
  }

  // ----- ubah mata kuliah -----
  var ucForm = null;
  function openUc(c) {
    ucForm = { c: c };
    $('ucf-name').value = c.name; $('ucf-lect').value = c.lecturer; $('ucf-room').value = c.room; $('ucf-mode').value = c.mode;
    say('ucf-msg', ''); $('ucsheet').hidden = false; document.body.style.overflow = 'hidden';
  }
  function closeUc() { $('ucsheet').hidden = true; ucForm = null; syncScroll(); }
  function submitUc(ev) {
    ev.preventDefault();
    if (!ucForm || ucForm.busy) return;
    var name = $('ucf-name').value.trim();
    if (!name) { say('ucf-msg', t('k_v_name'), 'err'); return; }
    ucForm.busy = true; var form = $('ucf'), c = ucForm.c;
    lockUi(form, true, '.msg'); say('ucf-msg', t('k_saving_long'));
    api('kelasUpdate', { series: c.id, name: name, lecturer: $('ucf-lect').value.trim(), room: $('ucf-room').value.trim(), mode: $('ucf-mode').value })
      .then(function (r) { lockUi(form, false, '.msg'); closeUc(); kChanged(); say('k-msg', r.syncError ? t('k_sync_err') : t('k_updated', { n: r.count }), r.syncError ? 'warn' : 'ok'); loadKelas(); })
      .catch(function (e) { ucForm.busy = false; lockUi(form, false, '.msg'); say('ucf-msg', errText(e), 'err'); });
  }

  // ----- kelola libur -----
  var lEditId = '';
  function openLibur() {
    $('lsheet').hidden = false; document.body.style.overflow = 'hidden';
    say('l-msg', ''); $('l-clash').innerHTML = ''; resetLf();
    api('liburList', {}).then(function (d) { kLibur = d.items; renderLiburList(); })
      .catch(function (e) { say('l-msg', errText(e), 'err'); });
  }
  function closeLibur() { $('lsheet').hidden = true; syncScroll(); }
  function renderLiburList() {
    var box = $('l-list'); box.innerHTML = '';
    (kLibur || []).forEach(function (h) {
      var row = el('div', 'lrow'), w = el('div', 'w', h.label);
      w.appendChild(el('small', '', fmtRange(h.from, h.to) + ' · ' + t(kindKey(h.kind)) + (h.kind === 'Semester' ? '' : ' · ' + t(h.skip ? 'k_l_skip_yes' : 'k_l_skip_no'))));
      row.appendChild(w);
      var bar = el('div', 'bar');
      var e = el('button', 'btn ghost sm', t('k_edit')); e.type = 'button'; e.addEventListener('click', function () { editLf(h); });
      var d = el('button', 'btn ghost sm', t('k_del')); d.type = 'button'; d.addEventListener('click', function () { delLibur(h, d); });
      bar.appendChild(e); bar.appendChild(d); row.appendChild(bar); box.appendChild(row);
    });
  }
  function kindKey(k) { return k === 'Ujian' ? 'kind_ujian' : k === 'Libur semester' ? 'kind_sem_break' : k === 'Semester' ? 'kind_semester' : 'kind_libur'; }
  function lfRanges() {
    return Array.prototype.map.call($('lf-ranges').querySelectorAll('.rrow'), function (r) { return { from: r.querySelector('[data-r=f]').value, to: r.querySelector('[data-r=t]').value }; });
  }
  function renderLfRanges(list) {
    var box = $('lf-ranges'); box.innerHTML = '';
    list.forEach(function (rg, i) {
      var row = el('div', 'rrow');
      var f1 = el('label', 'fl'); f1.appendChild(el('span', '', t('k_f_from'))); var i1 = el('input'); i1.type = 'date'; i1.value = rg.from; i1.setAttribute('data-r', 'f'); f1.appendChild(i1);
      var f2 = el('label', 'fl'); f2.appendChild(el('span', '', t('k_l_to'))); var i2 = el('input'); i2.type = 'date'; i2.value = rg.to; i2.setAttribute('data-r', 't'); f2.appendChild(i2);
      row.appendChild(f1); row.appendChild(f2);
      if (list.length > 1) {
        var x = el('button', 'btn ghost sm', '✕'); x.type = 'button'; x.setAttribute('aria-label', t('k_rm'));
        x.addEventListener('click', function () { var l = lfRanges(); l.splice(i, 1); renderLfRanges(l); });
        row.appendChild(x);
      }
      box.appendChild(row);
    });
  }
  function resetLf() {
    lEditId = ''; $('lf-title').textContent = t('k_l_add_t');
    $('lf-label').value = ''; renderLfRanges([{ from: '', to: '' }]);
    $('lf-kind').value = 'Libur'; $('lf-skip').checked = true;
  }
  function editLf(h) {
    lEditId = h.id; $('lf-title').textContent = t('k_l_edit_t');
    $('lf-label').value = h.label; renderLfRanges([{ from: h.from, to: h.to }]); $('lf-kind').value = h.kind; $('lf-skip').checked = h.skip;
    $('lf-label').focus();
  }
  function saveLibur(ev) {
    ev.preventDefault();
    var label = $('lf-label').value.trim(), ranges = lfRanges().filter(function (r) { return r.from; });
    if (!label || !ranges.length) { say('l-msg', t('k_l_v'), 'err'); return; }
    ranges = ranges.map(function (r) { return { from: r.from, to: r.to || r.from }; });
    var form = $('lf'); lockUi(form, true); say('l-msg', t('k_saving'));
    api('liburSave', { id: lEditId || undefined, label: label, ranges: ranges, kind: $('lf-kind').value, skip: $('lf-skip').checked })
      .then(function (d) { lockUi(form, false); kLibur = d.items; renderLiburList(); resetLf(); say('l-msg', t('k_l_saved'), 'ok'); })
      .catch(function (e) { lockUi(form, false); say('l-msg', errText(e), 'err'); });
  }
  function delLibur(h, btn) {
    if (!window.confirm(t('k_l_del_confirm', { x: h.label }))) return;
    btn.disabled = true;
    api('liburDelete', { id: h.id })
      .then(function (d) { kLibur = d.items; renderLiburList(); say('l-msg', t('k_l_deleted'), 'ok'); })
      .catch(function (e) { btn.disabled = false; say('l-msg', errText(e), 'err'); });
  }
  function checkClash() {
    var box = $('l-clash'); box.innerHTML = ''; say('l-msg', t('loading'));
    api('kelasHolidayClash', {}).then(function (d) {
      say('l-msg', '');
      if (!d.items.length) { box.appendChild(el('p', 'msg ok', t('k_clash_none'))); return; }
      d.items.forEach(function (x) {
        var row = el('div', 'lrow'), w = el('div', 'w', x.title + ' — ' + whenText(x.date, x.start, x.end));
        w.appendChild(el('small', '', x.holiday)); row.appendChild(w); box.appendChild(row);
      });
      var b = el('button', 'btn primary', t('k_clash_cancel', { n: d.items.length })); b.type = 'button';
      b.addEventListener('click', function () {
        b.disabled = true; say('l-msg', t('k_saving'));
        api('kelasCancelMany', { ids: d.items.map(function (x) { return x.id; }), reason: 'Libur' })
          .then(function (r) { kChanged(); box.innerHTML = ''; say('l-msg', r.syncError ? t('k_sync_err') : t('k_clash_done', { n: r.count }), r.syncError ? 'warn' : 'ok'); loadKelas(); })
          .catch(function (e) { b.disabled = false; say('l-msg', errText(e), 'err'); });
      });
      box.appendChild(b);
    }).catch(function (e) { say('l-msg', errText(e), 'err'); });
  }

  function toggleMode(it, c, btn) {
    var to = (it.mode || c.mode) === 'Online' ? 'Offline' : 'Online';
    btn.disabled = true; say('k-msg', t('k_saving'));
    api('kelasMakeup', { id: it.id, mode: to, room: c.room, key: newKey() })
      .then(function (r) { kChanged(); say('k-msg', r.syncError ? t('k_sync_err') : t('k_changed'), r.syncError ? 'warn' : 'ok'); loadKelas(); })
      .catch(function (e) { btn.disabled = false; say('k-msg', errText(e), 'err'); });
  }

  function stopKelas(c, btn) {
    if (!window.confirm(t('k_stop_confirm', { x: c.name }))) return;
    btn.disabled = true; say('k-msg', t('k_saving'));
    api('kelasStop', { series: c.id })
      .then(function (r) { kChanged(); say('k-msg', r.syncError ? t('k_sync_err') : t('k_stopped'), r.syncError ? 'warn' : 'ok'); loadKelas(); })
      .catch(function (e) { btn.disabled = false; say('k-msg', errText(e), 'err'); });
  }

  // ----- form mata kuliah -----
  function kWdOrder() { return [1, 2, 3, 4, 5, 6, 0]; }
  function renderSlots() {
    var box = $('kf-slots'); box.innerHTML = '';
    kForm.slots.forEach(function (s, i) {
      var row = el('div', 'kslot');
      var sel = el('select'); sel.setAttribute('data-k', 'wd');
      kWdOrder().forEach(function (w) { var o = el('option', '', DAYS[state.lang][w]); o.value = w; if (w === s.wd) o.selected = true; sel.appendChild(o); });
      var f1 = el('label', 'fl'); f1.appendChild(el('span', '', t('f_start'))); var i1 = el('input'); i1.type = 'time'; i1.value = s.start; i1.setAttribute('data-k', 'st'); f1.appendChild(i1);
      var f2 = el('label', 'fl'); f2.appendChild(el('span', '', t('f_end'))); var i2 = el('input'); i2.type = 'time'; i2.value = s.end; i2.setAttribute('data-k', 'en'); f2.appendChild(i2);
      var wrap = el('label', 'fl'); wrap.appendChild(el('span', '', t('k_f_day'))); wrap.appendChild(sel);
      row.appendChild(wrap); row.appendChild(f1); row.appendChild(f2);
      if (kForm.slots.length > 1) {
        var x = el('button', 'btn ghost sm x', '✕'); x.type = 'button'; x.setAttribute('aria-label', t('k_rm'));
        x.addEventListener('click', function () { readSlots(); kForm.slots.splice(i, 1); renderSlots(); kRecalc(); });
        row.appendChild(x);
      }
      box.appendChild(row);
    });
  }
  function readSlots() {
    var rows = $('kf-slots').querySelectorAll('.kslot');
    kForm.slots = Array.prototype.map.call(rows, function (r) {
      return { wd: +r.querySelector('[data-k=wd]').value, start: r.querySelector('[data-k=st]').value, end: r.querySelector('[data-k=en]').value };
    });
  }
  function fmtShortIso(iso) { var p = parseIso(iso); return p.d + ' ' + MONTHS[state.lang][p.m - 1].slice(0, 3); }
  function fmtRange(a, b) { return a === b ? fmtShortIso(a) : fmtShortIso(a) + ' – ' + fmtShortIso(b); }
  function ensureLibur(cb) {
    if (kLibur) { cb(); return; }
    api('liburList', {}).then(function (d) { kLibur = d.items; cb(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('k-msg', errText(e), 'err'); });
  }
  function holiIn(from, to) { return (kLibur || []).filter(function (h) { return h.kind !== 'Semester' && h.from <= to && h.to >= from; }); }
  function skipState(h) { var v = kForm.skipSt[h.id]; return v == null ? h.skip : v; }
  function renderSkip() {
    var box = $('kf-skip'); box.innerHTML = '';
    var from = $('kf-from').value, to = $('kf-to').value;
    if (!from || !to) return;
    holiIn(from, to).forEach(function (h) {
      var l = el('label', 'chip-c'), cb = el('input'); cb.type = 'checkbox'; cb.checked = skipState(h);
      cb.addEventListener('change', function () { kForm.skipSt[h.id] = cb.checked; kRecalc(true); });
      l.appendChild(cb); l.appendChild(document.createTextNode(' ' + h.label + ' (' + fmtRange(h.from, h.to) + ')'));
      box.appendChild(l);
    });
  }
  // Libur dilewati kalau ada baris yang dicentang, kecuali ada baris "tetap masuk" di tanggal yang sama
  function kSkipped(date) {
    var hs = (kLibur || []).filter(function (h) { return h.kind !== 'Semester' && date >= h.from && date <= h.to; });
    return hs.some(skipState) && !hs.some(function (h) { return !skipState(h); });
  }
  function kDates() {
    var from = $('kf-from').value, to = $('kf-to').value, out = [];
    if (!from || !to || from > to || !kForm.slots.length) return out;
    var d = from, guard = 0;
    while (d <= to && guard++ < 400) {
      var wd = wdOf(d);
      kForm.slots.forEach(function (s) { if (s.wd === wd && s.start && !kSkipped(d) && !kForm.removed[d + ' ' + s.start]) out.push({ date: d, start: s.start, end: s.end }); });
      d = isoAdd(d, 1);
    }
    return out;
  }
  function kRecalc(keepSkip) {
    readSlots();
    if (!keepSkip) renderSkip();
    var list = kDates();
    $('kf-count').textContent = list.length ? t('k_count', { n: list.length }) : t('k_count0');
    var box = $('kf-prev'); box.innerHTML = '';
    list.forEach(function (s) {
      var p = parseIso(s.date), chip = el('span', 'kp', DAYS[state.lang][wdOf(s.date)].slice(0, 3) + ' ' + p.d + '/' + p.m + ' ' + s.start);
      var x = el('button', '', '✕'); x.type = 'button'; x.setAttribute('aria-label', t('k_rm'));
      x.addEventListener('click', function () { kForm.removed[s.date + ' ' + s.start] = true; kRecalc(true); });
      chip.appendChild(x); box.appendChild(chip);
    });
    kForm.list = list;
  }
  function openKForm() {
    ensureLibur(function () {
      var today = todayIso(), from = isoAdd(today, 1);
      var sem = (kLibur || []).filter(function (h) { return h.kind === 'Semester' && h.to >= from; })[0];
      kForm = { slots: [{ wd: 1, start: '', end: '' }], skipSt: {}, removed: {}, list: [], key: newKey() };
      ['kf-name', 'kf-lect', 'kf-room', 'kf-notes'].forEach(function (id) { $(id).value = ''; });
      $('kf-mode').value = 'Offline'; $('kf-remind').value = '30';
      $('kf-from').value = from; $('kf-to').value = sem ? sem.to : isoAdd(today, 90);
      say('kf-msg', '');
      renderSlots(); kRecalc();
      $('ksheet').hidden = false; document.body.style.overflow = 'hidden';
      setTimeout(function () { $('kf-name').focus(); }, 50);
    });
  }
  function closeKForm() { $('ksheet').hidden = true; kForm = null; syncScroll(); }

  function submitK(ev) {
    ev.preventDefault();
    if (kSaving || !kForm) return;
    readSlots();
    var name = $('kf-name').value.trim();
    if (!name) { say('kf-msg', t('k_v_name'), 'err'); return; }
    if (kForm.slots.some(function (s) { return !s.start; })) { say('kf-msg', t('k_v_slots'), 'err'); return; }
    if (kForm.slots.some(function (s) { return s.end && s.end <= s.start; })) { say('kf-msg', t('k_v_end'), 'err'); return; }
    var list = kDates();
    if (!list.length) { say('kf-msg', t('k_v_none'), 'err'); return; }
    var slotsTxt = kForm.slots.map(function (s) { return DAYS[state.lang][s.wd] + ' ' + s.start + (s.end ? '–' + s.end : ''); }).join('; ');
    var rem = +$('kf-remind').value;
    var form = $('kf');
    kSaving = true; lockUi(form, true, '.msg'); say('kf-msg', t('k_saving_long'), '');
    api('kelasCreate', {
      key: kForm.key,
      course: { name: name, lecturer: $('kf-lect').value.trim(), room: $('kf-room').value.trim(), mode: $('kf-mode').value, notes: $('kf-notes').value.trim(), remind: rem, slots: slotsTxt, period: $('kf-from').value + ' → ' + $('kf-to').value },
      sessions: list
    }).then(function (r) {
      kSaving = false; lockUi(form, false, '.msg'); closeKForm(); kChanged();
      say('k-msg', r.syncError ? t('k_sync_err') : t('k_saved', { n: r.count }), r.syncError ? 'warn' : 'ok');
      loadKelas();
    }).catch(function (e) { kSaving = false; lockUi(form, false, '.msg'); say('kf-msg', errText(e), 'err'); });
  }

  // ----- make-up -----
  function openMakeup(it, c) {
    mForm = { it: it, c: c, key: newKey(), done: false };
    $('mf-info').textContent = stripMk(it.title) + ' — ' + whenText(it.date, it.start, it.end);
    $('mf-date').value = it.date; $('mf-start').value = it.start || ''; $('mf-end').value = it.end || '';
    $('mf-mode').value = it.mode || (c && c.mode) || 'Offline';
    $('mf-room').value = it.mode === 'Offline' ? it.location : ((c && c.room) || '');
    $('mf-moved').checked = true; $('mf-fields').hidden = false; $('mf-msgbox').hidden = true; $('mf-save').hidden = false;
    say('mf-msg', '');
    toggleMfDate();
    $('msheet').hidden = false; document.body.style.overflow = 'hidden';
  }
  function toggleMfDate() {
    var on = $('mf-moved').checked;
    Array.prototype.forEach.call($('mf-date').closest('.grid2').parentNode.querySelectorAll('#mf-date, #mf-start, #mf-end'), function (i) { i.disabled = !on; });
  }
  function closeMakeup() {
    var done = mForm && mForm.done;
    $('msheet').hidden = true; mForm = null; syncScroll();
    if (done) loadKelas();
  }
  function moveText(it, to, moved, name) {
    var where = to.mode === 'Online' ? t('k_where_on') : (to.room ? t('k_where_room', { r: to.room }) : t('k_where_off'));
    var old = whenText(it.date, it.start, it.end), nw = whenText(to.date, to.start, to.end);
    return moved ? t('k_msg_move', { n: name, a: old, b: nw, w: where }) : t('k_msg_mode', { n: name, a: nw, w: where });
  }
  function submitMakeup(ev) {
    ev.preventDefault();
    if (mSaving || !mForm || mForm.done) return;
    var moved = $('mf-moved').checked, it = mForm.it;
    var to = { date: moved ? $('mf-date').value : it.date, start: moved ? $('mf-start').value : it.start, end: moved ? $('mf-end').value : it.end, mode: $('mf-mode').value, room: $('mf-room').value.trim() };
    if (moved && (!to.date || !to.start)) { say('mf-msg', t('k_v_when'), 'err'); return; }
    if (moved && to.end && to.end <= to.start) { say('mf-msg', t('k_v_end'), 'err'); return; }
    var payload = { id: it.id, mode: to.mode, room: to.room, key: mForm.key };
    if (moved) { payload.date = to.date; payload.start = to.start; payload.end = to.end; }
    var form = $('mf');
    mSaving = true; lockUi(form, true, '.msg'); say('mf-msg', t('k_saving'), '');
    api('kelasMakeup', payload).then(function (r) {
      mSaving = false; lockUi(form, false, '.msg'); mForm.done = true; kChanged();
      $('mf-fields').hidden = true; $('mf-save').hidden = true; $('mf-msgbox').hidden = false;
      $('mf-text').value = moveText(it, to, moved, stripMk(it.title));
      say('mf-msg', r.syncError ? t('k_sync_err') : t('k_made'), r.syncError ? 'warn' : 'ok');
    }).catch(function (e) { mSaving = false; lockUi(form, false, '.msg'); say('mf-msg', errText(e), 'err'); });
  }
  function copyMf() {
    var ta = $('mf-text'), done = function () { say('mf-msg', t('k_copied'), 'ok'); };
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(ta.value).then(done, function () { ta.select(); document.execCommand('copy'); done(); }); return; } } catch (e) { /* lanjut */ }
    ta.select(); try { document.execCommand('copy'); done(); } catch (e2) { /* abaikan */ }
  }

  // ---------- ambassador ----------
  var JABO_RE = /jakarta|jabodetabek|bogor|depok|tangerang|tangsel|bekasi|cikarang|serpong|bsd|cibubur|cikini|jaksel|jakpus|jakbar|jaktim|jakut/i;
  var aScope = 'upcoming', aData = null, bForm = null, bSaving = false, bTypeManual = false;

  function guessType(city, school) { return JABO_RE.test(city ? city : school) ? 'Dalam kota' : 'Luar kota'; }
  function longId(iso) { var p = parseIso(iso); return p.d + ' ' + MONTHS.id[p.m - 1] + ' ' + p.y; }
  function rangeId(a, b) {
    if (a === b) return longId(a);
    var p = parseIso(a), q = parseIso(b);
    if (p.m === q.m && p.y === q.y) return p.d + '–' + q.d + ' ' + MONTHS.id[p.m - 1] + ' ' + p.y;
    return longId(a) + ' – ' + longId(b);
  }
  function waLink(phone, text) { return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text); }
  function waIntro(a) { return 'Halo, perkenalkan aku Noel yang akan bareng sama kamu tanggal ' + rangeId(a.from, a.to) + ' ke sekolah ' + a.school + '. Terimakasih'; }
  function waCancel(a) { return 'Halo, mohon maaf, penugasan ke sekolah ' + a.school + ' tanggal ' + rangeId(a.from, a.to) + ' dibatalkan' + (a.cancelReason ? ' (' + a.cancelReason + ')' : '') + '. Terimakasih'; }
  function puisText(a) {
    var days = [], d = a.from, g = 0;
    while (d <= a.to && g++ < 40) { days.push(d); d = isoAdd(d, 1); }
    return days.map(function (day) {
      return ['Assign By: ' + (a.assignBy || '-'), 'Purpose: ' + a.purpose, 'Destination: ' + a.school + (a.city ? ', ' + a.city : ''), 'School Name: ' + a.school,
        'Destination Type: ' + (a.type === 'Luar kota' ? 'Luar Kota' : 'Dalam Kota'), 'Date Campaign: ' + day, 'Start Time: ' + a.start, 'End Time: ' + (a.end || '-')].join('\n');
    }).join('\n\n');
  }
  function copyText(str, doneMsg, id) {
    var done = function () { say(id, doneMsg, 'ok'); };
    var fallback = function () {
      var ta = document.createElement('textarea'); ta.value = str; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* abaikan */ } document.body.removeChild(ta);
    };
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(str).then(done, fallback); return; } } catch (e) { /* lanjut */ }
    fallback();
  }

  function loadAmb() {
    var scope = aScope;
    if (!aData && !$('a-msg').textContent) say('a-msg', t('loading'));
    api('ambList', { scope: scope })
      .then(function (d) { if (scope !== aScope) return; aData = d; if ($('a-msg').textContent === t('loading')) say('a-msg', ''); renderAmb(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('a-msg', errText(e), 'err'); });
  }
  function ambChanged() { calCache = {}; calData = null; jData = null; homeStale = true; }

  function renderAmb() {
    var box = $('a-list');
    if (!box) return;
    box.innerHTML = '';
    if (!aData) return;
    if (!aData.items.length) { box.appendChild(el('p', 'tiny', t('a_none'))); return; }
    aData.items.forEach(function (a) {
      var cx = a.status === 'Batal', card = el('div', 'ac' + (cx ? ' cx' : ''));
      var h = el('h3', '', a.school); card.appendChild(h);
      var meta = el('p', 'meta', rangeId(a.from, a.to) + ' · ' + a.start + (a.end ? '–' + a.end : '') + ' ');
      meta.appendChild(el('span', 'badge', a.type === 'Luar kota' ? t('a_out_s') : t('a_in_s')));
      if (cx) { meta.appendChild(document.createTextNode(' ')); meta.appendChild(el('span', 'badge cx', t('a_badge_cx'))); }
      card.appendChild(meta);
      if (a.city) card.appendChild(el('p', 'line', a.city));
      card.appendChild(el('p', 'line', a.purpose + (a.assignBy ? ' · ' + t('a_by') + ': ' + a.assignBy : '')));
      if (a.maps) { var m = el('a', 'lnk', t('a_maps')); m.href = a.maps; m.target = '_blank'; m.rel = 'noopener'; var p0 = el('p', 'line'); p0.appendChild(m); card.appendChild(p0); }
      if (a.partners.length) {
        var pl = el('div', 'plist');
        a.partners.forEach(function (p) {
          var r = el('div', 'pr'); r.appendChild(el('span', '', p.name + (p.phone ? ' · +' + p.phone : '')));
          if (p.phone) { var w = el('a', 'wa', 'WhatsApp'); w.href = waLink(p.phone, cx ? waCancel(a) : waIntro(a)); w.target = '_blank'; w.rel = 'noopener'; r.appendChild(w); }
          pl.appendChild(r);
        });
        card.appendChild(pl);
      }
      if (a.type === 'Luar kota' && (a.lodging.name || a.lodging.address || a.lodging.maps)) {
        var lp = el('p', 'line', t('a_lodging') + ': ' + [a.lodging.name, a.lodging.address].filter(Boolean).join(', ') + ' ');
        if (a.lodging.maps) { var lm = el('a', 'lnk', t('a_maps')); lm.href = a.lodging.maps; lm.target = '_blank'; lm.rel = 'noopener'; lp.appendChild(lm); }
        card.appendChild(lp);
      }
      if (a.notes) card.appendChild(el('p', 'line', a.notes));
      if (cx && a.cancelReason) card.appendChild(el('p', 'line', t('a_reason') + ': ' + a.cancelReason));
      var bar = el('div', 'bar');
      var mk = function (label, fn) { var b = el('button', 'btn ghost sm', label); b.type = 'button'; b.addEventListener('click', function () { fn(b); }); bar.appendChild(b); };
      if (!cx) {
        if (a.to >= aData.today) mk(t('k_edit'), function () { openB(a); });
        mk(t('a_puis'), function () { copyText(puisText(a), t('a_copied'), 'a-msg'); });
        if (a.to >= aData.today) mk(t('a_cancel'), function (b) { cancelAmb(a, b); });
      }
      card.appendChild(bar);
      box.appendChild(card);
    });
  }

  function cancelAmb(a, btn) {
    var reason = window.prompt(t('a_cancel_ask', { x: a.school }), '');
    if (reason === null) return;
    btn.disabled = true; say('a-msg', t('k_saving'));
    api('ambCancel', { id: a.id, reason: reason.trim() })
      .then(function (r) { ambChanged(); say('a-msg', r.syncError ? t('k_sync_err') : t('a_cancelled'), r.syncError ? 'warn' : 'ok'); loadAmb(); })
      .catch(function (e) { btn.disabled = false; say('a-msg', errText(e), 'err'); });
  }

  // ----- form -----
  function renderPartners() {
    var box = $('bf-partners'); box.innerHTML = '';
    bForm.partners.forEach(function (p, i) {
      var row = el('div', 'prow');
      var f1 = el('label', 'fl'); f1.appendChild(el('span', '', t('a_pname'))); var i1 = el('input'); i1.type = 'text'; i1.maxLength = 80; i1.value = p.name; i1.setAttribute('data-p', 'n'); f1.appendChild(i1);
      var f2 = el('label', 'fl'); f2.appendChild(el('span', '', t('a_pphone'))); var i2 = el('input'); i2.type = 'tel'; i2.maxLength = 25; i2.value = p.phone; i2.setAttribute('data-p', 'p'); i2.placeholder = '0812...'; f2.appendChild(i2);
      row.appendChild(f1); row.appendChild(f2);
      var x = el('button', 'btn ghost sm', '✕'); x.type = 'button'; x.setAttribute('aria-label', t('k_rm'));
      x.addEventListener('click', function () { readPartners(); bForm.partners.splice(i, 1); if (!bForm.partners.length) bForm.partners.push({ name: '', phone: '' }); renderPartners(); });
      row.appendChild(x); box.appendChild(row);
    });
  }
  function readPartners() {
    bForm.partners = Array.prototype.map.call($('bf-partners').querySelectorAll('.prow'), function (r) {
      return { name: r.querySelector('[data-p=n]').value.trim(), phone: r.querySelector('[data-p=p]').value.trim() };
    });
  }
  var PURPOSES = ['Edufair', 'Presentasi', 'Edufair & Presentasi', 'Open House'];
  function setPurpose(v) {
    var known = PURPOSES.indexOf(v) >= 0;
    $('bf-purpose-sel').value = known ? v : '__other';
    $('bf-purpose').hidden = known; $('bf-purpose').value = known ? '' : v;
  }
  function getPurpose() { var v = $('bf-purpose-sel').value; return v === '__other' ? ($('bf-purpose').value.trim() || 'Edufair') : v; }
  function bRefresh() {
    var city = $('bf-city').value.trim(), school = $('bf-school').value.trim();
    if (!bTypeManual && (city || school)) $('bf-type').value = guessType(city, school);
    var out = $('bf-type').value === 'Luar kota';
    $('bf-to-wrap').hidden = !out; $('bf-lodge').hidden = !out;
    $('bf-typehint').textContent = t('a_type_hint');
    var from = $('bf-from').value, to = out ? ($('bf-to').value || from) : from, days = 0;
    if (from && to >= from) { var d = from, g = 0; while (d <= to && g++ < 40) { days++; d = isoAdd(d, 1); } }
    $('bf-info').textContent = days ? t('a_info', { n: 1 + days * 2, d: days }) : '';
  }
  function openB(a) {
    bForm = { id: a ? a.id : '', key: newKey(), partners: a && a.partners.length ? a.partners.map(function (p) { return { name: p.name, phone: p.phone }; }) : [{ name: '', phone: '' }] };
    bTypeManual = !!a;
    $('bf-title').textContent = t(a ? 'a_edit' : 'a_new');
    var dl = $('b-staff'); dl.innerHTML = '';
    ((aData && aData.staff) || []).forEach(function (s) { var o = document.createElement('option'); o.value = s; dl.appendChild(o); });
    var today = todayIso();
    $('bf-school').value = a ? a.school : ''; $('bf-city').value = a ? a.city : ''; $('bf-maps').value = a ? a.maps : '';
    $('bf-type').value = a ? a.type : 'Dalam kota'; setPurpose(a ? a.purpose : 'Edufair');
    $('bf-assign').value = a ? a.assignBy : ((aData && aData.staff && aData.staff[0]) || '');
    $('bf-from').value = a ? a.from : isoAdd(today, 2); $('bf-to').value = a ? a.to : '';
    $('bf-start').value = a ? a.start : ''; $('bf-end').value = a ? a.end : '';
    $('bf-lname').value = a ? a.lodging.name : ''; $('bf-laddr').value = a ? a.lodging.address : ''; $('bf-lmaps').value = a ? a.lodging.maps : '';
    $('bf-notes').value = a ? a.notes : '';
    say('bf-msg', ''); renderPartners(); bRefresh();
    $('bsheet').hidden = false; document.body.style.overflow = 'hidden';
    setTimeout(function () { $('bf-school').focus(); }, 50);
  }
  function closeB() { $('bsheet').hidden = true; bForm = null; syncScroll(); }

  function submitB(ev) {
    ev.preventDefault();
    if (bSaving || !bForm) return;
    readPartners();
    var school = $('bf-school').value.trim(), out = $('bf-type').value === 'Luar kota';
    if (!school) { say('bf-msg', t('a_v_school'), 'err'); return; }
    if (!$('bf-from').value) { say('bf-msg', t('a_v_date'), 'err'); return; }
    if (!$('bf-start').value) { say('bf-msg', t('a_v_start'), 'err'); return; }
    if ($('bf-end').value && $('bf-end').value <= $('bf-start').value) { say('bf-msg', t('k_v_end'), 'err'); return; }
    if (out && $('bf-to').value && $('bf-to').value < $('bf-from').value) { say('bf-msg', t('a_v_to'), 'err'); return; }
    var form = $('bf');
    bSaving = true; lockUi(form, true, '.msg'); say('bf-msg', t('k_saving_long'));
    api('ambSave', {
      key: bForm.key, id: bForm.id || undefined,
      data: {
        school: school, city: $('bf-city').value.trim(), maps: $('bf-maps').value.trim(), type: $('bf-type').value, purpose: getPurpose(), assignBy: $('bf-assign').value.trim(),
        from: $('bf-from').value, to: out ? ($('bf-to').value || $('bf-from').value) : $('bf-from').value, start: $('bf-start').value, end: $('bf-end').value,
        partners: bForm.partners, lodging: { name: $('bf-lname').value.trim(), address: $('bf-laddr').value.trim(), maps: $('bf-lmaps').value.trim() }, notes: $('bf-notes').value.trim()
      }
    }).then(function (r) {
      bSaving = false; lockUi(form, false, '.msg'); closeB(); ambChanged();
      aScope = 'upcoming'; document.querySelectorAll('[data-ascope]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-ascope') === aScope); });
      say('a-msg', r.syncError ? t('t_sync_warn') : t('a_saved', { n: r.count }), r.syncError ? 'warn' : 'ok'); loadAmb();
    }).catch(function (e) { bSaving = false; lockUi(form, false, '.msg'); say('bf-msg', errText(e), 'err'); });
  }

  // ---------- to-do ----------
  var tdData = null, tdScope = 'today', tdForm = null, tdSaving = false;
  function tdFmt(iso) { var p = parseIso(iso); return p ? p.d + ' ' + (MONTHS[state.lang][p.m - 1] || '').slice(0, 3) : iso; }
  function tdGroup(x, today) {
    if (x.due && x.due < today) return 'late';
    if ((x.due && x.due === today) || (x.plan && x.plan <= today)) return 'today';
    if (x.due || x.plan) return 'next';
    return 'none';
  }
  function loadTodo() {
    if (!tdData && !$('td-msg').textContent) say('td-msg', t('loading'));
    api('tugasList', {})
      .then(function (d) { tdData = d; if ($('td-msg').textContent === t('loading')) say('td-msg', ''); renderTodo(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('td-msg', errText(e), 'err'); });
  }
  function tdSet(d) { tdData = d; homeStale = true; renderTodo(); }
  function renderTodo() {
    var box = $('td-list');
    if (!box) return;
    box.innerHTML = '';
    if (!tdData) return;
    var today = tdData.today, open = tdData.items.filter(function (x) { return !x.done; }), done = tdData.items.filter(function (x) { return x.done; });
    var by = function (a, b) { var ka = a.due || a.plan || '9999', kb = b.due || b.plan || '9999'; return ka < kb ? -1 : ka > kb ? 1 : 0; };
    var sections = [];
    if (tdScope === 'done') sections.push([null, done]);
    else {
      var g = { late: [], today: [], next: [], none: [] };
      open.sort(by).forEach(function (x) { g[tdGroup(x, today)].push(x); });
      sections.push(['td_g_late', g.late], ['td_g_today', g.today]);
      if (tdScope === 'all') sections.push(['td_g_next', g.next], ['td_g_none', g.none]);
    }
    var any = false;
    sections.forEach(function (s) {
      if (!s[1].length) return;
      any = true;
      if (s[0]) box.appendChild(el('h3', 'mini', t(s[0]) + ' (' + s[1].length + ')'));
      s[1].forEach(function (x) { box.appendChild(tdRow(x, today)); });
    });
    if (!any) box.appendChild(el('p', 'tiny', t(tdScope === 'done' ? 'td_none_done' : tdScope === 'today' ? 'td_none_today' : 'td_none')));
  }
  function tdRow(x, today) {
    var row = el('div', 'tdrow' + (x.done ? ' done' : ''));
    var cb = el('input'); cb.type = 'checkbox'; cb.checked = x.done; cb.setAttribute('aria-label', t('td_mark'));
    cb.addEventListener('change', function () {
      cb.disabled = true;
      api('tugasDone', { id: x.id, done: cb.checked }).then(tdSet)
        .catch(function (e) { cb.disabled = false; cb.checked = !cb.checked; say('td-msg', errText(e), 'err'); });
    });
    var w = el('div', 'w'); w.appendChild(el('b', '', x.title));
    var chips = el('div', 'chips2');
    if (x.plan) chips.appendChild(el('span', 'badge' + (x.plan < today && !x.done ? ' cx' : ''), t('td_plan') + ' ' + tdFmt(x.plan)));
    if (x.due) chips.appendChild(el('span', 'badge' + (x.due < today && !x.done ? ' cx' : x.due === today ? ' mk' : ''), t('td_due') + ' ' + tdFmt(x.due)));
    if (chips.childNodes.length) w.appendChild(chips);
    if (x.notes) w.appendChild(el('small', '', x.notes));
    var bar = el('div', 'tdbar');
    if (!x.done) { var e = el('button', 'btn ghost sm', t('k_edit')); e.type = 'button'; e.addEventListener('click', function () { openTd(x); }); bar.appendChild(e); }
    var d = el('button', 'btn ghost sm', t('k_del')); d.type = 'button';
    d.addEventListener('click', function () {
      if (!window.confirm(t('td_del_confirm', { x: x.title }))) return;
      d.disabled = true;
      api('tugasDelete', { id: x.id }).then(tdSet).catch(function (er) { d.disabled = false; say('td-msg', errText(er), 'err'); });
    });
    bar.appendChild(d);
    row.appendChild(cb); row.appendChild(w); row.appendChild(bar);
    return row;
  }
  function openTd(x) {
    tdForm = { id: x ? x.id : '', key: newKey() };
    $('tdf-title').textContent = t(x ? 'td_edit' : 'td_new');
    $('tdf-title-in').value = x ? x.title : ''; $('tdf-plan').value = x ? x.plan : ''; $('tdf-due').value = x ? x.due : ''; $('tdf-notes').value = x ? x.notes : '';
    say('tdf-msg', '');
    $('tdsheet').hidden = false; document.body.style.overflow = 'hidden';
    setTimeout(function () { $('tdf-title-in').focus(); }, 50);
  }
  function closeTd() { $('tdsheet').hidden = true; tdForm = null; syncScroll(); }
  function saveTd(payload, onErr) {
    return api('tugasSave', payload).then(tdSet).catch(onErr);
  }
  function submitTd(ev) {
    ev.preventDefault();
    if (tdSaving || !tdForm) return;
    if (!$('tdf-title-in').value.trim()) { say('tdf-msg', t('td_v_title'), 'err'); return; }
    var plan = $('tdf-plan').value, due = $('tdf-due').value;
    if (plan && due && plan > due) { say('tdf-msg', t('td_v_order'), 'err'); return; }
    var form = $('tdf'); tdSaving = true; lockUi(form, true, '.msg'); say('tdf-msg', t('saving'));
    saveTd({ id: tdForm.id || undefined, key: tdForm.key, title: $('tdf-title-in').value.trim(), notes: $('tdf-notes').value.trim(), plan: plan, due: due }, function (e) { tdSaving = false; lockUi(form, false, '.msg'); say('tdf-msg', errText(e), 'err'); })
      .then(function () { if (!tdSaving) return; tdSaving = false; lockUi(form, false, '.msg'); closeTd(); });
  }
  function quickTd(ev) {
    ev.preventDefault();
    var v = $('td-q').value.trim();
    if (!v) return;
    var today = tdData ? tdData.today : todayIso();
    $('td-q').value = '';
    saveTd({ key: newKey(), title: v, plan: tdScope === 'today' ? today : '' }, function (e) { $('td-q').value = v; say('td-msg', errText(e), 'err'); });
  }

  // ---------- meeting ----------
  var mData = null, mScope = 'upcoming', mForm = null, mSaving = false, mMode = 'Online';
  var MEET_TAG = '[Meeting] ';
  function parseMeetItem(it) {
    var lines = String(it.notes || '').split('\n'), i = 0, event = '', people = [];
    if (/^Acara: /.test(lines[i] || '')) { event = lines[i].slice(7); i++; }
    if (/^Peserta: /.test(lines[i] || '')) {
      lines[i].slice(9).split(/,\s+/).forEach(function (e) { var m = e.match(/^(.*?)(?:\s*\(([^()\s]+@[^()\s]+)\))?$/); if (m && m[1].trim()) people.push({ name: m[1].trim(), email: m[2] || '' }); });
      i++;
    }
    return { id: it.id, event: event || String(it.title || '').replace(MEET_TAG, ''), participants: people, mode: it.mode || 'Online', date: it.date, start: it.start, end: it.end,
      location: it.mode === 'Online' ? '' : it.location, maps: it.maps, notes: lines.slice(i).join('\n').replace(/^\n+/, ''), meet: it.meet || '', invite: !!(it.guests && it.guests.length), status: it.status };
  }
  function loadMeeting() {
    var scope = mScope;
    if (!mData && !$('m-msg').textContent) say('m-msg', t('loading'));
    api('meetingList', { scope: scope })
      .then(function (d) { if (scope !== mScope) return; mData = d; if ($('m-msg').textContent === t('loading')) say('m-msg', ''); renderMeeting(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('m-msg', errText(e), 'err'); });
  }
  function meetChanged() { calCache = {}; calData = null; jData = null; homeStale = true; mData = null; }
  function renderMeeting() {
    var box = $('m-list');
    if (!box) return;
    box.innerHTML = '';
    if (!mData) return;
    if (!mData.items.length) { box.appendChild(el('p', 'tiny', t('m_none'))); return; }
    mData.items.forEach(function (m) {
      var cx = m.status === 'Batal', card = el('div', 'ac' + (cx ? ' cx' : ''));
      card.appendChild(el('h3', '', m.event));
      var meta = el('p', 'meta', dayLabel(m.ymd) + ' \u00b7 ' + m.start + (m.end ? '\u2013' + m.end : '') + ' WIB ');
      meta.appendChild(el('span', 'badge ' + (m.mode === 'Online' ? 'on' : ''), t(m.mode === 'Online' ? 'm_online' : 'm_offline')));
      if (cx) { meta.appendChild(document.createTextNode(' ')); meta.appendChild(el('span', 'badge cx', t('a_badge_cx'))); }
      card.appendChild(meta);
      if (m.participants.length) card.appendChild(el('p', 'line', t('m_with') + ': ' + m.participants.map(function (p) { return p.name; }).join(', ')));
      if (m.mode === 'Online') {
        var pl = el('p', 'line');
        if (m.meet) { var a = el('a', 'lnk', m.meet.replace(/^https:\/\//, '')); a.href = m.meet; a.target = '_blank'; a.rel = 'noopener'; pl.appendChild(a); }
        else pl.appendChild(el('span', 'tiny', t('m_nolink')));
        card.appendChild(pl);
      } else {
        if (m.location) card.appendChild(el('p', 'line', m.location));
        var mu = safeUrl(m.maps);
        if (mu) { var ma = el('a', 'lnk', t('maps')); ma.href = mu; ma.target = '_blank'; ma.rel = 'noopener'; var p0 = el('p', 'line'); p0.appendChild(ma); card.appendChild(p0); }
      }
      if (m.notes) card.appendChild(el('p', 'line', m.notes));
      var bar = el('div', 'bar');
      var mk = function (label, fn, cls) { var b = el('button', 'btn ' + (cls || 'ghost') + ' sm', label); b.type = 'button'; b.addEventListener('click', function () { fn(b); }); bar.appendChild(b); };
      if (!cx) {
        if (m.mode === 'Online' && m.meet) { mk(t('m_join'), function () { window.open(m.meet, '_blank', 'noopener'); }, 'primary'); mk(t('m_copy'), function () { copyText(m.meet, t('m_copied'), 'm-msg'); }); }
        if (m.mode === 'Online' && !m.meet) mk(t('m_mklink'), function (b) { makeLink(m, b); });
        mk(t('k_edit'), function () { openMt(m); });
        mk(t('m_invite_mail'), function () { pendingEvent = m.id; switchTab('surat'); showCompose(); });
        mk(t('a_cancel'), function (b) { setMeetStatus(m, 'Batal', b); });
      } else {
        mk(t('j_restore'), function (b) { setMeetStatus(m, 'Aktif', b); });
      }
      card.appendChild(bar);
      box.appendChild(card);
    });
  }
  function makeLink(m, btn) {
    btn.disabled = true; say('m-msg', t('m_making'));
    api('meetingLink', { id: m.id })
      .then(function () { meetChanged(); loadMeeting(); say('m-msg', t('m_made'), 'ok'); })
      .catch(function (e) { btn.disabled = false; say('m-msg', errText(e), 'err'); });
  }
  function setMeetStatus(m, status, btn) {
    if (status === 'Batal' && !window.confirm(t('j_confirm_cancel', { t: m.event }))) return;
    btn.disabled = true; say('m-msg', t('saving'));
    api('jadwalStatus', { id: m.id, status: status })
      .then(function (r) { meetChanged(); loadMeeting(); say('m-msg', r.syncError ? t('j_sync_err') + r.syncError : '', r.syncError ? 'err' : ''); })
      .catch(function (e) { btn.disabled = false; say('m-msg', errText(e), 'err'); });
  }
  function mtTitle() {
    var ppl = readMtPeople().filter(function (p) { return p.name || p.email; }).map(function (p) { return p.name || p.email.split('@')[0]; });
    var shown = ppl.length > 4 ? ppl.slice(0, 4).join(', ') + ' +' + (ppl.length - 4) : ppl.join(', ');
    return MEET_TAG + ($('mtf-event').value.trim() || '\u2026') + (shown ? ' - ' + shown : '') + ' - ' + mMode;
  }
  function mtRefresh() {
    $('mtf-off').hidden = mMode !== 'Offline'; $('mtf-onhint').hidden = mMode !== 'Online';
    document.querySelectorAll('.seg-m').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-mmode') === mMode); });
    $('mtf-title-prev').textContent = t('m_title_prev') + ' ' + mtTitle();
  }
  function readMtPeople() {
    return Array.prototype.map.call($('mtf-people').querySelectorAll('.prow'), function (r) {
      return { name: r.querySelector('[data-p=name]').value.trim(), email: r.querySelector('[data-p=email]').value.trim() };
    });
  }
  function renderMtPeople(list) {
    var box = $('mtf-people'); box.innerHTML = '';
    var dl = $('mtf-names'); dl.innerHTML = '';
    (cData || []).forEach(function (c) { var o = document.createElement('option'); o.value = c.name; dl.appendChild(o); });
    list.forEach(function (p, i) {
      var row = el('div', 'prow');
      var n = el('input'); n.type = 'text'; n.maxLength = 80; n.value = p.name; n.setAttribute('data-p', 'name'); n.setAttribute('list', 'mtf-names'); n.placeholder = t('m_pname');
      var e = el('input'); e.type = 'email'; e.maxLength = 120; e.value = p.email; e.setAttribute('data-p', 'email'); e.placeholder = t('m_pemail');
      n.addEventListener('change', function () {
        var c = (cData || []).filter(function (x) { return x.name.toLowerCase() === n.value.trim().toLowerCase(); })[0];
        if (c && !e.value) e.value = c.email || '';
        mtRefresh();
      });
      [n, e].forEach(function (x) { x.addEventListener('input', mtRefresh); });
      var rm = el('button', 'btn ghost sm', '\u00d7'); rm.type = 'button'; rm.setAttribute('aria-label', t('btn_remove'));
      rm.addEventListener('click', function () { var cur = readMtPeople(); cur.splice(i, 1); renderMtPeople(cur); mtRefresh(); });
      row.appendChild(n); row.appendChild(e); row.appendChild(rm); box.appendChild(row);
    });
  }
  function openMt(m) {
    mForm = { id: m ? m.id : '', key: newKey() };
    mMode = m ? m.mode : 'Online';
    $('mtf-title').textContent = t(m ? 'm_edit' : 'm_new');
    $('mtf-event').value = m ? m.event : ''; $('mtf-date').value = m ? m.date : (jData ? jData.today : todayIso());
    $('mtf-start').value = m ? m.start : ''; $('mtf-end').value = m ? m.end : '';
    $('mtf-loc').value = m ? m.location : ''; $('mtf-maps').value = m ? m.maps : ''; $('mtf-notes').value = m ? m.notes : '';
    $('mtf-invite').checked = m ? !!m.invite : false;
    if (!cData) loadKontak();
    renderMtPeople(m && m.participants.length ? m.participants : [{ name: '', email: '' }]);
    say('mtf-msg', ''); mtRefresh();
    $('mtsheet').hidden = false; document.body.style.overflow = 'hidden';
    setTimeout(function () { $('mtf-event').focus(); }, 50);
  }
  function closeMt() { $('mtsheet').hidden = true; mForm = null; syncScroll(); }
  function submitMt(ev) {
    ev.preventDefault();
    if (mSaving || !mForm) return;
    if (!$('mtf-event').value.trim()) { say('mtf-msg', t('m_v_event'), 'err'); return; }
    if (!$('mtf-date').value) { say('mtf-msg', t('a_v_date'), 'err'); return; }
    if (!$('mtf-start').value) { say('mtf-msg', t('a_v_start'), 'err'); return; }
    if ($('mtf-end').value && $('mtf-end').value <= $('mtf-start').value) { say('mtf-msg', t('k_v_end'), 'err'); return; }
    var form = $('mtf'); mSaving = true; lockUi(form, true, '.msg'); say('mtf-msg', t('m_saving'));
    api('meetingSave', {
      id: mForm.id || undefined, key: mForm.key,
      data: { event: $('mtf-event').value.trim(), mode: mMode, participants: readMtPeople(), date: $('mtf-date').value, start: $('mtf-start').value, end: $('mtf-end').value,
        location: $('mtf-loc').value.trim(), maps: $('mtf-maps').value.trim(), notes: $('mtf-notes').value.trim(), invite: $('mtf-invite').checked }
    }).then(function (r) {
      mSaving = false; lockUi(form, false, '.msg'); closeMt(); meetChanged();
      mScope = 'upcoming'; document.querySelectorAll('[data-mscope]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-mscope') === 'upcoming'); });
      loadMeeting();
      var warn = r.syncError ? t('j_sync_err') + r.syncError : (r.meetError ? t('m_meet_err') + r.meetError : '');
      say('m-msg', warn || t('m_saved'), warn ? 'err' : 'ok');
    }).catch(function (e) { mSaving = false; lockUi(form, false, '.msg'); say('mtf-msg', errText(e), 'err'); });
  }

  // ---------- kontak ----------
  var cData = null, cForm = null, cSaving = false, pkSel = {}, pendingContact = null;

  function waNum(phone) {
    var d = String(phone || '').replace(/\D/g, '');
    if (!d) return '';
    if (d.charAt(0) === '0') d = '62' + d.slice(1); else if (d.charAt(0) === '8') d = '62' + d;
    return d;
  }
  function fullName(c) {
    var back = String(c.back || '').replace(/^[\s,]+/, '').trim(), front = [c.title, c.front].filter(Boolean).join(' ');
    return (front ? front + ' ' : '') + c.name + (back ? ', ' + back : '');
  }
  function contactMatch(c, q) {
    q = String(q || '').trim().toLowerCase();
    if (!q) return true;
    return [c.name, c.email, c.org, c.role, c.full].join(' ').toLowerCase().indexOf(q) >= 0;
  }
  function loadKontak(force) {
    if (cData && !force) { renderKontak(); return; }
    if (!cData) say('c-msg', t('loading'));
    api('kontakList', {})
      .then(function (d) { cData = d.items; if ($('c-msg').textContent === t('loading')) say('c-msg', ''); renderKontak(); renderPk(); })
      .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('c-msg', errText(e), 'err'); });
  }
  function renderKontak() {
    var box = $('c-list');
    if (!box) return;
    box.innerHTML = '';
    if (!cData) return;
    var list = cData.filter(function (c) { return contactMatch(c, $('c-q').value); });
    if (!list.length) { box.appendChild(el('p', 'tiny', t(cData.length ? 'c_nomatch' : 'c_none'))); return; }
    list.forEach(function (c) {
      var card = el('div', 'cc');
      card.appendChild(el('h3', '', c.full));
      var meta = [c.role, c.org].filter(Boolean).join(' · ');
      if (meta) card.appendChild(el('p', 'meta', meta));
      if (c.email) { var p1 = el('p', 'line'); var a = el('a', 'lnk', c.email); a.href = 'mailto:' + c.email; p1.appendChild(a); card.appendChild(p1); }
      if (c.phone) {
        var p2 = el('p', 'line', c.phone + ' '); var n = waNum(c.phone);
        if (n) { var w = el('a', 'wa', 'WhatsApp'); w.href = 'https://wa.me/' + n; w.target = '_blank'; w.rel = 'noopener'; p2.appendChild(w); }
        card.appendChild(p2);
      }
      if (c.notes) card.appendChild(el('p', 'line', c.notes));
      var bar = el('div', 'bar');
      var mk = function (label, fn) { var b = el('button', 'btn ghost sm', label); b.type = 'button'; b.addEventListener('click', function () { fn(b); }); bar.appendChild(b); };
      if (c.email) mk(t('c_write'), function () { pendingContact = c; switchTab('surat'); showCompose(); });
      mk(t('k_edit'), function () { openCt(c); });
      mk(t('k_del'), function (b) { delCt(c, b); });
      card.appendChild(bar);
      box.appendChild(card);
    });
  }
  function ctPreview() {
    $('ctf-full').textContent = fullName({ name: $('ctf-name').value.trim() || '…', title: $('ctf-title-sel').value, front: $('ctf-front').value.trim(), back: $('ctf-back').value.trim() });
  }
  function openCt(c) {
    cForm = { id: c ? c.id : '' };
    $('ctf-title').textContent = t(c ? 'c_edit' : 'c_new');
    $('ctf-name').value = c ? c.name : ''; $('ctf-title-sel').value = c ? c.title : ''; $('ctf-front').value = c ? c.front : ''; $('ctf-back').value = c ? c.back : '';
    $('ctf-email').value = c ? c.email : ''; $('ctf-org').value = c ? c.org : ''; $('ctf-role').value = c ? c.role : ''; $('ctf-phone').value = c ? c.phone : ''; $('ctf-notes').value = c ? c.notes : '';
    say('ctf-msg', ''); ctPreview();
    $('ctsheet').hidden = false; document.body.style.overflow = 'hidden';
    setTimeout(function () { $('ctf-name').focus(); }, 50);
  }
  function closeCt() { $('ctsheet').hidden = true; cForm = null; syncScroll(); }
  function submitCt(ev) {
    ev.preventDefault();
    if (cSaving || !cForm) return;
    if (!$('ctf-name').value.trim()) { say('ctf-msg', t('c_v_name'), 'err'); return; }
    var form = $('ctf'); cSaving = true; lockUi(form, true, '.msg'); say('ctf-msg', t('k_saving'));
    api('kontakSave', {
      id: cForm.id || undefined, name: $('ctf-name').value.trim(), title: $('ctf-title-sel').value, front: $('ctf-front').value.trim(), back: $('ctf-back').value.trim(),
      email: $('ctf-email').value.trim(), org: $('ctf-org').value.trim(), role: $('ctf-role').value.trim(), phone: $('ctf-phone').value.trim(), notes: $('ctf-notes').value.trim()
    }).then(function (d) { cSaving = false; lockUi(form, false, '.msg'); cData = d.items; closeCt(); renderKontak(); renderPk(); say('c-msg', t('c_saved'), 'ok'); })
      .catch(function (e) { cSaving = false; lockUi(form, false, '.msg'); say('ctf-msg', errText(e), 'err'); });
  }
  function delCt(c, btn) {
    if (!window.confirm(t('c_del_confirm', { x: c.full }))) return;
    btn.disabled = true;
    api('kontakDelete', { id: c.id })
      .then(function (d) { cData = d.items; renderKontak(); renderPk(); say('c-msg', t('c_deleted'), 'ok'); })
      .catch(function (e) { btn.disabled = false; say('c-msg', errText(e), 'err'); });
  }
  function applyPendingContact() {
    if (!pendingContact || !sCtx) return;
    var c = pendingContact; pendingContact = null;
    $('s-to').value = c.email; $('s-nama').value = c.full;
    ['s-to', 's-nama'].forEach(function (id) { $(id).dispatchEvent(new Event('input')); });
  }

  // ----- pilih kontak di surat -----
  function openPk() {
    pkSel = {}; $('pk-q').value = ''; say('pk-msg', '');
    $('pksheet').hidden = false; document.body.style.overflow = 'hidden';
    if (!cData) { say('pk-msg', t('loading')); loadKontak(); } else renderPk();
  }
  function closePk() { $('pksheet').hidden = true; syncScroll(); }
  function renderPk() {
    var box = $('pk-list');
    if (!box || $('pksheet').hidden) return;
    if (cData && $('pk-msg').textContent === t('loading')) say('pk-msg', '');
    box.innerHTML = '';
    if (!cData) return;
    var list = cData.filter(function (c) { return contactMatch(c, $('pk-q').value); });
    if (!list.length) { box.appendChild(el('p', 'tiny', t(cData.length ? 'c_nomatch' : 'c_none_pk'))); return; }
    list.forEach(function (c) {
      var row = el('label', 'pkrow'), cb = el('input'); cb.type = 'checkbox'; cb.disabled = !c.email; cb.checked = !!pkSel[c.id];
      cb.addEventListener('change', function () { if (cb.checked) pkSel[c.id] = true; else delete pkSel[c.id]; });
      var w = el('div', '', c.full); w.appendChild(el('small', '', c.email || t('c_no_email')));
      row.appendChild(cb); row.appendChild(w); box.appendChild(row);
    });
  }
  function usePk(field) {
    var chosen = (cData || []).filter(function (c) { return pkSel[c.id] && c.email; });
    if (!chosen.length) { say('pk-msg', t('pk_none'), 'err'); return; }
    var input = $(field), have = String(input.value).split(/[,;\s]+/).filter(Boolean).map(function (x) { return x.toLowerCase(); });
    chosen.forEach(function (c) { if (have.indexOf(c.email.toLowerCase()) < 0) have.push(c.email); });
    input.value = have.join(', ');
    if (field === 's-to' && chosen.length === 1 && !$('s-nama').value.trim()) $('s-nama').value = chosen[0].full;
    ['s-to', 's-cc', 's-nama'].forEach(function (id) { $(id).dispatchEvent(new Event('input')); });
    closePk();
  }

  // ----- RSVP -----
  var rvData = null, rvOpen = {};
  var RV_L = { Hadir: 'rv_yes', 'Tidak hadir': 'rv_no', Mungkin: 'rv_maybe', Menunggu: 'rv_wait' };
  function rsvpBase() { return location.href.split(/[?#]/)[0]; }
  function onRsvpToggle() {
    $('s-rsvp-box').hidden = !$('s-rsvp').checked;
    disarm();
  }
  function loadRsvp() {
    api('rsvpList', {}).then(function (d) { rvData = d; renderRsvp(); }).catch(function () { /* opsional */ });
  }
  function renderRsvp() {
    var box = $('rv-list'), wrap = $('rv-box');
    if (!box) return;
    box.innerHTML = '';
    wrap.hidden = !(rvData && rvData.items.length);
    if (!rvData) return;
    rvData.items.forEach(function (g) {
      var row = el('div', 'rvg'), head = el('button'), w = el('span');
      head.type = 'button';
      w.appendChild(el('b', '', g.title || g.subject || '-'));
      w.appendChild(el('small', '', ' ' + (g.when ? g.when + ' \u00b7 ' : '') + g.at.slice(0, 10)));
      head.appendChild(w);
      var c = g.counts, cn = el('span', 'cnts');
      [['y', t('rv_yes') + ' ' + c.yes + (c.people ? ' (' + c.people + ')' : '')], ['n', t('rv_no') + ' ' + c.no], ['', t('rv_maybe') + ' ' + c.maybe], ['', t('rv_wait') + ' ' + c.wait]].forEach(function (x) { cn.appendChild(el('span', 'cnt ' + x[0], x[1])); });
      head.appendChild(cn);
      head.addEventListener('click', function () { rvOpen[g.batch] = !rvOpen[g.batch]; renderRsvp(); });
      row.appendChild(head);
      if (rvOpen[g.batch]) {
        var ul = el('ul');
        g.items.forEach(function (x) {
          var li = el('li'); li.appendChild(el('span', '', (x.name || x.email) + (x.name ? ' \u00b7 ' + x.email : '')));
          li.appendChild(el('b', '', t(RV_L[x.status] || 'rv_wait') + (x.count ? ' (' + x.count + ')' : '')));
          if (x.note) li.appendChild(el('small', '', x.note));
          ul.appendChild(li);
        });
        row.appendChild(ul);
      }
      box.appendChild(row);
    });
  }

  // ----- surat terjadwal -----
  var sQ = null;
  function schedOn() { return $('s-sched') && $('s-sched').checked; }
  function sendLabel() { return t(schedOn() ? 's_schedule' : 's_send'); }
  function loadQueue() {
    api('suratQueueList', {})
      .then(function (d) { sQ = d; renderQueue(); })
      .catch(function () { /* daftar antrean opsional */ });
  }
  function renderQueue() {
    var box = $('sq-list'), wrap = $('sq-box');
    if (!box) return;
    box.innerHTML = '';
    wrap.hidden = !(sQ && sQ.items.length);
    if (!sQ) return;
    sQ.items.forEach(function (x) {
      var row = el('div', 'sqrow' + (x.status === 'Gagal' ? ' bad' : '')), w = el('div', 'w');
      w.appendChild(el('b', '', x.subject || '-'));
      var when = x.at.slice(0, 10) + ' ' + x.at.slice(11, 16);
      w.appendChild(el('small', '', t('to_') + ' ' + x.to + ' · ' + (x.status === 'Menunggu' ? t('sq_at', { at: when }) : x.status === 'Mengirim' ? t('sq_sending') : t('sq_failed') + ': ' + x.result)));
      row.appendChild(w);
      if (x.status !== 'Mengirim') {
        var b = el('button', 'btn ghost sm', t(x.status === 'Gagal' ? 'sq_dismiss' : 'sq_cancel')); b.type = 'button';
        b.addEventListener('click', function () {
          b.disabled = true;
          api('suratQueueCancel', { id: x.id }).then(function (d) { sQ = d; renderQueue(); })
            .catch(function (e) { b.disabled = false; say('sh-msg', errText(e), 'err'); });
        });
        row.appendChild(b);
      }
      box.appendChild(row);
    });
  }
  function onSchedToggle() {
    var on = schedOn();
    $('s-sched-box').hidden = !on;
    if (on) {
      var w = wibNow(), tm = new Date(w.getTime() + 86400000);
      if (!$('s-sd').value) $('s-sd').value = isoOf(tm.getFullYear(), tm.getMonth() + 1, tm.getDate());
      if (!$('s-st').value) $('s-st').value = '09:00';
    }
    disarm();
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
  function reloadJadwalView(force) { if (calMode === 'list') loadJadwal(); else loadCal(force); }

  var calCache = {};
  function calKey(r) { return r[0] + '|' + r[1]; }
  function calFetch(r) {
    var k = calKey(r), c = calCache[k];
    if (c && c.data) return Promise.resolve(c.data);
    if (c && c.p) return c.p;
    var p = api('jadwalRange', { from: r[0], to: r[1] }).then(function (d) { calCache[k] = { data: d }; return d; })
      .catch(function (e) { delete calCache[k]; throw e; });
    calCache[k] = { p: p };
    return p;
  }
  function calPrefetch() {
    var keep = calAnchor, out = [];
    [-1, 1].forEach(function (dir) {
      var save = calAnchor; calAnchor = calStep(dir); var r = calRange(); calAnchor = save;
      out.push(r);
    });
    out.forEach(function (r) { if (!calCache[calKey(r)]) calFetch(r).catch(function () { /* diam-diam */ }); });
    calAnchor = keep;
  }
  function calBusy(on) {
    var b = $('cal'); if (!b) return;
    b.classList.toggle('busy', on);
    $('cal-label').classList.toggle('busy', on);
    if (on) say('j-msg', t('loading')); else if ($('j-msg').textContent === t('loading')) say('j-msg', '');
  }
  function loadCal(force) {
    if (!calAnchor) calAnchor = todayIso();
    if (force) calCache = {};
    var r = calRange(), seq = ++calSeq, c = calCache[calKey(r)];
    $('cal-label').textContent = calLabel();
    if (c && c.data) { calData = c.data; calBusy(false); renderCal(); calPrefetch(); return; }
    calBusy(true);
    calFetch(r)
      .then(function (d) {
        if (seq !== calSeq) return;
        calData = d; calBusy(false); renderCal(); calPrefetch();
      })
      .catch(function (e) { if (seq !== calSeq) return; calBusy(false); if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('j-msg', errText(e), 'err'); });
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
        var b = el('button', 'cal-ev' + (it.series ? (it.kind === 'Make-up' ? ' makeup' : it.kind === 'Kelas' ? ' kelas' : it.kind === 'Meeting' ? ' meet' : (it.kind === 'Multi' || it.kind === 'Rutinitas') ? ' multi' : ' amb') : '') + (it.status === 'Draf' ? ' draft' : '') + (it._clash ? ' clash' : '')); b.type = 'button';
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

  // QUICK-BEGIN
  var Q_MONTHS = { jan: 1, januari: 1, january: 1, feb: 2, februari: 2, february: 2, mar: 3, maret: 3, march: 3, apr: 4, april: 4, mei: 5, may: 5, jun: 6, juni: 6, june: 6, jul: 7, juli: 7, july: 7, agu: 8, agt: 8, agustus: 8, aug: 8, august: 8, sep: 9, sept: 9, september: 9, okt: 10, oktober: 10, oct: 10, october: 10, nov: 11, november: 11, des: 12, desember: 12, dec: 12, december: 12 };
  var Q_DAYS = { minggu: 0, ahad: 0, sunday: 0, sun: 0, senin: 1, monday: 1, mon: 1, selasa: 2, tuesday: 2, tue: 2, rabu: 3, wednesday: 3, wed: 3, kamis: 4, thursday: 4, thu: 4, jumat: 5, "jum'at": 5, jumaat: 5, friday: 5, fri: 5, sabtu: 6, saturday: 6, sat: 6 };
  function qp2(n) { return ('0' + n).slice(-2); }
  function qIso(d) { return d.getUTCFullYear() + '-' + qp2(d.getUTCMonth() + 1) + '-' + qp2(d.getUTCDate()); }
  function qDate(iso) { var p = iso.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); }
  function qAdd(iso, n) { var d = qDate(iso); d.setUTCDate(d.getUTCDate() + n); return qIso(d); }
  function qValid(y, m, d) { var x = new Date(Date.UTC(y, m - 1, d)); return x.getUTCFullYear() === y && x.getUTCMonth() === m - 1 && x.getUTCDate() === d; }
  function qHour(h, period) {
    if (period === 'pm' || period === 'sore' || period === 'malam') { if (h < 12) h += 12; if (period === 'malam' && h === 12) h = 24; }
    else if (period === 'siang') { if (h < 11) h += 12; }
    else if (period === 'am' || period === 'pagi') { if (h === 12) h = 0; }
    return h;
  }
  function qClock(h, m) { return h > 23 || m > 59 ? '' : qp2(h) + ':' + qp2(m); }
  // Membaca kalimat bebas (ID/EN) menjadi {title, date, start, end, location, hasDate, hasTime}
  function parseQuick(text, today) {
    var s = ' ' + String(text || '').replace(/\s+/g, ' ').trim() + ' ', low = s.toLowerCase(), out = { title: '', date: '', start: '', end: '', location: '', hasDate: false, hasTime: false };
    var ty = +today.slice(0, 4), tm = +today.slice(5, 7), td = +today.slice(8, 10);
    function cut(re, fn) {
      var m = re.exec(low);
      if (!m) return false;
      if (fn(m) === false) return false;
      s = s.slice(0, m.index) + ' ' + s.slice(m.index + m[0].length); low = low.slice(0, m.index) + ' ' + low.slice(m.index + m[0].length);
      return true;
    }
    // ---- tanggal ----
    var done = cut(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/, function (m) { if (!qValid(+m[1], +m[2], +m[3])) return false; out.date = m[1] + '-' + qp2(+m[2]) + '-' + qp2(+m[3]); });
    if (!done) done = cut(/\b(hari ini|today)\b/, function () { out.date = today; });
    if (!done) done = cut(/\b(lusa|day after tomorrow)\b/, function () { out.date = qAdd(today, 2); });
    if (!done) done = cut(/\b(besok|tomorrow)\b/, function () { out.date = qAdd(today, 1); });
    if (!done) done = cut(/\b(\d{1,2})\s+(januari|january|jan|februari|february|feb|maret|march|mar|april|apr|mei|may|juni|june|jun|juli|july|jul|agustus|august|agu|agt|aug|september|sept|sep|oktober|october|okt|oct|desember|december|des|dec|november|nov)\b(?:\s+(\d{4}))?/, function (m) {
      var mo = Q_MONTHS[m[2]], d = +m[1], y = m[3] ? +m[3] : ty;
      if (!qValid(y, mo, d)) return false;
      if (!m[3] && qIso(new Date(Date.UTC(y, mo - 1, d))) < today) y++;
      out.date = y + '-' + qp2(mo) + '-' + qp2(d);
    });
    if (!done) done = cut(/\b(\d{1,2})[\/](\d{1,2})(?:[\/](\d{4}))?\b/, function (m) {
      var d = +m[1], mo = +m[2], y = m[3] ? +m[3] : ty;
      if (!qValid(y, mo, d)) return false;
      if (!m[3] && qIso(new Date(Date.UTC(y, mo - 1, d))) < today) y++;
      out.date = y + '-' + qp2(mo) + '-' + qp2(d);
    });
    if (!done) done = cut(/\b(?:tanggal|tgl\.?)\s*(\d{1,2})\b/, function (m) {
      var d = +m[1], y = ty, mo = tm;
      if (d < td) { mo++; if (mo > 12) { mo = 1; y++; } }
      if (!qValid(y, mo, d)) return false;
      out.date = y + '-' + qp2(mo) + '-' + qp2(d);
    });
    if (!done) done = cut(/\b(?:(next|depan)\s+)?(senin|selasa|rabu|kamis|jum'at|jumaat|jumat|sabtu|minggu|ahad|monday|tuesday|wednesday|thursday|friday|saturday|sunday)(?:\s+(depan|ini|lalu))?\b/, function (m) {
      var wd = Q_DAYS[m[2]], cur = qDate(today).getUTCDay(), diff = (wd - cur + 7) % 7;
      if (m[1] === 'next' || m[3] === 'depan') { var toMon = (8 - cur) % 7 || 7; diff = toMon + ((wd + 6) % 7); }
      else if (diff === 0) diff = 7;
      out.date = qAdd(today, diff);
    });
    out.hasDate = !!out.date;
    // ---- jam ----
    var P = '(pagi|siang|sore|malam|am|pm|a\\.m\\.|p\\.m\\.)';
    var T = '(\\d{1,2})(?:[.:](\\d{2}))?';
    function per(x) { return x ? x.replace(/\./g, '') : ''; }
    var got = cut(new RegExp('\\b(?:jam|pukul|at|from|dari|@)\\s*' + T + '\\s*' + P + '?\\s*(?:-|–|sampai|sd|s\\/d|hingga|to|until)\\s*' + T + '\\s*' + P + '?', 'i'), function (m) {
      var p2 = per(m[6]), p1 = per(m[3]) || p2, h1 = qHour(+m[1], p1), h2 = qHour(+m[4], p2 || p1);
      if (h2 <= h1 && !p2 && h2 < 12) h2 += 12;
      var a = qClock(h1, m[2] ? +m[2] : 0), b = qClock(h2, m[5] ? +m[5] : 0);
      if (!a || !b) return false;
      out.start = a; out.end = b;
    });
    if (!got) got = cut(new RegExp('\\b(\\d{1,2})[.:](\\d{2})\\s*(?:-|–|sampai|sd|s\\/d|hingga|to|until)\\s*(\\d{1,2})[.:](\\d{2})\\b'), function (m) {
      var a = qClock(+m[1], +m[2]), b = qClock(+m[3], +m[4]);
      if (!a || !b) return false;
      out.start = a; out.end = b;
    });
    if (!got) got = cut(new RegExp('\\b(?:jam|pukul|at|@)\\s*' + T + '\\s*' + P + '?', 'i'), function (m) {
      var a = qClock(qHour(+m[1], per(m[3])), m[2] ? +m[2] : 0);
      if (!a) return false;
      out.start = a;
    });
    if (!got) got = cut(/\b(\d{1,2}):(\d{2})\b/, function (m) { var a = qClock(+m[1], +m[2]); if (!a) return false; out.start = a; });
    if (!got) got = cut(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/, function (m) { var a = qClock(qHour(+m[1], m[3]), m[2] ? +m[2] : 0); if (!a) return false; out.start = a; });
    out.hasTime = !!out.start;
    // ---- durasi ----
    if (out.start && !out.end) {
      var mins = 0;
      cut(/\b(?:selama|for)?\s*(\d+(?:[.,]5)?)\s*(jam|hours?|hrs?|menit|minutes?|mins?)\b/, function (m) {
        var n = parseFloat(m[1].replace(',', '.')); mins = /^(jam|h)/.test(m[2]) ? Math.round(n * 60) : Math.round(n);
      });
      var sp = out.start.split(':'), tot = +sp[0] * 60 + +sp[1] + (mins || 60);
      out.end = tot >= 24 * 60 ? '23:59' : qp2(Math.floor(tot / 60)) + ':' + qp2(tot % 60);
    }
    // ---- lokasi ----
    var lm = /\s(?:di|at|@)\s+([^]+?)\s*$/i.exec(s);
    if (lm) { out.location = lm[1].replace(/[.,;]+$/, '').trim(); s = s.slice(0, lm.index) + ' '; }
    // ---- judul ----
    var title = s.replace(/^\s*(?:tolong\s+)?(?:(?:jadwalkan|jadwal|tambahkan|tambah|buatkan|buat|ingatkan(?:\s+(?:gw|saya|aku))?|schedule|add|remind me to|set up|set)\s+)+/i, ' ')
      .replace(/\b(pada|on|pukul|jam|pada hari)\b\s*$/i, ' ').replace(/\s+(pada|on|untuk|for|hari|pukul|jam)\s*$/i, ' ').replace(/[\s,.\-–]+$/, '').replace(/^[\s,.\-–]+/, '').replace(/\s+/g, ' ').trim();
    out.title = title ? title.charAt(0).toUpperCase() + title.slice(1) : '';
    return out;
  }
  // QUICK-END

  // ---------- pola: beberapa hari / berulang ----------
  var fPat = 'one', fDays = [];
  function syncDays() {
    var rows = $('f-days').querySelectorAll('.dayrow');
    if (!rows.length) return;
    fDays = [].map.call(rows, function (r) {
      return { date: r.querySelector('.dd').value, start: r.querySelector('.ds').value, end: r.querySelector('.de').value, location: r.querySelector('.dl').value };
    });
  }
  function renderDays() {
    var box = $('f-days'); box.innerHTML = '';
    fDays.forEach(function (d, i) {
      var r = el('div', 'dayrow');
      var di = el('input', 'dd'); di.type = 'date'; di.value = d.date || ''; di.setAttribute('aria-label', t('f_date'));
      var si = el('input', 'ds'); si.type = 'time'; si.value = d.start || ''; si.setAttribute('aria-label', t('f_start'));
      var ei = el('input', 'de'); ei.type = 'time'; ei.value = d.end || ''; ei.setAttribute('aria-label', t('f_end'));
      var li = el('input', 'dl'); li.type = 'text'; li.maxLength = 300; li.value = d.location || ''; li.placeholder = t('p_loc_day');
      var x = el('button', 'btn ghost sm x', '✕'); x.type = 'button'; x.setAttribute('aria-label', t('p_rm'));
      x.addEventListener('click', function () { syncDays(); fDays.splice(i, 1); renderDays(); });
      [di, si, ei, x, li].forEach(function (n) { r.appendChild(n); });
      box.appendChild(r);
    });
    $('f-mcount').textContent = fDays.length ? t('p_count', { n: fDays.length }) : t('p_count0');
  }
  function applyPat(editing) {
    $('f-patw').hidden = !!editing;
    if (editing) fPat = 'one';
    document.querySelectorAll('.seg-pat .seg-a').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-pat') === fPat); });
    var one = fPat === 'one';
    $('f-single').hidden = !one; $('f-multi').hidden = one; $('f-statw').hidden = !one;
    $('f-gen').hidden = fPat !== 'repeat';
    if (!one) {
      if (fPat === 'repeat' && !$('g-wd').children.length) {
        [1, 2, 3, 4, 5, 6, 0].forEach(function (w) {
          var lb = el('label', 'chip-c'), cb = document.createElement('input'); cb.type = 'checkbox'; cb.value = String(w);
          lb.appendChild(cb); lb.appendChild(document.createTextNode(DAYS[state.lang][w].slice(0, 3))); $('g-wd').appendChild(lb);
        });
      } else if (fPat === 'repeat') {
        [].forEach.call($('g-wd').children, function (lb) { var w = Number(lb.firstChild.value); lb.lastChild.nodeValue = DAYS[state.lang][w].slice(0, 3); });
      }
      if (!$('g-from').value) $('g-from').value = $('f-date').value || todayIso();
      if (!$('g-to').value) $('g-to').value = isoAdd($('g-from').value, 55);
      if (!fDays.length && fPat === 'multi') {
        var d0 = $('f-date').value || todayIso(), s = $('f-start').value, e = $('f-end').value;
        fDays = [{ date: d0, start: s, end: e, location: '' }, { date: isoAdd(d0, 1), start: s, end: e, location: '' }];
      }
      renderDays();
    }
  }
  function setPat(p) {
    if (fPat !== 'one') syncDays();
    fPat = p;
    if (p === 'multi' && fDays.length < 2) fDays = [];
    if (p === 'repeat') fDays = [];
    applyPat(false);
  }
  function genDays() {
    var wds = [].filter.call($('g-wd').querySelectorAll('input:checked'), function () { return true; }).map(function (c) { return Number(c.value); });
    var from = $('g-from').value, to = $('g-to').value;
    if (!wds.length || !from || !to || to < from) { say('jf-msg', t('p_need1'), 'err'); return; }
    var s = $('g-start').value, e = $('g-end').value, out = [], d = from, guard = 0;
    while (d <= to && out.length < 60 && guard++ < 400) {
      if (wds.indexOf(wdOf(d)) >= 0) out.push({ date: d, start: s, end: e, location: '' });
      d = isoAdd(d, 1);
    }
    say('jf-msg', '');
    fDays = out; renderDays();
  }
  function addDay() {
    syncDays();
    var last = fDays[fDays.length - 1] || { date: todayIso(), start: '', end: '' };
    fDays.push({ date: last.date ? isoAdd(last.date, fPat === 'repeat' ? 7 : 1) : '', start: last.start, end: last.end, location: '' });
    if (fDays.length > 60) fDays.length = 60;
    renderDays();
  }
  function submitMulti() {
    syncDays();
    var f = readForm();
    if (!f.title) { say('jf-msg', t('v_title'), 'err'); $('f-title').focus(); return; }
    if (fPat === 'multi' && fDays.length < 2) { say('jf-msg', t('p_need2'), 'err'); return; }
    if (!fDays.length) { say('jf-msg', t('p_need1'), 'err'); return; }
    if (fDays.some(function (d) { return !d.date; })) { say('jf-msg', t('p_nodate'), 'err'); return; }
    var seen = {};
    for (var i = 0; i < fDays.length; i++) { var k = fDays[i].date + ' ' + fDays[i].start; if (seen[k]) { say('jf-msg', t('p_dup'), 'err'); return; } seen[k] = 1; }
    if (f.reminders.length > 5) { say('jf-msg', t('f_rem'), 'err'); return; }
    state.saving = true; $('jf-save').disabled = true; lockUi($('jf'), true, '.msg'); say('jf-msg', t('saving'));
    api('jadwalMulti', {
      key: formState._key,
      base: { title: f.title, location: f.location, maps: f.maps, guests: f.guests, reminders: f.reminders, notes: f.notes, kind: fPat === 'multi' ? 'Multi' : 'Rutinitas' },
      days: fDays
    }).then(function (r) {
      closeForm(); homeStale = true;
      if (tab === 'home') { homeStale = false; refresh(); }
      if (calMode !== 'list') loadCal(true); else reloadJadwalView(true);
      say('j-msg', r.syncError ? t('j_sync_err') + r.syncError : t('p_saved', { n: r.count }), r.syncError ? 'err' : 'ok');
    }).catch(function (e) {
      if (e && e.code === 'unauthorized') { logout(t('err_unauthorized')); return; }
      say('jf-msg', errText(e), 'err');
    }).then(function () { state.saving = false; $('jf-save').disabled = false; lockUi($('jf'), false); });
  }

  function openForm(it, preset) {
    preset = preset || {};
    formState = it ? JSON.parse(JSON.stringify(it)) : {
      id: '', title: preset.title || '', date: preset.date || (jData ? jData.today : todayIso()), start: preset.start || '', end: preset.end || '', location: preset.location || '', maps: '', notes: '', guests: [],
      reminders: jData ? jData.defaults.slice() : [], status: 'Aktif'
    };
    formState._key = newKey();
    fPat = 'one'; fDays = [];
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
    applyPat(editing);
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
    if (fPat !== 'one' && !formState.id) { submitMulti(); return; }
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
        if (calMode !== 'list') { loadCal(true); return; }
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
    if (it.meet) { var ml = el('a', '', it.meet); ml.href = it.meet; ml.target = '_blank'; ml.rel = 'noopener noreferrer'; dlRow(dl, 'Google Meet', ml); }
    dlRow(dl, t('d_guests'), it.guests && it.guests.length ? it.guests.join('\n') : '');
    dlRow(dl, t('d_rem'), it.reminders && it.reminders.length ? it.reminders.map(remLabel).join(', ') + ' ' + t('d_before') : t('d_no_rem'));
    dlRow(dl, t('d_notes'), it.notes);
    dlRow(dl, t('d_sync'), it.sync);
    say('d-msg', '');
    var cancelled = it.status === 'Batal';
    $('d-cancel').textContent = t(cancelled ? 'j_restore' : 'j_cancel');
    $('d-mail').hidden = !(it.status === 'Aktif' && !it.error && it.ymd >= todayYmd);
    $('d-makeup').hidden = !(it.series && (it.kind === 'Kelas' || it.kind === 'Make-up'));
    $('d-makeup').onclick = function () { closeDetail(); openMakeup(it, null); };
    var isMulti = !!(it.series && (it.kind === 'Multi' || it.kind === 'Rutinitas'));
    $('d-series').hidden = !(isMulti && it.status !== 'Batal');
    $('d-series').onclick = function () {
      if (!window.confirm(t('p_confirm_series'))) return;
      var card = $('dsheet').firstElementChild;
      lockUi(card, true, '.msg'); say('d-msg', t('saving'));
      api('jadwalSeriesCancel', { series: it.series })
        .then(function (r) {
          closeDetail(); homeStale = true;
          if (tab === 'jadwal') reloadJadwalView(true); else if (tab === 'home') { homeStale = false; refresh(); }
          say(tab === 'jadwal' ? 'j-msg' : 'app-msg', r.syncError ? t('j_sync_err') + r.syncError : t('p_series_done', { n: r.count }), r.syncError ? 'err' : 'ok');
        })
        .catch(function (e) { if (e && e.code === 'unauthorized') logout(t('err_unauthorized')); else say('d-msg', errText(e), 'err'); })
        .then(function () { lockUi(card, false); });
    };
    $('d-edit').onclick = function () { closeDetail(); if (it.kind === 'Meeting') { openMt(parseMeetItem(it)); return; } ensureJData(function () { openForm(it); }); };
    $('d-mail').onclick = function () { closeDetail(); pendingEvent = it.id; switchTab('surat'); showCompose(); };
    $('d-cancel').onclick = function () {
      if (!cancelled && !window.confirm(t('j_confirm_cancel', { t: it.title }))) return;
      var card = $('dsheet').firstElementChild;
      lockUi(card, true, '.msg'); say('d-msg', t('saving'));
      api('jadwalStatus', { id: it.id, status: cancelled ? 'Aktif' : 'Batal' })
        .then(function (r) {
          closeDetail(); homeStale = true;
          if (tab === 'jadwal') reloadJadwalView(true); else if (tab === 'home') { homeStale = false; refresh(); }
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
    loadQueue(); loadRsvp();
  }
  function showCompose() {
    sMode = 'compose';
    $('s-list-view').hidden = true; $('s-compose-view').hidden = false;
    loadSurat();
    applyPendingEvent();
    window.scrollTo(0, 0);
  }
  function applyPendingEvent() {
    applyPendingContact();
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
      uploads: sUps.filter(function (u) { return u.status === 'ok'; }).map(function (u) { return u.id; }),
      ics: $('s-ics').checked && !!$('s-ev').value,
      rsvp: $('s-rsvp').checked, rsvpBy: $('s-rsvp').checked ? $('s-rsvp-by').value : '', rsvpBase: $('s-rsvp').checked ? rsvpBase() : ''
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
    $('s-send').textContent = t(schedOn() ? 's_sched_confirm' : 's_send_confirm', { to: $('s-to').value.trim() });
    clearTimeout(sArmTimer); sArmTimer = setTimeout(disarm, 5000);
  }
  function disarm() { sArmed = false; clearTimeout(sArmTimer); $('s-send').textContent = sendLabel(); }
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
    if ($('s-ics').checked && !$('s-ev').value) { say('s-msg', t('s_e_ics'), 'err'); return; }
    if (!test && schedOn()) {
      if (!$('s-sd').value || !$('s-st').value) { say('s-msg', t('s_e_sched'), 'err'); return; }
      var w = wibNow(), nowS = isoOf(w.getFullYear(), w.getMonth() + 1, w.getDate()) + ' ' + pad2(w.getHours()) + ':' + pad2(w.getMinutes());
      if ($('s-sd').value + ' ' + $('s-st').value <= nowS) { say('s-msg', t('s_e_sched_past'), 'err'); return; }
    }
    if (!test && !sArmed) { arm(); return; }
    disarm();
    setBusy(true);
    say('s-msg', t(test ? 's_sending_test' : 's_sending'));
    var schedAt = !test && schedOn() ? $('s-sd').value + ' ' + $('s-st').value : '';
    (schedAt ? api('suratSchedule', { mail: collectMail(), at: schedAt, key: sKey }) : api('suratSend', { mail: collectMail(), test: test, key: test ? undefined : sKey }))
      .then(function (r) {
        var att = r.attachments && r.attachments.length ? t('s_att', { n: r.attachments.length, names: r.attachments.join(', ') }) : t('s_noatt');
        if (schedAt) { sDone = true; sQ = null; setBusy(false); $('s-new').hidden = false; say('s-msg', t('s_ok_sched', { to: r.to, at: r.at }), 'ok'); return; }
        if (test) { setBusy(false); say('s-msg', t('s_ok_test', { to: r.to }) + att, 'ok'); return; }
        sDone = true;
        homeStale = true;
        sHistStale = true; rvData = null;
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
    if ($('s-ics')) $('s-ics').checked = false;
    if ($('s-rsvp')) { $('s-rsvp').checked = false; $('s-rsvp-box').hidden = true; $('s-rsvp-by').value = ''; }
    if ($('s-sched')) { $('s-sched').checked = false; $('s-sched-box').hidden = true; $('s-sd').value = ''; $('s-st').value = ''; }
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
    $('btn-refresh').addEventListener('click', function () { if (tab === 'jadwal') reloadJadwalView(true); else if (tab === 'kelas') { kData = null; loadKelas(); } else if (tab === 'amb') { aData = null; loadAmb(); } else if (tab === 'meeting') { mData = null; loadMeeting(); } else if (tab === 'todo') { tdData = null; loadTodo(); } else if (tab === 'kontak') { loadKontak(true); } else if (tab === 'catatan') loadCatatan(); else refresh(); });
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
    $('k-add').addEventListener('click', openKForm);
    $('c-add').addEventListener('click', function () { openCt(null); });
    $('c-q').addEventListener('input', renderKontak);
    $('ctf').addEventListener('submit', submitCt);
    $('ctf-cancel').addEventListener('click', closeCt);
    ['ctf-name', 'ctf-title-sel', 'ctf-front', 'ctf-back'].forEach(function (id) { $(id).addEventListener('input', ctPreview); $(id).addEventListener('change', ctPreview); });
    $('s-contacts').addEventListener('click', openPk);
    $('pk-close').addEventListener('click', closePk);
    $('pk-q').addEventListener('input', renderPk);
    $('pk-to').addEventListener('click', function () { usePk('s-to'); });
    $('pk-cc').addEventListener('click', function () { usePk('s-cc'); });
    $('s-sched').addEventListener('change', onSchedToggle);
    $('td-add').addEventListener('click', function () { openTd(null); });
    $('td-quick').addEventListener('submit', quickTd);
    $('tdf').addEventListener('submit', submitTd);
    $('tdf-cancel').addEventListener('click', closeTd);
    document.querySelectorAll('[data-tscope]').forEach(function (b) { b.addEventListener('click', function () {
      tdScope = b.getAttribute('data-tscope'); document.querySelectorAll('[data-tscope]').forEach(function (x) { x.classList.toggle('on', x === b); }); renderTodo(); }); });
    $('m-add').addEventListener('click', function () { openMt(null); });
    $('mtf').addEventListener('submit', submitMt);
    $('mtf-cancel').addEventListener('click', closeMt);
    $('mtf-addp').addEventListener('click', function () { var cur = readMtPeople(); cur.push({ name: '', email: '' }); renderMtPeople(cur); mtRefresh(); });
    $('mtf-event').addEventListener('input', mtRefresh);
    document.querySelectorAll('.seg-m').forEach(function (b) { b.addEventListener('click', function () { mMode = b.getAttribute('data-mmode'); mtRefresh(); }); });
    document.querySelectorAll('[data-mscope]').forEach(function (b) { b.addEventListener('click', function () {
      mScope = b.getAttribute('data-mscope'); document.querySelectorAll('[data-mscope]').forEach(function (x) { x.classList.toggle('on', x === b); }); mData = null; renderMeeting(); loadMeeting(); }); });
    $('qa').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var txt = $('qa-in').value.trim();
      if (!txt) { say('qa-msg', t('qa_empty'), 'err'); return; }
      var today = jData ? jData.today : todayIso(), r = parseQuick(txt, today), got = [];
      if (r.hasDate) got.push(t('qa_date') + ' ' + r.date);
      if (r.hasTime) got.push(t('qa_time') + ' ' + r.start + '\u2013' + r.end);
      if (r.location) got.push(t('qa_loc') + ' ' + r.location);
      var warn = [];
      if (!r.hasDate) warn.push(t('qa_nodate'));
      if (!r.hasTime) warn.push(t('qa_notime'));
      say('qa-msg', warn.length ? warn.join('; ') : t('qa_read', { x: got.join(', ') }), warn.length ? 'warn' : '');
      openForm(null, { title: r.title || txt, date: r.date, start: r.start, end: r.end, location: r.location });
      $('qa-in').value = '';
    });
    $('s-rsvp').addEventListener('change', onRsvpToggle);
    $('k-libur').addEventListener('click', openLibur);
    $('ucf').addEventListener('submit', submitUc);
    $('ucf-cancel').addEventListener('click', closeUc);
    $('lf-addr').addEventListener('click', function () { var l = lfRanges(); l.push({ from: '', to: '' }); renderLfRanges(l); });
    $('l-close').addEventListener('click', closeLibur);
    $('lf').addEventListener('submit', saveLibur);
    $('lf-reset').addEventListener('click', resetLf);
    $('l-check').addEventListener('click', checkClash);
    $('atf').addEventListener('submit', function (ev) { ev.preventDefault(); saveAtt($('atf-status').value); });
    $('atf-clear').addEventListener('click', function () { saveAtt(''); });
    $('atf-cancel').addEventListener('click', closeAtt);
    $('a-add').addEventListener('click', function () { openB(null); });
    $('bf').addEventListener('submit', submitB);
    $('bf-cancel').addEventListener('click', closeB);
    $('bf-addp').addEventListener('click', function () { readPartners(); bForm.partners.push({ name: '', phone: '' }); renderPartners(); });
    ['bf-school', 'bf-city', 'bf-from', 'bf-to', 'bf-type'].forEach(function (id) { $(id).addEventListener('input', bRefresh); $(id).addEventListener('change', bRefresh); });
    $('bf-type').addEventListener('change', function () { bTypeManual = true; bRefresh(); });
    $('bf-purpose-sel').addEventListener('change', function () { var o = $('bf-purpose-sel').value === '__other'; $('bf-purpose').hidden = !o; if (o) $('bf-purpose').focus(); });
    document.querySelectorAll('[data-ascope]').forEach(function (b) { b.addEventListener('click', function () {
      aScope = b.getAttribute('data-ascope'); aData = null;
      document.querySelectorAll('[data-ascope]').forEach(function (x) { x.classList.toggle('on', x === b); });
      loadAmb();
    }); });
    $('kf').addEventListener('submit', submitK);
    $('kf-cancel').addEventListener('click', closeKForm);
    $('kf-addslot').addEventListener('click', function () { readSlots(); var l = kForm.slots[kForm.slots.length - 1] || {}; kForm.slots.push({ wd: ((l.wd == null ? 1 : l.wd) + 2) % 7, start: '', end: '' }); renderSlots(); kRecalc(); });
    $('kf-slots').addEventListener('input', function () { kRecalc(true); });
    $('kf-slots').addEventListener('change', function () { kRecalc(true); });
    $('kf-from').addEventListener('change', function () { kRecalc(); });
    $('kf-to').addEventListener('change', function () { kRecalc(); });
    $('mf').addEventListener('submit', submitMakeup);
    $('mf-cancel').addEventListener('click', closeMakeup);
    $('mf-moved').addEventListener('change', toggleMfDate);
    $('mf-copy').addEventListener('click', copyMf);
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
    $('btn-menu').addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
    $('nav-ov').addEventListener('click', function () { setMenu(false); });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); $('btn-menu').focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth >= 900 && document.body.classList.contains('menu-open')) setMenu(false); });
    document.querySelectorAll('.seg-pat .seg-a').forEach(function (b) { b.addEventListener('click', function () { setPat(b.getAttribute('data-pat')); }); });
    $('g-make').addEventListener('click', genDays);
    $('f-addday').addEventListener('click', addDay);
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
