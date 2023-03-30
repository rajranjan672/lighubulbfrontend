// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAElLS0BcTWQ-ByECd21wli18kOgYemmHo",
  authDomain: "lightbulb1-7895c.firebaseapp.com",
  projectId: "lightbulb1-7895c",
  storageBucket: "lightbulb1-7895c.appspot.com",
  messagingSenderId: "658059604539",
  appId: "1:658059604539:web:a867e8b9ee2acc4626a21e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
     signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
        alert(name +" Logged in successfully")

     }).catch((error) => {
        console.log(error)
        alert('something wrong')
     })
}