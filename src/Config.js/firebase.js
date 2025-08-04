// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn9yFkg0pr8y2FvZTCZqtLk1gF_PAiE70",
  authDomain: "netflixgpt-30a68.firebaseapp.com",
  projectId: "netflixgpt-30a68",
  storageBucket: "netflixgpt-30a68.firebasestorage.app",
  messagingSenderId: "698337529485",
  appId: "1:698337529485:web:e9740e92037634c621dcc4",
  measurementId: "G-E407HYVY1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
