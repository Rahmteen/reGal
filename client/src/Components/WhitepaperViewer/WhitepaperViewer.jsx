import React, { useState } from 'react';
import RegalWhitepaper from '../../../assets/images/regal_whitepaper.pdf'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const WhitepaperViewer = () => {
    const [numPages, setNumPages] = useState(4);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Container>
        <Document
          file={RegalWhitepaper}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        </Container>
      </div>
    );
};

export default WhitepaperViewer;
