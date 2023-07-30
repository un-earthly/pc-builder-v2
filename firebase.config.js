import { initializeApp, getApps } from 'firebase/app';
import 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';

export function init() {
    const firebaseConfig = {
        apiKey: "AIzaSyAeN0pUSQ5p_jrypxL-HI5brNnFjLEu_Ko",
        authDomain: "pc-builder-v.firebaseapp.com",
        projectId: "pc-builder-v",
        storageBucket: "pc-builder-v.appspot.com",
        messagingSenderId: "762731296066",
        appId: "1:762731296066:web:1e19aa5844f6d6403444db"
    };
    if (!getApps().length) {
        initializeApp(firebaseConfig);
    }
}
init();
export const app = getApps()[0];

export const auth = getAuth(app)

export const signout = (user) => {
    signOut(auth)
}

