// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmOsRwMaLv2hI0H8tx7l2deqOJHvqOINw",
  authDomain: "react-firebse-auth.firebaseapp.com",
  projectId: "react-firebse-auth",
  storageBucket: "react-firebse-auth.appspot.com",
  messagingSenderId: "209467993157",
  appId: "1:209467993157:web:c32f01001830101fba472c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

