//Modules
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Web3 from 'web3';
//Contracts
import { regalMinter } from '../../Minter/regalMinter_abi';

const web3 = new Web3(Web3.givenProvider|| "http://localhost:8080")
const contractAddr = '0x08106e01F94402DF79199eE9fb339540a243C79B';
const SimpleContract = new web3.eth.Contract(regalMinter, contractAddr);

const initialState = {
  nftName: "",
  nftArtist: "",
  nftPrice: "",
  nftDescription: "",
  nftFile: null,
  nftThumbnail: null
}

const NftMinter = () => {
    const [
      {
        nftName,
        nftArtist,
        nftPrice,
        nftDescription,
        nftFile,
        nftThumbnail
      }, 
      setState
    ] = useState(initialState)
    

    useEffect(() => {
      //console.log(SimpleContract.methods)
    },[])

    const handleInputChange = event => {
      let name = event.target.name;
      let value = event.target.value;
      setState( prevState => ({
        ...prevState,
        [name]: value
      }))
    }

    const handleFileChange = event => {
      let name = event.target.name;
      setState( prevState => ({
        ...prevState,
        [name]: event.target.files[0]
      }))
    }

    const handleFileUpload = () => {
      const formData = new FormData();

      formData.append(
        "nftFile",
        nftFile,
        nftFile.name
      )

      //upload file with data
    }

    //OLD - used for testing

    // const handleGet = async (e) => {
    //   e.preventDefault();
    //   const result = await NFTMintContract.methods.get().call();
    //   setGetNumber(result);
    //   console.log(result);
    // }

    // const handleSet = async (e) => {
    //   e.preventDefault();    
    //   const accounts = await window.ethereum.enable();
    //   const account = accounts[0];
    //   const gas = await SimpleContract.methods.set(number).estimateGas();
    //   const result = await SimpleContract.methods.set(number).send({
    //     from: account,
    //     gas 
    //   })
    //   console.log(result);
    // }

    return (
      <Container>
        <Row className="user-profile-data">
          <Col md={12}>
            {/* Image will be used in the future..using default circle for testing */}
            <div className="user-profile-image mx-auto"></div>
            {/* <Image fluid className="user-profile-image" src={}/> */}
          </Col>
          <Col md={12} className="text-center mt-3">
            <span className="text-majesti text-white user-profile-name">@deffiedeff</span>
          </Col>
          <Col md={12} className="text-center mt-1">
            <span className="text-primary">0xBb...04b8</span>
          </Col>
          <Col md={6} className="offset-md-3 mt-4">
            <p className="pr-5 pl-5 text-center text-white user-profile-bio">This is a bio for this artist. They have the ability to customize this text box up to three lines.</p>
          </Col>
        </Row>
        <Row className="nft-upload-form">
          <Col md={12}>
            <div className="nft-upload-placeholder text-center mx-auto">
              <span className="text-white place-holder-text">Placeholder</span>
            </div>
          </Col>
          <Col md={6} className="mt-4 md-offset-3 mx-auto">
            <Form>
              <Form.Group>
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control type="text" name="nftName" placeholder="NFT Name" value={nftName} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Artist</Form.Label>
                <Form.Control type="text" name="nftArtist" placeholder="NFT Artist" value={nftArtist} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Price</Form.Label>
                <Form.Control type="text" name="nftPrice" placeholder="NFT Price" value={nftPrice} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-white">Description</Form.Label>
                <Form.Control as="textarea" row={3} name="nftDescription" placeholder="NFT Description" value={nftDescription} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group>
                <Form.File className="text-primary" label="Upload raw file" name="nftFile" onChange={handleFileChange}/>
              </Form.Group>
              <Form.Group>
                <Form.File className="text-primary" label="Upload thumbnail" name="nftThumbnail" onChange={handleFileChange}/>
              </Form.Group>
              <Form.Group className="text-center mt-5 mb-5">
                <Button className="mint-submit">Mint</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
        // <div className="App">
        //   <header className="App-header">
        //     <form onSubmit={handleSet}>
        //       <label>
        //         Set Number:
        //         <input 
        //           type="text"
        //           name="name"
        //           value={number}
        //           onChange={ e => setNumber(e.target.value) } />
        //       </label>
        //       <input type="submit" value="Set Number" />
        //     </form>
        //     <br/>
        //     <button
        //       onClick={handleGet}
        //       type="button" > 
        //       Get Number 
        //     </button>
        //     { getNumber }
        //   </header>
        // </div>  
    );
}

export default NftMinter;