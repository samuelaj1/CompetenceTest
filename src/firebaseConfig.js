// import Firebase from "firebase";
import Firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import "firebase/firestore";// If using Firebase database
// import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCU2d94rHWkdJKsSUl49hhvM34AHc6dCp0",
    authDomain: "competencetest-7c9ef.firebaseapp.com",
    projectId: "competencetest-7c9ef",
    storageBucket: "competencetest-7c9ef.appspot.com",
    messagingSenderId: "685033365903",
    appId: "1:685033365903:web:1bef4fc2982bf40905abfa",
    measurementId: "G-1PLN7WNQ58"
});

// Initialize Firebase
const firestore = firebaseApp.firestore();



firestore.settings({experimentalForceLongPolling: true})
export const db = {realtime: firebaseApp.database(), firestore: firestore
};
