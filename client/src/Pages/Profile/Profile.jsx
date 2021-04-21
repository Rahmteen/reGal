//Modules
import React, { useEffect, useState, Fragment } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//Contracts
import ProfileNftDisplay from "../../Components/ProfileNftDisplay";
//Media
import demo from "../../../assets/images/demo-art.jpeg";
import demo2 from "../../../assets/images/nft-1.jpg";
import demo3 from "../../../assets/images/nft-2.jpg";
import demo4 from "../../../assets/images/nft-3.jpg";
import demo5 from "../../../assets/images/nft-5.jpg";
import demo6 from "../../../assets/images/nft-6.jpg";

const initialState = {
  nfts: [
    {
      id: 1,
      image: demo,
      likes: 27,
      comments: 8,
      title: "Backbone",
    },
    {
      id: 2,
      image: demo2,
      likes: 109,
      comments: 56,
      title: "OTXHello",
    },
    {
      id: 3,
      image: demo3,
      likes: 89,
      comments: 17,
      title: "Spaceman",
    },
    {
      id: 4,
      image: demo4,
      likes: 211,
      comments: 24,
      title: "Grooves",
    },
    {
      id: 5,
      image: demo5,
      likes: 32,
      comments: 10,
      title: "Pixel Monkey",
    },
    {
      id: 6,
      image: demo6,
      likes: 49,
      comments: 16,
      title: "Martian",
    },
  ],
};

const Profile = () => {
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
      creator: "lucid monday",
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
      title: "late year",
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
      title: "prince kong",
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
      title: "dead space",
      creator: "elon",
      date_mint: "01/17/2021",
      current: 10.92,
      previous: null,
    },
  ]);

  useEffect(() => {
    //console.log(SimpleContract.methods)
  }, []);

  return (
    <Fragment>
      <Container>
        <Row className="nft-display-rows pb-5 mb-5 mt-5">
          <Col md={4} lg={4}>
            <Col md={6}>
              {/* Image will be used in the future..using default circle for testing */}
              <div className="user-profile-image mx-auto"></div>
              {/* <Image fluid className="user-profile-image" src={}/> */}
            </Col>
            <Col md={6} className="text-center mt-3">
              <span className="text-majesti text-white user-profile-name">
                @deffiedeff
              </span>
            </Col>
            <Col md={6} className="text-center mt-1">
              <span className="text-primary">0xBb...04b8</span>
            </Col>
            <Col md={6} className="mt-4">
              <p className="text-start text-white user-profile-bio">
                This is a bio for this artist. They have the ability to
                customize this text box up to three lines.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <Link to="/minter">
                <Button className="btn-regal mt-2 mb-3">Mint</Button>
              </Link>
            </Col>
          </Col>
          <Col className="mt-5">
            <Col className="h1 gradient text-start">
              <i>FEATURED</i>
            </Col>
            <Col lg={12} md={12} className="profile-featured-nft">
              <ProfileNftDisplay
                likes={nfts[5].likes}
                comments={nfts[5].comments}
                image={nfts[5].image}
                id={nfts[5].id}
                bid={nfts[5].bid}
                title={nfts[5].title}
                creator={nfts[5].creator}
                date_mint={nfts[5].date_mint}
                current={nfts[5].current}
                previous={nfts[5].previous}
              />
            </Col>
          </Col>
        </Row>
        <Row className="mb-5">
          {nfts.length &&
            nfts.map((nfts, index) => (
              <Col lg={2} md={2} sm={12} key={index} className="mt-4">
                <ProfileNftDisplay
                  likes={nfts.likes}
                  comments={nfts.comments}
                  image={nfts.image}
                  id={nfts.id}
                  bid={nfts.bid}
                  title={nfts.title}
                  creator={nfts.creator}
                  date_mint={nfts.date_mint}
                  current={nfts.current}
                  previous={nfts.previous}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Profile;
