import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAObRnylI5xP6oJw_th0Fz2JA-7qDxcsaU",
  authDomain: "tecdevweb-ce553.firebaseapp.com",
  databaseURL: "https://tecdevweb-ce553-default-rtdb.firebaseio.com",
  projectId: "tecdevweb-ce553",
  storageBucket: "tecdevweb-ce553.appspot.com",
  messagingSenderId: "557696567226",
  appId: "1:557696567226:web:3b5d23cd4db99a30873f83",
  measurementId: "G-BGB9G09Q4N"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const app = initializeApp(firebaseConfig);


export { firebaseApp, auth, firestore };