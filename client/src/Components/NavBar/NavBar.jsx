//Modules
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar variant="dark">
      <Navbar.Brand href="/" className="text-majesti" style={{fontSize: "2em"}}>R</Navbar.Brand>
      <Nav className="mr-auto text-majesti">
        <Nav.Link href="#explore">explore</Nav.Link>
        <Nav.Link href="#gallery">gallery</Nav.Link>
        <Nav.Link href="#apply">apply</Nav.Link>
        <Nav.Link href="#learn">learn</Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default Navigation;
