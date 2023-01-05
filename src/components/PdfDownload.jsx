import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { renderToString } from "react-dom/server";
import Button from "@mui/material/Button";
// import pdfe from "../assets/pdf.pdf";
import logo from "../assets/pdflogo.png";
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



  const getBase64 = async (e) => {
    var file = e.target.files[0];
    const buffer = await file.arrayBuffer();
    let byteArray = new Int8Array(buffer);

    setItem(byteArray);
  };
  


 

  async function createPdf() {
    
    console.log(item.buffer);
    const pdf =  new jsPDF()

    pdf.addImage(logo, "PNG", 10, 5, 40, 30);
    
    
    console.log(message,'fgf')

    var arrBody=[]
    var arrBodyOut=[]
   
    var arrBodyOut0=[]

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
   
    arrBodyOut0.push("Position Applying For & Location")
    arrBodyOut0.push(message[0].positionApplyingLocation)
    arrBody.push(arrBodyOut0)

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
    
    })
    console.log([arrBody],"abc");
    autoTable(pdf, {
      
      margin: { top: 40 },
        head: [["key","Value"]],
        body: arrBody,
      }
      
      )
      pdf.setTextColor(100);
      pdf.setFontSize(8);
      // pdf.text("Add -.", 10, 2);
      pdf.text("Address: Unit No -3, H 272. Bharat Tower, Palam Vihar, Near Krishna Chowk, Gurugram -122017 ", 10, 285);
      // pdf.text("    ", 30, 275);
      pdf.text("Contact: 7011724492", 10, 290);
    




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

    


      <Button     sx={{
        m:'2rem',
        width: '30ch',
      }} onClick={createPdf} variant="contained" color="secondary">
        Download
      </Button>

      <div>
        
      
      </div>




    




    </div>
  );
};

export default PdfDownload;

