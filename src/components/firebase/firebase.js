import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/database'



const config = {
  apiKey: "AIzaSyAtnU0gTe62GeZi3EewYv8RuTH8HtPd5uE",
    authDomain: "ppt-hospital.firebaseapp.com",
    databaseURL: "https://ppt-hospital-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ppt-hospital",
    storageBucket: "ppt-hospital.appspot.com",
    messagingSenderId: "757148908198",
    appId: "1:757148908198:web:04404e1c5b5f3a52c79267",
    measurementId: "G-Y4BE6M1ZFS"
};

class Firebase{
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.bd = app.database();

    
}

// inscription
signupUser = (email, password) => 
this.auth.createUserWithEmailAndPassword(email, password);

// Connexion
loginUser = (email, password) => 
this.auth.signInWithEmailAndPassword(email, password);

// Déconnexion
signoutUser = () => this.auth.signOut();

// Récupérer le mot de passe
passwordReset = email => this.auth.sendPasswordResetEmail(email); 

// firestore
user = uid => this.db.doc(`users/${uid}`);


ReadBd = ref  =>this.db.doc(`Bookings/${ref}`);


GetBd =ref => this.bd.ref(`Bookings/${ref}`);
WriteBd =ref => this.db.collection("Bookings").doc(ref);
GetInfo = username => this.db.collection("Bookings").doc(username).get();
}

export default Firebase

















  