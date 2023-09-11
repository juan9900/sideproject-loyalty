// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy-FmL3dcKlAmer7GEuV0qrKfXG36ntAw",
  authDomain: "loyalty-cards-ui.firebaseapp.com",
  projectId: "loyalty-cards-ui",
  storageBucket: "loyalty-cards-ui.appspot.com",
  messagingSenderId: "294039598568",
  appId: "1:294039598568:web:1a436013a6c44fa293605d",
};

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
