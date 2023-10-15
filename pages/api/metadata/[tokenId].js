import { ethers } from 'ethers';
import ABI from "../abi.json";

export default async function handler(req, res) {
  const { tokenId } = req.query; // get token ID from request query

  // your contract address and ABI
  const infura_url = `https://goerli.infura.io/v3/${process.env.INFURA_ID}`;

  // initialising the provider (Infura in this case)
  let provider = new ethers.providers.JsonRpcProvider(infura_url);

  var contractAddress = "0xb6a95bdda72324cac2fd84f0732eb1fe6006c383";
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  // total supply from contract and IPFS hash for tokenId
  const [totalRecords] = await Promise.all([
    contract.getRecordCount(tokenId),
  ]);
  
  // build json response
  const baseJson = {
    "name": `RadTrack Patient #${tokenId}`,
    "description": "Dose storage.",
    "image": `https://rad-track.vercel.app/api/image/${tokenId}`,
    "attributes": [{
      "trait_type": "Patient Record Count",
      "value": `${totalRecords}` // from contract
    }],
  };

  res.json(baseJson);
}