import './App.css'

import Cells from './cells'
import React from 'react'

function App() {
  const data=[
    {firstname: 'tye',lastname:'robo',age:2, inRepair:false},
    {firstname: 'rye',lastname:'toy',age:1, inRepair:true},
    {firstname: 'pye',lastname:'toaster',age:4, inRepair:true},
]

let cssClasses=''

const options = {}
const [selectedRow, setSelectedRow] = React.useState({})
const [json, setJson] = React.useState(data)

const idColIdx = options.idCol ? Object.keys(json[0]).indexOf(options.idCol) : 0

const textInputChange = (name, value)=> {
  console.log('textInputChange::name',name)
  console.log('textInputChange::value',value)


    // setSelectedRow(selectedRow)

  console.log({...selectedRow, [name]: value })
  console.log('json before ', json)
  setSelectedRow(selectedRow, selectedRow[name] = value.toString() )
  // setJson(json, json[0].age = 99)
  
  console.log('json after ', json)
  
}

const handleRowClick=(e) =>{
  if (!e.currentTarget.classList.contains('selected')) {
    let selectedRow = {}
    json.map(row => {
        const rowId = row[Object.keys(row)[idColIdx]]
        if (rowId.toString() === e.currentTarget.id.toString())
            selectedRow = row
    });
    console.log('json before ', json)

    setSelectedRow(selectedRow)

    console.log('json after ', json)
}
else {

}


}

const createRows = () =>{
  let index = 10
  return json.map(row => {


  const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
  console.log('row', row)
  console.log('rowId', rowId)
  

  // const res = 
   
        return <tr key={index++} className={selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
            <Cells textInputChange={textInputChange} row={row}  />
        </tr>
    

})
}



  return (
    <div className="App">
      <header className="App-header">
        Test Page
      </header>

      <div className="main">
<table>
  <thead>
    <tr>
      <th>FirstName</th> <th>LastName</th ><th>age</th><th>inRepair</th>
    </tr>
  </thead>
  <tbody>
    {createRows()}
  </tbody>
</table>


      </div>
    </div>
  );
}

export default App;
