const CACHE_NAME = 'birthday-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/tPQsJvmn/Screenshot-2025-06-09-09-45-54-244.jpg',
  'https://i.ibb.co/Cp0XQN3f/Screenshot-2025-06-06-09-50-15-379.jpg',
  'https://i.ibb.co/BKPCRxpY/Screenshot-2025-05-27-09-13-48-743.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
