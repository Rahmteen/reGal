import React, { useState, useEffect } from 'react';
import './Profile.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Profile = () => {
  const { userAddress, userAddressHandler } = useContext(StateContext);
  // individual profile pic pages
    return (
    <div>Profile</div>
    )  
}

export default Profile