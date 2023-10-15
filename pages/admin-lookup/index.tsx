import type { NextPage } from 'next';
import Head from 'next/head';
import Read from '../../components/adminData'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Lookup Admin Status</title>
        <meta name="description" content="Lookup Admin"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content=">Admin Lookup" key="title" />
        <meta property="og:description" content="Lookup Admin" key="description" />
        <meta property="og:canonical" content="https://rad-track.vercel.app/admin-lookup" key="canonical" />
        <meta property="og:url" content="https://rad-track.vercel.app/admin-lookup" key="url" />
        <meta property="og:site_name" content="Admin Lookup" key="site_name" />
        <meta property="og:image" content="https://rad-track.vercel.app/rad.png" key="image" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="twitter:title" content="Admin Lookup" key="title" />
        <meta property="twitter:description" content="Lookup Admin" key="description" />
        <meta property="twitter:image" content="https://rad-track.vercel.app/rad.png" key="image" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className='min-h-screen p-4 flex flex-1 flex-col justify-center items-center bg-[#0c162a]'>

        <div className='p-8 border-2 rounded-lg shadow bg-black'>
        <Read />
        </div>
      </main>

    </div>
  );
};

export default Home;
