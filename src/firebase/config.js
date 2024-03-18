// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDeVNAxFz-cu7sVRDRWkBp2dW_fRBm3dY",
  authDomain: "belajarvue3blog.firebaseapp.com",
  projectId: "belajarvue3blog",
  storageBucket: "belajarvue3blog.appspot.com",
  messagingSenderId: "172259573830",
  appId: "1:172259573830:web:4ef38cc73355f6fa2e8a47"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectfirestore= firebase.firestore()

export {projectfirestore}