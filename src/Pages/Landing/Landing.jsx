import React, { useState, useEffect } from 'react';
import './Landing.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'

const Landing = () => {
	const { activeData, activeDataHandler } = useContext(StateContext);
    return (
        <div class="bounds">
			<div class="text-box">
      <div class="heading">The future of Nfts.</div>
      <div class="button-wrapper">
          <div class="button">Drop</div>
          <div class="button" onclick='metamaskCall()'>Connect Wallet</div>
          <script src = 'connectWallet.js'></script>
      </div>
    </div>
    <script src="three.min.js"></script>
	<script src="src\threebg.js"></script>
	<NavBar/>
	</div>
    )
}

export default Landing