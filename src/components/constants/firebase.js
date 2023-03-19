import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBewDuOb6MrEFFYIBZjrdkS5SVmR0tR-4",
  authDomain: "test-a68de.firebaseapp.com",
  projectId: "test-a68de",
  storageBucket: "test-a68de.appspot.com",
  messagingSenderId: "343162560366",
  appId: "1:343162560366:web:1d5be5bf7c8724aee66b7f",
  measurementId: "G-1R0Q95ZBDT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



