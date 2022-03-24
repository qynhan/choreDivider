// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/combat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDe3ovwRYj5CHUww6AgK3dWe3hGaQg-VW4",

  authDomain: "ada2022.firebaseapp.com",

  projectId: "ada2022",

  storageBucket: "ada2022.appspot.com",

  messagingSenderId: "42629120802",

  appId: "1:42629120802:web:ada3e27bdd282a48c71b7b",

  measurementId: "G-RVWQHLBWWC"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


/*import firebase from 'firebase/compat/app'; // new firebase version: MUST USE /compat
import "firebase/compat/auth"; // new firebase version: MUST USE /compat

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

export const auth = app.auth()
export default app
*/