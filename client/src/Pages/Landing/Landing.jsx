//Modules
import React, { useState, useEffect, useContext } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import UserStore from "../../Stores/UserStore";
import { particle_params } from './particle_params'
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // Required
});

const Landing = () => {
  const userStore = useContext(UserStore);
  const { loadUser } = userStore;
  useEffect(() => {
  }, []);
  const connectWallet = async () => {
  };
  
  return (
    <div id="landingPage">
      <Particles
        params={particle_params}
      />
      <div className="landing-block mx-auto text-center">
        <Row>
          <Col md={12}>
            <h1 className="text-white text-majesti">Regal</h1>
          </Col>
          <Col md={12} className="mb-3">
            <Link
              className="btn btn-light text-majesti enableEthereumButton"
              onClick={connectWallet}
              to=""
            >
              {/* Set up link to profile creation */}
              Connect
            </Link>
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

export default Landing;
