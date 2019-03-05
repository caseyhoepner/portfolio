import React from 'react';
import mePic from '../utils/assets/pic.jpg';
import './AboutMe.css';

const AboutMe = () => {

  return (
    <div id='about-me'>
      <div className='am-content-container'>
        <img className='am-me-icon'src={mePic}/>
        <div className='am-text-container'>
          <h2>Hi, I'm Casey.</h2>
          <p className='am-text'>As an ESL teacher, social worker, and world traveler turned front-end software engineer, I bring unique skills and experiences with me into every new endeavor. I chose to switch gears and join the tech industry in order to combine my love for learning languages, eye for design, and desire to make a positive impact on the world.</p>
          <p className='am-text'>I am currently seeking a position as a front-end software developer at a socially-conscious, values-driven company. My aptitude for empathy, communication, and collaboration will make me a natural addition to any development team.</p>
        </div>
      </div>
      <div className='am-break'></div>
    </div>
  )
}

export default AboutMe;