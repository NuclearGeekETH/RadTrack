import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer"
import Portal from "../components/portal"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>RadTrack</title>
        <meta
          name="description"
          content="Track radiation dose across facilities using blockchain"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content=">RadTrack" key="title" />
        <meta
          property="og:description"
          content="Track radiation dose across facilities using blockchain"
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
        className={`relative flex min-h-screen flex-col items-center justify-between pt-24 bg-[#0A1120] ${inter.className}`}
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
        <Portal />
        {/* Instructional Video */}
        <div className="mb-10 rounded-lg shadow-lg p-4 md:p-8 z-20">
          <div className="flex justify-center">
            <div className="aspect-w-16 aspect-h-9 w-full md:max-w-2xl">
              <video 
                controls 
                className="w-full h-full"
                src="/Rad_Track.mp4"
              />
            </div>
          </div>
          <p className="text-lg text-white mt-4">
            The video above provides a detailed demonstration on how to navigate and utilize our website efficiently.
          </p>
        </div>

        <div className="pt-12 z-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
