import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAmXwrh9WfL6zkgxEWX9Ul1FgA9fs92ba8",
    authDomain: "messenger-clone-47eed.firebaseapp.com",
    databaseURL: "https://messenger-clone-47eed.firebaseio.com",
    projectId: "messenger-clone-47eed",
    storageBucket: "messenger-clone-47eed.appspot.com",
    messagingSenderId: "342407961069",
    appId: "1:342407961069:web:a82a77b670db153acdefe4",
    measurementId: "G-MF56XJFQ4P"
});

const db = firebaseApp.firestore();

export default db;
