//Modules
import React, { useState, Fragment, useContext, useEffect } from "react";
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

import UserStore from "../../Stores/UserStore";

const Explore = (web3) => {
  const userStore = useContext(UserStore);
  const { loadUser, user } = userStore;
  const [connected, setConnected] = useState(false)
  const [show, setShow] = useState(false);

  // currently our set up for a secure request to the ethereum network and the 
  // user accounts that exist in the metamask wallet associated to the window
  useEffect(async ()  => {
    let userAddress
    if (window.ethereum) {
      await window.ethereum
      .request({ method: 'eth_accounts' })
      .then((res) => { userAddress = res; loadUser(userAddress[0])})
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      });
    }
    return;
  }, []);
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

  return (
    <div className="gradiant-background">
      <Parallax className="" y={[-5, 10]} x={[0, 0]} tagOuter="figure" key={'parallax-outer'}>
        <Container className="nft-container" key={'container-explore'}>
        
          <Row className="live-activity-row mb-5 mt-3">
            {nfts.length &&
              nfts.map((nft, index) =>
                nft.featured === true ? (
                  <Fragment key={'fragment-featured'}>
                    <Col className="featured-nft-explore mb-2" lg={6} key={index + '_nft-featured'}>
                    <Parallax className="" y={[10, -10]} x={[0, 0]} tagOuter="figure" key={index + '_parallax-featured'}>
                      <div style={{ position: "relative" }} key={index + 'feat-div'}>
                        <CornerRibbon
                          key={index + '_feat-ribbon'}
                          position="top-right"
                          fontColor="white"
                          backgroundColor="orange"
                        >
                          Featured
                        </CornerRibbon>
                        <NftDisplay
                          key={index + '_nft-feat'}
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
                    
                    <Col lg={3} className="mb-5" key={index + '_feat-col'}>
                    <Parallax className="" y={[10, -15]} x={[0, 0]} tagOuter="figure" key={index + '_feat-col-parallax'}>
                      <p className="text-white font-secondary animate__animated animate__fadeInDown" key={index + '_feat-p-1'}>@{nft.creator}</p>
                      <p className="text-white animate__animated animate__fadeInDown" key={index + '_feat-p-2'}>
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
                  <Col className="nft-explore mb-2" lg={4} md={6} md={12} key={index}>
                    <Parallax className="" y={[0, -5]} x={[0, 0]} tagOuter="figure" key={index + '_parallax'}>
                    <CardGroup key={index + '_card'}>
                      <div style={{ position: "relative" }} key={index + 'div'}>
                        <CornerRibbon
                        key={index + '_ribbon'}
                          position="top-right"
                          fontColor="white"
                          backgroundColor={nft.previous ? "green" : "red"}
                        >
                          {nft.previous ? "first" : "hot"}
                        </CornerRibbon>
                        <NftDisplay
                          key={index + '_nft'}
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
