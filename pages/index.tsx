import Image from "next/image";
import { Inter } from "next/font/google";
import Mint from "../components/mint";
import AddDose from "../components/addDose";
import AddDoseERC from "../components/addDoseApeCoin";
import DoseData from "../components/dosedata";
import AdminLookup from "../components/adminData";
import Head from "next/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RadTrack</title>
        <meta
          name="description"
          content="Track radiation dose across facilities"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content=">RadTrack" key="title" />
        <meta
          property="og:description"
          content="Track radiation dose across facilities"
          key="description"
        />
        <meta
          property="og:canonical"
          content="https://rad-track.vercel.app/"
          key="canonical"
        />
        <meta
          property="og:url"
          content="https://rad-track.vercel.app/"
          key="url"
        />
        <meta property="og:site_name" content="RadTrack" key="site_name" />
        <meta
          property="og:image"
          content="https://rad-track.vercel.app/rad.png"
          key="image"
        />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="twitter:title" content="RadTrack" key="title" />
        <meta
          property="twitter:description"
          content="Track radiation dose across facilities"
          key="description"
        />
        <meta
          property="twitter:image"
          content="https://rad-track.vercel.app/rad.png"
          key="image"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main
        className={`relative flex min-h-screen flex-col items-center justify-between py-24 bg-[#0A1120] ${inter.className}`}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="url(#grid)" />
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
        </svg>
        <div className="absolute top-0 left-0 z-10 w-full">
          <Image
            src="/bg.png"
            alt="Description of Image"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex flex-col fixed top-0 w-full z-20">
          <Nav />
        </div>

        <Hero />
        <About />

        <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-60 md:w-1/2 mt-20 z-20">
          <Mint />
        </div>
        <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-60 md:w-1/2 z-20">
          <AddDose />
        </div>
        <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-60 md:w-1/2 z-20">
          <AddDoseERC />
        </div>
        <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-60 md:w-1/2 z-20">
          <DoseData />
        </div>
        <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-60 md:w-1/2 z-20">
          <AdminLookup />
        </div>
      </main>
    </>
  );
}
