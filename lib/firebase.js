import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBf_RaNtyc5VcsRjpF13cBwiU2wQKYa5Es",
    authDomain: "push-notifications-dashb-3b750.firebaseapp.com",
    databaseURL: "https://push-notifications-dashb-3b750.firebaseio.com",
    projectId: "push-notifications-dashb-3b750",
    storageBucket: "push-notifications-dashb-3b750.appspot.com",
    messagingSenderId: "599112963301",
    appId: "1:599112963301:web:8cee3e1e923d49cb87b00c",
    measurementId: "G-QEZ9PV3X3E"
  };
// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}

export const db = firebase.firestore();

