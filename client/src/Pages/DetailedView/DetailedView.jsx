//Components
import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Button, ListGroup, Table } from 'react-bootstrap';
//Media - For testing will be dynamic
import testImage from "../../../assets/images/eeql_gif.gif";


const DetailedView = ({id}) => {

    useEffect(() => {
        //Will load NFT data by NFT id
    })

    return (
        <Container>
            <Row>
                <Col md={12} className="nft-title-details">
                    <h1 className="text-uppercase d-inline-block text-primary font-italic text-md-left text-center">Backbone</h1>
                    <span className="d-inline-block text-info ml-3 font-italic text-md-left text-center"><span className="fas fa-certificate mr-1"></span>Artist verified</span>
                    <span className="d-inline-block text-info ml-3 font-italic text-md-left text-center"><span className="fas fa-certificate mr-1"></span>Regal Minted</span>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Image src={testImage} fluid/>
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
                            <span className="text-info">@deffiedeff</span>
                        </div>
                        <div>
                            <span className="text-white">Owner: </span>
                            <span className="text-info">@deffiedeff</span>
                        </div>
                    </div>
                    <div className="nft-tags mt-4">
                        <ListGroup horizontal className="text-white font-italic">
                            <ListGroup.Item>#art</ListGroup.Item>
                            <ListGroup.Item>#dinosaur</ListGroup.Item>
                            <ListGroup.Item>#3drender</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <p className="nft-description text-white mt-3 text-md-left text-center">
                        The velociraptor's anatomy as seen from the view of a 3D rendered camera. I used blender to render this jawn.
                    </p>
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
                            <tr>
                                <td>05/05/2021</td>
                                <td>1.5 ETH</td>
                                <td>0x34...47v4</td>
                                <td>0x5g...gh75</td>
                            </tr>
                            <tr>
                                <td>02/03/2021</td>
                                <td>0.7 ETH</td>
                                <td>0x5g...gh75</td>
                                <td>0x34...47v4</td>
                            </tr>
                            <tr>
                                <td>03/02/2021</td>
                                <td>0.1 ETH</td>
                                <td>0x6g...jc85</td>
                                <td>0x6g...jc85</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={12} className="text-center mt-3 total-value-summary">
                    <span className="font-italic text-white">Total Value Transferred</span><span className="text-primary font-italic ml-3">$5,453</span>
                </Col>
            </Row>
        </Container>
    )
}

export default DetailedView;