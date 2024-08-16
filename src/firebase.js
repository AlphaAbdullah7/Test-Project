// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID

// };

const firebaseConfig = {
	apiKey: "AIzaSyBtlVPl0QX1DRBULYo5BmmToaTxU__rBqU",
	authDomain: "tap-earn-yt.firebaseapp.com",
	projectId: "tap-earn-yt",
	storageBucket: "tap-earn-yt.appspot.com",
	messagingSenderId: "30846592553",
	appId: "1:30846592553:web:eebbcc6332eb1533789e38",
	measurementId: "G-Q68E6D0Y1P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app);
console.log("Firestore initialized:", db);

export { db };

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
