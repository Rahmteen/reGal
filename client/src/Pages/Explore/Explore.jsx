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
  CardGroup,
} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import CornerRibbon from "react-corner-ribbon";
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
      featured: true,
    },
  ]);

  //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
  return (
    /* SCROLL ANIMATION */
    <div className="gradiant-background">
      {/* <div className="scroll-container animate__animated animate__fadeOutDown pl-5 pt-5">
        <h2 className="scroll animate__animated animate__fadeInDown text-white h4">
          scroll <br />
          <i className="fas fa-angle-double-down pl-4"></i>
        </h2>
      </div> */}
      <Parallax className="" y={[10, -10]} x={[0, 0]} tagOuter="figure">
        <Container className="nft-container">
        <Row>
        <Col lg={6} className="artist-cube text-end">
            <p className="gradient premium text-white text-start font-secondary live-activity pb-2">
              LIVE ACTIVITY
            </p>
          </Col>
          </Row> 
          <Row className="live-activity-row">
            {nfts.length &&
              nfts.map((nft, index) =>
                nft.featured === true ? (
                  <Col className="featured-nft-explore mb-3" lg={8}>
                    <div style={{ position: "relative" }}>
                      <CornerRibbon
                        position="top-right"
                        fontColor="white"
                        backgroundColor="orange"
                      >
                        Featured
                      </CornerRibbon>
                      <NftDisplay
                        likes={nft.likes}
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
                    </div>
                  </Col>
                ) : null
              )}
            
   
            <Col lg={4} md={8} sm={12} className="">
            <Parallax className="" y={[-30, 20]} x={[1, -1]} tagOuter="figure">   
            <div className="footer-cube-text pb-5 text-center ">
              <img id="cube-gif" className=" mb-n5 " src={cube}/>
              <div className="cube-overlay-text text-center">
                <p className="h3 text-white ">$69,420</p>
                <p className="h6 text-white ">
                  TOTAL VALUE ($USD) PAID TO ARTISTS
                </p>
              </div>
            </div>
            </Parallax>
          </Col>
               
              </Row>
              <Row>
            {nfts.length &&
              nfts.map((nft, index) =>
                nft.featured !== true ? (
                  <Col className="nft-explore mb-3" lg={4}>
                    <CardGroup>
                      <div style={{ position: "relative" }}>
                        <CornerRibbon
                          position="top-right"
                          fontColor="white"
                          backgroundColor={nft.previous ? "green" : "red"}
                        >
                          {nft.previous ? "first" : "hot"}
                        </CornerRibbon>
                        <NftDisplay
                          likes={nft.likes}
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
                      </div>
                    </CardGroup>
                  </Col>
                ) : null
              )}
          </Row>
        </Container>

      </Parallax>

    </div>
  );
};

export default observer(Explore);
