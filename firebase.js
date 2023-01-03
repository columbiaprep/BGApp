

import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsJwdxi6aGSMQRhpCICnYZTKf5PFB8t18",
    authDomain: "bgtracker-8c842.firebaseapp.com",
    projectId: "bgtracker-8c842",
    storageBucket: "bgtracker-8c842.appspot.com",
    messagingSenderId: "882953037884",
    appId: "1:882953037884:web:1f5484ed7840018934bb39",
    measurementId: "G-2QW4F8ZD3H"
  };
  
  // Initialize Firebase
  const fbApp = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
async function addData(){
try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
  module.exports = {addData}