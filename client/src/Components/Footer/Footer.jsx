//Modules
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footer = () => {
  //const { activeData, activeDataHandler } = useContext(StateContext);
  // empty module for future use - footer obviously
  return (
    <footer className="text-white footer">
      <Container>
          <Row className="footer-nav" >
            <Col lg={2} md={3} sm={12}>
              <h1 className="footer-links footer-logo text-majesti">Regal</h1>
            </Col>
            <Col lg={1} md={2} sm={12}>
              <h5 className="footer-links text-uppercase">FAQ</h5>
            </Col>
            <Col lg={1} md={2} sm={12}>
              <h5 className="footer-links text-uppercase">T.O.S.</h5>
            </Col>
            <Col lg={1} md={2} sm={12}>
              <h5 className="footer-links text-uppercase">Apply</h5>
            </Col>
            <Col lg={1} md={2} sm={12}>
              <h5 className="footer-links text-uppercase">Whitepaper</h5>
            </Col>
            </Row>
            <div className="social-icons pt-2 mt-2">
              <Button variant="floating">
                <i className="fab fw fa-twitter"></i>
              </Button>
              <Button variant="floating">
                <i className="fab fw fa-instagram"></i>
              </Button>
              <Button variant="floating">
                <i className="fab fw fa-discord"></i>
              </Button>
              <Button variant="floating">
                <i className="fab fw fa-medium"></i>
              </Button>
            </div>
      </Container>
    </footer>
  );
};

export default Footer;
