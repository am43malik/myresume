import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { renderToString } from "react-dom/server";
import Button from "@mui/material/Button";
// import pdfe from "../assets/pdf.pdf";
import logo from "../assets/newlogo.png";
import Uploadcv from "./Uploadcv";
import {jsPDF} from "jspdf";
import './pdf.css'
import styled from 'styled-components';
import Test from "./Test";

import autoTable from 'jspdf-autotable'
import './pdfdownload.css'

const PdfDownloadd=({message})=>{
  useEffect(()=>{
    var arrBody=[]
    message.map((item)=>{
      var datar=item.firstName+","+item.lastName
      var arrBodyInn=[]
      arrBodyInn.push(datar)
      arrBody.push(arrBodyInn)
      // autoTable(pdf, {
      
  
      //   head: [["key","Value"]],
      //   body: [
      //     [item.lastName, ],
      //     [item.lastName, ],
         
         
      //   ],
      // }
      
      // )
    })
  
    console.log(arrBody+"","tt")
  },[0])
 
  return(
    <></>
  )
}


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



  

     <table id='#my-table' className="mytbale">  
     <tr>
        <th> SrNo</th>
        <th>Key</th>
        <th>Value</th>
      </tr>
      {/* {
      message.map((item,i)=>{
        console.log(message,"asdf")
        console.log(item,"item")
       return(
        
            <tr key={i}>
          <td >{i+1}</td>
          <td >{item.firstName}</td>
          <td >{item.lastName}</td>
          </tr>
        
       )
        })
      } */}
     
     </table>




{/* <table className="ui celled table" >
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
</table> */}

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
    // pdf.html(string,12, 53);\
    console.log(message,'fgf')

    var arrBody=[]
    var arrBodyOut=[]
    //age
    arrBodyOut.push("Position Applying For & Location")
    arrBodyOut.push(message[0].positionApplyingLocation)
    arrBody.push(arrBodyOut)
    //age
    var arrBodyOut1=[]
    var arrBodyOut2=[]
    var arrBodyOut3=[]
    var arrBodyOut4=[]
    var arrBodyOut5=[]
    var arrBodyOut6=[]
    var arrBodyOut7=[]
    var arrBodyOut8=[]
    var arrBodyOut9=[]
    var arrBodyOut10=[]
    var arrBodyOut11=[]
    var arrBodyOut12=[]
    var arrBodyOut13=[]
    var arrBodyOut14=[]
    var arrBodyOut15=[]
    var arrBodyOut16=[]
    var arrBodyOut17=[]
    var arrBodyOut18=[]
    var arrBodyOut19=[]
    var arrBodyOut20=[]
    var arrBodyOut21=[]
    var arrBodyOut22=[]
   

    arrBodyOut1.push("Day Of Sourcing")
    arrBodyOut1.push(message[0].dayOfSourcing)
    arrBody.push(arrBodyOut1)
    //age

 arrBodyOut2.push("Name of the Candidate" )
 arrBodyOut2.push(message[0].nameoftheCandidate)
 arrBody.push(arrBodyOut2)
 //age //age
    arrBodyOut3.push("Contact Number")
    arrBodyOut3.push(message[0].contactNumber)
    arrBody.push(arrBodyOut3)
    //age //age
    arrBodyOut4.push("Email Id")
    arrBodyOut4.push(message[0].emailId)
    arrBody.push(arrBodyOut4)
    //age //age
    arrBodyOut5.push("age")
    arrBodyOut5.push(message[0].age)
    arrBody.push(arrBodyOut5)
    //age //age
    arrBodyOut6.push("Highest Qualification" )
    arrBodyOut6.push(message[0].highestQualification)
    arrBody.push(arrBodyOut6)
    //age //age
    arrBodyOut7.push("Current Location" )
    arrBodyOut7.push(message[0].currentLocation)
    arrBody.push(arrBodyOut7)
    //age //age
    arrBodyOut8.push("Current Company")
    arrBodyOut8.push(message[0].currentCompany)
    arrBody.push(arrBodyOut8)
    //age //age
    arrBodyOut9.push("Current Designation")
    arrBodyOut9.push(message[0].currentDesignation)
    arrBody.push(arrBodyOut9)
    //age //age
    arrBodyOut10.push("Current Product")
    arrBodyOut10.push(message[0].currentProduct)
    arrBody.push(arrBodyOut10)
    //age //age
    arrBodyOut11.push("Avg Ticket Size" )
    arrBodyOut11.push(message[0].avgTicketSize)
    arrBody.push(arrBodyOut11)
    //age //age
    arrBodyOut12.push("ROI")
    arrBodyOut12.push(message[0].roi)
    arrBody.push(arrBodyOut12)
    //age //age
    arrBodyOut13.push("Average Buisness / Portfolio")
    arrBodyOut13.push(message[0].averageBuisness)
    arrBody.push(arrBodyOut13)
    //age //age
    arrBodyOut14.push("No Of Team Members")
    arrBodyOut14.push(message[0].naoOfTeamMembers)
    arrBody.push(arrBodyOut14)
    //age //age
    arrBodyOut15.push("No. of DSA")
    arrBodyOut15.push(message[0].noofDSA)
    arrBody.push(arrBodyOut15)
    //age //age
    arrBodyOut16.push("Total Years of Exp")
    arrBodyOut16.push(message[0].totalYearsofExp)
    arrBody.push(arrBodyOut16)
    //age //age
    arrBodyOut17.push("Relevant Years of Exp")
    arrBodyOut17.push(message[0].relevantYearsofExp)
    arrBody.push(arrBodyOut17)
    //age //age
    arrBodyOut18.push("Current CTC")
    arrBodyOut18.push(message[0].currentCTC)
    arrBody.push(arrBodyOut18)
    //age //age
    arrBodyOut19.push("Expected CTC " )
    arrBodyOut19.push(message[0].expectedCTC)
    arrBody.push(arrBodyOut19)
    //age //age
    arrBodyOut20.push("Notice Period")
    arrBodyOut20.push(message[0].noticePeriod)
    arrBody.push(arrBodyOut20)
    //age //age
    arrBodyOut21.push("Reason For Change")
    arrBodyOut21.push(message[0].reasonforChange)
    arrBody.push(arrBodyOut21)
    //age //age
    arrBodyOut22.push("Remarks ")
    arrBodyOut22.push(message[0].remarks)
    arrBody.push(arrBodyOut22)
    

    message.map((item,index)=>{
      var datar=item.firstName+","+item.lastName
      var arrBodyInn=[]

      arrBodyInn.push(item.firstName)
      arrBodyInn.push(item.lastName)
      arrBody.push(arrBodyInn)
      // autoTable(pdf, {
      
  
      //   head: [["key","Value"]],
      //   body: [
      //     [item.lastName, ],
      //     [item.lastName, ],
         
         
      //   ],
      // }
      
      // )
    })
    console.log([arrBody],"abc");
    autoTable(pdf, {
      

        head: [["key","Value"]],
        body: arrBody,
      }
      
      )
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
  //   pdf.html(string , {
  //     callback:async function (pdf) {
  //       // return pdf
  //       //  pdf.save();
  //       const firstDonorPdfBytes = pdf.output("arraybuffer")
  //       const secondDonorPdfBytes = item.buffer;
    
  //       const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes);
  //       const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes);
    
  //       const pdfDoc = await PDFDocument.create();
    
  //     const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])
    
  //     pdfDoc.addPage(firstDonorPage )
    
    
  //   console.log(secondDonorPdfDoc.getPages(),"pages")
    
  //   for (let index = 0; index < secondDonorPdfDoc.getPages().length; index++) {
  //     // const element = array[index];
  //     const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc,[index])
  //     pdfDoc.addPage( secondDonorPage)
      
  //   }
    
    
    
    
    
  //       const pdfBytes = await pdfDoc.save();
    
  //       require("downloadjs")(pdfBytes, message.firstName, "application/pdf");
  //     },
  //     x: 10,
  //     y: 10
  //  });


    // console.log(pdf.output("arraybuffer"), "pdf");
  
   
    
//     const firstDonorPdfBytes = pdf.output("arraybuffer")
//     const secondDonorPdfBytes = item.buffer;

//     const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes);
//     const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes);

//     const pdfDoc = await PDFDocument.create();

//   const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])

//   pdfDoc.addPage(firstDonorPage )


// console.log(secondDonorPdfDoc.getPages(),"pages")

// for (let index = 0; index < secondDonorPdfDoc.getPages().length; index++) {
//   // const element = array[index];
//   const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc,[index])
//   pdfDoc.addPage( secondDonorPage)
  
// }





//     const pdfBytes = await pdfDoc.save();

//     require("downloadjs")(pdfBytes, message.firstName, "application/pdf");
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
