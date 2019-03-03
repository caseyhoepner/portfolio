import React from 'react';
import './Header.css';
import meIcon from '../utils/assets/me.svg';
import educationIcon from '../utils/assets/education.svg';
import projectsIcon from '../utils/assets/projects.svg';

const Header = () => {
  
  return (
    <div className='h-container'>
      <img 
        className='h-main-icon' 
        src={meIcon}
        alt='Main icon'
      />
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