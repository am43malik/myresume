import React from 'react'
import './table.css'
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Test = () => {
  return (
    <div>

<div>
    {/* <div  style={{
        width:'50px',
        height:'50px',
        backgroundColor:'red'
    }}>

    </div>
    <div  style={{
        width:'50px',
        height:'50px',
        backgroundColor:'green'
    }}>

    </div> */}

<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
<div ref={ref}>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
</div>


<p>To understand the example better, we have added borders to the table.</p>
</div>
        
    </div>
  )
}

export default Test