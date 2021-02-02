import firebase from "firebase"

const firebaseConfig = {
        // use your own config file
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
