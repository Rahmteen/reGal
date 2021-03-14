import React, { useState, useEffect } from 'react';
import { StateContext } from '../../Providers/StateProvider.jsx';
import './Network.css';
import { Redirect } from 'react-router';

const Network = () => {
    let alert = <a></a>;
    if (window.ethereum.networkVersion !== '1' ) {
        // alert = <Redirect to='/marketplace' />
    }
    return (
        <div>{alert}</div>
    )
}

export default Network