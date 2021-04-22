//Modules
import React from "react";
import { Button, Modal, Container, Row, Col, Image } from "react-bootstrap";
//Components
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import MetaMaskIcon from "../../../assets/images/metamask.svg";
import WalletConnectIcon from "../../../assets/images/walletconnect.svg";
import SignIn from "../../../assets/images/sign-in.png"

let web3 = new Web3(Web3.givenProvider);
const provider = new WalletConnectProvider({
  // default, not my 
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

const ConnectWallet = ({show, handleClose}) => {

  const walletConnect = async () => {
    await provider.enable();
  };

  const metaMaskConnect = async () => {
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => console.log(result))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row style={{ alignItems: "baseline" }}>
              <Col>
                <Image src={MetaMaskIcon} rounded style={{ width: "35%" }}/>{" "}
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  block
                  onClick={metaMaskConnect}
                >
                  MetaMask
                </Button>
              </Col>
            </Row>
            <Row className='pt-3'></Row>
            <Row style={{ alignItems: "baseline" }}>
              <Col>
                <Image
                  src={WalletConnectIcon}
                  rounded
                  style={{ width: "35%" }}
                />{" "}
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  block
                  onClick={walletConnect}
                >
                  WalletConnect
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default ConnectWallet;
