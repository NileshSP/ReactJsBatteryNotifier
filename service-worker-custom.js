var cacheName = 'BatteryNotifier-V1';
var filesToCache = [
    '/',                // index.html
    'src/assets/'
];
window.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});