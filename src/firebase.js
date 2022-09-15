import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

    apiKey: "AIzaSyADvwWE1P_Sw17_d_8W442yjCLXZ53Mbjg",

    authDomain: "firechat-285f2.firebaseapp.com",

    projectId: "firechat-285f2",

    storageBucket: "firechat-285f2.appspot.com",

    messagingSenderId: "250841161815",

    appId: "1:250841161815:web:99340191a0189ce3ce4312"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
