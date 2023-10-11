import React, { useState, useEffect } from "react";
import { useContractRead, useAccount, useChainId } from 'wagmi'
import ABI from "./abi.json";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CONFIG from "public/config.json"

export default function ReadNFTContract(props) {
  const { address, isConnected } = useAccount()
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { data, isError, isLoading } = useContractRead({
    address: _contractAddress,
    abi: ABI,
    functionName: 'isAdmin',
    args: [props.address]
    })

    const isAdmin = data

    console.log(address)
    console.log(isAdmin)
    console.log(props.address)

  return (
    <div className="flex flex-col items-center justify-center">

      {isConnected && isAdmin !== undefined ? (
          <div className="text-center mt-6 font-bold text-white">
            Address {props.address} has admin rights: {isAdmin ? 'Yes' : 'No'} 
          </div>
      ) : (
        <div className='text-center mt-6 font-bold text-cyan-950'>
        <ConnectButton />
        </div>
      )}
      </div>

  )
};

