import React, { Fragment } from "react";
import { Image, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Profile from "../../../assets/images/profile.png";
import mint from "../../../assets/images/mint.png";
import portrait from "../../../assets/images/portrait.png";
const NftDisplay = ({
  likes,
  comments,
  image,
  id,
  bid,
  title,
  creator,
  date_mint,
  current,
  previous,
}) => {
  return (
    // <Col fluid md={4} className="mb-5 nft-wrapper"></Col>
    <Fragment>
        <Card className="nft-display mb-3">

          <Card.Img className="explore-card-image" src={image} />
          <Card.Body>         
            <Row className="nft-activity">
              <Col className="nft-user">
              </Col>
            </Row>
            <Row >
              <Col
                lg={12}
                className="title font-secondary text-center mt-3 text-uppercase text-primary font-italic"
              >
                {title}
              </Col>
              <Col
                lg={12}
                className="creator offset-5 text-center mt-1 mb-4 mr-auto ml-auto h6"
              >
                @{creator}{" "}
              </Col>

              <Col lg={12} className="mt-1 d-flex align-items-center mb-3">
                <Col className="text-end">
                <Link to={`/details/${id}`}>
                  <Button className="btn-regal">Bid</Button>
                </Link>
                </Col>
                <Col className="price-col">{" "}current
                <div className="price-nft ">Ξ {current}</div>{" "}
                <div>${current * 2300}</div>
                </Col>

              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="nft-footer mb-2">
            <div className="pr-3">
              <div className="fa fa-lg fa-heart-o pr-1"></div>
              {likes}
            </div>
            <div className="pr-3">
              <div className="fa fa-lg fa-comment-o pr-1"></div>
              {comments}
            </div>
            <span className="">{`Last bid ${bid} mins ago`}</span>
          </Card.Footer>
        </Card>
    </Fragment>
  );
};

export default NftDisplay;
