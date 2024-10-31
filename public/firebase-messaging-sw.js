
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in your messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyCL5KlLR_YOEGMoZcA8xSBurBcIBb_l2Ns",
    authDomain: "itson-a52a1.firebaseapp.com",
    projectId: "itson-a52a1",
    storageBucket: "itson-a52a1.appspot.com",
    messagingSenderId: "234590517817",
    appId: "1:234590517817:web:86b3e11695bc0df715abe8",
    measurementId: "G-LFFW8K9WZH"
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
