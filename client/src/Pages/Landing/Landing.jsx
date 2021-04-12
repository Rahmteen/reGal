//Modules
import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Landing = () => {
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
    //checks for small window and reduces particle count
    if (window.matchMedia("screen and (max-width: 500px)").matches) {
      setParticleCount(10);
    }
  }, []);

  // functionality to connect wallet on the user window when "logging into" the site.
  // const connectWallet = async () => {
  //   accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //   userAddressHandler(accounts[0]);
  //   return setWeb3Auth(!web3Auth);
  // };

  return (
    <div id="landingPage">
      <Particles
        params={{
          particles: {
            number: {
              value: 250,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#ffffff",
              },
              image: {
                src: "#",
                width: 0,
                height: 0,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
            },
            size: {
              value: 1,
              random: true,
              anim: { enable: false, speed: 1, size_min: 0.3, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: .1,
              direction: "bottom",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: true,
              attract: { enable: false, rotateX: 700, rotateY: 700 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 400,
                size: 1,
                duration: 2,
                opacity: 0,
                speed: .5,
              },
              grab: { distance: 400 },
              repulse: { distance: 20, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="landing-block mx-auto text-center">
        <Row>
          <Col md={12}>
            <h1 className="text-white text-majesti">Regal</h1>
          </Col>
          <Col md={12} className="mb-3">
            <Link
              className="btn btn-light text-majesti enableEthereumButton"
              to=""
            >
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
