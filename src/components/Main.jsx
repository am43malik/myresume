import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import "./main.css";
import PdfDownload from "./PdfDownload";
import Uploadcv from "./Uploadcv";
import Fab from "@mui/material/Fab";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TextField from "@mui/material/TextField";
import './main.css'
// var message=[]
const Main = () => {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [positionApplyingLocation, setPositionApplyingLocation] = useState([]);
  const [dayOfSourcing, setDayOfSourcing] = useState([]);
  const [nameoftheCandidate, setNameoftheCandidate] = useState([]);
  const [contactNumber,setContactNumber] = useState([]);
  const [emailId,setEmailId] = useState([]);
  const [age,setAge] = useState([]);
  const [highestQualification,setHighestQualification] = useState([]);
  const [currentLocation,setCurrentLocation] = useState([]);
  const [currentCompany,setCurrentCompany] = useState([]);
  const [currentDesignation,setCurrentDesignation] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [avgTicketSize,setAvgTicketSize] = useState([]);
  const [roi,setRoi] = useState([]);
  const [averageBuisness,setAverageBuisness] = useState([]);
  const [naoOfTeamMembers,setNaoOfTeamMembers] = useState([]);
  const [noofDSA,setNoofDSA] = useState([]);
  const [totalYearsofExp,setTotalYearsofExp] = useState([]);
  const [relevantYearsofExp,setRelevantYearsofExp] = useState([]);
  const [currentCTC,setCurrentCTC] = useState([]);
  const [expectedCTC,setExpectedCTC] = useState([]);
  const [noticePeriod,setNoticePeriod] = useState([]);
  const [reasonforChange,setReasonforChange] = useState([]);
  const [remarks,setRemarks] = useState([]);



  const [message, setMessage] = useState([]);

  

  

  const handleSubmit = (event) => {
    console.log('first')
    event.preventDefault();

    

    setFirstName(firstName);
    setLastName(lastName);

    var obj = {
      firstName,
      lastName,
       positionApplyingLocation,
      dayOfSourcing,
      nameoftheCandidate,contactNumber,emailId,age,highestQualification,currentLocation,currentCompany,
      currentDesignation,currentProduct,avgTicketSize,roi,averageBuisness,naoOfTeamMembers,noofDSA,
      totalYearsofExp,relevantYearsofExp,currentCTC,expectedCTC,noticePeriod,reasonforChange,remarks   
    };
    setMessage([...message, obj]);
    console.log(message, "message");
  
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div  style={{
          marginTop:'5rem',
          padding:'1rem'
        
        }} >

        <TextField id="outlined-basic" variant="outlined"    sx={{m:'1.5rem',width: '30ch'}}    label="Position Applying For & Location"   value={positionApplyingLocation}  onChange={(event) => {
            setPositionApplyingLocation(event.target.value);}} />
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="Day Of Sourcing"   value={dayOfSourcing}  onChange={(event) => {
            setDayOfSourcing(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Name of the Candidate"  value={nameoftheCandidate}   onChange={(event) => {
            setNameoftheCandidate(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}   type='number'     label="Contact Number"   value={contactNumber}  onChange={(event) => {
            setContactNumber(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}   type='email'     label="Email Id"   value={emailId}  onChange={(event) => {
            setEmailId(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}  type='number'      label="Age"   value={age}  onChange={(event) => {
            setAge(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="Highest Qualification"   value={highestQualification}  onChange={(event) => {
            setHighestQualification(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Current Location"   value={currentLocation}  onChange={(event) => {
            setCurrentLocation(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="Current Company"   value={currentCompany}  onChange={(event) => {
            setCurrentCompany(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="Current Designation"   value={currentDesignation}  onChange={(event) => {
            setCurrentDesignation(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="Current Product"   value={currentProduct}  onChange={(event) => {
            setCurrentProduct(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="Avg Ticket Size"   value={avgTicketSize}  onChange={(event) => {
            setAvgTicketSize(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}        label="ROI"    value={roi} onChange={(event) => {
            setRoi(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Average Buisness / Portfolio"  value={averageBuisness}   onChange={(event) => {
            setAverageBuisness(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}  type='number'       label="No Of Team Members"  value={naoOfTeamMembers}   onChange={(event) => {
            setNaoOfTeamMembers(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}   type='number'      label="No. of DSA"  value={noofDSA}   onChange={(event) => {
            setNoofDSA(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined" sx={{m:'1.5rem',width: '30ch'}}    type='number'     label="Total Years of Exp"  value={totalYearsofExp}   onChange={(event) => {
            setTotalYearsofExp(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}  type='number'      label="Relevant Years of Exp"  value={relevantYearsofExp}   onChange={(event) => {
            setRelevantYearsofExp(event.target.value);}}/>
        <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Current CTC"  value={currentCTC}   onChange={(event) => {
            setCurrentCTC(event.target.value);}}/>
            <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Expected CTC "  value={expectedCTC}   onChange={(event) => {
            setExpectedCTC(event.target.value);}}/>
            <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Notice Period"  value={noticePeriod}   onChange={(event) => {
            setNoticePeriod(event.target.value);}}/>
            <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Reason For Change"  value={reasonforChange}   onChange={(event) => {
            setReasonforChange(event.target.value);}}/>
             <TextField id="outlined-basic" variant="outlined"  sx={{m:'1.5rem',width: '30ch'}}       label="Remarks "  value={remarks}   onChange={(event) => {
            setRemarks(event.target.value);}}/>
    
                  <div>
                  <TextField
          sx={{
            marginTop:'3rem',
              margin:'1rem',
             width: '50ch'
            
          }}
          id="outlined-basic"
          label="Key"
          variant="outlined"
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />

        
        <TextField
         sx={{
          marginTop:'3rem',
           margin:'1rem',
          width: '50ch',
          //
          
        }}
          id="outlined-basic"
          label="Value"
          variant="outlined"
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
                  </div>


      
        </div>
       

        <br />
        <br />

        <Button variant="contained" color="secondary" type="submit" sx={{
         width: '30ch',
         padding:'0.5rem'
        }}>
          Submit
        </Button>
        <br />
        <br />
      </form>

      {message.length > 0
        ? message.map((item, i) => {
            return (
              <div key={i}  style={{
                padding:'5px',
                borderStyle:'solid',
                width: '50ch',
                padding:'3px',
                borderWidth:'1px',
                alignItems:'center',
              justifyContent:'center',
              display: 'flex',
              marginLeft:'25rem',

                

              }}>
                
                <div style={{
                padding:'5px',
               fontSize:'20px',
              display:'flex',
              
              textAlign:'center',
              alignItems:'center',
              justifyContent:'center',
              display: 'flex'

              }}>
                 
               <p style={{
                marginLeft:'5px'
               }}> {i + 1}. </p>  
               <p style={{
                marginLeft:'25px'
               }}>{item.firstName}: </p>
                  <p style={{
                marginLeft:'25px'
               }}> {item.lastName}</p>
                  
                  <DeleteRoundedIcon 
                  sx={{ padding:'5px', marginTop:'1rem', marginLeft:'5rem',}}
                    onClick={() => {
                      setMessage(
                        message.filter((i) => item.lastName !== i.lastName)
                      );
                    }}
                  />
                </div>
              </div>
            );
          })
        : null}
     

      <PdfDownload message={message} />
    </div>
  );

  // return (
  //   <div>
  //      <form onSubmit={handleSubmit(onSubmit)}>
  //        <Box sx={{ width: '100%' }}>
  //     <Grid container >
  //       <Grid item xs={12}  md={6}>
  //         <div>

  //           <div>
  //           <label    className='label' htmlFor="name">Position Applying For & Location	</label>
  //          <input  className='input'   {...register("PositionApplying", { required: true })} id="name" type="text" /></div>
  //          {
  //           data.length !=0 ?
  //           (<p>Position Applying For & Location:    {data.PositionApplying}</p>) :null
  //          }
  //          <div>
  //          </div>
  //       </div>

  //           {

  //                  data.PositionApplying !== undefined ?
  //             (<div>
  //               <label  className='label' htmlFor="email">Day Of Sourcing	</label>
  //               <input className='input'   {...register("DayOfSourcing", { required: true })} id="email" type="text"/>
  //               {errors.exampleRequired && <span>This field is required</span>}
  //               <DeleteRoundedIcon onClick={(e)=>{
  //                 setData(Object.values(data).filter((i)=> data.PositionApplying !== i.PositionApplying))
  //               }} />
  //                 <p>Day Of Sourcing :{data.DayOfSourcing}</p>

  //              </div>

  //             ):null

  //           }
  //        {

  //                   data.DayOfSourcing !== undefined ?
  //                   (<div>
  //                     <label  className='label' htmlFor="email">Name of the Candidate	</label>
  //                     <input className='input'   {...register("NameoftheCandidate", { required: true })} id="email" type="text"/>
  //                     {errors.exampleRequired && <span>This field is required</span>}
  //                    </div>

  //                   ):null

  //                 }
  //                  {

  //                 data.NameoftheCandidate !== undefined ?
  //                 (<div>
  //                 <label  className='label' htmlFor="email">Contact Number</label>
  //       <input className='input'   {...register("ContactNumber", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.ContactNumber !== undefined ?
  //                 (<div>
  //                   <label  className='label' htmlFor="email">Email Id	</label>
  //       <input className='input'   {...register("EmailId", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.EmailId !== undefined ?
  //                 (<div>
  //                  <label  className='label' htmlFor="email">Age</label>
  //       <input className='input'   {...register("Age", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }

  //                {

  //                 data.Age !== undefined ?
  //                 (<div>
  //                   <label  className='label' htmlFor="email">Highest Qualification</label>
  //       <input className='input'   {...register("HighestQualification", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.HighestQualification !== undefined ?
  //                 (<div>
  //                   <label  className='label' htmlFor="email">Current Location	</label>
  //       <input className='input'   {...register("CurrentLocation", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.CurrentLocation !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">Current Company</label>
  //       <input className='input'   {...register("CurrentCompany", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.CurrentCompany !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">Current Designation	</label>
  //       <input className='input'   {...register("CurrentDesignation", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.CurrentDesignation !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">Current Product		</label>
  //       <input className='input'   {...register("CurrentProduct", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.CurrentProduct !== undefined ?
  //                 (<div>
  //                   <label  className='label' htmlFor="email">Avg Ticket Size		</label>
  //       <input className='input'   {...register("AvgTicketSize", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }

  //                {

  //                 data.AvgTicketSize !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">ROI		</label>
  //       <input className='input'   {...register("ROI", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.ROI !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">Average Buisness / Portfolio		</label>
  //       <input className='input'   {...register("AverageBuisness", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.AverageBuisness !== undefined ?
  //                 (<div>
  //                     <label  className='label' htmlFor="email">No Of Team Members		</label>
  //       <input className='input'   {...register("NoOfTeamMembers", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.NoOfTeamMembers !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">No. of DSA		</label>
  //       <input className='input'   {...register("NoofDSA", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.NoofDSA !== undefined ?
  //                 (<div>
  //                  <label  className='label' htmlFor="email">Total Years of Exp		</label>
  //       <input className='input'   {...register("TotalYearsofExp", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.TotalYearsofExp !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">Relevant Years of Exp		</label>
  //       <input className='input'   {...register("RelevantYearsofExp", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.RelevantYearsofExp !== undefined ?
  //                 (<div>
  //                   <label  className='label' htmlFor="email">Current CTC		</label>
  //       <input className='input'   {...register("CurrentCTC", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                {

  //                 data.CurrentCTC !== undefined ?
  //                 (<div>
  //                    <label  className='label' htmlFor="email">Expected CTC 		</label>
  //       <input className='input'   {...register("ExpectedCTC", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //               {

  //                 data.ExpectedCTC !== undefined ?
  //                 (<div>
  //                      <label  className='label' htmlFor="email">Notice Period	</label>
  //       <input className='input'   {...register("NoticePeriod", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //               {

  //                 data.NoticePeriod !== undefined ?
  //                 (<div>
  //                     <label  className='label' htmlFor="email">Reason For Change		</label>
  //       <input className='input'   {...register("ReasonForChange", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //               {

  //                 data.ReasonForChange !== undefined ?
  //                 (<div>
  //                   <label  className='label' htmlFor="email">Remarks 		</label>
  //       <input className='input'   {...register("Remarks", { required: true })} id="email" type="text"/>
  //       {errors.exampleRequired && <span>This field is required</span>}
  //                  </div>

  //                 ):null

  //               }
  //                  <Fab variant="extended" size="small" color="primary" aria-label="add"  type='submit'  onClick={handelAdd}  sx={{width:'18rem', margin:'1rem'}}>
  //         <AddIcon sx={{ mr: 2 , }} />
  //         Add
  //       </Fab>

  //     <div>

  //       {/* <Button variant="contained" color="primary">

  //       <input  {...register("file", { required: true })} name="file1" type="file" accept=".pdf"/>
  //       </Button> */}
  //       {errors.exampleRequired && <span>This field is required</span>}
  //     </div>
  //      </Grid>

  //     </Grid>
  //   </Box>
  //   <Button  type='submit' variant="contained">Submit</Button>
  //   </form>
  //  <PdfDownload     data={data}/>
  //  <Uploadcv/>

  //   </div>
  // )
};

export default Main;
