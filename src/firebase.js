import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCEHTWrpCo7sqBVLn9ZalYX7fTO6kaSJss",
    authDomain: "uocify-ea951.firebaseapp.com",
    databaseURL: "https://uocify-ea951.firebaseio.com",
    projectId: "uocify-ea951",
    storageBucket: "uocify-ea951.appspot.com",
    messagingSenderId: "372844756401",
    appId: "1:372844756401:web:ef7ffd44f826fd9bc81190"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();