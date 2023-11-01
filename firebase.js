// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqWc-QfEEocn8FaiEwDBcw30XDmcN0LZo",
    authDomain: "app2k6-quochao.firebaseapp.com",
    databaseURL: "https://app2k6-quochao-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "app2k6-quochao",
    storageBucket: "app2k6-quochao.appspot.com",
    messagingSenderId: "157066528106",
    appId: "1:157066528106:web:78c0e3c1d12fca6ceb1113",
    measurementId: "G-VCQPFWP55J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const provider = new GoogleAuthProvider();
const firestore = getFirestore();

export { auth, provider, firestore }