import React, { useState, useEffect } from 'react';
import './Profile.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import Assets from './Assets.jsx'
import { useContext } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import GRINNS from '../../../assets/GRINNS.png'

const Profile = () => {
	const { userAddress, userAddressHandler, userShortAddress } = useContext(StateContext);
    useEffect(() => userAddressHandler(window.ethereum.selectedAddress))

    return (
    <div className='profile'>
      <NavBar /> 
        <div className='profile-grid'>
          <div id='profile-card' className="card bg-dark" style={{width: "18rem"}}>
            <img className="card-img-top" src={GRINNS} style={{padding: "50px"}}/>
              <div className="card-body">
                <h5 className="card-title">GRINNS</h5>
                <div className='card-title'>{window.ethereum.selectedAddress.split('').slice(38,42).join('').toString() + "..." +  window.ethereum.selectedAddress.split('').slice(0,4).join('').toString()}</div>
                  <p className="card-text">This is going to be a discription that a user can update on the page of their account's art, goals and </p>
              </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <i className="fab fa-twitter">...</i>
                <br/>
                <i class="fab fa-instagram">...</i>
                <br/>
                <i class="fab fa-youtube">...</i>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
          </div>
          <Assets></Assets>
          <Assets></Assets>
          <Assets></Assets>
        </div>
    </div>
    )  
}

export default Profile