import React from 'react';
import "../../Styles/Reels.css";
import pc1 from "../../assets/Podcast/pc1.mp4";
import pc2 from "../../assets/Podcast/pc2.mp4";
import pc3 from "../../assets/Podcast/pc3.mp4";
import pc4 from "../../assets/Podcast/pc4.mp4";


function Reels() {
  return (
    
    <div className='backphone' id='reels'>
        <div className='more__text'> <b>More Sample</b></div>
     <div className='container__reels'>
      
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
   
    </div>
  )
}

export default Reels