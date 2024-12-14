import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <section className='welcome__section'>
      
       <div className='studio'>
            Welcome to HighVision Media
        </div>

        <div className='lets'>
            LET'S <p className='make'>MAKE</p> YOUR
        </div>

        <div className='lets'>
           VIDEO LOOKS
        </div>

        <div className='lets'>
          MORE <p className='make'>COOL</p>
        </div>

        <div className='engage'>
        Engage your audience with stunning videos  not only to capture attention but to turn viewers into loyal customers.
        
        </div>
        <div className='unlock'>
         <b className='marketing'>"Unlock the Power of Video Marketing:</b> More Leads, More Sales, More Growth!"
        </div>

        <button className='get'>
            <Link to="/contact"> <b>GET STARTED</b></Link>
        </button>
       
    </section>
  )
}

export default Landing;