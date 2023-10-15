import React, { useState } from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import ABI from "./abi.json";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from "ethers";
import CONFIG from "public/config.json"

export default function TokenMint(props) {
  const [_price, set_price] = useState(0.01);
  const [_contractAddress, set_contractAddress] = useState(CONFIG.contract_address);
  const { address, isConnected } = useAccount();

  const {
      config,
      error: prepareError,
      isError: isPrepareError,
    } = usePrepareContractWrite({
      address: _contractAddress,
      abi: ABI,
      functionName: 'addDoseRecordERC',
      args: [props.patientId, props.exam, props.patientDose, props.time],
 
    });
   
    const { data, error, isError, write } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    });

  return (
    <div className="flex flex-col items-center justify-center">

      {isConnected && props.patientId && props.patientDose ? (
        <button
          disabled={!props.patientId || !props.patientDose || !write || isLoading}
          onClick={() => write()}
          className="bg-white text-black font-bold py-2 px-4 rounded-md hover:scale-105 hover:bg-[#005d46] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition-all duration-500 ease-out"
        >
          {isLoading ? 'Writing...' : 'Add Dose'}
        </button>
      ) : (
        <ConnectButton />
      )}

      {isSuccess && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="text-white font-bold mb-4">Successfully added the dose!</div>
          <div>
            <a
              href={`https://goerli.etherscan.io/tx/${data?.hash}`}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-700"
            >
              View transaction on Etherscan
            </a>
          </div>
        </div>
      )}

      {(isPrepareError || isError) && (
        <div className="mt-8 text-white w-fit break-words">
          Error: {(prepareError || error)?.message.slice(0, 90)}
        </div>
      )}
    </div>
  )  

}