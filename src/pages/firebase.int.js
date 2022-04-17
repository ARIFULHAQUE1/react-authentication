// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEsKMJqQ_jl4X6ATJOX4qaubHdcOW5JE",
  authDomain: "health-care-center-a1052.firebaseapp.com",
  projectId: "health-care-center-a1052",
  storageBucket: "health-care-center-a1052.appspot.com",
  messagingSenderId: "786285339584",
  appId: "1:786285339584:web:a48ec3003782cd4aef5e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;