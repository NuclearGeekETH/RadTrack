import React, { useState } from "react";
import {
  useAccount,
} from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Write from "./addDoseWriteApeCoin"
import CONFIG from "public/config.json"

export default function TokenData() {
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { address, isConnected } = useAccount();
  const [ _patientId, set_patientId ] = useState('');
  const [ _dose, set_dose ] = useState('');
  const [ _exam, set_exam ] = useState('');
  const [ _time, set_time ] = useState('');
  const [ showRead, setShowRead ] = useState(false); // added state for controlling display of Read component

  // A function to handle the tokenID input change
  const handlePatientIDChange = (e) => {
    set_patientId(e.target.value);
  }

    // A function to handle the exam input change
    const handleExamChange = (e) => {
      set_exam(e.target.value);
    }
  
  // A function to handle the tokenID input change
  const handleDoseChange = (e) => {
    set_dose(e.target.value);
  }

  // A function to handle the tokenID input change
  const handleTimeChange = (e) => {
    set_time(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // stopping form direct submission
    setShowRead(true); // showing Read component on clicking button
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center  text-4xl font-bold pt-6 mb-6 text-white">Add dose to patient using ApeCoin</div>

      {isConnected && (
        
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
        <input
            type="text" 
            placeholder="Enter Patient ID" 
            value={_patientId} 
            onChange={handlePatientIDChange} 
            className="my-4 text-center text-black p-2"
          />
          <input
            type="text" 
            placeholder="Enter Exam Name" 
            value={_exam} 
            onChange={handleExamChange} 
            className="my-4 text-center text-black p-2" 
          />
          <input
            type="text" 
            placeholder="Enter Dose (mGy)" 
            value={_dose} 
            onChange={handleDoseChange} 
            className="my-4 text-center text-black p-2" 
          />
          <input
            type="text" 
            placeholder="Enter time (epoch seconds)" 
            value={_time} 
            onChange={handleTimeChange} 
            className="my-4 text-center text-black p-2" 
          />
          <button type="submit" className="bg-white my-4 text-center text-black p-2">Submit</button>
          </div>
        </form>
      )}

      {isConnected && showRead ? (
        <Write patientId={_patientId} exam={_exam} patientDose={_dose} time={_time}/>
      ) : (
        <ConnectButton />
      )}

      <div className='pt-8'>
        <a
          href={`https://goerli.etherscan.io/address/${_contractAddress}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white hover:text-blue-700"
        >
          {_contractAddress}
        </a>
      </div>

    </div>
  );
}
