// Import the functions you need from the SDKs you need
import { addDoc, collection, getDocs, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { notifyError } from "../utils/notificationCollection";
const firebaseConfig = {
    apiKey: "AIzaSyBztwA0dJ0qgwebfpwqqUJj1pdmrOuWcCw",
    authDomain: "unicodez-website.firebaseapp.com",
    projectId: "unicodez-website",
    storageBucket: "unicodez-website.appspot.com",
    messagingSenderId: "619292106745",
    appId: "1:619292106745:web:6ab5e6be1f9e71e280a728",
    measurementId: "G-05BWTX3XR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);

export const addDetailsToUsers = async (email, phone, collectionName) => {
    try {
        const docRef = await addDoc(collection(db, `/${collectionName}`), {
            email,
            phone
        });
    } catch (e) {
        notifyError(e);
    }
}

export const getFireData = async (email, phone, collectionName) => {
    return await getDocs(collection(db, collectionName))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));

            const hasPhone = newData.find(doc => doc.phone === phone);
            const hasEmail = newData.find(doc => doc.email === email);
            if (hasEmail || hasPhone) {
                return true;
            } else {
                return false;
            }
        })
}
export default app;
