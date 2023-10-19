import React, { useState } from "react";
import {
  useAccount,
} from 'wagmi';
import Read from "./read"
import CONFIG from "public/config.json"
import Link from "next/link";

export default function TokenData() {
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { address, isConnected } = useAccount();
  const [ _tokenID, set_tokenID ] = useState('');
  const [ showRead, setShowRead ] = useState(false); // added state for controlling display of Read component

  // A function to handle the tokenID input change
  const handleTokenIDChange = (e) => {
    set_tokenID(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // stopping form direct submission
    setShowRead(true); // showing Read component on clicking button
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-center text-4xl font-bold pt-6 mb-6 text-white">
        <Link href={"/dose-data"}>
          Check Dose History
        </Link>
      </div>

        
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-64">
          <input
            type="text" 
            placeholder="Enter Patient ID" 
            value={_tokenID} 
            onChange={handleTokenIDChange} 
            className="my-4 text-center text-black p-2" 
          />
          <button type="submit" className="bg-white my-4 text-center text-black p-2">Submit</button>
          </div>
        </form>

      {showRead ? (
        <Read tokenID={_tokenID}/>
      ) : (
        <div className="text-white mt-4">
          Enter Patient ID and hit Submit to get started (Try patient #69 as an example)
        </div>
      )}

    </div>
  );
}
