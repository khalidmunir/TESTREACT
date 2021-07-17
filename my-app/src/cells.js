import React from 'react';

const Cells =({selectedRow,row,textInputChange,checkInputChange })=>{
    
    
    var cols=Object.keys(row)


    const inputChange = (e)  =>{
    const name= e.currentTarget.name.toString() 
    const value=e.currentTarget.value
    textInputChange(name,value)

    }
   
    return cols.map((key)=>{
      
     if(typeof row[key]==="boolean"){
        return <td key={key} >
            <input name={key} type="checkbox" checked={row[key]}></input>
          </td>
     }else{

     }
     return <td key={key}><input  name={key} onChange={inputChange} value={row[key].toString()}></input> </td>

    })



}

export default Cells

