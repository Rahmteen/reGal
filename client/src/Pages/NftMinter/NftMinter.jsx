//Modules
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Web3 from "web3";
import { regalMinter } from "../../Minter/regalMinter_abi";

const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
const contractAddr = "0xaA0eC25450C61E09ba34da304B47AC2e23C7db30";
const regalMinterContract = new web3.eth.Contract(regalMinter, contractAddr);

const NftMinter = () => {
  const [number, setNumber] = useState(0);
  const [ipfsUpload, setIpfsUpload] = useState('https://gateway.ipfs.io/ipfs/Qmau88PXLsH9PNjKRKNyGvmPiydbJv6Xff98LSoMckstoa');
  const [location, setLocation] = useState('');
  const [userAddress, setUserAddress] = useState("0x00");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const accounts = window.ethereum.enable();
  }, []);

  const handleName = async (e) => {
    e.preventDefault();
    let result = e.target.value;
    setName(result);
    console.log(result);
  };

  // const handleName = async (e) => {
  //   e.preventDefault();
  //   setIpfsUpload(result);
  // };

  const handleMint = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    // const gas = await regalMinterContract.methods.uploadNFT(ipfsUpload, name, location, description).estimateGas();
    // let result = await regalMinterContract.methods.uploadNFT(ipfsUpload, name, location, description).send({from: '0xF461A152De146B480cCE5B8fCbF6eC19DFC440A6'})
    // console.log(result)
    let result = await regalMinterContract.methods.getNFT(3).call()
    console.log(result)
    
  };

  return (
    <div className="form-flex">
      <button className="ipfs-upload-button"></button>
      <div className="mb-3 p-5">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>NFT NAME</Form.Label>
            <Form.Control type="textarea" placeholder="NFT NAME" onChange={(e) => handleName(e)}/>
          </Form.Group>
          <Form.Label>NFT PREVIEW FILE</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isValid />
            <Form.File.Label data-browse="Button text">
              1000 x 1000
            </Form.File.Label>
            {/* <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback> */}
          </Form.File>
          <br/>
          <br/>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>LOCATION</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>DESCRIPTION</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
      <Button onClick={handleMint}>MINT</Button>
    </div>
  );
};

export default NftMinter;
