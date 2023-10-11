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
    functionName: 'getRecords',
    args: [props.tokenID]
    })
  
    // console.log(address)
    // console.log(data)
    // console.log(props.tokenID)
  
    const [bigNumbers, setBigNumbers] = useState([]);

    useEffect(() => {
      if (data && Array.isArray(data) && data.length > 0 && !isLoading && !isError) {
          // Flatten the array and map each item to its BigNumber string representation
          const bigNumbersStrings = data.flat().map(bigNumber => {
              // .toString() on BigNumber object to convert it to a readable string.
              return bigNumber ? bigNumber.toString() : '';
          });

          setBigNumbers(bigNumbersStrings);
      }
    }, [data, isError, isLoading]);

  return (
    <div className="flex flex-col items-center justify-center">

      {isConnected && data ? (
          <div className="text-center mt-6 font-bold text-white">
            The dose data for Patient ID {props.tokenID} is: {bigNumbers.join(', ')} (doses in mGy)
          </div>
      ) : (
        <div className='text-center mt-6 font-bold text-cyan-950'>
        <ConnectButton />
        </div>
      )}
      </div>

  )
};

