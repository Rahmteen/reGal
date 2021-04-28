//Modules
import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Form,
  Button,
  Modal,

} from "react-bootstrap";
import MetaMask from "../../../assets/images/metamask.svg";

// To render with fixed dimensions:

const WalletSupport = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button   className="btn-regal h4" onClick={handleShow}>
        ?
      </Button>

      <Modal centered={true} size={'md'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wallet FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>What is a wallet?</h4>
          <p>A wallet is basically a bank account that represents your money on the blockchain. You can use a wallet to interact with blockchain-based website and use cryptocurrency. </p>
          <h4>Why do I need one?</h4>
          <p>Each wallet has a unique number/id that represents you. This is how we will recognize you on our platform. Your wallet is very similar to logging to a platform with "Google, Facebook, etc..."</p>
          <h4>Is it free?</h4>
          <p>Yes, 100% free</p>
          <h4>What do I do?</h4>
          <p>Click the download button below and download the extension, refresh this page and you are all set!</p>
          <a href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank"><Button className="btn-regal-light">Download</Button></a>
          </Modal.Body>


        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default WalletSupport;
