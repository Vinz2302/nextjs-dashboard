import {
    ClockIcon,
} from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import '../Clock.css';
import { lusitana } from "@/app/ui/fonts"
// import { scheduler } from 'timers/promises';

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
                    <path d={pathData} fill={`hsl(${(index * 50) % 360}, 70%, 80%)`} stroke="black" />
                    <text
                        x={(startX + endX) / 2}
                        y={(startY + endY) / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${(startAngle + endAngle) / 2}, ${(startX + endX) / 2}, ${(startY + endY) / 2})`}
                        style={{ fontSize: '12px' }}
                    >
                        {label}
                    </text>
                </g>
            )
        })
    }
    return (
        <div className='clock-retainer'>
            <svg width="300" height="300" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="120" fill="white" stroke="black" strokeWidth="3" />
                {renderSegments()}
            </svg>
        </div>
    );
};

// interface AnalogClockProps {
//     size?: number;
// }

interface Schedule {
  label: string;
  startAngle: number;
  endAngle: number;
}

const schedules: Schedule[] = [
  { label: "Bobo", startAngle: -90, endAngle: 15 },
  { label: "Clean up", startAngle: 15, endAngle: 30 },
  { label: "Kerjaaa", startAngle: 30, endAngle: 165 },
  { label: "Pulang", startAngle: 165, endAngle: 180 },
  { label: `Beres"`, startAngle: 180, endAngle: 195 },
  { label: "Workout", startAngle: 195, endAngle: 210 },
  { label: "Mandi", startAngle: 210, endAngle: 225 },
  { label: "Rebahan", startAngle: 225, endAngle: 270 },
];

const AnalogClock: React.FC = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  
    // Calculate angles for the clock hands
    const secondsAngle = (time.getSeconds() / 60) * 360;
    const minutesAngle = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;
    const hoursAngle = (time.getHours() % 12 / 12) * 360 + (time.getMinutes() / 60) * 30;

    const radius = 95; //radius for the clock face
    const center = 100; //center point for svg (half of viewbox size)
  
    // return (
    //   <div className="clock-container" style={{ width: `${size}px`, height: `${size}px` }}>
    //     <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
    //       {/* Clock face */}
    //       <circle cx={center} cy={center} r={radius} stroke="black" strokeWidth="3" fill="white" />
  
    //       {/* Hour marks */}
    //       {[...Array(12)].map((_, i) => {
    //         const angle = (i / 12) * 360;
    //         const x1 = center + (radius - 15) * Math.cos((angle - 90) * (Math.PI / 180));
    //         const y1 = center + (radius - 15) * Math.sin((angle - 90) * (Math.PI / 180));
    //         const x2 = center + radius * Math.cos((angle - 90) * (Math.PI / 180));
    //         const y2 = center + radius * Math.sin((angle - 90) * (Math.PI / 180));
    //         return (
    //           <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="2" />
    //         );
    //       })}
  
    //       {/* Hour hand */}
    //       <line
    //         x1={center}
    //         y1={center}
    //         x2={center + (radius - 45) * Math.cos((hoursAngle - 90) * (Math.PI / 180))}
    //         y2={center + (radius - 45) * Math.sin((hoursAngle - 90) * (Math.PI / 180))}
    //         stroke="black"
    //         strokeWidth="6"
    //         strokeLinecap="round"
    //       />
  
    //       {/* Minute hand */}
    //       <line
    //         x1={center}
    //         y1={center}
    //         x2={center + (radius - 25) * Math.cos((minutesAngle - 90) * (Math.PI / 180))}
    //         y2={center + (radius - 25) * Math.sin((minutesAngle - 90) * (Math.PI / 180))}
    //         stroke="black"
    //         strokeWidth="4"
    //         strokeLinecap="round"
    //       />
  
    //       {/* Second hand */}
    //       <line
    //         x1={center}
    //         y1={center}
    //         x2={center + (radius - 15) * Math.cos((secondsAngle - 90) * (Math.PI / 180))}
    //         y2={center + (radius - 15) * Math.sin((secondsAngle - 90) * (Math.PI / 180))}
    //         stroke="red"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //       />
  
    //       {/* Center point */}
    //       <circle cx={center} cy={center} r="4" fill="black" />
    //     </svg>
    //   </div>

    return (
        <div className="flex items-center justify-center w-full h-full">
          <svg
            className="w-full h-full max-w-xs max-h-xs sm:max-w-sm sm:max-h-sm md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg"
            // className="w-full h-full max-w-[150px] max-h-[150px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[400px] lg:max-h-[400px]"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Clock face */}
            <circle cx={center} cy={center} r={radius} className="stroke-black stroke-[2px] fill-white" />
    
            {/* Hour marks */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * 360;
              const x1 = center + (radius - 15) * Math.cos((angle - 90) * (Math.PI / 180));
              const y1 = center + (radius - 15) * Math.sin((angle - 90) * (Math.PI / 180));
              const x2 = center + radius * Math.cos((angle - 90) * (Math.PI / 180));
              const y2 = center + radius * Math.sin((angle - 90) * (Math.PI / 180));
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-black stroke-[1.5px]" />
              );
            })}
    
            {/* Hour hand */}
            <line
              x1={center}
              y1={center}
              x2={center + (radius - 45) * Math.cos((hoursAngle - 90) * (Math.PI / 180))}
              y2={center + (radius - 45) * Math.sin((hoursAngle - 90) * (Math.PI / 180))}
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
    
            {/* Minute hand */}
            <line
              x1={center}
              y1={center}
              x2={center + (radius - 25) * Math.cos((minutesAngle - 90) * (Math.PI / 180))}
              y2={center + (radius - 25) * Math.sin((minutesAngle - 90) * (Math.PI / 180))}
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
    
            {/* Second hand */}
            <line
              x1={center}
              y1={center}
              x2={center + (radius - 15) * Math.cos((secondsAngle - 90) * (Math.PI / 180))}
              y2={center + (radius - 15) * Math.sin((secondsAngle - 90) * (Math.PI / 180))}
              stroke="red"
              strokeWidth="1"
              strokeLinecap="round"
            />
    
            {/* Center point */}
            <circle cx={center} cy={center} r="4" fill="black" />
        </svg>
    </div>
    );
  };

const AnalogClock2: React.FC = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  
    // Calculate angles for the clock hands
    const secondsAngle = (time.getSeconds() / 60) * 360;
    const minutesAngle = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;
    const hoursAngle = (time.getHours() % 12 / 12) * 360 + (time.getMinutes() / 60) * 30;

    const radius = 150;
    const center = 200;
    const outerRadius = radius + 162;
  
    const getCoordinatesForAngle = (angle: number, offset = 0) => {
      const radian = (angle * Math.PI) / 180;
      return {
        x: center + (radius - offset) * Math.cos(radian),
        y: center + (radius - offset) * Math.sin(radian),
      };
    };

    // Get midpoint angle for text placement
    const getMidpointAngle = (startAngle: number, endAngle: number) => {
      return (startAngle + endAngle) / 2;
    };
  
    return (
      <div className="flex items-center justify-center w-full h-full">
        <svg
          className="w-full h-full max-w-[500px] max-h-[500px] sm:max-w-[600px] sm:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px]"
          viewBox="0 0 400 400" // Adjusted viewBox for larger clock
        >
          {/* Clock face */}
          <circle cx={center} cy={center} r={radius} className="stroke-gray-500 stroke-[3px] fill-white" />
  
          {/* Hour markers */}
          {[...Array(24)].map((_, i) => {
            const angle = (i / 24) * 360;
            const { x: x1, y: y1 } = getCoordinatesForAngle(angle, 15);
            const { x: x2, y: y2 } = getCoordinatesForAngle(angle, 5);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-black stroke-[1px]" />;
          })}

          {/* Section dividing lines */}
          {schedules.map((schedule, i) => {
            const { x: x1, y: y1 } = getCoordinatesForAngle(schedule.startAngle, 0); // Start at the center
            const { x: x2, y: y2 } = getCoordinatesForAngle(schedule.startAngle, radius); // Extend to the edge

            return (
              <line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="gray"
                strokeWidth="0.3"
              />
            );
          })}
  
          {/* Schedules */}
          {schedules.map((schedule, i) => {
            const midpointAngle = getMidpointAngle(schedule.startAngle, schedule.endAngle);
            const { x, y } = getCoordinatesForAngle(midpointAngle, 45);

            // Rotate labels on the left side by 180 degrees to keep them upright
            const rotation = midpointAngle >= 90 && midpointAngle <=270 ? midpointAngle + 180 : midpointAngle;

            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                // className="text-xs sm:text-sm md:text-base font-semibold"
                className="text-[8px] sm:text-[10px] md:text-[12px] font-semibold" // Smaller text sizes
                transform={`rotate(${rotation}, ${x}, ${y})`}
              >
                {schedule.label}
              </text>
            );
          })}

          {/* Clock Hour number ( 1 - 24 ) */}
          {[...Array(24)].map((_, i) => {
            const angle = ((i + 7) / 24 ) * 360;
            const { x, y } = getCoordinatesForAngle(angle, outerRadius);
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`${lusitana.className} text-[8px] sm:text-[10px] md:text-[12px] font-semibold`}
              >
                { i + 1 }
              </text>
            );
          })}

          {/* Hour hand */}
          <line
            x1={center}
            y1={center}
            x2={getCoordinatesForAngle(hoursAngle, 60).x}
            y2={getCoordinatesForAngle(hoursAngle, 60).y}
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1={center}
            y1={center}
            x2={getCoordinatesForAngle(minutesAngle, 30).x}
            y2={getCoordinatesForAngle(minutesAngle, 30).y}
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1={center}
            y1={center}
            x2={getCoordinatesForAngle(secondsAngle, 20).x}
            y2={getCoordinatesForAngle(secondsAngle, 20).y}
            stroke="red"
            strokeWidth="1"
            strokeLinecap="round"
          />
  
          {/* Center button */}
          <circle cx={center} cy={center} r="20" className="fill-yellow-500 cursor-pointer" />
          <text
            x={center}
            y={center + 5}
            textAnchor="middle"
            className="fill-black font-bold cursor-pointer text-lg"
          >
            Play!
          </text>
        </svg>
      </div>
    );
  };
  

// export default Clock;
export default AnalogClock2;