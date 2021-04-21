//Modules
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, Form, Button, FormFile } from "react-bootstrap";
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
          <Form.Group controlId="formWalletID">
              <Form.Label className="text-white" >WalletID</Form.Label>
              <Form.Control type="text" disable={true} placeholder="0xA760f51e900E5BaF1Be30836ab72373fA08BB906" />
              <Form.Text className="text-white">
                You're creating an account associated with this Wallet Address!
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formDisplayName">
              <Form.Label className="text-white" >Display Name</Form.Label>
              <Form.Control type="text" placeholder="Enter display name" />
              <Form.Text className="text-white">
                The name that you will display to the world.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-white">
                We'll never share your email with anyone else.
              </Form.Text>
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
