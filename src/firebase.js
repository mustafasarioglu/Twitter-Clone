import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig =  {
    apiKey: "AIzaSyCfHnTgpm2I9PqhhPdU3Vs0hGRYsCpr7Ow",
    authDomain: "twitter-clone-8a5e6.firebaseapp.com",
    projectId: "twitter-clone-8a5e6",
    storageBucket: "twitter-clone-8a5e6.appspot.com",
    messagingSenderId: "914609724398",
    appId: "1:914609724398:web:46ae7c253e745c75ceccff",
    measurementId: "G-B12W1SFXD7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db