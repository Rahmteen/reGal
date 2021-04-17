import React from "react";
import { Image, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NftDisplay = ({ likes, comments, image, id }) => {

  return (
    // <Col fluid md={4} className="mb-5 nft-wrapper"></Col>
    <>
    <Card.Img className="nft-card-image" src={image} />
        <Card.Body>
          <div className="nft-activity mr-auto pt-1">
            <span className="nft-likes pl-4">
              <span className="fa fa-lg fa-heart-o pr-1"></span>
              {likes}
            </span>
            <span className="nft-comments pl-3">
              <span className="fa fa-lg fa-comment-o pr-1"></span>
              {comments}
            </span>
            <span className="nft-details mr-auto pl-3 d-inline-block">
              <Link to={`/details/${id}`} className="text-white" >...</Link>
            </span>
            {/* <Button size="sm" className="float-right">Details</Button> */}
          </div>
        </Card.Body>
    </>
  );
};

export default NftDisplay;
