import React, { useState } from "react";
import {
  useAccount,
} from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Mint from "./mint_patient"
import CONFIG from "public/config.json"
import Link from "next/link";

export default function TokenMint() {
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { address, isConnected } = useAccount();
  const [ _tokenID, set_tokenID ] = useState('');

  // A function to handle the tokenID input change
  const handleTokenIDChange = (e) => {
    set_tokenID(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-4xl font-bold pt-6 mb-6 text-white">
        <Link href={"/add-patient"}>
          Mint Patient
        </Link>
      </div>

      <input
        type="text" 
        placeholder="Enter Patient ID" 
        value={_tokenID} 
        onChange={handleTokenIDChange} 
        className="my-4 text-center text-black p-2" 
      />

      {isConnected && _tokenID ? (
        <Mint tokenID={_tokenID}/>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
