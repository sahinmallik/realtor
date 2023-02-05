// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZXFeNxF72YA5Xc4_rXKaEMUO17EkiduY",
  authDomain: "react-realtor-clone-aadae.firebaseapp.com",
  projectId: "react-realtor-clone-aadae",
  storageBucket: "react-realtor-clone-aadae.appspot.com",
  messagingSenderId: "899079404084",
  appId: "1:899079404084:web:f3a2a38d31779628dfa861",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
