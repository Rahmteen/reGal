import React, { useState, useEffect } from 'react';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import bee from '../../../assets/bumblebee.jpg'

const Assets = () => {

    return (
<div class="card-deck">
  <div class="card text-dark">
    <img class="card-img-top" src={bee} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card text-dark">
    <img class="card-img-top" src={bee} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card text-dark">
    <img class="card-img-top" src={bee} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    )  
}

export default Assets