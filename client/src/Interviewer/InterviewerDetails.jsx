import { TextField } from '@mui/material';
import React, { useState } from 'react';
import "./interViewerDetails.css"
import { Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function InterviewerDetails() {

    const [navigate, setNavigate] = useState(false);

    const saveDetails = () => {
        localStorage.setItem('details', true);
        setNavigate(true);
    }

    return (
        <div className='InterViewerDetails' >
            {JSON.parse(localStorage.getItem('details')) ?
                <Navigate to={'/home'}></Navigate> : <Navigate to={`/${localStorage.getItem('type')}/details`}></Navigate>
            }
            <Navbar></Navbar>

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
