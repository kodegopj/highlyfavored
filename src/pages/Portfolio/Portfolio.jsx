import React from 'react';
import Navbar from '../../components/Navbar';
import Podcast from './Podcast';
import Promotional from './Promotional';
import Smcontent from './Smcontent';
import Realstate from './Realstate';
import Educational from './Educational';

function Portfolio() {
  return (
    <div>
      <Navbar/>
      <Podcast/>
      <Promotional/>
      <Smcontent/>
      <Realstate/>
      <Educational/>

        
    </div>
  )
}

export default Portfolio