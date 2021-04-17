const RegalMinter = artifacts.require("RegalMinter");

contract("Regal NFT", accounts => {

  describe("mint", () => {
    it("creates token with specified user inputs", async () => {
      let instance = await RegalMinter.deployed();
      let token = await instance.uploadNFT("Nft Name", "Nft Description", "NFT Creator", "www.NFTLINK.com");
      let _regalNFT = await instance.getNFT(0);
      assert.deepEqual(_regalNFT, ["Nft Name", "Nft Description", "NFT Creator", "www.NFTLINK.com"]);
    });
  

  it("Should make first account an owner", async () => {
    let instance = await RegalMinter.deployed();
    let owner = "0xE72a9B3242aF1F21fA80c1C2d637Da44d62aA6d5"
    assert.equal(owner, accounts[0]);
    });
  });
});