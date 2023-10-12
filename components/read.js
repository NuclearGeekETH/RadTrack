import React, { useState, useEffect } from "react";
import { useContractRead, useAccount, useChainId } from 'wagmi'
import ABI from "./abi.json";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CONFIG from "public/config.json"
import { ethers } from "ethers";

export default function ReadNFTContract(props) {
  const [records, setRecords] = useState([]); 

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        // create a provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // create a contract instance
        const contract = new ethers.Contract(CONFIG.contract_address, ABI, provider);
        // get record count for a token
        const recordCount = await contract.getRecordCount(props.tokenID);
        const _records = [];

        // loop through records, fetch each one and push to _records array
        for(let i=0; i<recordCount; i++) {
          const rec = await contract.records(props.tokenID, i);
          _records.push({
            exam: rec.exam,
            dose: rec.dose.toString(),
            time: new Date(rec.time.toNumber() * 1000).toString() // time needs to be converted from seconds to milliseconds
          });
        }
        // update state
        setRecords(_records);
      } catch (error) {
        // perform error handling as necessary
        console.error("Error fetching records:", error);
      }
    }

    fetchRecords();
  }, [props.tokenID]);

  return (
    <div className="flex flex-col items-center justify-center">
      {records.length > 0 ? (
          records.map((data, index) => (
            <div key={index} className="text-center mt-6 font-bold text-white">
              Patient ID {props.tokenID} had a {data.exam} with {data.dose} mGy of dose on {data.time}
            </div>
          ))
      ) : (
        <div className='text-center mt-6 font-bold text-cyan-950'>
          <ConnectButton />
        </div>
      )}
    </div>
  );
}