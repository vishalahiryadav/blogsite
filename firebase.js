// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1OrnrDjBL9ak-x8Ji0O7BBNkbiF-6DcU",
  authDomain: "jalvayu-e593c.firebaseapp.com",
  projectId: "jalvayu-e593c",
  storageBucket: "jalvayu-e593c.appspot.com",
  messagingSenderId: "394479307265",
  appId: "1:394479307265:web:65374120c15a87d2188e00",
  measurementId: "G-GXSRNNE9VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
