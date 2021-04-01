//Modules
import React, { useState, useContext, useEffect } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap';
//Stores
import { StateContext } from "../../Providers/StateProvider.jsx";
//CSS
import "./Landing.css";

const Landing = () => {
  const { userAddress, userAddressHandler } = useContext(StateContext);
  const [web3Auth, setWeb3Auth] = useState(false);
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
      //checks for small window and reduces particle count
    if(window.matchMedia('screen and (max-width: 500px)').matches) 
    {
      setParticleCount(10);
    }
  },[])

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
                    number:{
                        value: particleCount,
                        density:{
                            enable: false,
                            value_area: 0
                        }
                    },
                    color: {
                        value:"#ffffff"
                    },
                    shape: {
                        type: 'circle',
                        stroke: { 
                            width: 1,
                            color: "#fff"
                        },
                        image: {
                            src: "#",
                            width: 400,
                            height: 400
                        }
                    },
                    opacity: {
                        value: 0.9,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1.0557003759917487,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3.008530152163807,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 2.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 356.5,
                        color: "#ffffff",
                        opacity: 0.9,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6.206824121731046,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode:"grab"
                        },
                        onclick: {
                            enable: true,
                            mode:"push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 20,
                            duration: 2,
                            opacity:8,
                            speed: 3
                        },
                        repulse: {
                            distance: 125,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: { 
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }}
        />
        <div className="landing-block mx-auto text-center">
        <Row>
            <Col md={12}>
                <h1 className="text-white text-majesti">Regal</h1>
            </Col>
            <Col md={12} className="mb-3">
                <Link className="btn btn-light text-majesti" to="">Connect</Link>
            </Col>
            <Col md={12}>
                <Link className="btn btn-light text-majesti rainbow-btn" to="/explore" >Explore</Link>
            </Col>
        </Row>
        </div>
    </div>
  );
};

export default Landing;
