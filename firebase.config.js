// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzchhEp75DPCFhyINwmLHRy8ADzngFsVk",
  authDomain: "vsp-finsserv.firebaseapp.com",
  projectId: "vsp-finsserv",
  storageBucket: "vsp-finsserv.firebasestorage.app",
  messagingSenderId: "925900492010",
  appId: "1:925900492010:web:3744b33b4f563232981b93",
  measurementId: "G-X04ZGFQ36J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);