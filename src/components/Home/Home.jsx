import React from 'react';
import Navbar from '../Navbar.jsx';
import Landing from "./Landing";
import "../../Styles/Home.css";
import Showreel from '../Reels/Showreel.jsx';
import Reels from '../Reels/Reels.jsx';
import Skills from "../Reels/Skills";
import Footer from '../Footer/Footer.jsx';


function Home() {
  return (
    <div>
        <div className='home__main' id='home'>
            <Navbar/>
            <div className='home__img'>
                <Landing/>
            </div>
            <Showreel/>
            <Reels/>
            <Skills/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home