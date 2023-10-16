import type { NextPage } from 'next';
import Head from 'next/head';
import Mint from '../../components/mint'
import Nav from "../../components/nav";
import Footer from "../../components/footer";


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Mint your Patient</title>
        <meta name="description" content="Mint your patient"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content=">Mint Patient" key="title" />
        <meta property="og:description" content="Mint your patient" key="description" />
        <meta property="og:canonical" content="https://rad-track.vercel.app/add-patient" key="canonical" />
        <meta property="og:url" content="https://rad-track.vercel.app/add-patient" key="url" />
        <meta property="og:site_name" content="Mint Patient" key="site_name" />
        <meta property="og:image" content="https://rad-track.vercel.app/rad.png" key="image" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="twitter:title" content="Mint Patient" key="title" />
        <meta property="twitter:description" content="Mint your patient" key="description" />
        <meta property="twitter:image" content="https://rad-track.vercel.app/rad.png" key="image" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className='min-h-screen p-4 flex flex-1 flex-col justify-center items-center bg-[#0c162a]'>

        <div className="flex flex-col fixed top-0 w-full z-20">
          <Nav />
        </div>

        <div className='p-8 border-2 rounded-lg shadow bg-black md:w-1/3'>
        <Mint />
        </div>
        <div className='fixed bottom-0 '>
          <Footer />
        </div>
      </main>

    </div>
  );
};

export default Home;
