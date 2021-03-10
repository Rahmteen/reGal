import React, { useState, useEffect } from 'react';
import { StateContext } from '../../Providers/StateProvider.jsx';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div>Footer</div>
    )
}

export default Footer