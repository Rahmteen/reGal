//Modules
import React, { useState } from 'react';
import Web3 from 'web3';
//Contracts
import { regalMinter } from '../../Minter/regalMinter_abi';

const web3 = new Web3(Web3.givenProvider|| "http://localhost:8080")
const contractAddr = '0xf4D6196875D0867a712Bf176bDC64D79613a9B01';
<<<<<<< HEAD
const NFTMintContract = new web3.eth.Contract(regalMinter, contractAddr);
=======
const SimpleContract = new web3.eth.Contract(regalMinter, contractAddr);
>>>>>>> a0fb512407d885c863f7a3f5cf9b785df480227e

const NftMinter = () => {
    const [number, setNumber] = useState(0);
    const [getNumber, setGetNumber] = useState('0x00');
    

    const handleGet = async (e) => {
      e.preventDefault();
      const result = await NFTMintContract.methods.get().call();
      setGetNumber(result);
      console.log(result);
    }

    const handleSet = async (e) => {
      e.preventDefault();    
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const gas = await NFTMintContract.methods.set(number)
                          .estimateGas();
      const result = await NFTMintContract.methods.set(number).send({
        from: account,
        gas 
      })
      console.log(result);
    }

    return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={handleSet}>
              <label>
                Set Number:
                <input 
                  type="text"
                  name="name"
                  value={number}
                  onChange={ e => setNumber(e.target.value) } />
              </label>
              <input type="submit" value="Set Number" />
            </form>
            <br/>
            <button
              onClick={handleGet}
              type="button" > 
              Get Number 
            </button>
            { getNumber }
          </header>
        </div>  
    );
}

export default NftMinter;