// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs0cv0W1_bBGzyzPa0Nkoqg2lDKAqRVwg",
  authDomain: "netflix-25b79.firebaseapp.com",
  projectId: "netflix-25b79",
  storageBucket: "netflix-25b79.firebasestorage.app",
  messagingSenderId: "393388772869",
  appId: "1:393388772869:web:783c610e00a5b79760d66c",
  measurementId: "G-Z7GZXYHYDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();