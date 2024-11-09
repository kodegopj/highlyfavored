import React from 'react';
import pc1 from "../../assets/Podcast/pc1.mp4";
import pc2 from "../../assets/Podcast/pc2.mp4";
import pc3 from "../../assets/Podcast/pc3.mp4";
import pc4 from "../../assets/Podcast/pc4.mp4";
import pc5 from "../../assets/Podcast/pc5.mp4";
import pc6 from "../../assets/Podcast/pc6.mp4";
import pc7 from "../../assets/Podcast/pc7.mp4";
import pc8 from "../../assets/Podcast/pc8.mp4";
import pc9 from "../../assets/Podcast/pc9.mp4";
import pc10 from "../../assets/Podcast/pc10.mp4";
import pc11 from "../../assets/Podcast/pc11.mp4";
import pc12 from "../../assets/Podcast/pc12.mp4";


function Podcast() {
  return (
    <div className='backphone' id='reels'>
        <div className='more__text'> 
         <b>Podcast</b>
        </div>

        <div className='container__reels'>

        {/* ---------- pc1 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc1} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- pc2 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc2} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- pc3 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc3} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- pc4 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc4} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>
        </div>

        {/* --------- container2 --------- */}

        <div className='container__reels'>

        {/* ---------- pc5 ----------- */}
          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc5} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- pc6 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc6} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- pc7 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc7} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* ---------- pc8 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc8} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ---------- Container3 ----------- */}

        <div className='container__reels'>
          
          {/* ---------- pc9 ----------- */}
          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc9} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* --------- pc10 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc10} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* --------- pc11 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc11} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

          {/* --------- pc12 ----------- */}

          <div className='card'>
            <div className='upper'>
            ------
            </div>
          <div className='phone21'>
            <video src={pc12} controls autoPlay muted loop className='phone1'></video>
          </div>
          <div className='lower'> 
            <div className='cir'>
              <div className='circle'>

              </div>
            </div>
          </div>
          </div>

    </div>


    </div>
  )
}

export default Podcast