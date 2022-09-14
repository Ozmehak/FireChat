import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCRfg2oOVOwtYH7CTmnekkwnZYGrqcQdP4",
    authDomain: "firechat-61e98.firebaseapp.com",
    projectId: "firechat-61e98",
    storageBucket: "firechat-61e98.appspot.com",
    messagingSenderId: "992065566092",
    appId: "1:992065566092:web:a1d8fcc5b88acc44b452a9",
    measurementId: "G-J3R2X758T0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
