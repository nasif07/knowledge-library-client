// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAonyaGVDZdGuQmpO15rslv9ClcsnBweec",
  authDomain: "knowledge-library-c3978.firebaseapp.com",
  projectId: "knowledge-library-c3978",
  storageBucket: "knowledge-library-c3978.appspot.com",
  messagingSenderId: "211702063791",
  appId: "1:211702063791:web:6be4f9963c27d3c1aa2a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;