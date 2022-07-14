// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/app/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2haiwPJ_88yIf0mAqL2xTRFfxWCu3h5k",
  authDomain: "miniblog-df094.firebaseapp.com",
  projectId: "miniblog-df094",
  storageBucket: "miniblog-df094.appspot.com",
  messagingSenderId: "632926297355",
  appId: "1:632926297355:web:b3b96b70881f011d28d60e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
