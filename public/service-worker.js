const CACHE_NAME = 'human_body-cache-v1';
const urlsToCache = [
    // Stylos y html de public
    '/public/styles/index.css',
    '/public/index.html',
    '/src/assets/styles/definiciones.css',
    '/src/assets/styles/formularios.css',
    '/src/components/json/conceptos.json',
    '/src/components/api.js',
    '/src/components/definiciones.js',
    '/src/pages/definiciones.html',
    '/src/pages/login.html',
    '/src/pages/registro.html',
    '/src/pages/practica.html',

    //funciones
    '/public/app.js',
    // imágenes
    '/public/img/human_body.png',
    // icons
    '/public/icons/icon-192x192.png',
    '/public/icons/icon-512x512.png'

];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Archivos guardados');
                return cache.addAll(urlsToCache);
            })
    );
});
// Activación del Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Manejo de Fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response; // Respuesta en caché
                }
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Verifica si la respuesta es válida
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse; // Devuelve la respuesta de red si no se puede almacenar
                        }
                        
                        // Clona la respuesta antes de almacenarla en caché
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                        
                        return caches.match('/public/'); // Asegúrate de que este archivo existe

                    })
                    .catch(() => {
                        console.log("Estamos offline");
                        // Aquí podrías devolver una página de error o un recurso específico
                        return caches.match('/public/error_404.html'); // Asegúrate de que este archivo existe
                    });
            })
    );
});

// Para manejar las notificaciones
self.addEventListener('push', (event) => {
    const data = event.data.json();
    
    const options = {
        body: data.body,
        icon: 'icons/icon-144x144.png',
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

