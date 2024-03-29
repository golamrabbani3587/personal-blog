import React from 'react';
import myResumePDF from '../assets/Golam_Rabbani__Resume.pdf';

function ResumePdf() {
  const pdfUrl = "https://drive.google.com/file/d/1D_jHhSyBe328YheNMo32lO9dQtN5nufl/view?usp=share_link";
  return (
    <div>
      <embed src={myResumePDF} type="application/pdf" width="100%" height="1000" />
    </div>
  );
}

export default ResumePdf;
