//Modules
import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Form,
  Button,
  FormFile,
} from "react-bootstrap";
import MetaMask from "../../../assets/images/metamask.svg";
import { Link } from "react-router-dom";
import WalletSupport from "../../Components/WalletSupport/WalletSupport";
import Web3 from "web3";

const SignUp = () => {

  const [steps, setSteps] = useState(0)

  const forward = () => {
    let change = steps;
    change++;
    setSteps(change)
  }

  const back = () => {
    let change = steps;
    change--;
    setSteps(change)
  }


  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      return forward;
    }
    return false;
  }

  useEffect(() => {
    //console.log(SimpleContract.methods)
  }, []);

  return (
    <div className="signup-container">
      {/* CONTAINER FOR STEP 1 => CONNECT WALLET */}
      {steps === 0 ? 
      <Container className="connect-1 pt-3">
        <Row>
          <Col
            className="text-white font-primary text-center mb-2 pb-2 pt-3"
            md={12}
            lg={12}
          >
            {/* <span>CONNECT WALLET</span> */}
          </Col>
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
              <Button className="btn-regal h3 mt-5 mb-2" onClick={() => forward()}>Sign Up</Button>
            </Col>
          </Col>
          <Col className="text-center mt-3" lg={12}>
            <WalletSupport/>
          </Col>
        </Row>
      </Container> : null}
      {steps === 1 ? <Container>
      <Row>
          <Col
            className="text-white font-primary text-center mb-2 pb-2 pt-3"
            md={12}
            lg={12}
          >
            <span>CONNECT WALLET</span>
          </Col>
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
              <Button className="btn-regal h3 mt-5 mb-2" onClick={ethEnabled}>Sign Up</Button>
            </Col>
          </Col>
          <Col className="text-center mt-3" lg={12}>
            <WalletSupport/>
          </Col>
        </Row>
      </Container> : null} 
    </div>
  );
};

export default SignUp;
