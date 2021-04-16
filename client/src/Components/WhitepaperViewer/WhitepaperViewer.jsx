import React from "react";
import PDFViewer from 'pdf-viewer-reactjs'
import 'bulma-helpers/css/bulma-helpers.min.css'

const WhitepaperViewer = () => {
return (
    <div className='pdf-nav'>
    <PDFViewer
      document={{
        url: "../../../assets/images/regal_whitepaper.pdf",
      }}
      canvasCss='whitepaper-pdf'
      showThumbnail={{ scale: 1 }}
      hideZoom={true}
    />
    </div>
  )
};

export default WhitepaperViewer;
