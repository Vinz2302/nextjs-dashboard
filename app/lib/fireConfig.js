// import firebase from 'firebase/app';
// import 'firebase/storage';
// import { initializeApp, getApps } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
//   };

// if (!firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }
// let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export default firebase_app;

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// const storage = firebase.storage()
// export { storage, firebase as default };