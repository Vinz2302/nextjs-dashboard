// 'use client';
import { lusitana } from "@/app/ui/fonts";
import DownloadFile from '../../firebase/image'
import HidroponikData from "@/app/firebase/displayData";

// function download() {
//     const [isDownloaded, setIsDownloaded] = useState(new Array())
// }

// const imageUrls = [
//     'https://via.placeholder.com/200', // Replace with actual image URLs
//     'https://via.placeholder.com/200',
//     'https://via.placeholder.com/200',
//     'https://via.placeholder.com/200',
//   ];

export default function Page() {
    return (
    // <div className="w-full">
    //     <div className="flex w-full items-center justify-between">
    //         <p className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Harvest Page</p>

    //     </div>
    //     <div className="flex flex-wrap">
    //         {imageUrls.map((imageUrl, index) => (
    //             <DownloadFile key={index} imageUrl={imageUrl} segmentIndex={index} />
    //         ))}
    //     </div>
    // </div>

    <div className="w-full">
        <div className="fles w-full items-center justify-between">
            <p className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Harvest Page</p>
            <DownloadFile />
        </div>
    </div>
    )
};