//Modules
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
//Components
import Navigation from "../NavBar";
import Footer from "../Footer";

const ComponentWrapper = ({ children }) => {
  return (
    <Fragment>
      <Navigation/>
      {children}
      <Footer />
    </Fragment>
  )
}

export default ComponentWrapper;