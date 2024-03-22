import { lusitana } from "@/app/ui/fonts"
import { CardsSkeleton } from "@/app/ui/skeletons"
import { Suspense } from "react"
import HidroponikData from "@/app/firebase/displayData"

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl pb-8 pt-8`}>
                RealTime - Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    {/* <HidroponikData /> */}
                </Suspense>
            </div>
        </main>
        // <div className="w-full">
        //     <div className="fles w-full items-center justify-between">
        //         <p className={`${lusitana.className} text-3xl`}>Dashboard Monitoring</p>
        //     </div>
        // </div>
    )
}