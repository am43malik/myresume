import React, { useState } from "react";
import $ from 'jquery';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { renderToString } from "react-dom/server";
import Button from "@mui/material/Button";
// import pdfe from "../assets/pdf.pdf";
import logo from "../assets/newlogo.png";
import Uploadcv from "./Uploadcv";
import jsPDF from "jspdf";
import './pdf.css'
import styled from 'styled-components';
import Test from "./Test";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";




const PdfDownload = ({ message }) => {
  const [item, setItem] = useState([]);
  console.log(message, "lllll");

  var element = [];

  const getBase64 = async (e) => {
    var file = e.target.files[0];
    const buffer = await file.arrayBuffer();
    let byteArray = new Int8Array(buffer);

    setItem(byteArray);
  };
  


  const Prints = () => (
    <div >



  

     {/* <table>  
     <tr>
        <th> SrNo</th>
        <th>Key</th>
        <th>Value</th>
      </tr>
      {
      message.map((item,i)=>{
        console.log(message,"asdf")
        console.log(item,"item")
       return(
        
            <tr key={i}>
          <td >{i+1}</td>
          <td style={{ color:'red',height:'3rem',fontSize:'12px'}}>{item.firstName}</td>
          <td style={{ color:'red',height:'3rem',fontSize:'12px'}}>{item.lastName}</td>
          </tr>
        
       )
        })
      }
     
     </table> */}




<table class="ui celled table">
  <thead>
    <tr><th>Name</th>
    <th>Age</th>
    <th>Job</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table>

    </div>
  );

  async function createPdf() {
    
    console.log(item.buffer);
    const pdf =  new jsPDF()
//     const pdf =  new jsPDF({
      
//       orientation: 'portrait', 
//       // unit: 'in', 
//        format: [500, 500]
// });
    pdf.addImage(logo, "PNG", 130, 2, 50, 50);
    const string = renderToString(<Prints /> );
    pdf.fromHTML(string,12, 53, {
      'width': 760
     });
    
    


    console.log(pdf.output("arraybuffer"), "pdf");
  
   
    
    const firstDonorPdfBytes = pdf.output("arraybuffer")
    const secondDonorPdfBytes = item.buffer;

    const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes);
    const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes);

    const pdfDoc = await PDFDocument.create();

  const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])

  pdfDoc.addPage(firstDonorPage )


console.log(secondDonorPdfDoc.getPages(),"pages")

for (let index = 0; index < secondDonorPdfDoc.getPages().length; index++) {
  // const element = array[index];
  const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc,[index])
  pdfDoc.addPage( secondDonorPage)
  
}





    const pdfBytes = await pdfDoc.save();

    require("downloadjs")(pdfBytes, message.firstName, "application/pdf");
  }

  return (
    <div>
      <Button     sx={{
        m:'2rem',
        width: '30ch',
      }} onClick={createPdf} variant="contained" color="secondary">
        Download
      </Button>

      <div>
        
        <input
        style={{
          border: '2px solid rgb(156,39,176)',
           padding:'5px',
           background:'rgb(156,39,176)'
        }}  
          type="file"
          
          name="imgUpload"
          accept=".pdf"
          onChange={getBase64}
        />
      </div>




      <div className="zima">
<h1 className="text"> Header </h1>

<p>  content  </p>
  
</div>

{/* <button id="getPDF" onclick={getPDF}>Download PDF</button> */}


    </div>
  );
};

export default PdfDownload;
{
  /* <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div> */

  {
    /* <table id="table">
        <tr>
          <th>Position Applying For & Location</th>
          <th>Day Of Sourcing</th>
          <th>Name of the Candidate</th>
          <th>Contact Number</th>
          <th>Email Id </th>
          <th>Age</th>
          <th>Highest Qualification</th>
          <th>Current Location </th>
          <th>Current Company</th>
          <th>Current Designation </th>
          <th>Current Product</th>
          <th>Avg Ticket Size </th>
          <th>ROI </th>
          <th>Average Buisness / Portfolio </th>
          <th>No Of Team Members </th>
          <th>No. of DSA </th>
          <th>Total Years of Exp</th>
          <th>Relevant Years of Exp</th>
          <th>Current CTC </th>
          <th>Expected CTC </th>
          <th>Notice Period </th>
          <th>Reason For Change</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>{data.PositionApplying}</td>
          <td>{data.DayOfSourcing}</td>
          <td>{data.NameoftheCandidate}</td>
          <td>{data.ContactNumber}</td>
          <td>{data.EmailId}</td>
          <td>{data.Age}</td>
          <td>{data.HighestQualification}</td>
          <td>{data.CurrentDesignation}</td>
          <td>{data.CurrentProduct}</td>
          <td>{data.AvgTicketSize}</td>
          <td>{data.ROI}</td>
          <td>{data.AverageBuisness}</td>
          <td>{data.NoOfTeamMembers}</td>
          <td>{data.NoofDSA}</td>
          <td>{data.TotalYearsofExp}</td>
          <td>{data.CurrentCTC}</td>
          <td>{data.ExpectedCTC}</td>
          <td>{data.NoticePeriod}</td>
          <td>{data.ReasonForChange}</td>
          <td>{data.Remarks}</td>
        </tr>
      </table> */
  }
}
