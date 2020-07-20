// should be encripted

//triggered by the browser
self.addEventListener('install', function(event) {
    console.log('[Service worker] Installing service worker...', event);
});

self.addEventListener('activate', function(event) {
    console.log('[Service worker] Activating service worker...', event);
    return self.clients.claim();
});

// triggered by every fetch, image, css, js all imported filles in index.html
self.addEventListener('fetch', function(event) {
    console.log('[Service worker] Fetching something...', event);
    event.respondWith(fetch(event.request));
})