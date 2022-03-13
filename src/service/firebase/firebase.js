import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyASdMd0g_Yey3-vJATckxd04KD4gMn3F50",
  authDomain: "proyecto-coder-1011a.firebaseapp.com",
  projectId: "proyecto-coder-1011a",
  storageBucket: "proyecto-coder-1011a.appspot.com",
  messagingSenderId: "351484941962",
  appId: "1:351484941962:web:1aa59e084af5613f153f73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
