'use client';
import { useEffect, useState } from "react";
// import fetchHidroponikData from "./data";
import { DocumentData, doc, getFirestore, onSnapshot } from "firebase/firestore";
import Example from "../lib/needlePie"
import firebaseApp from "../lib/firebase";

const db = getFirestore(firebaseApp)

function HidroponikData() {

    const [data, setData] = useState<DocumentData | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "data", "hidroponik"), (doc) => {
            if (doc.exists()) {
                setData(doc.data() as DocumentData);
            } else {
                setError(new Error("Document does not exists"));
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    }

    console.log("testing data = ", data?.humidity)

    return (
        <div>
            <h1>Hidroponik Data</h1>
            {data && (
                <ul>
                    <li>Humidity: {data.humidity}</li>
                    <li>pH: {data.ph}</li>
                    <li>Air Temperature: {data.air_temperature}</li>
                    <li>Water Temperature: {data.water_temperature}</li>
                    <br></br>
                    <li>Humidity: {data.humidity}
                        <Example value={data.humidity}></Example>
                    </li>
                    {/* <Example value={data.humidity}></Example> */}
                </ul>
            )}
        </div>
    );
}

export default HidroponikData