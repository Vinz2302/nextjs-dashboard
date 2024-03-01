'use client';
// import db from './firebase'
import { useEffect, useState } from 'react';
import firebaseApp from './firebase';
import { getFirestore, doc, onSnapshot, collection, DocumentData } from 'firebase/firestore';

const db = getFirestore(firebaseApp);
const messageRef = collection(db, 'hidroponik');
// const messageRef = collection(db, 'data', 'hidroponik');

function App() {
    const [messages, setMessages] = useState<DocumentData[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            const updatedMessages = snapshot.docs.map((doc) => doc.data());
            setMessages(updatedMessages);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h1>Data:</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

// export function subscribeToHarvestData(callback) {
//     const unsub = onSnapshot(doc(db, "data", "hidroponik"), (snapshot) => {
//         console.log("Snapshot data:", snapshot.data());
//         if (snapshot.exists()) {
//             const data = snapshot.data();
//             callback(data);
//         } else {
//             console.log("No such document!");
//         }
//     }, (error) => {
//         console.error("Error in firestore listener:", error);
//     });

//     return unsub;
// }



// export default async function getDocument(collection, id) {
//     let docRef = doc(db, collection, id);

//     let result = null;
//     let error = null;

//     try {
//         result = await getDoc(docRef);
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }

// export const listenToData = (collection: string, onData: Function, onError: Function) => {
//     return db.collection(collection).onSnapshot(
//         (snapshot) => {
//             const data = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             onData(data);
//         },
//         (error) => {
//             onError(error);
//         }
//     );
// };

// export const getData = async () => {
//     try {
//         console.log("testsetsetsTSETSETSE")
//         const docRef = db.collection('data').doc('hidroponik');
//         const doc = await docRef.get();

//         if (!doc.exists) {
//             console.log('No such document!');
//             return null;
//         } else {
//             console.log('Document data:', doc.data());
//             return doc.data();
//         }
//     } catch (error) {
//         console.error('Error getting document:', error);
//         return null
//     }
// };

