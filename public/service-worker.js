self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log("Push event received:", data);

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon || "/default-icon.png",
    badge: data.badge || "/default-badge.png",
    data: data.url,
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data;
  if (urlToOpen) {
    event.waitUntil(clients.openWindow(urlToOpen));
  }
});
F;
