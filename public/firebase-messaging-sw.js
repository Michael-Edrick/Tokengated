
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in your messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyA9o_xcKwyeN9I74Yf2mOn4IRFR_7iXH8Q",
  authDomain: "arina-63c5c.firebaseapp.com",
  projectId: "arina-63c5c",
  storageBucket: "arina-63c5c.firebasestorage.app",
  messagingSenderId: "212354030820",
  appId: "1:212354030820:web:87fd546697c0bddce8e0f1",
  measurementId: "G-9EXB981D3Z"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  // //console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Customize your icon path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
