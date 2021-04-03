import React from "react";
import { Button, Col, Image } from "react-bootstrap";

const NftDisplay = ({likes, comments, url}) => {

    //For testing purposes only. This function will be removed.
    //Generates a random number for likes and comments count.
    //Ultimately will be pulled from database.
    const generateRandomNumber = () => {
        return Math.random() * (100 - 0) + 0;
    }

    return (
        <Col md={4} className="mb-5 nft-wrapper">
            <Image fluid src={url || "https://via.placeholder.com/300"}/>
            <div className="nft-activity pt-2">
                <span className="nft-likes float-left pl-4"><span className="fa fa-lg fa-heart-o pr-1"></span>{likes}</span>
                <span className="nft-comments float-left pl-3"><span className="fa fa-lg fa-comment-o pr-1"></span>{comments}</span>
                {/* <Button size="sm" className="float-right">Details</Button> */}
            </div>
        </Col>
    )
}

export default NftDisplay;