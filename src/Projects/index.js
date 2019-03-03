import React from 'react';
import './Projects.css';
import Project from '../Project';
import { projectData } from '../utils/projectData'

const Projects = () => {
  const projects = projectData.map(project => {
    return (
      <div 
        className={`pp-${project.image} pp-project-container`}
        data={project}
        key={project.name} >
        <h1 className='pp-title'>{project.name}</h1>
      </div>
    )
  })

  return (
    <div id='projects' className='pp-container'>
      <h1>projects</h1>
      <div className='pp-projects-container'>
        { projects }
      </div>
    </div>
  )
}

export default Projects;