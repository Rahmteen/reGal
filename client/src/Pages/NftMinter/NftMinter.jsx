//Modules
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
//Contracts
import { regalMinter } from '../../Minter/regalMinter_abi';

const web3 = new Web3(Web3.givenProvider|| "http://localhost:8080")
const contractAddr = '0x08106e01F94402DF79199eE9fb339540a243C79B';
const SimpleContract = new web3.eth.Contract(regalMinter, contractAddr);

const NftMinter = () => {
    const [number, setNumber] = useState(0);
    const [getNumber, setGetNumber] = useState('0x00');

    useEffect(() => {
      console.log(SimpleContract.methods)
    },[])

    const handleGet = async (e) => {
      e.preventDefault();
      const result = await SimpleContract.methods.get().call();
      setGetNumber(result);
      console.log(result);
    }

    const handleSet = async (e) => {
      e.preventDefault();    
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const gas = await SimpleContract.methods.set(number).estimateGas();
      const result = await SimpleContract.methods.set(number).send({
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