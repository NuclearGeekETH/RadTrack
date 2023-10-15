import { ethers } from 'ethers';
import ABI from '../abi.json';
import sharp from 'sharp';

export default async function handler(req, res) {
  const { tokenId } = req.query;

  const infura_url = `https://goerli.infura.io/v3/${process.env.INFURA_ID}`;
  let provider = new ethers.providers.JsonRpcProvider(infura_url);

  var contractAddress = "0xb6a95bdda72324cac2fd84f0732eb1fe6006c383";
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  const [totalRecords] = await Promise.all([
    contract.getRecordCount(tokenId),
  ]);

  const baseJson = {
    "name": `RadTrack Patient #${tokenId}`,
    "description": "Dose storage.",
    "image": `https://rad-track.vercel.app/api/image/${tokenId}`,
    "attributes": [{
      "trait_type": "Patient Record Count",
      "value": `${totalRecords}` 
    }],
  };

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
    <text x="10" y="20">${baseJson.name}</text>
    <text x="10" y="40">${baseJson.description}</text>
    <text x="10" y="60">${baseJson.attributes[0].trait_type}: ${baseJson.attributes[0].value}</text>
  </svg>`;

  // Convert SVG to PNG with Sharp
  const buffer = await sharp(Buffer.from(svgString)).png().toBuffer();

  // Set the Content Type and send the image
  res.setHeader('Content-Type', 'image/png');
  res.send(buffer);
}