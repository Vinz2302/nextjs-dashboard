'use client';
import { useEffect, useState } from "react";
import { DocumentData, doc, getFirestore, onSnapshot } from "firebase/firestore";
import Example from "../lib/needlePie"
import firebaseApp from "../lib/firebase";
import { BsBrightnessHighFill } from "react-icons/bs";
import { WiHumidity } from 'react-icons/wi';
import { MdAir } from 'react-icons/md';
import { LiaTemperatureHighSolid } from 'react-icons/lia';
import { lusitana } from '@/app/ui/fonts';

const db = getFirestore(firebaseApp)

const iconMap = {
    lights: BsBrightnessHighFill,
    humidities: WiHumidity,
    airTemperatures: MdAir,
    waterTemperatures: LiaTemperatureHighSolid
}

async function HidroponikData() {

    try {

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

    if (!data)
        return <div>Loading...</div>; {
    }

    // const { humidityData = null, airTempData = null, waterTempData = null } = data || {}; //handle missing data

    return (

        <>

            <Card   title="Light" 
                    // value={`${data.light} lux`} 
                    value={`50 lux`} 
                    type="lights" 
            />

            <Card   title="Humidity" 
                    // value={`${data.humidity} %`} 
                    value={`50 %`} 
                    type="humidities" 
            />

            <Card   title="Air Temperature" 
                    // value={`${data.air_temperature} °C`}
                    value={`20 °C`}
                    type="airTemperatures" 
            />

            <Card   title="Water Temperature" 
                    // value={`${data.water_temperature} °C`}
                    value={`18 °C`}
                    type="waterTemperatures" 
            />

        </>
    )
} catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
    }
}

export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'lights' | 'humidities' | 'airTemperatures' | 'waterTemperatures';
}) {
    const Icon = iconMap[type];

    return (
        <div className='rounded-2xl bg-green-300 p-3 shadow-sm'>
            <div className='flex p-4'>
                {Icon ? <Icon className='h-8 w-8 text-gray-700' /> : null}
                <h3 className='ml-2 text-sm font-medium'>{title}</h3>
            </div>
            <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
                {value}
            </p>
        </div>
    );
}

export default HidroponikData