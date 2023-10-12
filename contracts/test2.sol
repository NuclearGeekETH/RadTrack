// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract PatientRecords is ERC721, Ownable, ReentrancyGuard, Pausable {
    // Patient Record attributes
    struct Record {
        string exam;    // exam name
        uint256 dose;   // in milligray (mGy)
        uint256 time; // time of exam in epoch seconds
    }

    // Fees
    uint256 public MINTING_FEE = 0.01 ether;
    uint256 public MODIFY_RECORD_FEE = 0.01 ether;
    
    // List of admins who can mint and modify records
    mapping(address => bool) private admins;
    
    // Mapping from token ID to patient medical records
    mapping(uint256 => Record[]) public records;

    // Mapping for patient ID
    mapping(uint256 => bool) private minted;
   
    // Events
    event RecordModified(uint256 indexed patientId, uint256 timestamp, string exam, uint256 dose, uint256 time);

    // Constructor
    constructor() ERC721("PatientRecords", "PR") Ownable(msg.sender) {} 

    // Set Administrator to true or false
    function setAdmin(address account, bool value) public onlyOwner {
        admins[account] = value;
    }

    // Check if wallet has admin privileges
    function isAdmin(address account) public view returns (bool) {
        return admins[account];
    }

    // Change minting fee
    function setMintingFee(uint256 _newPrice) external onlyOwner {
        MINTING_FEE = _newPrice;
    }

    // Change modify record fee
    function setModifyRecordFee(uint256 _newPrice) external onlyOwner {
        MODIFY_RECORD_FEE = _newPrice;
    }
    
    // Mint a new patient record
    function mintPatient(uint256 patientId) external payable nonReentrant whenNotPaused {
        require(!minted[patientId], "Token has already been minted");
        require(msg.value >= MINTING_FEE, "Insufficient ether for minting fee");
        require(admins[msg.sender], "Only admins can mint patients");
        
        super._mint(msg.sender, patientId);
        minted[patientId] = true;
    }
    
    // Add dose record to existing patient
    function addDoseRecord(uint256 patientId, string memory exam, uint256 dose, uint256 time) external payable nonReentrant whenNotPaused {
        require(msg.value >= MODIFY_RECORD_FEE, "Insufficient ether for modifying record fee");
        require(admins[msg.sender], "Only admins can add dose records");
        // Make sure the patientId exists before we try to add a dose.
        require(minted[patientId], "Invalid patientId");
        
        // Add the dose to the patient's record.
        records[patientId].push(Record({exam: exam, dose: dose, time: time}));

        // Emit an event for the dose modification.
        emit RecordModified(patientId, block.timestamp, exam, dose, time);
    }
    
    // Get patient records. Returns an array of doses.
    function getRecords(uint256 patientId) public view returns (Record[] memory) {
        // Make sure the patientId exists before we try to get their records.
        require(minted[patientId], "Invalid patientId");

        // Return the list of records.
        return records[patientId];
    }

    // Get number of exams for patientId
    function getRecordCount(uint256 patientId) public view returns (uint256) {
        return records[patientId].length;
    }

    // Withdraw funds
    function withdraw() external onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "Contract has no money");
        
        // casting address to payable
        address payable owner = payable(owner());

        (bool success, ) = owner.call{value: balance}("");
        require(success, "Transfer failed.");
    }

    // Pause contract
    function pause() public onlyOwner {
        _pause();
    }

    // Unpause contract
    function unpause() public onlyOwner {
        _unpause();
    }
}