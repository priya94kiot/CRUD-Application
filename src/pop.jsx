import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';




export default function Pop (abc){
  console.log(abc.fieldData)

  const updateData =()=>{//update data function copy on mark task 
    
fetch(`https://67d7ed199d5e3a10152c9b25.mockapi.io/employee/details/${abc.fieldData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.fieldData)//object varadha json change panaradhu
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then((task) => {
  alert("Successfully update")
  abc.setRefresh(!abc.refresh);
  // Do something with updated task
}).catch(error => {
  // handle error
})
abc.boxClose();//save panadhuku aprm popbox close
  };

//CREATE

  const createUser = () => {

    const newTask = {
      content: 'Check out mockapi.io',
      completed: false,
    };
    
    fetch('https://67d7ed199d5e3a10152c9b25.mockapi.io/employee/details', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(abc.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("Create succesfully.........")
      abc.setRefresh(!abc.refresh);
      // do something with the new task
    }).catch(error => {
      // handle error
    })
    abc.boxClose();
  }
    
    return(
        <>
        {/* <Button variant="success" onClick={handleShow}>
        Action
      </Button> */}

      <Modal show={abc.box} onHide={abc.boxClose}>
        <Modal.Header closeButton>
          <Modal.Title>{abc.fieldData.id ? "Edit Employee Details " : "Create New Data"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                autoFocus
                defaultValue={abc.fieldData.name}
                onChange={(e)=>abc.setFieldData({...abc.fieldData,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>emailId</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.fieldData.emailId}
                onChange={(e)=>abc.setFieldData({...abc.fieldData,emailId:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PhoneNo</Form.Label>
              <Form.Control
                type="phoneNo"
                placeholder="Enter your phonenumber"
                autoFocus
                defaultValue={abc.fieldData.phoneNo}
                onChange={(e)=>abc.setFieldData({...abc.fieldData,phoneNo:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="qualification"
                placeholder="Enter your Qualification"
                autoFocus
                defaultValue={abc.fieldData.qualification}
                onChange={(e)=>abc.setFieldData({...abc.fieldData,qualification:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="location"
                placeholder="Enter your location"
                autoFocus
                defaultValue={abc.fieldData.location}
                onChange={(e)=>abc.setFieldData({...abc.fieldData,location:e.target.value})}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={abc.boxClose}>
            Close
          </Button>
          {abc.fieldData.id ? <Button variant="info" onClick={updateData}>
            Save Data
          </Button> : <Button variant="success" onClick={createUser}>
            Create
          </Button>}
        </Modal.Footer>
      </Modal>
        
        </>
    )
}