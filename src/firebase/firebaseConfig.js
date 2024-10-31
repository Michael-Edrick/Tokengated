import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import Firebase Authentication
import "firebase/compat/firestore"; // Import Firestore
import "firebase/compat/storage"; // Import Firebase Storage
    const config = {
        apiKey: "AIzaSyA9o_xcKwyeN9I74Yf2mOn4IRFR_7iXH8Q",
        authDomain: "arina-63c5c.firebaseapp.com",
        projectId: "arina-63c5c",
        storageBucket: "arina-63c5c.firebasestorage.app",
        messagingSenderId: "212354030820",
        appId: "1:212354030820:web:87fd546697c0bddce8e0f1",
        measurementId: "G-9EXB981D3Z"
          };
    
let app ;
if(!firebase.apps.length){ // condition that multiple instances of firebase is not created
    app = firebase.initializeApp(config); // it initialize the firebase app
}

// Messaging service
export const firestore = firebase.firestore(); 
export const storage = firebase.storage(); // Export Firebase Storage

// export { firestore };
export default firebase;