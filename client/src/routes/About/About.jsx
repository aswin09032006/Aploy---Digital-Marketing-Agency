import React from 'react'
import bulb from '../../assets/bulb.png'
import dotted_path from '../../assets/dotted_path.png'
import rocket from '../../assets/rocket.png'
import scratch from '../../assets/scratch.png'
import './About.css'

const About = () => {
    return (
        <div className='about-page-container'>
            <div className="about-page-hero-section">
                <h1 className="about-page-hero-title">About Us</h1>
                <p className="about-page-hero-text">A-ploy Global is a dynamic consultancy firm based in Surat that is dedicated to empowering businesses and individuals to achieve their full potential. We provide innovative strategies and personalized solutions tailored to the unique needs of our clients. Our mission is to drive comprehensive growth and operational excellence, enabling our clients to thrive in a competitive landscape.</p>
                <div className="about-page-hero-bg-elements">
                    <div className="about-page-hero-circle-blue"></div>
                    <div className="about-page-hero-circle-sandal"></div>
                    <img src={bulb} alt="" className='bulb'/>
                    <img src={rocket} alt="" className='rocket'/>
                    <img src={dotted_path} alt="" className='dotted_path'/>
                    <img src={scratch} alt="" className='scratch'/>
                </div>
            </div>
        </div>
    )
}

export default About
    