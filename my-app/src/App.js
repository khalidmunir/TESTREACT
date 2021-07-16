import './App.css'

import Cells from './cells'
import React from 'react'

function App() {
  const json=[
    {firstname: 'tye',lastname:'robo',age:2, inRepair:false},
    {firstname: 'rye',lastname:'toy',age:1, inRepair:true},
    {firstname: 'pye',lastname:'toaster',age:4, inRepair:true},
]

let cssClasses=''

const options = {}
const [state, setState] = React.useState({})
const idColIdx = options.idCol ? Object.keys(state.json[0]).indexOf(options.idCol) : 0
const handleRowClick=(e) =>{
  if (!e.currentTarget.classList.contains('selected')) {
    let selectedRow = {}
    state.json.forEach(row => {
        const rowId = row[Object.keys(row)[idColIdx]]
        if (rowId.toString() === e.currentTarget.id.toString())
            selectedRow = row
    });
}
else {

}


}

const createRows = () =>{
  return json.map((row, index) => {
  const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
    if (state.selectedRow === row ) {
        return <tr key={index} className={state.selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
            <Cells row={row}  />
        </tr>
    } else {
        return <tr key={index} className={state.selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
            <Cells  row={row}  />
        </tr>
    }

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
