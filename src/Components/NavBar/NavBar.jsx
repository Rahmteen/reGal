import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import logo from '../../../assets/logo_regal.png'

const NavBar = () => {
    const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div>
            <span><img src={logo} alt="logo" width={50} height={30}/></span>
            <Link to='/marketplace'>Marketplace</Link>
            <div> - </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NavBar