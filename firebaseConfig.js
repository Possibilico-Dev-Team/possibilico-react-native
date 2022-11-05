// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdIhtm34HY3pdmCllehjYPKL5F3d1e6gE",
  authDomain: "possibilico.firebaseapp.com",
  projectId: "possibilico",
  storageBucket: "possibilico.appspot.com",
  messagingSenderId: "7867430804",
  appId: "1:7867430804:web:461636ee030e7a29968181",
  measurementId: "G-YX65RENDBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app