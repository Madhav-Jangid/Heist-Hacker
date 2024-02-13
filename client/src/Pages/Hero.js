import React from 'react';
import "../css/Hero.css"
import Navbar from '../Components/Navbar';
import { Link, Navigate } from 'react-router-dom';

export default function Hero() {
    return (
        <div>
            {JSON.parse(localStorage.getItem('IsLogined')) ?
                (JSON.parse(localStorage.getItem('details')) ?
                    <Navigate to={'/home'}></Navigate> : <Navigate to={`/${localStorage.getItem('type')}/details`}></Navigate>
                ) : null
            }
            <Navbar></Navbar>
            <h1>{JSON.stringify(localStorage.getItem('details'))}</h1>
            <section id="home" className="page parallax">
                <h1>Welcome to Interview Paradise!</h1>
                <p>Discover inspiring interviews that will broaden your perspective and knowledge.</p>
                <div className='authLinkCont'>
                    <Link className='homePageLinkToAuth' to={'/interviewer/login'}>Join as Interviewer</Link>
                    <Link className='homePageLinkToAuth' to={'/applicant/login'}>Join as Applicant</Link>
                </div>
            </section>

            <section id="about" className="page blog">
                <h2>About Interview Paradise</h2>
                <p>
                    At Interview Paradise, we bring you in-depth conversations with thought leaders, experts, and inspiring individuals from various fields. Explore the stories behind their success, challenges they've overcome, and the valuable insights they share.
                </p>
            </section>

            <section id="gallery" className="page blog">
                <h2>recordings</h2>
                <video src="/"></video>
            </section>

            <section id="services" className="page blog">
                <h2>Our Services</h2>
                <p>
                    Interview Paradise offers a range of services including event hosting, interview consultation, and personalized interview experiences. Contact us to schedule your next insightful conversation.
                </p>
            </section>

            <section id="contact" className="page blog">
                <h2>Contact Us</h2>
            </section>
        </div>
    )
}
