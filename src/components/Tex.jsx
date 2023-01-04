import React, { useEffect } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const Tex = () => {
    useEffect(()=>{
test()
    },[0])
const test=()=>{

const doc = new jsPDF()

// It can parse html:
// <table id="my-table"><!-- ... --></table>
// autoTable(doc, { html: '#my-table' })

// Or use javascript directly:
autoTable(doc, {
  head: [['Name', 'Email', 'Country']],
  body: [
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    // ...
  ],
})

doc.save('table.pdf')
}

  return (
    <div>
      
    </div>
  )
}

export default Tex
