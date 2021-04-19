//Modules
import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ConnectWallet from "../../Components/ConnectWallet";
import Profile from "../../../assets/images/profile-icon.png";
// import Lines from "../../../assets/images/nav-lines.png"

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container className="pt-5" fluid>
          <Nav className="nav-top">
        <Navbar.Brand
          href="/explore"
          className="text-majesti mr-5"
          style={{ fontSize: "4em"}}
        >
          REGAL
        </Navbar.Brand>
          <Nav.Link href="/explore">explore</Nav.Link>
          <Nav.Link href="/profile">profile</Nav.Link>
          <Nav.Link target="_blank" href="https://forms.gle/R1tCLf24bhgK8t7AA">
            apply
          </Nav.Link>
          <Nav.Link href="/whitepaper">whitepaper</Nav.Link>
        </Nav>
        <Nav.Item className="" style={{ paddingRight: "15px" }}>
          {window.ethereum.selectedAddress ?  <img src={Profile} className="profile-pic"></img> : <ConnectWallet />}
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

export default Navigation;
