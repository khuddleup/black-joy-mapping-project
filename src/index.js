import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getDatabase } from "firebase/database";

// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKSXFT6PGoaJTTb-TqyT2SCFFR-Zcea38",
  authDomain: "pea922.firebaseapp.com",
  databaseURL: "https://pea922-default-rtdb.firebaseio.com/",
  projectId: "pea922",
  storageBucket: "pea922.appspot.com",
  messagingSenderId: "888111191717",
  appId: "1:888111191717:web:5866818bc5cfdaacdd1f4c",
  measurementId: "G-S02HT6LTGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
