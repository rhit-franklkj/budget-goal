import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"; 


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDm-e_Og6Z8mmQhNFW9bYqng2_Ysuz4Yzs",

    authDomain: "budget-goal.firebaseapp.com",
  
    projectId: "budget-goal",
  
    storageBucket: "budget-goal.firebasestorage.app",
  
    messagingSenderId: "495031579691",
  
    appId: "1:495031579691:web:6309f9ff24427452c5a66e",
  
    measurementId: "G-LG70L4VGSH"
  

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const auth = getAuth(app); 

export {db}