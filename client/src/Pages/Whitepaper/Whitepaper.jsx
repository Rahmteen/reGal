//Components
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, ListGroup, Table } from 'react-bootstrap';
import WhitepaperViewer from "../../Components/WhitepaperViewer"
//Media - For testing will be dynamic

const Whitepaper = () => {
    return (
        <WhitepaperViewer></WhitepaperViewer>
    )
}

export default Whitepaper;