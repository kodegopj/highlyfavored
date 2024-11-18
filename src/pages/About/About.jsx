import React from "react";
import Navbar from "../../components/Navbar";
import Abouts from "../../components/Introduction/Abouts";
import Us from "../../components/Introduction/Us";
import Hiring from "../../components/Introduction/Hiring";
import { Link } from 'react-router-dom';
import "../../Styles/About.css";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div>
      <div className="about">
        <div className="Who__text">
          <b>Who we are</b>
        </div>
        <div className="p__text">
          HighVision Media is a video editing agency whose mission is to provide
          clients with an opportunity to tell their stories and reach more
          people with video.
        </div>
        <br />
        <div className="p__text">
          We started HighVision Media after we realized that entrepreneurs,
          businesses, and influencers don't always have the expertise or
          resources to edit their videos.
        </div>

        <div className="whobox">
          <div className="Who__text1">
          <b>More than just a video editing company </b>
          </div>
          <div className="Who__text1">
            <b>A trusted partner </b>
          </div>
        </div>
        
        {/* <div className="Who_text1">
         A trusted partner 
        </div> */}

        <div className="p__text">
        HighVision Media is a video post-production boutique agency located in Philippines, working remotely for international clients that need help with their videos.

        Back in 2022, Paul John, Hanz and Andrei,  with a passion for video editing started the company in the Orphanage House.
        </div>

        <br />

        <div className="p__text">
        Slowly we expended to a small team serving hundreds of clients all over the world... from big multi-national companies to individuals.

        Our in-house team is made up of a handful of very passionate Video Editors, a Marketing Manager, a Content Manager.
        </div>

        <br/>

        <div className="whobox">
          <div className="Who__text1">
            <b>What sets us apart from</b>
          </div>
          <div className="Who__text1">
            <b> other video agencies?</b>
          </div>
        </div>


        <div className="p__text">
          With us, you get one or more dedicated video editors who learn your style, your personal touch, and the fine details that make your videos YOUR VIDEOS.
        </div>

        <br />

        <div className="p__text">
          Last but not least, we are a boutique video agency. We're small, and that is an advantage for you. You get the attention you need. Our resources are not oversubscribed and shared between too many clients.
        </div>

        {/* ----------about section ---------- */}
        <div className="about__img">
          <div className="p1">
            <div className="paul"></div>

            <div>
              <div className="name__text">
              <i>Paul John Cunanan, </i>
              </div>
              <div className="name__text">
                <b><i>Founder of HighVision Media</i></b>
              </div>
            </div>
          </div>

          <div className="p2">
            <div className="hanz"></div>

            <div>
              <div className="name__text">
                <i>Hanz Jonvi Malata,</i>
              </div>
              <div className="name__text">
                <b><i>Co-Founder of HighVision Media</i></b>
              </div>
            </div>
          </div>

          <div className="p1">
            <div className="andrey"></div>

            <div>
              <div className="name__text">
                <i>Andrey Flordeliza</i>
              </div>
              <div className="name__text">
                <b><i>Senior Editor of HighVision Media</i></b>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="ready">
          <b> Ready to start your video?</b>
        </div>
        
        <div className="contactbutton">
          <div className='contact__box'>
            <button  className='contactss'>
            <Link to="/contact" className="contact"> <b>Contact Us</b> </Link>
          </button>
          </div>
        </div>

        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default About;
