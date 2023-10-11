import type { NextPage } from 'next';
import Head from 'next/head';
import Read from '../../components/dosedata'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Lookup Dose Data</title>
        <meta name="description" content="Lookup Dose Data"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content=">Data Lookup" key="title" />
        <meta property="og:description" content="Lookup Dose Data" key="description" />
        <meta property="og:canonical" content="https://radtrack.vercel.app/dose-data" key="canonical" />
        <meta property="og:url" content="https://radtrack.vercel.app/dose-data" key="url" />
        <meta property="og:site_name" content="Data Lookup" key="site_name" />
        <meta property="og:image" content="https://radtrack.vercel.app/rad.png" key="image" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="twitter:title" content="Data Lookup" key="title" />
        <meta property="twitter:description" content="Lookup Dose Data" key="description" />
        <meta property="twitter:image" content="https://radtrack.vercel.app/rad.png" key="image" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className='min-h-screen p-4 flex flex-1 flex-col justify-center items-center bg-[#328ba8]'>

        <div className='p-8 border-2 rounded-lg shadow bg-black'>
        <Read />
        </div>
      </main>

    </div>
  );
};

export default Home;
