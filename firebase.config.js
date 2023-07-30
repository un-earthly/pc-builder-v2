import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAeN0pUSQ5p_jrypxL-HI5brNnFjLEu_Ko",
    authDomain: "pc-builder-v.firebaseapp.com",
    projectId: "pc-builder-v",
    storageBucket: "pc-builder-v.appspot.com",
    messagingSenderId: "762731296066",
    appId: "1:762731296066:web:1e19aa5844f6d6403444db"
};

const app = initializeApp(firebaseConfig);

if (!app) {
    firebase.initializeApp(firebaseConfig);
}

