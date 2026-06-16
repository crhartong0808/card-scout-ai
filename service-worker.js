const CACHE = 'cardscout-safe-v1';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'])));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'CardScout AI', body: 'New card research alert.' };
  event.waitUntil(self.registration.showNotification(data.title || 'CardScout AI', {
    body: data.body || 'New alert available.', icon: './icon-192.png', badge: './icon-192.png'
  }));
});
