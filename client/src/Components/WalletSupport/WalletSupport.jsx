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

      <Modal centered={true} size={'xl'} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wallet FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>What is a wallet?</h4>
          <p>Our transactions are made on the blockchain. A wallet will allow you to store and spend cryptocurrency.</p>
          <h4>Why do I need one?</h4>
          <p>Your wallet is your username and password and will automatically log you into Regal.</p>
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
