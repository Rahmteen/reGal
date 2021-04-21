pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract RegalNFT is ERC721Token, Ownable {
    string public name = "RegalToken";
    string public symbol = "RFT";

    constructor() public ERC721Token(name, symbol) {}

    mapping (uint256 => NFTData) private _nftList;

    struct NftDetails {
        string nftname;
        string artist;
        string description;
        string rawFile;
    }

    NftDetails[] public nftDetails;

    function getNFT( uint _nftId ) public view returns(string nftname, string artist, string description, string rawFile){
        NftDetails memory _nft = nftDetails[_nftId];

        nftname = _nft.nftname;
        artist = _nft.artist;
        description = _nft.description;
        rawFile = _nft.rawFile;
  }


    function mintNFT(
        string _nftname,
        string _artist,
        string _description,
        string _rawFile
    ) public payable onlyOwner {
        NftDetails memory _nftDetails = NftDetails({nftname: _nftname, artist: _artist, description: _description, rawFile: _rawFile});
        uint256 _nftId = nftDetails.push(_nftDetails) - 1;

        _mint(msg.sender, _nftId);
    }
}
