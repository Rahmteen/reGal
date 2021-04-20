import React, { useState, useEffect, useContext } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import UserStore from "../../Stores/UserStore";

import { particle_params } from './particle_params'
import ConnectWallet from '../../Components/ConnectWallet'
import { observer } from "mobx-react-lite";


const Landing = () => {
  const userStore = useContext(UserStore);
  const { loadUser, user } = userStore;
  const [connected, setConnected] = useState(false)
  const [show, setShow] = useState(false);


  useEffect(() => {
    loadUser
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="landingPage">
      <ConnectWallet
        show={show}
        handleClose={handleClose}
      />
      <Particles
        params={particle_params}
      />
      <div className="landing-block mx-auto text-center">
        <Row>
          <Col md={12}>
            <h1 className="text-white text-majesti">Regal</h1>
          </Col>
          <Col md={12} className="mb-3">
          <Button
            className="btn btn-light text-majesti enableEthereumButton"
            onClick={handleShow}
          >
            Connect
          </Button>
            {
              !window.ethereum.selectedAddress
              ? 
                <ConnectWallet handleClose={handleClose} show={show}/> 
              : null
            }
          </Col>
          <Col md={12}>
            <Link
              className="btn btn-light text-majesti rainbow-btn"
              to="/explore"
            >
              Explore
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default observer(Landing);
