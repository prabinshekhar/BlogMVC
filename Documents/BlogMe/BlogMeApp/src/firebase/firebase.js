// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage"; 
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsS8A4vDFkbbqqWHAAOu2cn53bYfw_ZHU",
  authDomain: "blogme-81948.firebaseapp.com",
  projectId: "blogme-81948",
  storageBucket: "blogme-81948.appspot.com",
  messagingSenderId: "423173218504",
  appId: "1:423173218504:web:0843cfd2f37094fd8f85fd",
  measurementId: "G-T43QZQVC3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);