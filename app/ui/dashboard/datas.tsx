// import { SunIcon } from '@heroicons/react/24/outline';
import { BsBrightnessHighFill } from "react-icons/bs";
import { WiHumidity } from 'react-icons/wi';
import { MdAir } from 'react-icons/md';
import { LiaTemperatureHighSolid } from 'react-icons/lia';
import { lusitana } from '@/app/ui/fonts';
import HidroponikData from "@/app/firebase/displayData";
// import React, { useEffect, useState } from 'react';

const iconMap = {
    lights: BsBrightnessHighFill,
    humidities: WiHumidity,
    airTemperatures: MdAir,
    waterTemperatures: LiaTemperatureHighSolid
}

export default async function DataWrapper() {
    // const {
    //     // lightData,
    //     humidityData,
    //     airTempData,
    //     waterTempData,
    // } = await HidroponikData();

    return (
        <>
        
            {/* <Card title="Light" type="lights" /> */}
            <Card title="Humidity" type="humidities" />
            <Card title="Air Temperature" type="airTemperatures" />
            <Card title="Water Temperature" type="waterTemperatures" />

        </>
    );
}

export function Card({
    title,
    // value,
    type,
}: {
    title: string;
    // value: number | string ;
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
                {/* {value} */}
            </p>
        </div>
    );
}