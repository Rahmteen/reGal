//Modules
import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
//Components
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import MetaMaskIcon from '../../../assets/images/metamask.svg'
import WalletConnectIcon from '../../../assets/walletconnect.svg'




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
          <Container fluid>
            <Row>
              <Col>
                <MetaMaskIcon/>
                {" "}
                <Button variant="dark" size="lg" block onClick={metaMaskConnect}>
                  MetaMask
                </Button>
              </Col>
            </Row>
            <Row>
            <Col>
              <WalletConnectIcon/>
                {" "}
                <Button variant="dark" size="lg" block onClick={walletConnect}>
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConnectWallet;
