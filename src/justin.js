import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaj8SnJqtoJnKnsA5rdTzeIDNn9awiX6E",
  authDomain: "instagram-clone-3011.firebaseapp.com",
  projectId: "instagram-clone-3011",
  storageBucket: "instagram-clone-3011.appspot.com",
  messagingSenderId: "738026288457",
  appId: "1:738026288457:web:2157f87b2d4fc527575698",
  measurementId: "G-QSEHFQ0JVZ",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebaseapp.auth();

const fb = new firebase.auth.FacebookAuthProvider();

const storage = firebaseapp.storage();

const db = firebaseapp.firestore();

export { auth, fb, storage, db };
