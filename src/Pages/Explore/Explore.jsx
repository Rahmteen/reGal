import React, { useState, useEffect } from 'react';
import './Explore.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Stripes from '../../../assets/stripes.png'
import ReactPlayer from 'react-player'

let videos = ['https://www.youtube.com/watch?v=ysz5S6PUM-U', 'https://www.youtube.com/watch?v=5qap5aO4i9A']

const Explore = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div className='marketplace'>
            <NavBar />
        <div className='marketplace-body'>
        <div className='scrollcontent'>
        <div className='headline'>featured artists</div>
        <br/>
        <img className='stripes' src={Stripes} width='500px' height='550px'/><div className='feature'>
        <div className='video-border'>
        <ReactPlayer
            height='540px'
            width='945px' 
            url={videos[1]}
            // playing={true}
            controls={false}
            className='video-player' 
            /></div></div>   
                <div className='welcome'>welcome to regal</div>
        </div>

        </div>
       
        </div>
    )  
}

export default Explore