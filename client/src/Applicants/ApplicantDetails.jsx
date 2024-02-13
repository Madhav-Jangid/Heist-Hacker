import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router-dom';

export default function ApplicantDetails() {


  const [navigate, setNavigate] = useState(false);

  const saveDetails = () => {
    localStorage.setItem('details', true);
    setNavigate(true);
  }



  return (
    <div className='InterViewerDetails' >
      <Navbar></Navbar>


      <h1>{(localStorage.getItem('type'))}</h1>

      {navigate ?
        <Navigate to={'/home'}></Navigate> : null
      }

      <div className="detailsFeild">
        <TextField
          className='inputFeild'
          id="outlined-basic2"
          label="Your Comapany Name / Organization"
          name='Organization'
          variant="standard"
          onChange={(e) => console.log(e.target.value)}
        />

        <TextField
          className='inputFeild'
          id="outlined-basic2"
          label="Your Work Position"
          name='workPosition'
          variant="standard"
          onChange={(e) => console.log(e.target.value)}
        />

        <TextField
          className='inputFeild'
          id="outlined-basic2"
          label="Discribe Your latest Project / Work"
          name='breif'
          variant="standard"
          onChange={(e) => console.log(e.target.value)}
        />


        <button onClick={saveDetails}>saveDetails</button>
      </div>
    </div>
  )
}
