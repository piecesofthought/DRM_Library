const CACHE_NAME = 'allbook-cache-v3';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './AllBook_logo.svg',
  './ewha_font.ttf'
  './icon2.png',
  // 추가로 사용하는 로고 svg나 폰트 파일이 있다면 여기에 등록하세요.
];

// 설치 및 캐싱
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 네트워크 요청 가로채기 (오프라인 지원)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 캐시된 파일 반환, 없으면 네트워크 요청
        return response || fetch(event.request);
      })
  );
});
