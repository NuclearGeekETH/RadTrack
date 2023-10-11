import Image from 'next/image'
import { Inter } from 'next/font/google'
import Mint from '../components/mint'
import AddDose from '../components/addDose'
import DoseData from '../components/dosedata'
import AdminLookup from '../components/adminData'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RadTrack</title>
        <meta name="description" content="Track radiation dose across facilities"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content=">RadTrack" key="title" />
        <meta property="og:description" content="Track radiation dose across facilities" key="description" />
        <meta property="og:canonical" content="https://radtrack.vercel.app/" key="canonical" />
        <meta property="og:url" content="https://radtrack.vercel.app/" key="url" />
        <meta property="og:site_name" content="RadTrack" key="site_name" />
        <meta property="og:image" content="https://radtrack.vercel.app/rad.png" key="image" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="twitter:title" content="RadTrack" key="title" />
        <meta property="twitter:description" content="Track radiation dose across facilities" key="description" />
        <meta property="twitter:image" content="https://radtrack.vercel.app/rad.png" key="image" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[#328ba8] ${inter.className}`}
    >
        <div className='p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black md:w-1/2'>
        <Mint />
        </div>
        <div className='p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black md:w-1/2'>
        <AddDose />
        </div>
        <div className='p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black md:w-1/2'>
        <DoseData />
        </div>
        <div className='p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black md:w-1/2'>
        <AdminLookup />
        </div>
    </main>
    </>
  )
}
