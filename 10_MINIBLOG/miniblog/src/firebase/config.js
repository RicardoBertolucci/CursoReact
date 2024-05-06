import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnV4hmhL-Z5rCMarZblTcUpUI4DhI0hKc",
  authDomain: "miniblog-7911c.firebaseapp.com",
  projectId: "miniblog-7911c",
  storageBucket: "miniblog-7911c.appspot.com",
  messagingSenderId: "686106547741",
  appId: "1:686106547741:web:6904e8da1fe2d0632f98f4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };