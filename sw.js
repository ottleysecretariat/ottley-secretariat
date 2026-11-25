// Service worker sederhana: jaringan dulu, cadangan dari cache (supaya app tetap terbuka saat offline).
// Permintaan ke Apps Script (lintas domain) tidak disentuh sama sekali.
var CACHE = 'ottley-v22';
var SHELL = ['./', 'index.html', 'style.css', 'app.js', 'rsvp.html', 'config.js', 'logo-square.png', 'logo-wide.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Jaringan dulu; kalau lebih dari 4 detik tidak menjawab, pakai cadangan dari cache supaya tidak menunggu lama.
  var net = fetch(req).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(req, copy); });
    return res;
  });
  var fallback = function () { return caches.match(req).then(function (r) { return r || caches.match('index.html'); }); };
  var timer = new Promise(function (resolve) { setTimeout(function () { fallback().then(resolve); }, 4000); });
  e.respondWith(Promise.race([net.catch(fallback), timer]).then(function (r) { return r || net; }));
});
