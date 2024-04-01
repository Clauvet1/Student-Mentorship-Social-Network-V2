// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBip8M5nEqGGEPP7vyrFTMTLNnZr8CwlqI",
  authDomain: "sm-website-d64fd.firebaseapp.com",
  projectId: "sm-website-d64fd",
  storageBucket: "sm-website-d64fd.appspot.com",
  messagingSenderId: "699917051187",
  appId: "1:699917051187:web:006614161093c3d7070a46",
  measurementId: "G-078HWWQ3DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);