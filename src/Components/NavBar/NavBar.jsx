import React, { useState } from "react";
import "./NavBar.css";
import { StateContext } from "../../Providers/StateProvider.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
// empty default profile pic
import profile from "../../../assets/profile.png";
// navbar circles gif
import Circles from "../../../assets/crcle.gif";

const NavBar = () => {
  const { userAddressHandler, userShortAddressHandler } = useContext(
    StateContext);
    //navigation for the site
    return (
      <div>navbar</div>
    )
};

export default NavBar;
