import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDsGW9qcWKlV-KsLoEr7p7d1eh6LC4VA7A",
    authDomain: "go-test1-5cdaf.firebaseapp.com",
    databaseURL: "https://go-test1-5cdaf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "go-test1-5cdaf",
    storageBucket: "go-test1-5cdaf.appspot.com",
    messagingSenderId: "27279904920",
    appId: "1:27279904920:web:1c5c16ffca83ee921500ed"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage()

export { storage, firebase as default };