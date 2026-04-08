const CACHE_NAME = 'allbook-cache-v3'; // v3로 업데이트!
const urlsToCache = [
  './index.html',
  './manifest.json',
  './AllBook_logo.svg',
  './AllBook_logo3(512white).svg',
  './AllBook_logo3(512transp).svg',
  './ewha_font.ttf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
