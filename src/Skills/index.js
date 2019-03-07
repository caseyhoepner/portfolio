import React from 'react';
import { skillsData } from '../utils/skillsData'
import './Skills.css';

const Skills = () => {
  
  const skills = skillsData.map(domain => {
    const skillList = domain.skills.map(skill => {
      return <p className='s-skill-item' key={skill}>{skill}</p>
    });

    return (
      <div key={domain.name} className='s-skill'>
        <h2 className='s-subheading'>{domain.name}</h2>
        <img className='s-icon'
          src={require(`../utils/assets/skills-icons/${domain.image}`)}/> 

        { skillList }

      </div>
    )
  })    

  return (
    <div className='s-container'>
      <h1 className='s-title'>Skills</h1>
      <div className='s-skills'>

        { skills }
        
      </div>
    </div>
  )
}

export default Skills;