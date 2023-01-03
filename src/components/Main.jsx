import React, { useState } from "react";
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import "./main.css";
import PdfDownload from "./PdfDownload";
import Uploadcv from "./Uploadcv";
import Fab from "@mui/material/Fab";
// import AddIcon from '@mui/icons-material/Add';
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TextField from "@mui/material/TextField";
import './main.css'
// var message=[]
const Main = () => {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [message, setMessage] = useState([]);

  

  

  const handleSubmit = (event) => {
    console.log('first')
    event.preventDefault();

    

    setFirstName(firstName);
    setLastName(lastName);

    var obj = {
      firstName,
      lastName,
    };
    setMessage([...message, obj]);
    console.log(message, "message");
  
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div >
        <TextField
          sx={{
            marginTop:'2rem',
             marginLeft:'2rem',
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
          marginTop:'2rem',
          marginLeft:'5rem',
          width: '50ch',
          // display:'flex'
          
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
              <div key={i}>
                
                <p className="prag">
                 
                  {i + 1}. {item.firstName} : {item.lastName}{" "}
                  <DeleteRoundedIcon
                    onClick={() => {
                      setMessage(
                        message.filter((i) => item.lastName !== i.lastName)
                      );
                    }}
                  />
                </p>
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
