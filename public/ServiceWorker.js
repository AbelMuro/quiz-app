var CACHE_NAME = 'Quiz App';
var urlsToCache = [
  '/'
];


// Install service worker
self.addEventListener('install', e => {
  // Perform the install steps
  e.waitUntil(                
    caches.open(CACHE_NAME)         
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});
 
// Cache and return the requests
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(function(response) {
          if (response) 
            return response;
          else
            return fetch(e.request)
                .then((response) => {
                    const cloneResponse = response.clone();
                    caches.open('Quiz App')
                      .then((cache) => {
                          cache.put(e.request, cloneResponse)
                      })
                  return networkResponse;
                })
        })
        .catch(() => {
          return new Response('Error');
        })
  );
});
 
// Update service worker
self.addEventListener('activate', e => {
  var cacheWhitelist = ['Quiz App'];        
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});