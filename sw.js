self.addEventListener('install', () => {
    self.skipWaiting();
    console.log('Service worker installed');
});

self.addEventListener('activate', () => console.log('Service worker active'));

self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
            console.log('Request intercepted:', event.request);

            if (!event.request.url.includes(self.location.origin)) {
                console.warn('Fetching external file:', event.request.url);
            } else {
                return fetch(event.request);
            }
        })()
    );
});