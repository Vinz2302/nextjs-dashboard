'use client';
import Clock from '@/app/ui/dashboard/clock'
// import '@/app/ui/global.css'
// import FullScreenLayout from './fullscreen';

export default function Page() {
    return (
        // <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='flex items-center justify-center h-screen overflow-hidden bg-white'>
            <h1>Testing</h1>
            <Clock/> {/* Size is optional; it will resize responsively */}
        </div>
    )
};