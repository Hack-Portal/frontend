import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnXu36V-xQCUD6DKHHYG7_2aDZDUmMm1A",
  authDomain: "hack-portal-2.firebaseapp.com",
  projectId: "hack-portal-2",
  storageBucket: "hack-portal-2.appspot.com",
  messagingSenderId: "268339067936",
  appId: "1:268339067936:web:997cfb460a2e8f773d9045",
  measurementId: "G-SHG9DH3XRM"
};


const app = getApps()?.length ? getApps()[0] : initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
