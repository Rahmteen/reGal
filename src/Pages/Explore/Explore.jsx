import React, { useState, useEffect } from 'react';
import './Explore.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Explore = () => {
    const { userAddress, userAddressHandler } = useContext(StateContext);
    //the main page after landing for relevant material - this will morph into a trending section as userbase increases.
    return (
        <div>Explore</div>
    )  
}

export default Explore