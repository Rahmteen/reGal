pragma solidity ^0.4.24;

import "./ERC721/ERC721.sol";
import "./ERC721/ERC721Enumerable.sol";

contract regalMinter is ERC721, ERC721Enumerable {

    event NFTUploaded (uint256 indexed tokenId, bytes photo, string title, string location, string description, uint256 timestamp);

    mapping (uint256 => NFTData) private _nftList;

    struct NFTData {
        uint256 tokenId;                       // Unique token id
        address[] ownerHistory;                // History of all previous owners
        bytes photo;                           // Image source encoded in uint 8 array format
        string title;                          // Title of photo
        string location;                       // Location where photo is taken
        string description;                    // Short description about the photo
        uint256 timestamp;                     // Uploaded time
    }

  /**
   * @notice _mint() is from ERC721.sol
   */
    function uploadNFT(bytes photo, string title, string location, string description) public {
        uint256 tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        address[] memory ownerHistory;

        NFTData memory newNFTData = NFTData({
            tokenId : tokenId,
            ownerHistory : ownerHistory,
            photo : photo,
            title: title,
            location : location,
            description : description,
            timestamp : now
        });

        _nftList[tokenId] = newNFTData;
        _nftList[tokenId].ownerHistory.push(msg.sender);

        emit NFTUploaded(tokenId, photo, title, location, description, now);
    }

  /**
   * @notice safeTransferFrom function checks whether receiver is able to handle ERC721 tokens
   *  and then it will call transferFrom function defined below
   */
    function transferOwnership(uint256 tokenId, address to) public returns(uint, address, address, address) {
        safeTransferFrom(msg.sender, to, tokenId);
        uint ownerHistoryLength = _nftList[tokenId].ownerHistory.length;
        return (
            _nftList[tokenId].tokenId, 
            //original owner
            _nftList[tokenId].ownerHistory[0],
            //previous owner, length cannot be less than 2
            _nftList[tokenId].ownerHistory[ownerHistoryLength-2],
            //current owner
            _nftList[tokenId].ownerHistory[ownerHistoryLength-1]);
    }

  /**
   * @notice Recommand using transferOwnership, which uses safeTransferFrom function
   * @dev Overided transferFrom function to make sure that every time ownership transfers
   *  new owner address gets pushed into ownerHistory array
   */
    function transferFrom(address from, address to, uint256 tokenId) public {
        super.transferFrom(from, to, tokenId);
        _nftList[tokenId].ownerHistory.push(to);
    }

    function getTotalNFTCount () public view returns (uint) {
        return totalSupply();
    }

    function getNFT (uint tokenId) public view 
    returns(uint256, address[], bytes, string, string, string, uint256) {
        require(_nftList[tokenId].tokenId != 0, "Photo does not exist");
        return (
            _nftList[tokenId].tokenId, 
            _nftList[tokenId].ownerHistory, 
            _nftList[tokenId].photo, 
            _nftList[tokenId].title, 
            _nftList[tokenId].location, 
            _nftList[tokenId].description,
            _nftList[tokenId].timestamp);
    }
}