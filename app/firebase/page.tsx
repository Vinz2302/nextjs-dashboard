import DownloadFile from "./image";

const Page = () => {
    return (
        <div>
            <h1>Test Image</h1>
            <DownloadFile />
        </div>
    )
}

export default Page

// import React from 'react';
// import dynamic from 'next/dynamic';

// const ClientPage = dynamic(() => import('./ClientPage'), { ssr: false });

// const Page: React.FC = () => {
//   return (
//     <div>
//       <ClientPage />
//     </div>
//   );
// };


// export default Page;
