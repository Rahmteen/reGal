import React, { useState, useEffect } from 'react';
import './Marketplace.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import { motion } from 'framer-motion'

const Marketplace = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div className='marketplace-body'>
        <div>Marketplace Page</div>
        {/* <NavBar></NavBar> */}
        </div>
    )
}

export default Marketplace