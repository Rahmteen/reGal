var AuctionTest = artifacts.require("../contracts/AuctionTest.sol");

module.exports = function(deployer, networks, accounts) {
    //86400 - seconds in one day.
    //Test time for auction
    deployer.deploy(AuctionTest, 86400, accounts[0])
};