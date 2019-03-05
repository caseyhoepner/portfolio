import React, {Component} from 'react';
import './Projects.css';
import Project from '../Project';
import { projectData } from '../utils/projectData'

export class Projects extends Component {
  constructor() {
    super()
    this.state = ({
      projectIndex: 0,
      slideDirection: null
    }) 
  }

  next = () => {
    const { projectIndex } = this.state;

    if (projectIndex === projectData.length - 1) {
      this.setState({ 
        projectIndex: 0,
        slideDirection: 'right'
      })
    } else {
      this.setState({ 
        projectIndex: projectIndex + 1,  
        slideDirection: 'right'
      })
    }
  }

  back = () => {
    const { projectIndex } = this.state;

    if (projectIndex === 0) {
      this.setState({ 
        projectIndex: projectData.length - 1,
        slideDirection: 'left' 
      })
    } else {
      this.setState({ 
        projectIndex: projectIndex - 1, 
        slideDirection: 'left' 
      })
    }
  }

  render() {
    const { slideDirection, projectIndex } = this.state;
    return (
      <div id='projects' className='pp-container'>
        <div className='pp-projects-container'>
          <img 
            onClick={this.back}
            className='pp-back-icon pp-icon' 
            src={require('../utils/assets/back.svg')} />
          <Project
            data={ projectIndex === 0 ? projectData[4] : projectData[projectIndex - 1] }
            slideDirection={slideDirection}
            projectIndex={ projectIndex === 0 ? 4 : projectIndex - 1 }
            position={'left'} />       
          <Project
            data={projectData[projectIndex]}
            slideDirection={slideDirection}
            projectIndex={projectIndex} 
            position={'middle'} />
          <Project
            data={ projectIndex === 4 ? projectData[0] : projectData[projectIndex + 1] }
            slideDirection={slideDirection}
            projectIndex={ projectIndex === 4 ? 0 : projectIndex + 1 }
            position={'right'} />       
          <img 
            onClick={this.next}
            className='pp-next-icon pp-icon' 
            src={require('../utils/assets/next.svg')} />
        </div>
      </div>
    )
  }
}

export default Projects;