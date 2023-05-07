import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAbTYi9hNXlC5tXm5W9nSHhQAHnZxOdoI8",
    authDomain: "todo-92e53.firebaseapp.com",
    projectId: "todo-92e53",
    storageBucket: "todo-92e53.appspot.com",
    messagingSenderId: "94015768436",
    appId: "1:94015768436:web:c386001f5e941591e70e21"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();