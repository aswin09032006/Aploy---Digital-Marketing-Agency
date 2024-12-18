import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-header">
                <img src={logo} alt="" />
                <div className="footer-contact-details">
                    <div className="footer-contact-element">
                        <div className="footer-contact-logo">
                            <FiMessageSquare style={{fontSize:"1.5rem", color: 'lightblue'}}/>
                        </div>
                        <div className="footer-contact-detail">
                            <p>8200662857</p>
                            <p>aployglobal@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer-contact-element">
                        <div className="footer-contact-logo">
                            <CiLocationOn style={{fontSize:"1.5rem", color: 'lightblue'}}/>
                        </div>
                        <div className="footer-contact-detail">
                            <p>27 Division St, New York, NY-10002, United States</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content-container">
                <div className="footer-company-info">
                    <p>
                        Ewebot have much planned for the future, working with great clients and continued software development.
                    </p>
                    <div className="footer-social-logos">

                    </div>
                </div>
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li>seo marketing</li>
                        <li>seo services</li>
                        <li>pay per click</li>
                        <li>social media</li>
                        <li>seo audit</li>
                    </ul>
                </div>
                <div className="footer-nav-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="        ">
                <p>&copy; 2023 Aploy Global. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer