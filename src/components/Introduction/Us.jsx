import React from 'react'
import "../../Styles/Introduction.css";
import { Link } from 'react-router-dom';

function Us() {
  return (
    <div className='us'>
         <button className='about__us'>
         <Link to="/about" className="aboutpage"> <b>About Us</b> </Link>
         </button>
    </div>
  )
}

export default Us