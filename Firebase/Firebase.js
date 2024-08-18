// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGS7DvfmK3Z2a1qXa7WkU2-H4XUiMriUs",
  authDomain: "blog-8ab9c.firebaseapp.com",
  projectId: "blog-8ab9c",
  storageBucket: "blog-8ab9c.appspot.com",
  messagingSenderId: "672827871403",
  appId: "1:672827871403:web:7673afadad896dc1f427ee",
  measurementId: "G-MMGBBW787Y"
};
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
