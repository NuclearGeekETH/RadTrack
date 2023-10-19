import React, { useState } from "react";
import {
  useAccount,
} from 'wagmi';
import Read from "./adminLookup"
import CONFIG from "public/config.json"
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function TokenData() {
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { address, isConnected } = useAccount();
  const [ _address, set_address ] = useState('');
  const [ showRead, setShowRead ] = useState(false); // added state for controlling display of Read component

  // A function to handle the tokenID input change
  const handleTokenIDChange = (e) => {
    set_address(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // stopping form direct submission
    setShowRead(true); // showing Read component on clicking button
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-center text-4xl font-bold pt-6 mb-6 text-white">
        <Link href={"/admin-lookup"}>
          Check if wallet has Administrator rights
        </Link>  
        </div>

        
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-64">
          <input
            type="text" 
            placeholder="Enter Address" 
            value={_address} 
            onChange={handleTokenIDChange} 
            className="my-4 text-center text-black p-2" 
          />
          {isConnected ? (<button type="submit" className="bg-white my-4 text-center text-black p-2">Submit</button>) : (<ConnectButton />)}
          </div>
        </form>

      { showRead ? (
        <Read address={_address}/>
      ) : (
        <div className="text-white mt-4">
          Enter wallet address and hit Submit to see if wallet has admin rights
        </div>
      )}
    </div>
  );
}
