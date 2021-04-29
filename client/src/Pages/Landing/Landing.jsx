import React, { useState, useEffect, useContext, Fragment } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import UserStore from "../../Stores/UserStore";

import { particle_params } from './particle_params'
import { observer } from "mobx-react-lite";


const Landing = () => {
  const userStore = useContext(UserStore);
  const { loadUser, user } = userStore;
  const [connected, setConnected] = useState(false)
  const [show, setShow] = useState(false);

  useEffect(async ()  => {
    //get wallet id
    //pass to load user
    loadUser();
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
            {
              !user
              ?
              <Fragment>
                <Button
                  className="btn btn-light text-majesti enableEthereumButton"
                  onClick={handleShow}
                >
                  Connect
                </Button>
              </Fragment>
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
