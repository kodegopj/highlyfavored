import React from 'react';
import e1 from "../../assets/Educational/e1.mp4"
import e2 from "../../assets/Educational/e2.mp4"
import e3 from "../../assets/Educational/e3.mp4"

function Educational() {
  return (
    <div className='backphone' id='reels'>
        <div className='more__text'> 
        <b>Educational Content</b>
        </div>

        {/* ------ Container1 ------ */}
        <div className='container__reels'>

            {/* ---------- 11 ----------- */}

            <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={e1} controls autoPlay muted loop className='phone1'></video>
            </div>
            <div className='lower'> 
                <div className='cir'>
                <div className='circle'>

                </div>
                </div>
            </div>
            </div>

            {/* ---------- e2 ----------- */}

            <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={e2} controls autoPlay muted loop className='phone1'></video>
            </div>
            <div className='lower'> 
                <div className='cir'>
                <div className='circle'>

                </div>
                </div>
            </div>
            </div>

            {/* ---------- e3 ----------- */}

            <div className='card'>
                <div className='upper'>
                ------
                </div>
            <div className='phone21'>
                <video src={e3} controls autoPlay muted loop className='phone1'></video>
            </div>
            <div className='lower'> 
                <div className='cir'>
                <div className='circle'>

                </div>
                </div>
            </div>
            </div>

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

export default Educational