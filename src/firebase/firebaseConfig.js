import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import Firebase Authentication
import "firebase/compat/firestore"; // Import Firestore
import "firebase/compat/storage"; // Import Firebase Storage
// import { getMessaging } from "firebase/messaging";
    const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
          };
    
let app ;
if(!firebase.apps.length){ // condition that multiple instances of firebase is not created
    app = firebase.initializeApp(config); // it initialize the firebase app
}

// Messaging service
export const firestore = firebase.firestore(); 
export const storage = firebase.storage(); // Export Firebase Storage
// export const messaging = getMessaging(app);
// export { firestore };
export default firebase;
