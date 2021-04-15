// Fetch the Storage contract data from the Storage.json file
var RegalMinter = artifacts.require("./contracts/RegalMinter.sol");
var AuctionHouse = artifacts.require("./contracts/AuctionHouse.sol");
var RegalAuction = artifacts.require("./contracts/RegalAuction.sol");

// JavaScript export
module.exports = function(deployer) {
    // Deployer is the Truffle wrapper for deploying
    // contracts to the network

    // Deploy the contract to the network
    deployer.deploy(RegalMinter);
    deployer.deploy(AuctionHouse);
    deployer.deploy(RegalAuction);

}