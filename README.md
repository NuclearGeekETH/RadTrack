# ETHOnline2023 Project: RadTrack

## ☢ Alert: Approaching Radiation Dose Limits! ☢

## Introduction

We’re introducing a novel and modern solution to a pressing issue in the radiology industry - cross-facility radiation dose accumulation. The industry has been struggling with the lack of a mechanism to monitor radiation doses received by patients or employees at independent facilities. Despite radiation dose tracking being overseen by private companies, the data is siloed within individual facilities. Thus, no universal dose tracking standard has been universally adopted.

## Our Solution

Our notable solution to this problem is to assign a wallet to each hospital with the role of an administrator. This enables creation of patient NFTs and tracking of their accumulated individual radiation doses. If integrated with hospital record systems then we can leverage standardized communication protocols like HL7. For the project, the smart contract is facilitated by a web application, allowing manual entry of patient data. In a full implementation this would all be automated.

Each patient is represented by an NFT, which will store a history of their radiation dose intake. It allows the creation of a universally accessible and permanent record, assisting doctors and healthcare professionals to make informed decisions.

We believe in privacy; hence, each patient is assigned an anonymous yet distinguishable identifier. All patient information is stored in an open-source smart contract, accessible by the administrators, i.e., the hospitals. Compliance with complex regulations and systems is made accessible and simplified, increasing the chances of our system’s widespread adoption.

Moreover, we integrated an additional feature to allow for the tabulation of radiation dose statistics onto patients’ NFTs using ApeCoin, providing added flexibility.

# Features

## Website

- [Main Page - Grants access to the full suite of features](https://rad-track.vercel.app/)
- [Create Patient - Exclusively for admin, enabling minting of new patients using Ethereum](https://rad-track.vercel.app/add-patient)
- [Add Radiation Dose - Admin-only feature allowing dose addition using Ethereum](https://rad-track.vercel.app/add-dose)
- [Add Radiation Dose using ApeCoin - An added feature for admins for payment flexibility](https://rad-track.vercel.app/add-dose-apecoin)
- [Lookup Radiation Dose - Public features allowing users to review the radiation dose history of patients](https://rad-track.vercel.app/dose-data)

## API End Points

- [Get patient metadata - Renders patient metadata dynamically using web3 contract calls](https://rad-track.vercel.app/api/metadata/69)
- [Get patient image - dynamic image rendering with patient data using web3 contract calls](https://rad-track.vercel.app/api/image/69)

## OpenSea Integration

- [Each patient is represented as an NFT displaying the number of exams undertaken.](https://testnets.opensea.io/assets/goerli/0xb6a95bdda72324cac2fd84f0732eb1fe6006c383/69)

# Technical Stack

We use Next.js to handle both front-end and back-end elements. Our deployed smart contract employs Solidity, and it resides in the Goerli Ethereum testnet. The contract integrates a test version of ApeCoin to carry out payments. We host our project on Vercel.

# Contributors

NuclearGeek (Shawn Pickett), a radiation safety expert and now a full-stack developer, managed our back-end development and set the foundation for the front-end. MzLady, a highly skilled professional in both front-end and back-end programming, supervised UI/UX enhancements throughout the development.

# Future Scope

While the web application offers simple integration with the smart contract, extending its use in hospital EMR systems would include automated contract entries, facilitating comprehensive and effortless tracking of radiation doses.

# Connect and Contribute

If you wish to contribute or want us to implement our solution tailored to your specific needs, please don’t hesitate to connect with us. We are excited about working together, making radiation tracking more transparent, accessible, and universal.

# Build the future with us! ☢