import React, { useState, useEffect, Fragment } from 'react';
import './Explore.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Container, Image, Jumbotron } from 'react-bootstrap';
import sampleVid from "../../../assets/images/BMWEEER.mp4";

const Explore = () => {
    const { userAddress, userAddressHandler } = useContext(StateContext);
    //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
    return (
        <Fragment>
            <Jumbotron style={{position: "relative", zIndex: -101}}>
                <video id="feature-video" loop autoPlay muted>
                    <source src={sampleVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Jumbotron>
            <Container>
                
            </Container>
        </Fragment>
    )  
}

export default Explore