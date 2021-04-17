import React from "react";
<<<<<<< HEAD
import { Image, Carousel, Card } from "react-bootstrap";
=======
import { Image, Carousel } from "react-bootstrap";
>>>>>>> dcca9e2633b37a7981233838ffae72af320d4590
import { Link } from "react-router-dom";

const NftDisplay = ({ likes, comments, image, id }) => {

  return (
    // <Col fluid md={4} className="mb-5 nft-wrapper"></Col>
    <>
<<<<<<< HEAD
    <Card.Img className="nft-card-image" src={image} />
        <Card.Body>
          <div className="nft-activity mr-auto pt-1">
=======
        <Image fluid src={image} />
        <Carousel.Caption>
          <div className="nft-activity mx-auto pt-2">
>>>>>>> dcca9e2633b37a7981233838ffae72af320d4590
            <span className="nft-likes pl-4">
              <span className="fa fa-lg fa-heart-o pr-1"></span>
              {likes}
            </span>
            <span className="nft-comments pl-3">
              <span className="fa fa-lg fa-comment-o pr-1"></span>
              {comments}
            </span>
<<<<<<< HEAD
            <span className="nft-details mr-auto pl-3 d-inline-block">
              <Link to={`/details/${id}`} className="text-white" >...</Link>
            </span>
            {/* <Button size="sm" className="float-right">Details</Button> */}
          </div>
        </Card.Body>
=======
            <span className="nft-details pl-3 d-inline-block">
              <Link to={`/details/${id}`} className="text-white" >Details</Link>
            </span>
            {/* <Button size="sm" className="float-right">Details</Button> */}
          </div>
        </Carousel.Caption>
>>>>>>> dcca9e2633b37a7981233838ffae72af320d4590
    </>
  );
};

export default NftDisplay;
