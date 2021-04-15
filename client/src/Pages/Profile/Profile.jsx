//Modules
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
//Contracts
import { regalMinter } from '../../Abi/regalMinter_abi';
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
        title: "Backbone"
    },
    {
        id: 2,
        image: demo2,
        likes: 109,
        comments: 56,
        title: "OTXHello"
    },
    {
        id: 3,
        image: demo3,
        likes: 89,
        comments: 17,
        title: "Spaceman"
    },
    {
        id: 4,
        image: demo4,
        likes: 211,
        comments: 24,
        title: "Grooves"
    },
    {
        id: 5,
        image: demo5,
        likes: 32,
        comments: 10,
        title: "Pixel Monkey"
    },
    {
        id: 6,
        image: demo6,
        likes: 49,
        comments: 16,
        title: "Martian"
    },
  ]
}

const NftMinter = () => {
    const [
      {
        nfts
      }, 
      setState
    ] = useState(initialState)
    

    useEffect(() => {
      //console.log(SimpleContract.methods)
    },[])

    return (
      <Container fluid>
        <Row className="user-profile-data">
          <Col md={12}>
            {/* Image will be used in the future..using default circle for testing */}
            <div className="user-profile-image mx-auto"></div>
            {/* <Image fluid className="user-profile-image" src={}/> */}
          </Col>
          <Col md={12} className="text-center mt-3">
            <span className="text-majesti text-white user-profile-name">@deffiedeff</span>
          </Col>
          <Col md={12} className="text-center mt-1">
            <span className="text-primary">0xBb...04b8</span>
          </Col>
          <Col md={6} className="offset-md-3 mt-4">
            <p className="pr-5 pl-5 text-center text-white user-profile-bio">This is a bio for this artist. They have the ability to customize this text box up to three lines.</p>
          </Col>
        </Row>
        <Row>
          {
            nfts.length && nfts.map( (nft, index) => (
              <Col md={4} sm={6} key={index} className="mb-5">
                <Image src={nft.image} fluid />
              </Col>
            ))
          }
        </Row>
      </Container>
    );
}

export default NftMinter;