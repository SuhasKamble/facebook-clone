import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBFpGEiBcDuwJ4u5ZghzVXYgPm4aoLE-0",
  authDomain: "facebook-clone-practice.firebaseapp.com",
  databaseURL: "https://facebook-clone-practice.firebaseio.com",
  projectId: "facebook-clone-practice",
  storageBucket: "facebook-clone-practice.appspot.com",
  messagingSenderId: "410092430220",
  appId: "1:410092430220:web:fdf283893039f7948eaca9",
  measurementId: "G-KXFJQJWKN0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
