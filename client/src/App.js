import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import InterviewerDetails from './Interviewer/InterviewerDetails';
import Hero from './Pages/Hero';
import Home from './Pages/Home';
import ApplicantDetails from './Applicants/ApplicantDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />}></Route>


        <Route path='/applicant/signup' element={<Signup user={"applicant"} />}></Route>
        <Route path='/applicant/login' element={<Login user={"applicant"} />}></Route>
        <Route path='/applicant/details' element={<ApplicantDetails />}></Route>


        <Route path='/interviewer/signup' element={<Signup user={"interviewer"} />}></Route>
        <Route path='/interviewer/login' element={<Login user={"interviewer"} />}></Route>
        <Route path='/interviewer/details' element={<InterviewerDetails />}></Route>

        
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
