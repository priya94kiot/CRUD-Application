import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export default function Tabel (x){

const[tabledata,setTabledata] = useState(null);//state

    useEffect(
        ()=>{
            fetch('https://67d7ed199d5e3a10152c9b25.mockapi.io/employee/details', {
                method: 'GET',
                headers: {'content-type':'application/json'},
              }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
              }).then(tasks => {
                setTabledata(tasks.reverse())//state
                // console.log(tasks)
                // Do something with the list of tasks
              }).catch(error => {
                // handle error
              })
        },[x.update]);
    
    console.log(tabledata);//
//DELETE DATA
const deleteUser = (id) =>{
fetch(`https://67d7ed199d5e3a10152c9b25.mockapi.io/employee/details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("Deleted Successfully");
  x.setupdate(!x.update)
  // Do something with deleted task
}).catch(error => {
  // handle error
  console.log(error);
})

}

    return(
        <div className="con">
          <button className="butt" onClick={()=>x.boxHandle()}>Add Data</button>
            <Table striped bordered hover>
      <thead>
        <tr className="head">
          <th>Sno</th>
          <th>Name</th>
          <th>EmailId</th>
          <th>PhoneNo</th>
          <th>Qualification</th>
          <th>Location</th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody>
        {tabledata&&tabledata.map((item,out)=>{
            return(
                <>
                <tr>
          <td>{out+1}</td>
          <td>{item.name}</td>
          <td>{item.emailId}</td>
          <td>{item.phoneNo}</td>
          <td>{item.qualification}</td>
          <td>{item.location}</td>
          <Button className="bt" onClick={()=>x.boxHandle(item)}>Edit</Button> 
          <Button className="bu" onClick={()=>deleteUser(item.id)}>Delete</Button>
        </tr>
                </>
            )
        })}
        
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>6</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
        </div>
    )
}