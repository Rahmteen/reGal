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
      ending: "29 Apr, 2021 12:00:00 PST",
      ended: false
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
      ending: "1 May, 2021 06:00:00 PST",
      ended: false
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
      ending: "24 Apr, 2021 12:00:00 PST",
      ended: true
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
      ending: "2 May, 2021 18:00:00 PST",
      ended: false
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
      ending: "5 May, 2021 06:00:00 PST",
      ended: false
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
      ending: "27 Apr, 2021 12:00:00 PST",
      ended: false
    },
  ]);

  // does metamask exist?
  // has the user connected? check the selected addresses if so
  // 
  // do a request to our db, and check to see if the address is registered.


  //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
  return (
    <div className="gradiant-background">
      <Parallax className="" y={[-5, 10]} x={[0, 0]} tagOuter="figure">
        <Container className="nft-container">
        
          <Row className="live-activity-row mb-5 mt-3">
            {nfts.length &&
              nfts.map((nft, index) =>
                nft.featured === true ? (
                  <Fragment>
                    <Col className="featured-nft-explore mb-2" lg={6}>
                    <Parallax className="" y={[10, -10]} x={[0, 0]} tagOuter="figure">
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
                          ending={nft.ending}
                          ended={nft.ending}
                        />
                      </div>
                      </Parallax>
                    </Col>
                    
                    <Col lg={3} className="mb-5">
                    <Parallax className="" y={[10, -15]} x={[0, 0]} tagOuter="figure">
                      <p className="text-white font-secondary animate__animated animate__fadeInDown">@{nft.creator}</p>
                      <p className="text-white animate__animated animate__fadeInDown">
                     {nft.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolorinreprehenderitin voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, suntin culpa qui officia deserunt mollitanim id est laborum."}
                      </p>
                      </Parallax>
                    </Col>
                    
                  </Fragment>
                ) : null
              )}
              
            <Row>
              <Col lg={6} className="artist-cube text-end mb-3 mt-3">
                <p className="gradient premium text-white text-start font-primary live-activity pb-2">
                  LIVE ACTIVITY
                </p>
              </Col>
            </Row>
            {nfts.length &&
              nfts.map((nft, index) =>
                nft.featured !== true ? (
                  <Col className="nft-explore mb-2" lg={4} md={6} md={12}>
                    <Parallax className="" y={[0, -5]} x={[0, 0]} tagOuter="figure">
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
                          ending={nft.ending}
                          ended={nft.ending}
                        />
                        
                      </div>
                    </CardGroup>
                    </Parallax>
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
