import React, { useEffect, useState, Fragment, useContext } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserStore from "../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import ipfs from "../../ipfs";
var Buffer = require("buffer/").Buffer;

const ProfileEdit = () => {
  const userStore = useContext(UserStore);
  const { loadUser, user, loadingInitial } = userStore;

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

  useEffect(() => {
    loadUser(window.ethereum.selectedAddress)
  }, [])

  return (
    <Container className="profile-edit-container">
    
      <Row className="justify-content-center nft-display-rows pb-5 mb-5 mt-5">
      <Form>
      
        <Col md={4} lg={4}>
        <Form.Group controlId="formBasicEmail">
          <Col md={6} className="">
            <div className="user-profile-image "></div>
            <Button className="upload-button mt-n5">
              <i className="text-start text-white fas fa-upload"></i>
            </Button>
          </Col>
          </Form.Group>
          <Col md={6} className=" mt-3">
            <span className="text-majesti text-white user-profile-name font-secondary">
              {user ? "@" + user.display_name : "@displayname"}
            </span>
          </Col>
          <Col md={6} className="mt-1">
            <span className="text-primary font-secondary">
              {user
                ? user.wallet_id.slice(0, 3) + "..." + user.wallet_id.slice(-3)
                : null}
            </span>
          </Col>
          <Col md={6} className="mt-4">
            <p className="text-start text-white user-profile-bio">
              Artist Bio...
            </p>
          </Col>
        </Col>
        </Form>
      </Row>
      
    </Container>
  );
};

export default observer(ProfileEdit);
