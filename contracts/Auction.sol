pragma solidity ^0.4.24;

import "./ERC721/ERC721.sol";

contract TokenAuction {
    ERC721 public nonFungibleContract;

    function TokenAuction (address _nftAddress) public {
        nonFungibleContract = ERC721(_nftAddress);
    }
}