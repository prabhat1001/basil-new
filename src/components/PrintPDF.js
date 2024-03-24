import React from "react";
import html2pdf from "html2pdf.js";
import Pdf from "../assets/icons/save-pdf.svg";

const PrintPDF = () => {
  const printAsPDF = () => {
    window.print();
    if (window.matchMedia("print").matches) {
      // It will convert HTML to PDF and save
      html2pdf().from(document.body).save();
    }
  };

  return (
    <button className="pdf-button" onClick={printAsPDF}>
      <img src={Pdf} alt="export .pdf file" />
    </button>
  );
};

export default PrintPDF;
