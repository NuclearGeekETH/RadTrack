import { ethers } from 'ethers';
import ABI from '../abi.json';
import { createCanvas, loadImage } from 'canvas';

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

  const canvas = createCanvas(500, 500);
  const context = canvas.getContext('2d');

  // Set the font size and color
  context.font = '30px Impact';
  context.fillStyle = 'black';

  // Add text to the image
  context.fillText(baseJson.name, 50, 50);
  context.fillText(baseJson.description, 50, 100);
  context.fillText(baseJson.attributes[0].trait_type, 50, 150);
  context.fillText(baseJson.attributes[0].value, 50, 200);

  // Convert the canvas to Buffer
  const buffer = canvas.toBuffer('image/png');

  // Set the content type to image
  res.setHeader('Content-Type', 'image/png');
  res.send(buffer);
}