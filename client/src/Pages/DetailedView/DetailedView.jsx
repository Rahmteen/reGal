//Components
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, ListGroup, Table } from 'react-bootstrap';
//Media - For testing will be dynamic
import testImage from "../../../assets/images/eeql_gif.gif";
import demo from "../../../assets/images/demo-art.jpeg";
import demo2 from "../../../assets/images/nft-1.jpg";
import demo3 from "../../../assets/images/nft-2.jpg";
import demo4 from "../../../assets/images/nft-3.jpg";
import demo5 from "../../../assets/images/nft-5.jpg";
import demo6 from "../../../assets/images/nft-6.jpg";


const DetailedView = (props) => {
    //For testing only
    const [nfts, setNfts] = useState([
        {
            id: 1,
            image: demo,
            likes: 27,
            comments: 8,
            title: "Backbone",
            tags: [
                "art",
                "dinosaur",
                "3drender"
            ],
            description: "The velociraptor's anatomy as seen from the view of a 3D rendered camera. I used blender to render this jawn.",
            minter: "deffiedeff",
            owner: "deffiedeff",
            transactionHistory: [
                {
                    date: "05/05/2021",
                    value: "1.5 ETH",
                    from: "0x34...47v4",
                    to: "0x5g...gh75"
                },
                {
                    date: "03/02/2021",
                    value: "0.7 ETH",
                    from: "0x5g...gh75",
                    to: "0x34...47v4"
                },
                {
                    date: "02/03/2021",
                    value: "0.1 ETH",
                    from: "0x6g...jc85",
                    to: "0x6g...jc85"
                },
            ],
            totalValue: "5,453"
        },
        {
            id: 2,
            image: demo2,
            likes: 109,
            comments: 56,
            title: "OTXHello",
            tags: [
                "art",
                "swirls",
                "test"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            minter: "Rahmteen",
            owner: "Rahmteen",
            transactionHistory: [
                {
                    date: "05/05/2021",
                    value: "1.5 ETH",
                    from: "0x34...47v4",
                    to: "0x5g...gh75"
                },
                {
                    date: "03/02/2021",
                    value: "0.7 ETH",
                    from: "0x5g...gh75",
                    to: "0x34...47v4"
                },
                {
                    date: "02/03/2021",
                    value: "0.1 ETH",
                    from: "0x6g...jc85",
                    to: "0x6g...jc85"
                },
            ],
            totalValue: "5,453"
        },
        {
            id: 3,
            image: demo3,
            likes: 89,
            comments: 17,
            title: "Spaceman",
            tags: [
                "art",
                "space",
                "alien"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            minter: "DannyB",
            owner: "DannyB",
            transactionHistory: [
                {
                    date: "05/05/2021",
                    value: "1.5 ETH",
                    from: "0x34...47v4",
                    to: "0x5g...gh75"
                },
                {
                    date: "03/02/2021",
                    value: "0.7 ETH",
                    from: "0x5g...gh75",
                    to: "0x34...47v4"
                },
                {
                    date: "02/03/2021",
                    value: "0.1 ETH",
                    from: "0x6g...jc85",
                    to: "0x6g...jc85"
                },
            ],
            totalValue: "5,453"
        },
        {
            id: 4,
            image: demo4,
            likes: 211,
            comments: 24,
            title: "Grooves",
            tags: [
                "art",
                "grooves",
                "3drender"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            minter: "CamBot",
            owner: "CamBot",
            transactionHistory: [
                {
                    date: "05/05/2021",
                    value: "1.5 ETH",
                    from: "0x34...47v4",
                    to: "0x5g...gh75"
                },
                {
                    date: "03/02/2021",
                    value: "0.7 ETH",
                    from: "0x5g...gh75",
                    to: "0x34...47v4"
                },
                {
                    date: "02/03/2021",
                    value: "0.1 ETH",
                    from: "0x6g...jc85",
                    to: "0x6g...jc85"
                },
            ],
            totalValue: "5,453"
        },
        {
            id: 5,
            image: demo5,
            likes: 32,
            comments: 10,
            title: "Pixel Monkey",
            tags: [
                "art",
                "monkey",
                "3drender"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            minter: "JakeG",
            owner: "JakeG",
            transactionHistory: [
                {
                    date: "05/05/2021",
                    value: "1.5 ETH",
                    from: "0x34...47v4",
                    to: "0x5g...gh75"
                },
                {
                    date: "03/02/2021",
                    value: "0.7 ETH",
                    from: "0x5g...gh75",
                    to: "0x34...47v4"
                },
                {
                    date: "02/03/2021",
                    value: "0.1 ETH",
                    from: "0x6g...jc85",
                    to: "0x6g...jc85"
                },
            ],
            totalValue: "5,453"
        },
        {
            id: 6,
            image: demo6,
            likes: 49,
            comments: 16,
            title: "Martian",
            tags: [
                "art",
                "martian",
                "3drender"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            minter: "deffiedeff",
            owner: "deffiedeff",
            transactionHistory: [
                {
                    date: "05/05/2021",
                    value: "1.5 ETH",
                    from: "0x34...47v4",
                    to: "0x5g...gh75"
                },
                {
                    date: "03/02/2021",
                    value: "0.7 ETH",
                    from: "0x5g...gh75",
                    to: "0x34...47v4"
                },
                {
                    date: "02/03/2021",
                    value: "0.1 ETH",
                    from: "0x6g...jc85",
                    to: "0x6g...jc85"
                },
            ],
            totalValue: "5,453"
        },
    ]);
    const [loadedNft, setLoadedNft] = useState({});

    useEffect(() => {
        const { id } = props.match.params;
        let nft = nfts.find( o => o.id == id);
        setLoadedNft(nft);

        //Will load NFT data by NFT id dynamically
    })

    return (
        <Container>
            <Row>
                <Col md={12} className="nft-title-details">
                    <h1 className="text-uppercase d-inline-block text-primary font-italic text-md-left text-center">{loadedNft.title}</h1>
                    <span className="d-inline-block text-info ml-3 font-italic text-md-left text-center"><span className="fas fa-certificate mr-1"></span>Artist verified</span>
                    <span className="d-inline-block text-info ml-3 font-italic text-md-left text-center"><span className="fas fa-certificate mr-1"></span>Regal Minted</span>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Image src={loadedNft.image} fluid/>
                </Col>
                <Col md={8}>
                    <div className="bid-details text-md-left text-center">
                        <span className="text-white fas fa-circle fa-lg"></span>
                        <h2 className="text-white d-inline-block ml-2">Top Bid</h2>
                    </div>
                    <div className="nft-bids mt-2 text-md-left text-center">
                        <div className="eth-price d-inline-block">
                            <span className="fab fa-ethereum text-primary fa-lg"></span>
                            <span className="text-primary ml-1 currency-value">1.5</span>
                        </div>
                        <div className="usd-price d-inline-block ml-3">
                            <span className="fas fa-dollar-sign text-green fa-lg"></span>
                            <span className="text-primary ml-1 text-green currency-value">3.6k</span>
                        </div>
                    </div>
                    <div className="buyer-seller mt-2 text-md-left text-center">
                        <div>
                            <span className="text-white">Minter: </span>
                            <span className="text-info">@{loadedNft.minter ? loadedNft.minter : ""}</span>
                        </div>
                        <div>
                            <span className="text-white">Owner: </span>
                            <span className="text-info">@{loadedNft.owner ? loadedNft.owner : ""}</span>
                        </div>
                    </div>
                    <div className="nft-tags mt-4">
                        <ListGroup horizontal className="text-white font-italic">
                            {
                                loadedNft.tags && loadedNft.tags.map( (tag, index) => (
                                    <ListGroup.Item key={index}>#{tag}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </div>
                    <p className="nft-description text-white mt-3 text-md-left text-center">{loadedNft.description}</p>
                    <div className="controls-wrapper text-md-left text-center">
                        <Button variant="outline-primary" className="btn-fix">Place A Bid</Button>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5 mt-3">
                <Col md={12}>
                    <Table responsive className="text-white text-center nft-records">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Value</th>
                                <th>Transfered From</th>
                                <th>Transfered To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadedNft.transactionHistory && loadedNft.transactionHistory.map( (transaction, index) => (
                                    <tr key={index}>
                                        <td>{transaction.date}</td>
                                        <td>{transaction.value}</td>
                                        <td>{transaction.from}</td>
                                        <td>{transaction.to}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md={12} className="text-center mt-3 total-value-summary">
                    <span className="font-italic text-white">Total Value Transferred</span><span className="text-primary font-italic ml-3">${loadedNft.totalValue ? loadedNft.totalValue : ""}</span>
                </Col>
            </Row>
        </Container>
    )
}

export default DetailedView;