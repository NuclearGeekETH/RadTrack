import { useState } from 'react';
import Mint from "./mint";
import AddDose from "./addDose";
import DoseData from "./dosedata";
import AdminLookup from "./adminData";

function Portal() {
  const [userType, setUserType] = useState('');

  return (
    <section className="text-white py-20 px-4 md:px-0 z-10 w-full rounded-md mt-10 flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center ">
      <button
        className='text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded mt-4 z-20'
        onClick={() => setUserType('patient')}
      >
        Patient Access
      </button>
      <button
        className='text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded mt-4 z-20'
        onClick={() => setUserType('healthcareProvider')}
      >
        Healthcare Provider
      </button>
      { userType === 'patient' && (
        <div className="mt-20 p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-30 w-full md:w-1/2 lg:w-3/4  z-20">
          <DoseData />
        </div>
      )}
      { userType === 'healthcareProvider' && (
          <div className="flex flex-wrap justify-center gap-4 mt-20">
            <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-30 w-full md:w-1/2 lg:w-3/4  z-20">
              <Mint />
            </div>
            <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-30 w-full md:w-1/2 lg:w-3/4  z-20">
              <AddDose />
            </div>
            <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-30 w-full md:w-1/2 lg:w-3/4 z-20">
              <DoseData />
            </div>
            <div className="p-8 mb-6 px-4 border-2 rounded-lg shadow bg-black bg-opacity-30 w-full md:w-1/2 lg:w-3/4  z-20">
              <AdminLookup />
            </div>
        </div>
      )}
      </div>
    </section>
  );
}

export default Portal;
