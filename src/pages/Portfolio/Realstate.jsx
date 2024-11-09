import React from 'react';
import rs1 from "../../assets/Realstate/rs1.mp4";
import rs2 from "../../assets/Realstate/rs2.mp4";
import rs3 from "../../assets/Realstate/rs3.mp4";

function Realstate() {
  return (
    <div className='backphone' id='reels'>
        <div className='more__text'> 
        <b>Realstate</b>
        </div>

        {/* ------ Container1 ------ */}
        <div className='container__reels'>

            {/* ---------- rs1 ----------- */}

            <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={rs1} controls autoPlay muted loop className='phone1'></video>
            </div>
            <div className='lower'> 
                <div className='cir'>
                <div className='circle'>

                </div>
                </div>
            </div>
            </div>

            {/* ---------- rs2 ----------- */}

            <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={rs2} controls autoPlay muted loop className='phone1'></video>
            </div>
            <div className='lower'> 
                <div className='cir'>
                <div className='circle'>

                </div>
                </div>
            </div>
            </div>

            {/* ---------- rs3 ----------- */}

            <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={rs3} controls autoPlay muted loop className='phone1'></video>
            </div>
            <div className='lower'> 
                <div className='cir'>
                <div className='circle'>

                </div>
                </div>
            </div>
            </div>

            {/* ---------- rs4 ----------- */}

            {/* <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={rs4} controls autoPlay muted loop className='phone1'></video>
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

export default Realstate