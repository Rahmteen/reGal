import React, { useState, useEffect, Fragment } from 'react';
import './Explore.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import sampleVid from "../../../assets/images/BMWEEER.mp4";

const Explore = () => {
    const { userAddress, userAddressHandler } = useContext(StateContext);
    //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
    return (
        <Fragment>
            <Jumbotron style={{position: "relative", zIndex: -101}}>
                <h3 className="overlay-text">Featured</h3>
                <video id="feature-video" loop autoPlay muted>
                    <source src={sampleVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Jumbotron>
            <Container>
                <div className="headline-wrapper mb-5">
                    <h1 className="headline text-majesti d-inline-block">Live Activity</h1>
                    <Link to="" className="headline-nav float-right text-dark">view all</Link>
                </div>
                <Row className="mb-5 text-center">
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/300"/>
                    </Col>
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/300"/>
                    </Col>
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/300"/>
                    </Col>
                </Row>
                <Row className="mb-5 text-center">
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/300"/>
                    </Col>
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/300"/>
                    </Col>
                    <Col md={4}>
                        <Image src="https://via.placeholder.com/300"/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )  
}

export default Explore