const CACHE_NAME = "chapitres-op-cache-v1";
const urlsToCache = [
    "./index.html",
    "./script.js",
    "./style.css",
    "./images/east_blue.jpg",
    "./images/alabasta.jpg",
    "./images/skypiea.jpg",
    "./images/water_seven.webp",
    "./images/thriller_bark.webp",
    "./images/guerre_sommet.webp",
    "./images/ile_2_hommes_poissons.webp",
    "./images/dressrosa.jpeg",
    "./images/whole_cake_island.webp",
    "./images/pays_2_wa.webp",
    "./images/finale.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});