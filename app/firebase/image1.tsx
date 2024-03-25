'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'

const DownloadFile = () => {
    const [downloadUrl, setDownloadUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null >(null);
    const local_route = "http://localhost:8000"
    const local_route2 = "http://127.0.0.1:8000"
    const develop_route = "https://test9989.loca.lt"

    const handleDownloadGet = async () => {
        setError(null)
        setIsLoading(true);
        try {
            const response = await axios.get(`${local_route}/image?file_path=test1/test.png`);
            setDownloadUrl(response.data.download_url);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError("Failed to run. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative">
            {isLoading ? (
                <>
                    <Skeleton width="100%" height="200px" className="absolute top-0 left-0 z-10" />
                    <button className="px-4 py-2 bg-emerald-300 text-gray-700 rounded-md disabled:opacity-50">
                        Harvesting...
                    </button>
                </>
            ) : (
                <button
                    className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700"
                    onClick={handleDownloadGet}
                >
                    Harvest
                </button>
            )}
            {error && <p className="text-red-500">{error}</p>}
            {downloadUrl && (
                <div>
                    <p>Downloaded Image</p>
                    <img src={downloadUrl} alt="Downloaded Image" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    )
}

export default DownloadFile


    // using post method
    // const handleDownload = async() => {
    //     try {
    //         const response = await axios.post(`${local_route}/image`, {
    //             file_path: 'test1/test.png'
    //         });
            
    //         setDownloadUrl(response.data.download_url);
    //     } catch (error) {
    //         console.error('Error fetching data:', error)
    //     }
    // };

    //Without axios
    // const handleDownload = async () => {
    //     try {
    //         const response = await fetch(`${local_route}/image`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ file_path: 'test1/test.png' }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }

    //         const data = await response.json();
    //         setDownloadUrl(data.download_url);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

// import React, { useState, useEffect } from 'react';
// import admin from '../lib/firebase';

// const ClientPage: React.FC = () => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const getImageFromFirebase = async () => {
//       try {
//         // Reference to the image in Firebase Storage
//         const bucket = admin.storage().bucket();
//         const file = bucket.file('images/example.jpg');

//         // Get the download URL for the image
//         const url = await file.getSignedUrl({
//           action: 'read',
//           expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
//         });

//         setImageUrl(url[0]);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     getImageFromFirebase();
//   }, []);

//   return (
//     <div>
//       <h1>Image from Firebase Storage (Client)</h1>
//       {imageUrl ? (
//         <img src={imageUrl} alt="Firebase Image" style={{ maxWidth: '100%' }} />
//       ) : (
//         <p>Loading image...</p>
//       )}
//     </div>
//   );
// };

// export default ClientPage;
