import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './CompoCss/Navbar.css';
import { Button } from '@mui/material';

export default function Navbar() {

    const [navigate,setNavigate] = useState(false)
    const logOutUser = ()=>{
        setNavigate(true);
        localStorage.clear();
    }


    return (
        <header className='navBar'>
            {navigate ? 
                <Navigate to={'/'}></Navigate> : ''
            }
            <h1>Live<span>Recruit</span></h1>
            <ul className="navigation">
                {JSON.parse(localStorage.getItem('IsLogined')) ?
                    localStorage.getItem('type') === 'applicant' ?
                        (JSON.parse(localStorage.getItem('details')) ?
                            <>
                                <li><Link className='navLink' to={'/applicant/home'}>Home</Link></li>
                                <li><Link className='navLink' to={'/applicant/about'}>About</Link></li>
                                <li><Link className='navLink' to={'/applicant/applications'}>Applications</Link></li>
                                <li><Link className='navLink' to={'/applicant/profile'}>Profile</Link></li>
                                <Button onClick={logOutUser}>Logout</Button>
                            </> :
                            <>
                                <li><Link className='navLink' to={'/applicant/login'}>Login</Link></li>
                                <li><Link className='navLink' to={'/applicant/signup'}>Sign up</Link></li>
                            </>
                        )
                        :
                        (JSON.parse(localStorage.getItem('details')) ?
                            <>
                                <li><Link className='navLink' to={'/interviewer/home'}>Home</Link></li>
                                <li><Link className='navLink' to={'/interviewer/about'}>About</Link></li>
                                <li><Link className='navLink' to={'/interviewer/applications'}>Interview's</Link></li>
                                <li><Link className='navLink' to={'/interviewer/profile'}>Profile</Link></li>
                                <Button onClick={logOutUser}>Logout</Button>

                            </> :
                            <>
                                <li><Link className='navLink' to={'/interviewer/login'}>Login</Link></li>
                                <li><Link className='navLink' to={'/interviewer/signup'}>Sign up</Link></li>
                            </>
                        )

                    : null
                }
            </ul>
        </header>
    );
}
