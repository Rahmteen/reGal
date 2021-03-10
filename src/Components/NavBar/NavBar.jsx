import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'

const NavBar = () => {
    const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div>
            <Link to='/marketplace'>Marketplace</Link>
            <div> - </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NavBar