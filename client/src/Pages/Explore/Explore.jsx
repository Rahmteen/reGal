//Modules
import React, { useState, Fragment } from "react";
import {
  Carousel,
  Col,
  Container,
  Image,
  Jumbotron,
  Row,
} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
//Components
import NftDisplay from "../../Components/NftDisplay/NftDisplay";
//Media
import sampleVid from "../../../assets/images/BMWEEER.mp4";
import demo from "../../../assets/images/demo-art.jpeg";
import demo2 from "../../../assets/images/nft-1.jpg";
import demo3 from "../../../assets/images/nft-2.jpg";
import demo4 from "../../../assets/images/nft-3.jpg";
import demo5 from "../../../assets/images/nft-5.jpg";
import demo6 from "../../../assets/images/nft-6.jpg";

const Explore = () => {
  //Sample data for testing will be set dynamically in the future;
  //Statically set for testing purposes only;
  const [nfts, setNfts] = useState([
    {
      id: 1,
      image: demo,
      likes: 27,
      comments: 8,
    },
    {
      id: 2,
      image: demo2,
      likes: 109,
      comments: 56,
    },
    {
      id: 3,
      image: demo3,
      likes: 89,
      comments: 17,
    },
    {
      id: 4,
      image: demo4,
      likes: 211,
      comments: 24,
    },
    {
      id: 5,
      image: demo5,
      likes: 32,
      comments: 10,
    },
    {
      id: 6,
      image: demo6,
      likes: 49,
      comments: 16,
    },
  ]);

  //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
  return (
    <Fragment>
      <Jumbotron style={{ position: "relative" }}>
        <div className="video-overlay">
          <div className="d-block mb-1">
            <span className="overlay-text">Current Bid: </span>
            <span className="overlay-values text-primary">1.02ETH</span>
          </div>
          <div className="d-block mb-1">
            <span className="overlay-text">Author: </span>
            <span className="overlay-values text-primary">
              Deffie Perry x Rahmteen
            </span>
          </div>
          <div className="d-block mb-1">
            <Link className="overlay-values text-secondary" to="/test">
              Place A Bid
            </Link>
          </div>
        </div>
        {/* <h1 className="overlay-text text-majesti">Featured</h1> */}
        <video id="feature-video" loop autoPlay muted>
          <source src={sampleVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Jumbotron>
      <Container fluid>
        <Row>
          {nfts.length &&
            nfts.map((nft, index) => (
              <Col md={4} sm={6} key={index} className="mb-5">
                <Image src={nft.image} fluid />
              </Col>
            ))}
        </Row>
        <Row>
          <Col md={12} className="mt-5 mb-5 text-center">
            <p className="text-white about-section">
              Regal was founded to{" "}
              <span className="text-primary">disrupt the power imbalances</span>{" "}
              that exist in the art industry today. We do not take a cut from
              your work, and{" "}
              <span className="text-primary">we never will.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default observer(Explore);
