import React, { useState, useEffect } from 'react';
import './Explore.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';

const Explore = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div className='marketplace'>
            <NavBar />
        <div className='marketplace-body'>
        <div className='scrollcontent'>
        <div className='headline'>featured artists</div>
        <br/>
                <div className='feature'></div>     
                <div className='welcome'>welcome to regal</div>
        </div>

        </div>
       
        </div>
    )  
}

export default Explore