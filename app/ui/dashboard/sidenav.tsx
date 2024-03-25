import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { GiFallingLeaf } from 'react-icons/gi';
import { signOut } from '@/auth';
import { inter, lusitana } from '../fonts';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-600 p-4 md:h-40"
        href="/"
      >
        <div className="text-white">
          <GiFallingLeaf className="text-6xl" />
        </div>
      </Link> */}
      <Link href="/">
        <div className="mb-2 flex h-20 items-center justify-start rounded-md bg-gradient-to-r from-sky-400 to-green-400 p-3 md:h-40 md:shadow-md cursor-pointer">
          <div className="text-white">
            <GiFallingLeaf className="text-5xl" />
          </div>
          <h1 className={`${lusitana.className} ml-2 text-3xl font-bold text-white`}>Hidroponik</h1>
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
