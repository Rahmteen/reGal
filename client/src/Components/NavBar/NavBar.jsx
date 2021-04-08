//Modules
import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lines from "../../../assets/images/nav-lines.png"

const Navigation = () => {
  return (
    <Navbar variant="dark">
      <Navbar.Brand href="/" className="text-majesti" style={{fontSize: "3em", paddingLeft: "8px"}}>R</Navbar.Brand>
      <Nav className="ml-auto text-majesti" pullRight>
        <Nav.Link href="#dropdown"><img className='nav-lines' src={Lines} width={'30em'}/></Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default Navigation;
