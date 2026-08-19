/*
 * Sierra H4 service worker.
 *
 * Deliberately shallow: network-first for pages, stale-while-revalidate for
 * hashed static assets. Bump CACHE_VERSION whenever you edit this file.
 */

const CACHE_VERSION = "v1";
const STATIC_CACHE = `sh4-static-${CACHE_VERSION}`;
const PAGE_CACHE = `sh4-pages-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline";
const PRECACHE_URLS = [OFFLINE_URL, "/icons/icon-192.png"];

/*
 * Never cache these. This is a security requirement, not just correctness:
 * /dashboard is admin-only (guarded by proxy.js) and the API routes return
 * members' names, emails and phone numbers. A cached response could be served
 * to the wrong person.
 */
const NEVER_CACHE_PREFIXES = ["/api/", "/dashboard", "/signin", "/signup"];

const isNeverCached = (pathname) =>
  NEVER_CACHE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix)
  );

const isStaticAsset = (pathname) =>
  pathname.startsWith("/_next/static/") ||
  pathname.startsWith("/icons/") ||
  /\.(?:css|js|woff2?|ttf|otf|png|jpe?g|gif|svg|webp|avif|ico)$/i.test(pathname);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGE_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name !== STATIC_CACHE && name !== PAGE_CACHE)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Bail out early on anything we must not touch.
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch (err) {
    return;
  }

  if (url.origin !== self.location.origin) return;
  if (isNeverCached(url.pathname)) return;

  // Pages: network-first, so content is never stale.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches
            .open(PAGE_CACHE)
            .then((cache) => cache.put(request, copy))
            .catch(() => {});
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then(
              (cached) =>
                cached ||
                caches.match(OFFLINE_URL) ||
                new Response("Offline", { status: 503 })
            )
        )
    );
    return;
  }

  // Static assets: stale-while-revalidate. Safe because Next hashes filenames.
  if (isStaticAsset(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const copy = response.clone();
              caches
                .open(STATIC_CACHE)
                .then((cache) => cache.put(request, copy))
                .catch(() => {});
            }
            return response;
          })
          .catch(() => cached);

        return cached || network;
      })
    );
  }

  // Everything else is left alone.
});
