//Modules
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
} from "react-bootstrap";
import Web3 from "web3";
import ipfs from "../../ipfs";
var Buffer = require("buffer/").Buffer;

//Contracts
import { regalMinter } from "../../Minter/regalMinter_abi";

const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
const contractAddr = "0x7c449e8777A37Ec5F7B4F936593C18931917f526";
const regalMinterContract = new web3.eth.Contract(regalMinter, contractAddr);

const initialState = {
  nftName: "",
  nftArtist: "@artistName",
  nftDescription: "",
  nftRawFile: null,
  nftThumbnail: null,
  nftLink: null,
};



const NftMinter = () => {
  const [
    { nftName, nftArtist, nftDescription, nftRawFile, nftThumbnail },
    setState,
  ] = useState(initialState);

  const [renderInput, setRenderInput] = useState([<div key={"empty"}></div>]);

  useEffect(() => {
    console.log(initialState);
  }, []);

  const validateMint = () => {
    if (nftName && nftArtist && nftDescription && nftRawFile && nftThumbnail) {
      return true;
    }
    return false;
  };

  const handleMint = async () => {
    
    const result = await regalMinterContract.methods
      .uploadNFT(nftThumbnail, nftName, nftDescription,)
      .send({ from: '0x0f17dC202D879979b6017243d127F50B3C3075b5' });
    console.log(result);
  };

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleNftLink = (e) => {
    e.preventDefault();
    const value = e.target.value
    setState((prevState) => ({
      ...prevState,
      nftLink: value,
    }));
  }

  const handleRenderInput = (event, bool) => {
    event.preventDefault();
    console.log(bool);
    if (bool === true) {
      setRenderInput([
        <FormControl
          key={"input"}
          placeholder="https://www.dropbox.com/s/ymhg..."
          aria-label="https://www.dropbox.com/s/ymhg..."
          aria-describedby="basic-addon1"
          onChange={(e) => handleNftLink(e)}
        />,
      ]);
    } else setRenderInput([<div key={"empty"}></div>]);
  };

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => uploadToIPFS(reader);
  };

  const uploadToIPFS = async (reader) => {
    const buffer = await Buffer.from(reader.result);
    const result = await ipfs.add(buffer);
    const ipfsLink = "https://gateway.ipfs.io/ipfs/" + result.path;
    setState((prevState) => ({
      ...prevState,
      nftThumbnail: ipfsLink,
    }));
  };

  return (
    <Container>
      <Row className="user-profile-data">
        <Col md={12}>
          {/* Image will be used in the future..using default circle for testing */}
          <div className="user-profile-image mx-auto"></div>
          {/* <Image fluid className="user-profile-image" src={}/> */}
        </Col>
        <Col md={12} className="text-center mt-3">
          <span className="text-majesti text-white user-profile-name">
            @deffiedeff
          </span>
        </Col>
        <Col md={12} className="text-center mt-1">
          <span className="text-primary">0xBb...04b8</span>
        </Col>
        <Col md={6} className="offset-md-3 mt-4">
          <p className="pr-5 pl-5 text-center text-white user-profile-bio">
            This is a bio for this artist. They have the ability to customize
            this text box up to three lines.
          </p>
        </Col>
      </Row>
      <Row className="nft-upload-form justify-content-md-center">
        <Col md={12}>
          <div className="nft-upload-placeholder text-center mx-auto">
              {
                nftThumbnail && (
                  <Image
                    className="image-border-box my-auto"
                    loop="infinite"
                    src={nftThumbnail}
                    alt="Nft thumbnail preview"
                  />
                )
              }
          </div>
        </Col>
        <Col md={6} className="mt-4 md-offset-3 mx-auto">
          <Form>
            <Form.Group>
              <Form.Label className="text-white">Name*</Form.Label>
              <Form.Control
                type="text"
                name="nftName"
                placeholder="NFT Name"
                value={nftName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-white">Artist*</Form.Label>
              <Form.Control
                type="text"
                disabled={true}
                name="nftArtist"
                placeholder="@artistName"
                value={nftArtist}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-white">Description*</Form.Label>
              <Form.Control
                as="textarea"
                row={3}
                name="nftDescription"
                placeholder="NFT Description"
                value={nftDescription}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                className="text-primary"
                label="Upload raw file*"
                name="nftHash"
                onChange={(e) => handleFileUpload(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                className="text-primary"
                label="Upload thumbnail*"
                name="nftThumbnail"
                onChange={(e) => handleFileUpload(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-white">
                Provide Downloadable Link?
              </Form.Label>
              <div></div>
              <ToggleButtonGroup type="checkbox">
                <ToggleButton
                  variant="success"
                  size={"sm"}
                  value={true}
                  onClick={(e) => {
                    handleRenderInput(e, true);
                  }}
                >
                  Yes
                </ToggleButton>
                <ToggleButton
                  variant="danger"
                  size={"sm"}
                  onClick={(e) => {
                    handleRenderInput(e, false);
                  }}
                >
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Form.Group>
            <Form.Group>{renderInput}</Form.Group>
            <Form.Group className="text-center mt-5 mb-5">
              <Button
                className="mint-submit"
                onClick={handleMint}
                disabled={
                    nftName &&
                    nftArtist &&
                    nftDescription &&
                    nftThumbnail
                  ? false : true}
              >
                Mint
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NftMinter;
