import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAS-ZlwQ6K1k50tbw1rLT1XeOkbhNbITjY",
    authDomain: "vistrit-amaz0n.firebaseapp.com",
    databaseURL: "https://vistrit-amaz0n.firebaseio.com",
    projectId: "vistrit-amaz0n",
    storageBucket: "vistrit-amaz0n.appspot.com",
    messagingSenderId: "243054836079",
    appId: "1:243054836079:web:f35bb5b76eb896fb11909a",
    measurementId: "G-QZZ78KWZY9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };