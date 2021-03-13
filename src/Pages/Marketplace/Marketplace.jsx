import React, { useState, useEffect } from 'react';
import './Marketplace.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavBarFooter from '../../Components/Footer/Footer.jsx';

const Marketplace = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div className='marketplace-body'>
            <ul>
                <div className='logo'>Logo</div>
                <div className='marketplace-btn'>Marketplace</div>
                <div className='apply-btn'>Apply</div>
            </ul>
        <div className='scrollcontent'>
                <div className='feature'>FEATURE.mp4</div>
                <div className='headline'>featured artist: deffie</div>
        </div>
        {/* <Footer></Footer> */}
        </div>
    )  
}

export default Marketplace