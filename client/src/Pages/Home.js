import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import InterviewerDetails from '../Interviewer/InterviewerDetails';
import LoadingBar from 'react-top-loading-bar';
import Navbar from '../Components/Navbar';
import '../Components/CompoCss/Navbar.css'

export default function Home({ isPrivate }) {

  const [progress, setProgress] = useState(0);

  return (
    <div className="MainScreen" style={{ display: 'flex' }}>

      {!JSON.parse(localStorage.getItem('details')) ? <Navigate to={'/interviewer/login'}></Navigate> : null}

      <div className='MainScreen' style={{ display: 'flex' }}>
        <LoadingBar color='var(--primary-text-bark)' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Navbar />
        <Routes>
        </Routes>
      </div>
    </div>

  );
}
