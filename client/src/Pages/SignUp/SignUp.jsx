//Modules
import React, { useEffect, useState, Fragment, useContext } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Form,
  Button,
  Modal,
  FormFile,
} from "react-bootstrap";
import MetaMask from "../../../assets/images/metamask.svg";
import { Link, Redirect } from "react-router-dom";
import WalletSupport from "../../Components/WalletSupport/WalletSupport";
import Web3 from "web3";
import UserStore from "../../Stores/UserStore";

const SignUp = () => {
  // CONTEXT FOR STATE MGMT/REST API
  const userStore = useContext(UserStore);
  const { createUser, user } = userStore;

  // STATE FOR USER SIGNUP DATA
  const [userData, setUserData] = useState({});
  const [registered, setRegistered] = useState(false);

  // FUNCTION FOR CREATING USER
  // **************************************************
  const createProfile = (e) => {
    // BASIC ERROR HANDLING
    e.preventDefault();
    if (!window.ethereum) {
      return "MetaMask Error";
    }
    if (!userData) {
      return "Registration Error";
    }
    if (!userData.wallet_id) {
      return "Wallet Connection Error";
    }
    if (!userData.email_address) {
      return "Invalid Email Error";
    }

    createUser(userData)
      .then((res) => {
        console.log(res);
        setRegistered(true)
        handleClose();
      })
      .catch((error) => console.log(error));
  };
  // **************************************************

  // FUNCTIONS FOR HANDLING MODAL VIEW FOR SIGN UP
  // **************************************************
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // **************************************************

  // FUNCTIONS FOR CONNECTING METAMASK WITH JSON RPC
  // **************************************************
  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum
        .send("eth_requestAccounts")
        .then((res) => {
          setUserData({
            wallet_id: res.result[0],
            display_name: res.result[0],
            email_list: false,
          });
          return handleShow();
        })
        .catch((error) => console.log(error));
    }
  };
  // **************************************************

  // FUNCTIONS FOR UPDATING STATE FOR USER REGISTRATION
  // **************************************************
  const handleEmail = (e) => {
    e.preventDefault();
    let previousState = userData;
    setUserData({ ...previousState, email_address: e.target.value });
  };

  const handleDisplayName = (e) => {
    e.preventDefault();
    let previousState = userData;
    setUserData({ ...previousState, display_name: e.target.value });
  };
  const handleEmailList = () => {
    let previousState = userData;
    let emailList = userData.email_list;
    setUserData({ ...previousState, email_list: !emailList });
  };
  // *****************************************************

  return (
    <div className="signup-container">
      <Container className="connect-1 pt-3">
        {/* SETS UP REDIRECT WHEN REGISTRATION IS FINISHED */}
        {registered ? <Redirect to="/profile"/> : null}
        <Row>
          <Col
            className="text-white font-primary text-center mb-2 pb-2 pt-3"
            md={12}
            lg={12}
          ></Col>
        </Row>
        <Row>
          <Col className="text-center" lg={12}>
            <Col>
              <Image
                className="metamask-logo text-center"
                src={MetaMask}
                width="5%"
              ></Image>
            </Col>
            <Col>
              <Button className="btn-regal mt-4" onClick={() => ethEnabled()}>
                Sign Up
              </Button>
            </Col>
          </Col>
          <Col className="text-center mt-3" lg={12}>
            <WalletSupport />
          </Col>
        </Row>
      </Container>
      <Fragment>
        <Modal
          backdrop="static"
          centered={true}
          size={"md"}
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {userData.wallet_id ? (
              <Fragment>
                <span className="h6 text-green">
                  Connected {"  "} <i className="fas fa-check text-green"></i>
                </span>
                <p>{userData.wallet_id} </p>
              </Fragment>
            ) : (
              <Fragment>
                <span className="h6 text-red">
                  Not Connected {"  "} <i className="far fa-times-circle "></i>
                </span>
              </Fragment>
            )}
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="h6">Display Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => handleDisplayName(e)}
                  placeholder={
                    userData.wallet_id
                      ? userData.wallet_id.slice(0, 3) +
                        "..." +
                        userData.wallet_id.slice(-3)
                      : null
                  }
                />
                <Form.Text className="text-muted">
                  This will default to your wallet address if left empty. (You
                  can always change it later!)
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="h6">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ebachman@pp.com"
                  onChange={(e) => handleEmail(e)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  onClick={handleEmailList}
                  type="checkbox"
                  label="Stay updated with our newsletter"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => createProfile(e)}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Fragment>
    </div>
  );
};

export default SignUp;
