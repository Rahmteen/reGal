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
      <Link className="card-link" to={`/details/${id}`}>
        <Card className="nft-display mb-3">
          <Card.Img className="explore-card-image" src={image} />
          <Card.Body>
            {/* <div className="nft-overlay text-right">
              <div className="d-block mb-1 text-right">
                {previous == null ? (
                  <div className="text-right">
                    <span className="overlay-values text-right">
                      {current} Ξ
                    </span>{" "}
                    <br />
                    <span className="overlay-values text-white first text-right">
                    <i class="fas fa-paint-brush"></i>{" "}creator
                    </span>
                  </div>
                ) : (
                  <div className="text-right">
                    <span className="overlay-values">
                      {current} Ξ
                    </span>{" "}
                    <br />
                    {previous / current > 1 ? (
                      <span className="overlay-values text-white positive text-right">
                        + {Number((previous / current).toFixed(4) * 100)} %
                      </span>
                    ) : (
                      <span className="overlay-values text-white negative text-right">
                        - {Number((previous / current).toFixed(4) * 100)} %
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div> */}
            <Row className="nft-activity">
              <Col className="nft-user">
                {/* <img src={Profile} className="profile-image"/> */}
              </Col>
            <Col className="text-right">
                @{creator} <br/>
                {title}
            </Col>
            </Row>
            <Row>
            <Col className="text-center price-nft">{current} Ξ</Col>
            </Row>
          </Card.Body>
          <Card.Footer className="nft-footer">
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
      </Link>
    </Fragment>
  );
};

export default NftDisplay;
