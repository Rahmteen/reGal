//Modules
import React, { useState } from "react";
import { Button, Modal, Container, Row, Col, Image } from "react-bootstrap";
//Components
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import MetaMaskIcon from "../../../assets/images/metamask.svg";
import WalletConnectIcon from "../../../assets/images/walletconnect.svg";

let web3 = new Web3(Web3.givenProvider);
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

const ConnectWallet = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Button
        className="btn btn-light text-majesti enableEthereumButton"
        onClick={handleShow}
      >
        Connect
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row style={{ alignItems: "baseline" }}>
              <Col>
                <Image src={MetaMaskIcon} rounded style={{ width: "35%" }} />{" "}
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
            <Row fluid style={{ paddingTop: "20px" }}></Row>
            <Row style={{ alignItems: "baseline" }}>
              <Col>
                <Image
                  src={WalletConnectIcon}
                  rounded
                  fluid
                  style={{ width: "35%" }}
                />{" "}
              </Col>
              <Col>
                <Button
                  variant="outline-dark"
                  size="lg"
                  block
                  onClick={walletConnect}
                  fluid
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
    </>
  );
};

export default ConnectWallet;
