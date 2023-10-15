import { ethers } from 'ethers';
import ABI from '../abi.json';
import Jimp from 'jimp';

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

  const image = new Jimp(500, 500, 0xffffffff);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK); // use your desired font

  image.print(font, 10, 10, baseJson.name);
  image.print(font, 10, 50, baseJson.description);
  image.print(font, 10, 90, baseJson.attributes[0].trait_type);
  image.print(font, 10, 130, baseJson.attributes[0].value);

  const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

  res.setHeader('Content-Type', 'image/png');
  res.send(buffer);

}