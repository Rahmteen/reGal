import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import profile from '../../../assets/profile.png'
import Circles from '../../../assets/crcle.gif'

const NavBar = () => {
    const { userAddressHandler, userShortAddressHandler } = useContext(StateContext);
    const [web3Auth, setWeb3Auth] = useState(false)
    let accounts;
    let url = window.location.pathname

    const connectWallet = async () => { 
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        userAddressHandler(accounts[0])
        setWeb3Auth(!web3Auth);
    }

    let acc = window.ethereum.selectedAddress
    let displayAcc = displayAcc || ''
    if (acc == null) {
        displayAcc = <button className='button-landing-mm-nav' onClick={connectWallet}>connect wallet</button>
    } else if (window.ethereum.networkVersion !== '1') {
        displayAcc = 'test network detected!'
        displayAcc = <div className='button-landing-test'>{displayAcc}</div>

    }   
    else {
        let accStart = acc.split('').slice(0, 4).join('').toString()
        let accEnd = acc.split('').slice(38, 42).join('').toString()
        displayAcc = accStart + '...' + accEnd
        displayAcc =<div className='button-landing-acc-nav'>{displayAcc}</div>
    }

    useEffect(() => {
        userShortAddressHandler(displayAcc)
    },[])

    
    if (url.includes('explore')) {
        return (
            <div className='navbar'>
                <img id='circles' src={Circles} loop='infinite'/>
                <Link to='/explore'><button className='current'>explore</button></Link>
                <Link to='/marketplace'><button className='button-nav'>marketplace</button></Link>
                <Link to='/apply'><button className='button-nav'>apply</button></Link>
                <div className='profile'><div className='profile-nav-button'>{displayAcc}<Link className='profile' to='/profile'><img className='profile-nav'src={profile} width='55px'/></Link></div></div>
            </div>)
    } else if (url.includes('marketplace')){
        return (<div className='navbar'>
        <img id='circles' src={Circles}/>
        <Link to='/explore'><button className='button-nav'>explore</button></Link>
        <Link to='/marketplace'><button className='current'>marketplace</button></Link>
        <Link to='/apply'><button className='button-nav'>apply</button></Link>
        <div className='profile'><div className='profile-nav-button'>{displayAcc}<Link className='profile' to='/profile'><img className='profile-nav'src={profile} width='55px'/></Link></div></div>
    </div>)
    } else if (url.includes('apply')){
        return (<div className='navbar'>
        <img id='circles' src={Circles}/>
        <Link to='/explore'><button className='button-nav'>explore</button></Link>
        <Link to='/marketplace'><button className='button-nav'>marketplace</button></Link>
        <Link to='/apply'><button className='current'>apply</button></Link>
        <div className='profile'><div className='profile-nav-button'>{displayAcc}<Link className='profile' to='/profile'><img className='profile-nav'src={profile} width='55px'/></Link></div></div>
    </div>)
    } else return (
        <div className='navbar'>
            <img id='circles' src={Circles}/>
            <Link to='/explore'><button className='button-nav'>explore</button></Link>
            <Link to='/marketplace'><button className='button-nav'>marketplace</button></Link>
            <Link to='/apply'><button className='button-nav'>apply</button></Link>
            <div className='profile'><div className='profile-nav-button'>{displayAcc}<Link className='profile' to='/profile'><img className='profile-nav'src={profile} width='55px'/></Link></div></div>
        </div>
    )
}

export default NavBar