// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYeycbVUvrrJ7-F_GO7IdzpPY9efkXUKk",
    authDomain: "kennelboss-796ba.firebaseapp.com",
    projectId: "kennelboss-796ba",
    storageBucket: "kennelboss-796ba.appspot.com",
    messagingSenderId: "64610784028",
    appId: "1:64610784028:web:0e030debebb19e19b160d9",
    measurementId: "G-Q0C3SSSBE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const analytics = getAnalytics(app);