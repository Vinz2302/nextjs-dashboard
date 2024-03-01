// import { getFirestore, doc, onSnapshot, DocumentData, DocumentReference, getDoc, CollectionReference, collection, getDocs, QuerySnapshot } from 'firebase/firestore'
import firebaseApp from '../lib/firebase'
import { getFirestore, doc, DocumentData, DocumentReference, getDoc } from 'firebase/firestore'

const db = getFirestore(firebaseApp)

async function fetchHidroponikData(): Promise<DocumentData> {
    try {
        const messageRef: DocumentReference<DocumentData> = doc(db, "data", "hidroponik");
        const docSnap = await getDoc(messageRef);
        if (docSnap.exists()) {
            return docSnap.data() || {};
        } else {
            throw new Error("Document does not exist");
        }
    } catch (error: any) {
        throw new Error("Error fetching document: " + error.message);
    }
}

        // const data: DocumentData[] = [];
        // docSnap.forEach((doc) => {
        //     data.push(doc.data());
        // });
        // return data;

// const fetchHidroponikData = () => {
//     const db = getFirestore(firebaseApp)
//     const hidroponikDocRef = doc(db, "data", "hidroponik");

//     return new Promise((resolve, reject) => {
//         const unsubscribe = onSnapshot(hidroponikDocRef, (docSnap) => {
//             if (docSnap.exists()) {
//                 const data = docSnap.data();
//                 resolve(data);
//             } else {
//                 reject(new Error("No such document!"));
//             }
//         });

//         return () => unsubscribe();
//     });
// };

export default fetchHidroponikData