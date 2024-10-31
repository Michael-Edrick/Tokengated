import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import Firebase Authentication
import "firebase/compat/firestore"; // Import Firestore
import "firebase/compat/storage"; // Import Firebase Storage
    const config = {
            apiKey: "AIzaSyCL5KlLR_YOEGMoZcA8xSBurBcIBb_l2Ns",
            authDomain: "itson-a52a1.firebaseapp.com",
            projectId: "itson-a52a1",
            storageBucket: "itson-a52a1.appspot.com",
            messagingSenderId: "234590517817",
            appId: "1:234590517817:web:86b3e11695bc0df715abe8",
            measurementId: "G-LFFW8K9WZH"
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