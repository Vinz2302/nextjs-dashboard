import {
    ClockIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import '../Clock.css';
import { scheduler } from 'timers/promises';

const Clock = () => {
    const schedule = [
        {label: 'Tidur', start: 0, end: 6 }, // 12am - 6am
        {label: 'Bangun', start: 6, end: 7 }, // 6am - 7am
        {label: 'Clean Up', start: 7, end: 8 }, // 7am - 8am
        {label: 'Olahraga', start: 8, end: 9 }, // 8am - 9am
        {label: 'Ngoding', start: 9, end: 18 }, // am - 6am
        {label: 'Rebahan', start: 18, end: 19 }, // 12am - 6am
        {label: 'Workout', start: 19, end: 24 }, // 12am - 6am
    ];

    const renderSegments = () => {
        return schedule.map((activity, index) =>  {
            const { label, start, end } = activity;
            const startAngle = (start / 24) * 360;
            const endAngle = (end / 24) * 360;

            const largeArcFlag = end - start > 12 ? 1 : 0;

            const startX = 150 + 120 * Math.cos((startAngle - 90) * (Math.PI / 180));
            const startY = 150 + 120 * Math.sin((startAngle - 90) * (Math.PI / 180));
            const endX = 150 + 120 * Math.cos((endAngle - 90) * (Math.PI / 180));
            const endY = 150 + 120 * Math.sin((endAngle - 90) * (Math.PI / 180));

            const pathData = `
            M 150 150
            L ${startX} ${startY}
            A 120 120 0 ${largeArcFlag} 1 ${endX} ${endY}
            Z
            `;

            return(
                <g key={index}>
                    <path d={pathData} ></path>
                </g>
            )
        })
    }
}


// const Wheel = () => {
//     const [rotation, setRotation] = useState(0);

//     const handleSpin = () => {
//         const 
//     }
// }