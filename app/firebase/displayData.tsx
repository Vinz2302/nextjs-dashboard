'use client';
import React, { useEffect, useState } from "react";
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

export default function HidroponikData() {

    try {

    const [data, setData] = useState<DocumentData | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "data", "hidroponik"), (doc) => {
            if (doc.exists()) {
                // setData(doc.data() as DocumentData);
                const newData = doc.data() as DocumentData;
                setData(newData);

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

    // const getStatus = (type: string) => {
    //     const config = statusConfig[type as keyof typeof statusConfig];
    //     if (!config) return null; // Handle unknown types gracefully
    
    //     const value = data[type];
    //     if (!value) return null; // Handle missing data for a specific type
    
    //     for (const threshold of config.thresholds) {
    //       if (value >= threshold.min && value <= threshold.max) {
    //         return 'good';
    //       }
    //     }
    
    //     return config.outsideRangeStatus;
    // };

    return (

        <>
            <Card   title="Light" 
                    value={`${data.light} lux`} 
                    // value={`50 lux`} 
                    type="lights" 
                    status={getLightStatus(data.light)}
            />

            <Card   title="Humidity" 
                    value={`${data.humidity} %`} 
                    // value={`50 %`} 
                    type="humidities" 
                    status={getHumidity(data.humidity)}
            />
            
            <Card   title="Air Temperature" 
                    value={`${data.air_temperature} °C`}
                    // value={`30 °C`}
                    type="airTemperatures" 
                    status={getAirTemperature(data.air_temperature)}
            />

            <Card   title="Water Temperature" 
                    value={`${data.water_temperature} °C`}
                    // value={`18 °C`}
                    type="waterTemperatures" 
                    status={getWaterTemperature(data.water_temperature)}
            />
        </>

    )
} catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
    }
}

function Card({
    title,
    value,
    type,
    status,
}: {
    title: string;
    value: number | string;
    type: 'lights' | 'humidities' | 'airTemperatures' | 'waterTemperatures';
    status: string | null;
}) {
    const Icon = iconMap[type];
    const statusColor = status === 'good' ? 'text-blue-500' : 'text-red-500';
    // const cardBackgroundColor = type === 'lights' ? 'bg-gray-100' : 'bg-white'; // Customize bg based on type
    const cardBackgroundColor = 'bg-gray-100'

    return (

        <div className={`rounded-xl shadow-sm p-4 ${cardBackgroundColor} hover:bg-gray-200`}>
            <div className='flex justify-between items-center'>
                {Icon ? <Icon className='h-8 w-8 text-gray-700' /> : null}
                <h3 className={`${lusitana.className} text-2xl font-medium text-gray-800`}>{title}</h3>
            </div>
            <hr className='mt-2 mb-2 border-gray-300' /> {/* Add the separator line */}
            <div className='mt-2'>
                <p className={`${lusitana.className} text-2xl font-semibold ${statusColor}`}>{value}</p>
                <p className='text-sm text-gray-500 mt-1'>Status: {status}</p>
            </div>
        </div>

        // <div className='rounded-2xl bg-green-300 p-3 shadow-sm'>
        //     <div className='flex p-4'>
        //         {Icon ? <Icon className='h-8 w-8 text-gray-700' /> : null}
        //         <h3 className='ml-2 text-base font-medium'>{title}</h3>
        //     </div>
        //     {status && (
        //         <div>
        //             <h3 className={`ml-2 text-base font-medium ${statusColor}`}>
        //                 Status: {status}
        //             </h3>
        //         </div>
        //     )}
        //     <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
        //         {value}
        //     </p>
        // </div>
    );
}

function getLightStatus(data: any) {
    const lightValue = data as number;
    if (lightValue < 5000 || lightValue > 30000) return 'bad';
    return 'good';
}

function getHumidity(data: any) {
    const humidityValue = data as number;
    if (humidityValue < 40 || humidityValue > 80) return 'bad';
    return 'good';
}

function getAirTemperature(data: any) {
    const airTemperatureValue = data as number;
    if (airTemperatureValue < 15 || airTemperatureValue > 35) return 'bad';
    return 'good';
}

function getWaterTemperature(data: any) {
    const waterTemperatureValue = data as number;
    if (waterTemperatureValue < 15 || waterTemperatureValue > 30) return 'bad';
    return 'good';
}

// export default HidroponikData