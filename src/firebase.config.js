import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBip8M5nEqGGEPP7vyrFTMTLNnZr8CwlqI",
  authDomain: "sm-website-d64fd.firebaseapp.com",
  projectId: "sm-website-d64fd",
  storageBucket: "sm-website-d64fd.appspot.com",
  messagingSenderId: "699917051187",
  appId: "1:699917051187:web:006614161093c3d7070a46",
  databaseURL: "https://sm-website-d64fd.firebaseio.com",
  measurementId: "G-078HWWQ3DJ"
};

const app = initializeApp(firebaseConfig);

// Export Firebase authentication methods
const auth = getAuth(app);

// Initialize the Firestore database
const db = getFirestore(app, { auth });

// Export the `db` object
export { db };

// Export the `auth` object
export { auth };