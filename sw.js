const CACHE_NAME = 'hk-afterlife-v1-2';
const URLS_TO_CACHE = [
  '/Usernetworktree/',
  '/Usernetworktree/index.html',
  '/Usernetworktree/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
