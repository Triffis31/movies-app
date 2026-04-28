// This minimal Service Worker is required to pass Android's strict PWA install criteria
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // We do nothing here, but Chrome requires this listener to exist
});
