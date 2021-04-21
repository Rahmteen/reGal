//Modules
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, Form, Button } from "react-bootstrap";
import Circle from "../../../assets/images/crcle.gif";

// username: string,
// wallet_id: string,
// bio: string,
// profile_image: string,
// email_address: string,

const SignUp = () => {
  useEffect(() => {
    //console.log(SimpleContract.methods)
  }, []);

  return (
    <Container>
      <Row>
        <Col className="text-center mb-5 pb-5" md={6} lg={6} sm={0}>
          <Image src={Circle} width="300px"></Image>
        </Col>
        <Col md={6} lg={6} sm={12}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="btn-regal" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
