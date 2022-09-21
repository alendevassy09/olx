import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq-R0LFuRCd_5ZVBqExwsPDXHfKQUzjMQ",
    authDomain: "fir-6331d.firebaseapp.com",
    projectId: "fir-6331d",
    storageBucket: "fir-6331d.appspot.com",
    messagingSenderId: "653243450380",
    appId: "1:653243450380:web:2cf62a78d5533752df9a29",
    measurementId: "G-GCTXEHKW2N"
  };

 export default firebase.initializeApp(firebaseConfig)