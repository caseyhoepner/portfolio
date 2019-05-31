import React from 'react';
import './Intro.css';
import '../Header/Header.css';
import chIcon2 from '../utils/assets/ch-icon2.png';

const Intro = () => {
  
  return (
    <div className='i-container section parallax bg1'>
    <div className='h-container'>
      <a href=''>
        <img 
          className='h-main-icon' 
          src={chIcon2}
          alt='Main icon'
        />
      </a>
      <div className='h-nav-btns-container'>

        <a target="_blank" href="https://github.com/caseyhoepner">
          <img 
            className='f-social-icon'
            src={require('../utils/assets/social-icons/github.svg')} 
            alt="Click to navigate to Casey's github."/>
        </a>
        <a target="_blank" href="https://www.facebook.com/caseyhoepner">
          <img 
            className='f-social-icon'
            src={require('../utils/assets/social-icons/facebook.svg')} 
            alt="Click to navigate to Casey's facebook."/>
        </a>
        <a target="_blank" href="https://www.twitter.com/caseyhoepner">
          <img 
            className='f-social-icon'
            src={require('../utils/assets/social-icons/twitter.svg')} 
            alt="Click to navigate to Casey's twitter."/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/caseyhoepner/">
          <img 
            className='f-social-icon'
            src={require('../utils/assets/social-icons/linkedin.svg')} 
            alt="Click to navigate to Casey's linkedin."/>
        </a>
        <a 
          href="mailto:caseyhoepner@gmail.com"
          target='_blank'
          rel="noopener noreferrer"
          >
          <img 
            className='f-social-icon'
            src={require('../utils/assets/social-icons/email.svg')} 
            alt="Click to send Casey an email"/>
        </a>
      </div>
    </div>
      <h1 className='i-title'>Casey Hoepner</h1>
      <div className='i-break'></div>
      <h2 className='i-tagline'>Frontend Software Engineer</h2>
    </div>
  )
}

export default Intro;