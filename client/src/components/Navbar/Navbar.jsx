import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
