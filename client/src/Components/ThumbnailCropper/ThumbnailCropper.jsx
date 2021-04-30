//Modules
import React, { Fragment, useEffect, useState, useCallback } from "react";
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
import ipfs from "../../ipfs";
var Buffer = require("buffer/").Buffer;
import ReactCrop from 'react-image-crop';
// To render with fixed dimensions:

const ThumbnailCropper = () => {
  const [show, setShow] = useState(false);
  const [cropped, setCropped] = useState(false);
  const [uploaded, setUploaded] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userChanges, setUserChanges] = useState({
    profile_image: "",
    bio: "",
    display_name: "",
  });

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => uploadToIPFS(reader);
  };

  const uploadToIPFS = async (reader) => {
    const buffer = await Buffer.from(reader.result);
    const result = await ipfs.add(buffer);
    const ipfsLink = "https://gateway.ipfs.io/ipfs/" + result.path;
    console.log(ipfsLink);
    let userChange = userChanges;
    setUserChanges({
      ...userChange,
      profile_image: ipfsLink,
    });
  };
  const [crop, setCrop] = useState({ aspect: 1/1, width: 200 })

  return (
    <Fragment>
      <Button className="upload-button mt-n5" onClick={handleShow}>
        <i className="text-white fas fa-upload h5"></i>
      </Button>

      <Modal className="thumbnail-modal" centered={true} size={"md"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Image (max 4mb) </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.File
                onChange={(file) => handleFileUpload(file.target.files[0])}
              ></Form.File>
          </Form>
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

export default ThumbnailCropper;
