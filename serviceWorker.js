const staticCoolPro = "cool-projects-site-v1";
const assets = [
    "/",
    "/index.html",
    "/assets/main.css",
    "/assets/script.js"
];

// Cache the assets
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCoolPro).then(cache => {
            cache.addAll(assets)
        })
    );
});

// Fetch the assets
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(result => {
        return result || fetch(fetchEvent.request)
        })
    );
});

