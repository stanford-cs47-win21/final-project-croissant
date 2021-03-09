import * as firebase from 'firebase';
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAQcrUTmEX-SWPOFirBdiE8d94YVbzItw",
    authDomain: "croissant-f40ec.firebaseapp.com",
    projectId: "croissant-f40ec",
    storageBucket: "croissant-f40ec.appspot.com",
    messagingSenderId: "1019999003127",
    appId: "1:1019999003127:web:14ae3b98dee6fbf3df8ef2",
    measurementId: "G-SLB26KL2LN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

export default firestore;