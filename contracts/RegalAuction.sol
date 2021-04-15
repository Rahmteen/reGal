pragma solidity 0.4.24;

import "./ERC721/ERC721.sol";

contract RegalAuction {
    // static
    address public owner;
    uint public bidIncrement;
    uint public startBlock;
    uint public endBlock;
    // for future meta data implementation
    // string public ipfsHash;

    // state
    uint256 public tokenAddress;
    bool public canceled;
    uint public highestBindingBid;
    address public highestBidder;
    bool ownerHasWithdrawn;

    mapping(address => uint256) public fundsByBidder;

    // events to be emitted

    event LogBid(address bidder, uint bid, address highestBidder, uint highestBid, uint highestBindingBid);
    event LogWithdrawal(address withdrawer, address withdrawalAccount, uint amount);
    event LogCanceled();

    function Auction(address _owner, uint _bidIncrement, uint _startBlock, uint _endBlock, uint256 _tokenAddress) public {
        if (_startBlock >= _endBlock) revert();
        if (_startBlock < block.number) revert();
        if (_owner == 0) revert();

        owner = _owner;
        bidIncrement = _bidIncrement;
        startBlock = _startBlock;
        endBlock = _endBlock;
        tokenAddress = _tokenAddress;
        // ipfsHash = _ipfsHash;
    }

    function getHighestBid() public
        constant
        returns (uint) 
    {
        return fundsByBidder[highestBidder];
    }

    function placeBid() public
        payable
        onlyAfterStart
        onlyBeforeEnd
        onlyNotCanceled
        onlyNotOwner
        returns (bool success)
    {
        // reject payments of 0 ETH
        if (msg.value == 0) revert();

        // calculate the user's total bid based on the current amount they've sent to the contract
        // plus whatever has been sent with this transaction
        uint newBid = fundsByBidder[msg.sender] + msg.value;

        // if the user isn't even willing to overbid the highest binding bid, there's nothing for us
        // to do except revert the transaction.
        if (newBid <= highestBindingBid) revert();

        // grab the previous highest bid (before updating fundsByBidder, in case msg.sender is the
        // highestBidder and is just increasing their maximum bid).
        uint highestBid = fundsByBidder[highestBidder];

        fundsByBidder[msg.sender] = newBid;

        if (newBid <= highestBid) {
            // if the user has overbid the highestBindingBid but not the highestBid, we simply
            // increase the highestBindingBid and leave highestBidder alone.

            // note that this case is impossible if msg.sender == highestBidder because you can never
            // bid less ETH than you've already bid.

            highestBindingBid = min(newBid + bidIncrement, highestBid);
        } else {
            // if msg.sender is already the highest bidder, they must simply be wanting to raise
            // their maximum bid, in which case we shouldn't increase the highestBindingBid.

            // if the user is NOT highestBidder, and has overbid highestBid completely, we set them
            // as the new highestBidder and recalculate highestBindingBid.

            if (msg.sender != highestBidder) {
                highestBidder = msg.sender;
                highestBindingBid = min(newBid, highestBid + bidIncrement);
            }
            highestBid = newBid;
        }

        emit LogBid(msg.sender, newBid, highestBidder, highestBid, highestBindingBid);
        return true;
    }

    function min(uint a, uint b)
        private
        constant
        returns (uint)
    {
        if (a < b) return a;
        return b;
    }

    function cancelAuction() public
        onlyOwner
        onlyBeforeEnd
        onlyNotCanceled
        returns (bool success)
    {
        canceled = true;
        emit LogCanceled();
        return true;
    }

    function withdraw() public
        onlyEndedOrCanceled
        returns (bool success)
    {
        address withdrawalAccount;
        uint withdrawalAmount;

        if (canceled) {
            // if the auction was canceled, everyone should simply be allowed to withdraw their funds
            withdrawalAccount = msg.sender;
            withdrawalAmount = fundsByBidder[withdrawalAccount];

        } else {
            // the auction finished without being canceled

            if (msg.sender == owner) {
                // the auction's owner should be allowed to withdraw the highestBindingBid
                withdrawalAccount = highestBidder;
                withdrawalAmount = highestBindingBid;
                ownerHasWithdrawn = true;

            } else if (msg.sender == highestBidder) {
                // the highest bidder should only be allowed to withdraw the difference between their
                // highest bid and the highestBindingBid
                withdrawalAccount = highestBidder;
                if (ownerHasWithdrawn) {
                    withdrawalAmount = fundsByBidder[highestBidder];
                } else {
                    withdrawalAmount = fundsByBidder[highestBidder] - highestBindingBid;
                }

            } else {
                // anyone who participated but did not win the auction should be allowed to withdraw
                // the full amount of their funds
                withdrawalAccount = msg.sender;
                withdrawalAmount = fundsByBidder[withdrawalAccount];
            }
        }

        if (withdrawalAmount == 0) revert();

        fundsByBidder[withdrawalAccount] -= withdrawalAmount;

        // send the funds
        if (!msg.sender.send(withdrawalAmount)) revert();

        emit LogWithdrawal(msg.sender, withdrawalAccount, withdrawalAmount);

        return true;
    }

    modifier onlyOwner {
        if (msg.sender != owner) revert();
        _;
    }

    modifier onlyNotOwner {
        if (msg.sender == owner) revert();
        _;
    }

    modifier onlyAfterStart {
        if (block.number < startBlock) revert();
        _;
    }

    modifier onlyBeforeEnd {
        if (block.number > endBlock) revert();
        _;
    }

    modifier onlyNotCanceled {
        if (canceled) revert();
        _;
    }

    modifier onlyEndedOrCanceled {
        if (block.number < endBlock && !canceled) revert();
        _;
    }
}












// contract RegalAuction is ERC721TokenReciever {
//     mapping(uint256 => AuctionDetails) auctionDetails;

//     struct AuctionDetails {
//         ERC721 nftContract;
//         bool bidIsComplete;
//         address seller;
//         address winningBidder;
//         uint256 tokenId;
//     }

//     // Transfer an NFT to the contract to start the auction
//     function onERC721Received(
//         address,
//         address from,
//         uint256 tokenId,
//         bytes calldata
//     ) external returns (bytes4) {

//         uint256 auctionId = uint256(keccak256(abi.encode(uint256(msg.sender), tokenId)));
//         auctionDetails[auctionId] = AuctionDetails({
//             nftContract: ERC721(msg.sender),
//             bidIsComplete: false,
//             seller: from,
//             winningBidder: address(0),
//             tokenId: tokenId
//         });

//         return 0x150b7a02;
//     }

//     function completeAuction(uint256 auctionId) external {
//         auctionDetails[auctionId].bidIsComplete = true;
//     }

//         function withdraw(uint256 auctionId) external {
//         AuctionDetails storage details = auctionDetails[auctionId];

//         require(details.bidIsComplete);
//         require(msg.sender == details.winningBidder);
//         // Collect money from winning bidder

//         details.nftContract.safeTransferFrom(address(this), details.winningBidder, details.tokenId);
//         // Send money to seller
//         // Do event logging
//         delete auctionDetails[auctionId];
//     }
// }
