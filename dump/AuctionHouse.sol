pragma solidity ^0.4.24;

import "./ERC721/ERC721TokenReceiver.sol";
import "./ERC721/ERC721.sol";
import { RegalAuction } from './RegalAuction.sol';

contract AuctionHouse is ERC721TokenReceiver, RegalAuction {

    event AuctionCreated(address owner, uint256 auctionId);
    
    mapping(uint256 => AuctionDetails) auctionDetails;

    struct AuctionDetails {
        ERC721 nftContract;
        bool bidIsComplete;
        address seller;
        address winningBidder;
        uint256 tokenId;
    }
    
    function onERC721Received(
        address tokenAddress,
        address from,
        uint256 tokenId,
        bytes calldata
    ) external returns (bytes4) {

        uint256 auctionId = uint256(keccak256(abi.encode(uint256(msg.sender), tokenId)));

        auctionDetails[auctionId] = AuctionDetails({
            nftContract: ERC721(msg.sender),
            bidIsComplete: false,
            seller: from,
            winningBidder: address(0),
            tokenId: tokenId
        });

        RegalAuction(auctionId);

        // emit AuctionCreated(msg.sender, auctions.length, auctions, auctionId);

        return 0x150b7a02;
    }


        function completeAuction(uint256 auctionId) public {
        auctionDetails[auctionId].bidIsComplete = true;
    }

        function withdraw(uint256 auctionId) public {
        AuctionDetails storage details = auctionDetails[auctionId];

        require(details.bidIsComplete);
        require(msg.sender == details.winningBidder);
        // Collect money from winning bidder

        details.nftContract.safeTransferFrom(address(this), details.winningBidder, details.tokenId);
        // Send money to seller
        // Do event logging
        delete auctionDetails[auctionId];
    }
}