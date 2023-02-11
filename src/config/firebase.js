// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfMXpt5Xvq9c95UOVko2I_XNrRF0pqSsU",
  authDomain: "donewithit-project.firebaseapp.com",
  projectId: "donewithit-project",
  storageBucket: "donewithit-project.appspot.com",
  messagingSenderId: "398042859839",
  appId: "1:398042859839:web:566a31dc32c134c5cc6b8a",
  measurementId: "G-7YC7ZXBZBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
