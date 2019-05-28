import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='f-container'>
      <div>
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
          >
          <img 
            className='f-social-icon'
            src={require('../utils/assets/social-icons/email.svg')} 
            alt="Click to send Casey an email"/>
        </a>
      </div>
      <p>Casey Hoepner &copy; {year}</p>
    </div>
  )
}

export default Footer;