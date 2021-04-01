import React, { useState, useEffect } from 'react';
// import of basic context state
import { StateContext } from '../../Providers/StateProvider.jsx';
// import of local styling
import './Footer.css';
// link for future routing
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    //const { activeData, activeDataHandler } = useContext(StateContext);
    // empty module for future use - footer obviously
    return (
        <footer className="bg-dark text-center text-white">
            <Container className="p-4 pb-0">
                <section className="mb-4">
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-facebook-f"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-twitter"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-instagram"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-linkedin-in"></i></Button>
                    <Button variant="outline-light floating" className="m-2"><i className="fab fw fa-github"></i></Button>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
                    
                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Container>
        </footer>

    )
}

export default Footer;