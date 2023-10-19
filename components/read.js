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
            time: new Date(rec.time.toNumber() * 1000).toString(), // time needs to be converted from seconds to milliseconds
            timeInMilliSeconds: rec.time.toNumber() * 1000 // get time in milliseconds from epoch
          });
        }

        // Sort records in descending order of time
        _records.sort((a, b) => b.timeInMilliSeconds - a.timeInMilliSeconds);
      
        // updating the time field back to string after sorting
        _records.forEach((rec) => {
          rec.time = rec.time.toString();
        });      
          
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
    <div className="">
      {records.length > 0 ? (
        <div className="overflow-auto">
          <table className="min-w-max w-full table-auto lg:w-2/3 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-white sm:text-sm text-xs leading-normal">
              <tr>
                <th className="py-3 px-6 text-center">Patient ID</th>
                <th className="py-3 px-6 text-center">Exam</th>
                <th className="py-3 px-6 text-center">Dose (mGy)</th>
                <th className="py-3 px-6 text-center">Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 sm:text-sm text-xs">
              {records.map((data, index) => (
                <tr className="bg-white border-b border-gray-200 sm:text-sm text-xs" key={index}>
                  <td className="py-3 px-6 text-center">{props.tokenID}</td>
                  <td className="py-3 px-6 text-center">{data.exam}</td>
                  <td className="py-3 px-6 text-center">{data.dose}</td>
                  <td className="py-3 px-6 text-center">{data.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='text-center mt-6 font-bold text-green-800'>
          Enter Patient ID to get started
        </div>
      )}
    </div>
  );
}