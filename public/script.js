const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATvxhmqCuswnfONMweDD4IbypqjxoFsyI",
  authDomain: "algaddal-tribute.firebaseapp.com",
  projectId: "algaddal-tribute",
  storageBucket: "algaddal-tribute.appspot.com",
  messagingSenderId: "739734185651",
  appId: "1:739734185651:web:3cce44f1f51069d2fb72c6",
  measurementId: "G-EKV6B7T1ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);