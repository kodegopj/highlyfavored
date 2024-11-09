import React, { useRef } from 'react';
import {  FaTimes } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";
import "../Styles/Nav.css";
import { Link } from 'react-router-dom';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <div className='nav-head'>
        
        <p className='hf'></p> <b className='favored'>Highly Favored</b> {" "}
       
        <nav ref={navRef} className='navname'>
            {/* <a href="#home">Home</a>
            <a href="#showreel">About</a>
            <a href="#reels">Portfolio</a> */}
            {/* <a href="#contacts" className='contact'>
                Contact Us
            </a> */}
            <Link to="/home" className="home"> Home </Link>
            <Link to="/about" className="aboutpage"> About </Link>
            <Link to="/portfolio" className="portfolio"> Portfolio </Link>
            <Link to="/contact" className="contact"> Contact Us </Link>

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
            <RiApps2Line/>
        </button>
    </div>
  )
}

export default Navbar