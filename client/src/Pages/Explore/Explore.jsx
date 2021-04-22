//Modules
import React, { useState, Fragment } from "react";
import {
  Carousel,
  Col,
  Container,
  Image,
  Jumbotron,
  Row,
  Button,
} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
//Components
import NftDisplay from "../../Components/NftDisplay/NftDisplay";
//Media
import Tour from "../../../assets/images/turn.png";

import sampleVid from "../../../assets/images/BMWEEE.mp4";
import cube from "../../../assets/images/Cubegif.gif";
import footerImg from "../../../assets/images/b4footer.png";
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
      bid: 4,
      title: "velociraptor",
      creator: "deffie",
      date_mint: "02/01/2021",
      current: 1.3,
      previous: 1.0,
    },
    {
      id: 2,
      image: demo2,
      likes: 109,
      comments: 56,
      bid: 27,
      title: "dilip",
      creator: "lucidmonday",
      date_mint: "01/17/2021",
      current: 4.32,
      previous: null,
    },
    {
      id: 3,
      image: demo3,
      likes: 89,
      comments: 17,
      bid: 2,
      title: "lateyear",
      creator: "othello",
      date_mint: "02/01/2021",
      current: 0.9,
      previous: 2.4,
    },
    {
      id: 4,
      image: demo4,
      likes: 211,
      comments: 24,
      bid: 3,
      title: "beeple",
      creator: "rahmteen",
      date_mint: "01/17/2021",
      current: 3.12,
      previous: null,
    },
    {
      id: 5,
      image: demo5,
      likes: 32,
      comments: 10,
      bid: 60,
      title: "princekong",
      creator: "cgYoda",
      date_mint: "02/01/2021",
      current: 1.3,
      previous: 1.0,
    },
    {
      id: 6,
      image: demo6,
      likes: 49,
      comments: 16,
      bid: 32,
      title: "deadspace",
      creator: "elon",
      date_mint: "01/17/2021",
      current: 10.92,
      previous: null,
    },
  ]);

  //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
  return (
    <div className="gradiant-background">

      <div className="scroll-container animate__animated animate__fadeOutDown pl-5 pt-5">
        <h2 className="scroll animate__animated animate__fadeInDown text-white h4">
          scroll <br />
          <i className="fas fa-angle-double-down pl-4"></i>
        </h2>
      </div>

      <Container className="about-container">
        <Parallax
          className="mb-5 mt-5"
          y={[0, 0]}
          tagOuter="figure"
        >
          <Row>
            <Col md={6} className="premium-col mt-2 pr-5 about-section">
              <p className="gradient premium text-white text-end">PREMIUM NFT MARKETPLACE</p>
              <h1 className="text-white mb-2">
                A platform
                <span className="d-block">for artists</span>
                <span className="d-block">by artists</span>
              </h1>
              <Button className="btn-regal float-right">apply</Button>
            </Col>
            <Col md={6} className="tournament-col mt-5 pl-5 about-section">
              <p className="regal text-white text-start mt-5 pr-3">
                Regal was founded to <br />
                <span style={{ color: "#ed7779" }}>
                  disrupt the power imbalances <br />
                </span>{" "}
                that exist in the art industry today. 
              </p>
            </Col>
          </Row>
        </Parallax>
      </Container>

      <Parallax
        className="mb-5 mt-5 mb-5"
        y={[30, 0]}
        x={[20, 10]}
        tagOuter="figure"
      >
        <Row>
          <Col md={4}>
            <h1 className="gradient premium text-start pt-1">
              INTRODUCING TOURNAMENTS
            </h1>
            <br />
            <h2 className="tour-section text-white text-start">
              Compete with your art <br />
              Show the world your creations
              <br />
              Collect unique, curated pieces
            </h2>
            <div className="text-start">
              <Button className="btn-regal">learn more</Button>
            </div>
          </Col>
          <Col md={8} className="text-center">
              <Image src={Tour} width="50%" />
          </Col>
        </Row>
      </Parallax>


      <Container className="display-container">
          <Parallax
            className="featured-parallax mt-3 mb-2"
            y={[10, 0]}
            x={[-10, 5]}
            tagOuter="figure"
          >
            <span className="featured-header text-white">FEATURED</span>
            <Jumbotron style={{ position: "relative" }}>
              <div className="video-overlay">
                <div className="d-block mb-1">
                  <span className="overlay-text">Current Bid: </span>
                  <span className="overlay-values text-primary">
                    1.02ETH
                  </span>
                </div>
                <div className="d-block mb-1">
                  <span className="overlay-text">Author: </span>
                  <span className="overlay-values text-primary">
                    Deffie Perry x Rahmteen
                  </span>
                </div>
                <div className="d-block mb-1">
                  <Link
                    className="overlay-values text-secondary"
                    to="/test"
                  >
                    Place A Bid
                  </Link>
                </div>
              </div>
              <video id="feature-video" loop playsInline autoPlay muted>
                <source src={sampleVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Jumbotron>
          </Parallax>
          {/* <Row className="h3 text-white text-center">Featured Collectable</Row> */}
          <Parallax y={[20, -20]} tagOuter="figure">
            <Row>
              <Col className="h6 text-white mb-4" md={12}>
                <div className="text-start text-majesti live">
                  Live Activity
                </div>
                <div
                  className="pb-2 text-end"
                  style={{
                    borderBottom: "solid 1px white",
                    borderColor: "#ac676a",
                  }}
                >
                  view all
                </div>
              </Col>
            </Row>
            {/* </Parallax> */}
            {/* <Parallax className="custom-class" y={[-10, 5]} tagOuter="figure"> */}
            <Row className="pb-5">
              {nfts.length &&
                nfts.map((nft, index) => (
                  <Col md={4} sm={6} key={index} className="mb-3">
                    <NftDisplay
                      likes={nft.like}
                      comments={nft.comments}
                      image={nft.image}
                      id={nft.id}
                      bid={nft.bid}
                      title={nft.title}
                      creator={nft.creator}
                      date_mint={nft.date_mint}
                      current={nft.current}
                      previous={nft.previous}
                    />
                  </Col>
                ))}
            </Row>
          </Parallax>
      </Container>
    </div>

  );
};

export default observer(Explore);

{
  /* <Row className="mb-5 pb-5">
          <Col md={4} className="ml-auto mr-auto mt-5 mb-5 text-center pb-5">
            <div className="footer-cube-text">
              <img id="cube-gif" src={cube} />
              <div className="cube-overlay-text">
                <p className="h3 text-white text-center">$69,420</p>
                <p className="h6 text-white text-center">
                  TOTAL VALUE ($USD) PAID TO ARTISTS
                </p>
              </div>
            </div>
          </Col>
        </Row> */
}
