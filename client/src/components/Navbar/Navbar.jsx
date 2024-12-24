import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar-container'>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={24} color="#0F110F" /> : <FiMenu size={24} color="#0F110F" />}
            </div>
        </div>
    );
}

export default Navbar;
