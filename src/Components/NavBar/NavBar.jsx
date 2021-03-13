import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import profile from '../../../assets/profile.png'

const NavBar = () => {
    const { activeData, activeDataHandler } = useContext(StateContext);
    let acc = window.ethereum.selectedAddress
    // if (!window.ethereum.selectedAddress) {
    //     acc = '';
    // }
    if (acc.length > 1) {
        acc = acc.split('').slice(0, 4)
        acc.toString()
    }
    return (
        <div className='navbar'>
            <Link to='/marketplace'><button className='button-nav'>marketplace</button></Link>
            <Link to='/apply'><button className='button-nav'>apply</button></Link>
            <Link to='/'><button className='button-nav'>home</button></Link>
            <div className='profile'><button className='profile-nav-button'><p>{acc}</p><img className='profile-nav'src={profile} width='50px'/></button></div>
        </div>
    )
}

export default NavBar