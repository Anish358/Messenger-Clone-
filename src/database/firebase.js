import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDa0ABRgm-kk-RtV9R3GoYMXRAY4LI77Pk",
        authDomain: "messenger-app-7ff51.firebaseapp.com",
        databaseURL: "https://messenger-app-7ff51.firebaseio.com",
        projectId: "messenger-app-7ff51",
        storageBucket: "messenger-app-7ff51.appspot.com",
        messagingSenderId: "902794234770",
        appId: "1:902794234770:web:5f941f75f2c3764d1b0f4b",
        measurementId: "G-ENLD0B6XMF"
      }
);

const db = firebase.firestore();

export default db;