// 'use client';
import { lusitana } from "@/app/ui/fonts";
import DownloadFile from '../../firebase/image1'; // Assuming DownloadFile handles image downloads
import DownloadFile2 from '../../firebase/image2';
import DownloadFile3 from '../../firebase/image3';
import DownloadFile4 from '../../firebase/image4';

export default function Page() {
    return (

    <div className="container mx-auto px-4 py-8">
        {/* <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Harvest Page</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <DownloadFile />
            <DownloadFile2 />
            <DownloadFile3 />
            <DownloadFile4 />
        </div>
    </div>
    )
};

// export default function Page() {
//     return (

//     // <div className="w-full">
//     //     <div className="fles w-full items-center justify-between">
//     //         <p className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Harvest Page</p>
//     //         <DownloadFile />
//     //         <DownloadFile />
//     //         <DownloadFile />
//     //         <DownloadFile />
//     //     </div>
//     // </div>
//     )
// };