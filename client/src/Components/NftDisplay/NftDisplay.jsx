import React, { Fragment} from "react";
import { Image, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../../../assets/images/profile.png";
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
      <Card className="nft-display">
        <Card.Img className="explore-card-image" src={image} />
        <Card.Body>
          <div className="nft-overlay">
            <div className="d-block mb-1">
              {previous == null ? (
                <div className="text-right">
                  <span className="overlay-values text-white ">
                    {current} Ξ
                  </span>{" "}
                  <br />
                  <span className="overlay-values text-white first">First Sale</span>
                </div>
              ) : (
                <div className="text-right">
                  <span className="overlay-values text-white ">
                    {current} Ξ
                  </span>{" "}
                  <br />
                  {previous / current > 1 ? (
                    <span className="overlay-values text-white positive">
                      + {Number((previous / current).toFixed(4) * 100)} %
                    </span>
                  ) : (
                    <span className="overlay-values text-white negative">
                      - {Number((previous / current).toFixed(4) * 100)} %
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
            <Row className="nft-activity mx-auto">
              <Col className="nft-user">
                <img src={Profile} />
              </Col>
              <Col className="nft-body">
                <span>
                  <b> name:</b> <br />
                  <span style={{ fontSize: "16px" }}> {title}</span>
                </span>
                <span>
                  <b>artist:</b> <br />
                  <span style={{ fontSize: "16px" }}> {creator}</span>
                </span>
                <span>
                  <b>date created: </b> <br />
                  <span style={{ fontSize: "16px" }}> {date_mint}</span>
                </span>
              </Col>
            </Row>
        </Card.Body>
        <Card.Footer className="nft-footer">
          <div className="pr-3">
            <div className="fa fa-lg fa-heart-o text-center pr-1"></div>
            {likes}
          </div>
          <div className="pr-4">
            <div className="fa fa-lg fa-comment-o text-center pr-1"></div>
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
