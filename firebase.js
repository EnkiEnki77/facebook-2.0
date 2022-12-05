// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAlGJGVp5V0AFwPyFiXlGtoDaZhTBZRHwM",
  authDomain: "fb-clone-e8234.firebaseapp.com",
  projectId: "fb-clone-e8234",
  storageBucket: "fb-clone-e8234.appspot.com",
  messagingSenderId: "571389977771",
  appId: "1:571389977771:web:d69d7e8b1489d6e06bc3ee"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};


