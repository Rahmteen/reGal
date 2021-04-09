//Modules
import React, { useState, Fragment } from 'react';
import { Carousel, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
//Components
import NftDisplay from '../../Components/NftDisplay/NftDisplay';
//Media
import sampleVid from "../../../assets/images/BMWEEER.mp4";
import demo from "../../../assets/images/demo-art.jpeg";

const Explore = () => {
    //Sample data for testing will be set dynamically in the future;
    //Statically set for testing purposes only;
    const [nfts, setNfts] = useState([
        {
            id: 1,
            image: demo,
            likes: 27,
            comments: 8
        },
        {
            id: 2,
            image: demo,
            likes: 109,
            comments: 56
        },
        {
            id: 3,
            image: demo,
            likes: 89,
            comments: 17
        },
        {
            id: 4,
            image: demo,
            likes: 211,
            comments: 24
        },
        {
            id: 5,
            image: demo,
            likes: 32,
            comments: 10
        },
        {
            id: 6,
            image: demo,
            likes: 49,
            comments: 16
        },
    ]);

    //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
    return (
        <Fragment>
            <Jumbotron style={{position: "relative"}}>
                <div className="video-overlay">
                    <div className="d-block mb-1">
                        <span className="overlay-text">Current Bid: </span>
                        <span className="overlay-values text-primary">1.02ETH</span>
                    </div>
                    <div className="d-block mb-1">
                        <span className="overlay-text">Author: </span>
                        <span className="overlay-values text-primary">Deffie Perry x Rahmteen</span> 
                    </div>
                    <div className="d-block mb-1">
                        <Link className="overlay-values text-secondary" to="/test">place a bid</Link>
                    </div>
                </div>
                {/* <h1 className="overlay-text text-majesti">Featured</h1> */}
                <video id="feature-video" loop autoPlay muted>
                    <source src={sampleVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Jumbotron>
            <Container fluid>
                <Carousel touch hover interval={9999999}>
                    {
                        nfts.map( (nft, i) => (
                            <Carousel.Item key={i}>
                                <NftDisplay likes={nft.likes} comments={nft.comments} image={nft.image} id={nft.id} />
                            </Carousel.Item>
                        ))
                    }
                </Carousel >
            </Container>
        
            
        </Fragment>
    )  
}

export default observer(Explore);