import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;

// import admin from 'firebase-admin'
// import { fireConfig } from './fireConfig'

// try {
//     admin.initializeApp({
//         credential: admin.credential.cert(fireConfig),
//     })
//     console.log('Initialized successfully')
// } catch (error) {
//     if (!/already exists/u.test(error.message)) {
//         console.log('Firebase admin initialization error', error.stack)
//     }
// }

// const db = admin.firestore();

// export default db