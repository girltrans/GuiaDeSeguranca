const CACHE_NAME = 'guiadeseguranca.guia-v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll([
            './',
            './2fa.html',
            './discord.html',
            './minecraft.html',
            './tiktok.html',
            './twitch.html',
            './epic.html',
            './snapchat.html',
            './kick.html',
            './x.html',
            './valorant.html',
            './instagram.html',
            './playstation.html',
            './steam.html',
            './steam-id.html',
            './js/generate.js',
            './js/steamid.js',
            './guia/discord.js',
            './guia/minecraft.js',
            './guia/steam.js',
            './guia/tiktok.js',
            './guia/twitch.js',
            './guia/epic.js',
            './guia/snapchat.js',
            './guia/kick.js',
            './guia/x.js',
            './guia/valorant.js',
            './guia/instagram.js',
            './guia/playstation.js',
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.umd.min.js',
            './js/rolling-number.js'
        ]))
    );
});

self.addEventListener('activate', (event) => {
    self.clients.claim();
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                const cloned = networkResponse.clone();

                if (
                    networkResponse &&
                    (networkResponse.type === 'basic' || networkResponse.type === 'cors') &&
                    networkResponse.status === 200
                ) {
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, cloned);
                    });
                }

                return networkResponse;
            })
            .catch(() => {
                return caches.match(event.request).then((cachedResponse) => {
                    if (!cachedResponse && event.request.mode === 'navigate') {
                        return caches.match('/');
                    }
                    return cachedResponse;
                });
            })
    );
});