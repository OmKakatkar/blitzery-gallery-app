import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPZEYUN4TszalTinBS3lGqLhOnrNMmIXA",
  authDomain: "blitzery-1c92b.firebaseapp.com",
  projectId: "blitzery-1c92b",
  storageBucket: "blitzery-1c92b.appspot.com",
  messagingSenderId: "590638268120",
  appId: "1:590638268120:web:06a17d55642dd7e46e61ad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
