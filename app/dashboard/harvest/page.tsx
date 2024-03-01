// 'use client';
import { lusitana } from "@/app/ui/fonts";
import DownloadFile from '../../firebase/image'
import HidroponikData from "@/app/firebase/displayData";

export default function Page() {
    return (
    <div className="w-full">
        <div className="fles w-full items-center justify-between">
            <p className={`${lusitana.className} text-3xl`}>Harvest Page</p>
            <DownloadFile />
            {/* <HidroponikData /> */}
        </div>
    </div>
    )
};