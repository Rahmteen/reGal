import React from "react";
import { Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const NftDisplay = ({ likes, comments, image, id }) => {

  return (
    // <Col fluid md={4} className="mb-5 nft-wrapper"></Col>
    <>
        <Image fluid src={image} />
        <Carousel.Caption>
          <div className="nft-activity pt-2">
            <span className="nft-likes float-left pl-4">
              <span className="fa fa-lg fa-heart-o pr-1"></span>
              {likes}
            </span>
            <span className="nft-comments float-left pl-3">
              <span className="fa fa-lg fa-comment-o pr-1"></span>
              {comments}
            </span>
            <span className="nft-details float-left pl-3">
              <Link to={`/details/${id}`} className="text-white" >Details</Link>
            </span>
            {/* <Button size="sm" className="float-right">Details</Button> */}
          </div>
        </Carousel.Caption>
    </>
  );
};

export default NftDisplay;
