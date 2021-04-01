//Modules
import React, { useState, useContext } from "react";
//Stores
import { StateContext } from "../../Providers/StateProvider.jsx";
//Components
import { Link } from "react-router-dom";
//Css
import "./NavBar.css";

// empty default profile pic
//import profile from "../../../assets/profile.png";
// navbar circles gif
//import Circles from "../../../assets/crcle.gif";

const NavBar = () => {
  const { userAddressHandler, userShortAddressHandler } = useContext(
    StateContext);
    //navigation for the site
    return (
      <div>navbar</div>
    )
};

export default NavBar;
