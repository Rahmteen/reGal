import React, { useState, useEffect } from 'react';
import './Marketplace.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'

const Marketplace = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div>
        <div>Marketplace Page</div>
        <NavBar></NavBar>
        </div>

    )
}

export default Marketplace