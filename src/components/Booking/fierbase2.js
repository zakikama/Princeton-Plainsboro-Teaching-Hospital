import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAtnU0gTe62GeZi3EewYv8RuTH8HtPd5uE",
    authDomain: "ppt-hospital.firebaseapp.com",
    databaseURL: "https://ppt-hospital-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ppt-hospital",
    storageBucket: "ppt-hospital.appspot.com",
    messagingSenderId: "757148908198",
    appId: "1:757148908198:web:04404e1c5b5f3a52c79267",
    measurementId: "G-Y4BE6M1ZFS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
firebase.analytics();
export default firebase