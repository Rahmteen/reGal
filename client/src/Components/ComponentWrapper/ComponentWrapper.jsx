//Modules
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

const ComponentWrapper = ({ children }) => {
  return (
    <Fragment>
      <NavBar {...navbar}/>
      <Container>
        {children}
      </Container>
      <Footer />
    </Fragment>
  )
}

export default ComponentWrapper;