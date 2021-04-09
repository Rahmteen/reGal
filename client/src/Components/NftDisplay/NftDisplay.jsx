import React from "react";
import { Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const NftDisplay = ({ likes, comments, image, id }) => {

  return (
    // <Col fluid md={4} className="mb-5 nft-wrapper"></Col>
    <>
        <Image fluid src={image} />
        <Carousel.Caption>
          <div className="nft-activity mx-auto pt-2">
            <span className="nft-likes pl-4">
              <span className="fa fa-lg fa-heart-o pr-1"></span>
              {likes}
            </span>
            <span className="nft-comments pl-3">
              <span className="fa fa-lg fa-comment-o pr-1"></span>
              {comments}
            </span>
            <span className="nft-details pl-3 d-inline-block">
              <Link to={`/details/${id}`} className="text-white" >Details</Link>
            </span>
            {/* <Button size="sm" className="float-right">Details</Button> */}
          </div>
        </Carousel.Caption>
    </>
  );
};

export default NftDisplay;
