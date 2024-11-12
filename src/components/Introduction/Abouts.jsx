import React from "react";
import "../../Styles/Introduction.css";
import Us from "./Us.jsx";
import Hiring from "./Hiring.jsx";
import Pa3 from "./Pa3.jsx";

function About() {
  return (
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
        <Us />
        <Hiring />
        <Pa3 />
      </div>
    </div>
  );
}

export default About;
