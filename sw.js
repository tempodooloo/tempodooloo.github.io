self.addEventListener('install', () => {
    self.skipWaiting();
    console.log('Service worker installed');
});

self.addEventListener('activate', () => console.log('Service worker active'));

self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
            console.log('Request intercepted:', event.request);

            if (event.request.url.includes('chrome-extension')) {
                console.warn(
                    'Request to Chrome extension:',
                    event.request.url.replace('chrome-extension://', '')
                );
            } else {
                return fetch(event.request);
            }
        })()
    );
});