import React, { useState } from 'react'
var name=[]
const Uploadcv = () => {

const setFile=(event)=> {
    // Get the details of the files
    console.log(event.target.files)
     name= event.target.files
  }
  console.log(name,'gfdg')

  return (
    <div>
 <input type="file" name="docx" onChange={setFile} />
 {/* {console.log(file)} */}

    </div>
  )
}

export default Uploadcv