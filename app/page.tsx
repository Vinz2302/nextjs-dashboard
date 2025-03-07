import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { ComputerDesktopIcon,
        
 } from '@heroicons/react/24/outline';
// import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <div className="flex h-32 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 p-6 md:h-64 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-1 bg-[url('/images/noise.png')] opacity-20"></div>

        {/* Blog Logo and Title */}
        <div className="relative z-10 flex items-center gap-4">
          <ComputerDesktopIcon className="h-12 w-12 text-white" />
          <h1 className="text-4xl font-bold text-white md:text-5xl glow">
            My <span className="text-yellow-300">Tech</span> Blog
          </h1>
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-8 flex grow flex-col gap-8 md:flex-row">
        {/* Left Column: Welcome Message and Login Button */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-800 p-6 md:w-2/5 md:px-12 md:py-10">
          <p className={`${lusitana.className} text-xl md:text-3xl md:leading-normal`}>
            <strong>Welcome to My Personal Blog.</strong> Here, I share my thoughts, experiences, and tutorials on{' '}
            <span className="text-blue-400">web development</span>,{' '}
            <span className="text-blue-400">design</span>, and{' '}
            <span className="text-blue-400">life in tech</span>.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
          >
            <span>Log in to Explore</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png" // Replace with your blog-related image
            width={1000}
            height={760}
            className="hidden md:block rounded-lg shadow-2xl"
            alt="Illustration of a blog post or creative writing"
          />
          <Image
            src="/hero-mobile.png" // Replace with your blog-related image
            width={560}
            height={620}
            className="block md:hidden rounded-lg shadow-2xl"
            alt="Illustration of a blog post or creative writing"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
      </footer>
    </main>
  );
}

function Page1() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/> */}
        {/* <div className={styles.shape} /> */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="hidden md:block"
            alt="Screenshots of the dashboard project  showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
