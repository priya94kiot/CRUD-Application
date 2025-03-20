
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabel from './table';
import Container from 'react-bootstrap/Container';
import './App.css';
import Pop from './pop';
import { useState } from 'react';

function App() {
    const [show, setShow] = useState(false);//show pop box
    const [status,setStatus] = useState(false);//automatic refresh kaga state create panarum
    const [tempData,setTempData] = useState({//state temporary data
 });
    const handleClose = () => setShow(false);//close popbox 
    const handleShow = (rowData) => {
      if(rowData){
      setTempData(rowData);
    }else{
      setTempData(
        {
          name:null,
          emailId:null,
          phoneNo:null,
          qualification:null,
          location:null
        }
      )
    }
      setShow(true);//
    };

  return (
    <>
      <Pop refresh={status} setRefresh={setStatus} box={show} boxClose={handleClose} fieldData={tempData} setFieldData={setTempData} />
      <Tabel boxHandle={handleShow} update={status} setupdate={setStatus} />
      <Container />
      
    </>
  )
}

export default App
