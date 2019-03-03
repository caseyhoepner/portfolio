import React from 'react';
import './Projects.css';
import Project from '../Project';
import { projectData } from '../utils/projectData'

const Projects = () => {
  const projects = projectData.map(project => {
    return (
      <Project 
        data={project}
        key={project.name} />
    )
  })

  return (
    <div>
      <h1 id='pp-projects'>Projects</h1>
      <div className='pp-container'>
        { projects }
      </div>
    </div>
  )
}

export default Projects;