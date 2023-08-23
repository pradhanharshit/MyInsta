// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkZkAEZtccdwUnxskUaQOI5QLCjMqqWXo",
  authDomain: "mygram-c65e0.firebaseapp.com",
  projectId: "mygram-c65e0",
  storageBucket: "mygram-c65e0.appspot.com",
  messagingSenderId: "4458415680",
  appId: "1:4458415680:web:a3d0c05690e708c941c1a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);