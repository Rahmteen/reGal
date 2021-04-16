const RegalToken = artifacts.require("RegalToken")

contract(RegalToken, accounts => {

    // total supply minted 
    it("should mint 420,000 tokens on creation", () => {
        const supply = 420000;
        let expectSupply;
        let amount = 10;
    
        return RegalToken.deployed()
          .then(instance => {
            meta = instance;
            return meta.totalSupply.call();
          })
          .then(balance => {
            expectSupply = balance

            assert.equal(
                supply, 
                expectSupply,
                "Amount is currently correctly being circulated"
              );
          });
      });
    });