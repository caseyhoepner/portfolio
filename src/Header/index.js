import React from 'react';
import './Header.css';
import chIcon2 from '../utils/assets/ch-icon2.png';
import educationIcon from '../utils/assets/education.svg';
import projectsIcon from '../utils/assets/projects.svg';

const Header = () => {
  
  return (
    <div className='h-container'>
      <a href=''>
        <img 
          className='h-main-icon' 
          src={chIcon2}
          alt='Main icon'
        />
      </a>
      <div className='h-nav-btns-container'>
        <a 
          className='h-nav-btn' 
          href='#am-about-me'>
          About Me</a>
        <a 
          className='h-nav-btn' 
          href='#pp-projects'>
          Education</a>
        <a 
          className='h-nav-btn' 
          href='#pp-projects'>
          Projects</a>
      </div>
    </div>
  )
}

export default Header;