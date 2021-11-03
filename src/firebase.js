import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk8KaISmIpK1-MBYBbKl6wnZ5RffRXlCo",
  authDomain: "twitter-clone-735cc.firebaseapp.com",
  projectId: "twitter-clone-735cc",
  storageBucket: "twitter-clone-735cc.appspot.com",
  messagingSenderId: "729454604261",
  appId: "1:729454604261:web:5ff67db6a3a35335c2090c",
  measurementId: "G-JK5D5E7YPJ"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;