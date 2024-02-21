'use client'
import { useState } from "react";

const DownloadFile = () => {
    const [downloadUrl, setDownloadUrl] = useState<string>('');

    const handleDownload = async () => {
        try {
            const response = await fetch('http://localhost:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ file_path: 'test1/test.png' }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setDownloadUrl(data.download_url);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            <button onClick={handleDownload}>Get Download URL</button>
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
