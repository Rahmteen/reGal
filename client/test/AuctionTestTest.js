const AuctionTest = artifacts.require("AuctionTest");

contract("Auction test token", accounts => {
    it("Should make first account an owner", async () => {
      let instance = await AuctionTest.deployed();
      let owner = await instance.beneficiary();
      assert.equal(owner, accounts[0]);
    });
    it("Should log the auction time", async () => {
      let instance = await AuctionTest.deployed();
      let time = await instance.auctionEndTime();
      console.log("Auction Time: ", time)
    });
  });