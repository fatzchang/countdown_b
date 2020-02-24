import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDUidg9mPsLOD_40WBQxff8zdGWHdk9WnU",
  authDomain: "countdown-890a8.firebaseapp.com",
  databaseURL: "https://countdown-890a8.firebaseio.com",
  projectId: "countdown-890a8",
  storageBucket: "countdown-890a8.appspot.com",
  messagingSenderId: "829922661566",
  appId: "1:829922661566:web:183a120a9e9073b653baef",
  measurementId: "G-MZ0TMNB3KK"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;