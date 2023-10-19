import React, { useState } from "react";
import {
  useAccount,
} from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Write from "./addDoseWrite"
import WriteApe from "./addDoseWriteApeCoin"
import CONFIG from "public/config.json"
import Link from "next/link";

export default function TokenData() {
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { address, isConnected } = useAccount();
  const [ _patientId, set_patientId ] = useState('');
  const [ _dose, set_dose ] = useState('');
  const [ _exam, set_exam ] = useState('');
  const [ _date, set_date ] = useState('');
  const [ _time, set_time ] = useState('');
  const [ _epochSeconds, set_epochSeconds ] = useState(0)
  const [ showRead, setShowRead ] = useState(false); // added state for controlling display of Read component

  const handlePatientIDChange = (e) => { set_patientId(e.target.value); }
  const handleExamChange = (e) => { set_exam(e.target.value); }
  const handleDoseChange = (e) => { set_dose(e.target.value); }
  const handleDateChange = (e) => { set_date(e.target.value); }
  const handleTimeChange = (e) => { set_time(e.target.value); }

  const handleSubmit = (e) => {
    e.preventDefault();
    const epochSeconds = new Date(`${_date}T${_time}`).getTime() / 1000;
    console.log(epochSeconds)
    set_epochSeconds(epochSeconds);
    setShowRead(true);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-4xl font-bold pt-6 mb-6 text-white">
        <Link href={"/add-dose"}>
          Add dose to patient using Ethereum or ApeCoin
          </Link>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Patient ID" value={_patientId} onChange={handlePatientIDChange} className="my-4 text-center text-black p-2" />
          <input type="text" placeholder="Enter Exam Name" value={_exam} onChange={handleExamChange} className="my-4 text-center text-black p-2" />
          <input type="text" placeholder="Enter Dose (mGy)" value={_dose} onChange={handleDoseChange} className="my-4 text-center text-black p-2" />
          <input type="date" placeholder="Enter Date" value={_date} onChange={handleDateChange} className="my-4 text-center text-black p-2" />
          <input type="time" placeholder="Enter Time" value={_time} onChange={handleTimeChange} className="my-4 text-center text-black p-2" />
          <div className="flex flex-col items-center justify-center">{isConnected ? (<button type="submit" className="bg-white my-4 text-center text-black p-2">Submit</button>) : (<div className="text-white mt-4 mb-8">Connect wallet to add dose</div>)}</div>
        </form>
      {isConnected && showRead ? (
        <div className="flex flex-col">
          <div className="pb-4">
            <Write patientId={_patientId} exam={_exam} patientDose={_dose} time={_epochSeconds} />
          </div>
            <WriteApe patientId={_patientId} exam={_exam} patientDose={_dose} time={_epochSeconds} />
        </div>
        ) : (
          <ConnectButton />
      )}
    </div>
  );
}