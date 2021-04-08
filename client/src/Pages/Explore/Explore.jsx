//Modules
import React, { useState, Fragment } from 'react';
import { Carousel, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
//Media
import sampleVid from "../../../assets/images/BMWEEER.mp4";
import NftDisplay from '../../Components/NftDisplay/NftDisplay';

const Explore = () => {
    //Sample data for testing will be set dynamically in the future;
    //Statically set for testing purposes only;
    const [nfts, setNfts] = useState([
        {
            id: 1,
            image: "",
            likes: 27,
            comments: 8
        },
        {
            id: 2,
            image: "",
            likes: 109,
            comments: 56
        },
        {
            id: 3,
            image: "",
            likes: 89,
            comments: 17
        },
        {
            id: 4,
            image: "",
            likes: 211,
            comments: 24
        },
        {
            id: 5,
            image: "",
            likes: 32,
            comments: 10
        },
        {
            id: 6,
            image: "",
            likes: 49,
            comments: 16
        },
    ]);
    //Builds out featured list. Temporary solution will be changed to something more elegant.
    const buildFeaturedList = nfts => {
        let nftColumns = [];
        nfts.forEach( (nft, i) => {
            nftColumns.push(<NftDisplay key={nft.id} likes={nft.likes} comments={nft.comments} url={nft.image} />);
        })
        let rowOne = 
            <Carousel key={0} touch>
                <Carousel.Item>{nftColumns[0]}</Carousel.Item>
                <Carousel.Item>{nftColumns[1]}</Carousel.Item> 
                <Carousel.Item>{nftColumns[2]}</Carousel.Item>
                <Carousel.Item>{nftColumns[3]}</Carousel.Item> 
                <Carousel.Item>{nftColumns[4]}</Carousel.Item>
                <Carousel.Item>{nftColumns[5]}</Carousel.Item>
            </Carousel >

        return [rowOne];
    }

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
            <Container fluid={true}>
                {/* <div className="headline-wrapper mb-5">
                    <h1 className="headline text-majesti d-inline-block">Live Activity</h1>
                    <Link to="" className="headline-nav float-right text-dark">view all</Link>
                </div> */}
            </Container>
                {buildFeaturedList(nfts)}
        
            
        </Fragment>
    )  
}

export default observer(Explore);