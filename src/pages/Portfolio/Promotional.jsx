import React from 'react';
import p1 from "../../assets/Promotional/p1.mp4";
import p2 from "../../assets/Promotional/p2.mp4";
import p3 from "../../assets/Promotional/p3.mp4";
import p4 from "../../assets/Promotional/p4.mp4";
import p5 from "../../assets/Promotional/p5.mp4";

function Promotional() {
  return (
    <div className='backphone' id='reels'>
        <div className='more__text'> 
         <b>Promotional Content</b>
        </div>

        {/* ------ Container1 ------ */}
        <div className='container__reels'>

         {/* ---------- p1 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p1} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- p2 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p2} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- p3 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p3} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- p4 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p4} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ------ Container2 ------ */}
        <div className='container__reels'>

         {/* ---------- p5 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p5} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- p2 ----------- */}

          {/* <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p2} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div> */}

          {/* ---------- p3 ----------- */}

          {/* <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p3} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div> */}

          {/* ---------- p4 ----------- */}

          {/* <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={p4} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div> */}

        </div>

    </div>

    
  )
}

export default Promotional