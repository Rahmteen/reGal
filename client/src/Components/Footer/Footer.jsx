//Modules
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
//CSS
import './Footer.css';

const Footer = () => {
    //const { activeData, activeDataHandler } = useContext(StateContext);
    // empty module for future use - footer obviously
    return (
        <footer className="text-center text-white footer">
            
            <Container className="p-4 pb-0">
                <section className="mb-4">
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-twitter"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-instagram"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-discord"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-medium"></i></Button>
                </section>

                <section>
                    <Form>
                        <Row className="d-flex justify-content-center">
                            <Col>
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </Col>
                            <Col md={5}>
                                <div className="form-outline form-white mb-4">
                                    <Form.Control type="email" placeholder="Email address" />
                                </div>
                            </Col>
                            <Col>
                                <button type="submit" className="btn btn-outline-light mb-4">Subscribe</button>
                            </Col>
                        </Row>
                    </Form>
                </section>

                <section className="mb-4">
                    <p>
                        We're creators who decided to build a platform for creators, without taking a massive percentage of the sales. Join the cause
                        by submitting an application.
                    </p>
                </section>
                    
                <section>
                    <Row>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <h5 className="text-uppercase">FAQ</h5>
                        </Col>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <h5 className="text-uppercase">T.O.S.</h5>
                        </Col>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <h5 className="text-uppercase">Apply</h5>
                        </Col>
                        <Col lg={3} md={6} className="mb-4 mb-md-0">
                            <h5 className="text-uppercase">Careers</h5>
                        </Col>
                    </Row>
                </section>
            </Container>
        </footer>

    )
}

export default Footer;