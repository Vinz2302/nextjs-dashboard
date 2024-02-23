import DownloadFile from "./image";

const Page = () => {
    return (
        <div className="w-full">
            <div className="fles w-full items-center justify-between">
                <h1>Test Image</h1>
                <DownloadFile />
            </div>
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
