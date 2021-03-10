import React, { useState, useEffect } from 'react';
import './Landing.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'

const Landing = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div>
			<div>Regal</div>
			<NavBar/>
		</div>
    )
}

export default Landing