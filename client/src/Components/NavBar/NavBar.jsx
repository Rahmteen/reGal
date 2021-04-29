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
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../../../assets/images/profile-icon.png";
import { isMobile } from "react-device-detect";
// import Lines from "../../../assets/images/nav-lines.png"

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand
        as={Link}
        to="/explore"
        className="text-majesti mr-5"
        style={{ fontSize: "4.5em" }}
      >
        REGAL
      </Navbar.Brand>
      <Navbar.Toggle className="mr-3" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="pt-3 pb-1" fluid>
          <Nav className="nav-top">
            <Nav.Link as={Link} to="/explore">explore</Nav.Link>
            <Nav.Link as={Link} to="/profile">profile</Nav.Link>
            <Nav.Link
              as={Link}
              rel="noopener"
              target="_blank"
              to="https://forms.gle/R1tCLf24bhgK8t7AA"
            >
              apply
            </Nav.Link>
            <Nav.Link as={Link} to="/whitepaper">whitepaper</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Item
            className=""
            style={{ marginTop: "9px", paddingLeft: "0px" }}
          >
            <Button as={Link}  to="/signup" className="btn-regal">CONNECT</Button>
          </Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
