import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbocMOmauev-R3zkq4clUskgf7A76r2uc",
    authDomain: "tienda-coder-react.firebaseapp.com",
    projectId: "tienda-coder-react",
    storageBucket: "tienda-coder-react.appspot.com",
    messagingSenderId: "1047218194131",
    appId: "1:1047218194131:web:a912c53f778e9f17443626"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();
