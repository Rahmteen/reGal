//Modules
import React from "react";
import { Nav, Navbar, NavDropdown ,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Lines from "../../../assets/images/nav-lines.png"

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="3x">
      {/* Should switch the brand out with a logo image */}
      <Navbar.Brand href="/" className="text-majesti" style={{fontSize: "3em", paddingLeft: "8px"}}>R</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto text-majesti">
          <Nav.Link href="/explore">explore</Nav.Link>
          <Nav.Link href="/profile">profile</Nav.Link>
          <Nav.Link href="#apply">apply</Nav.Link>
          <Nav.Link href="#whiteboard">whitepaper</Nav.Link>
          {/* <Nav.Link href="#dropdown"><img className='nav-lines' src={Lines} width={'30em'}/></Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navigation;
