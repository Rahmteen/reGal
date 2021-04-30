import React, { useEffect, useState, Fragment, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Input,
  FormFile,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import UserStore from "../../Stores/UserStore";
import { observer } from "mobx-react-lite";
import ThumbnailCropper from "../../Components/ThumbnailCropper";

const ProfileEdit = () => {
  const userStore = useContext(UserStore);
  const { loadUser, user, loadingInitial } = userStore;

  useEffect(() => {
    loadUser(window.ethereum.selectedAddress);
  }, []);

  return (
    <Container className="profile-edit-container">
      <Row className="justify-content-center nft-display-rows pb-5 mb-5 mt-5">
        <Form className="profile-form">
          <Col md={4} lg={4}>
            <Form.Group controlId="formProfile">
              <Col md={12} className="">
                <div className="user-profile-image"></div>
                <ThumbnailCropper />
              </Col>
            </Form.Group>
            <Form.Group controlId="formProfile">
            <Col md={12} className=" mt-3">
              <span className="text-majesti text-white user-profile-name font-secondary">
                {user ? "@" + user.display_name : "@displayname"}
              </span>
            </Col>
            </Form.Group>
            <Form.Group>
            <Col md={12} className="mt-1">
              <span className="text-primary font-secondary">
                {user
                  ? user.wallet_id.slice(0, 3) +
                    "..." +
                    user.wallet_id.slice(-3)
                  : null}
              </span>
            </Col>
            </Form.Group>
            <Form.Group>
            <Col md={12} className="mt-4">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              <p className="text-start text-white user-profile-bio">
                Artist Bio...
              </p>
            </Col>
            </Form.Group>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default observer(ProfileEdit);
