import React, { Component }from 'react';
import './Project.css';

export class Project extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      slideDirection: null
    }) 
  }

  render() {
    const { name, description, technologies, url, github, image, spec } = this.props.data;
    const technologiesIcons = technologies.map(technology => {
      return (
        <img 
          className='p-tech-icon'
          src={require(`../utils/assets/${technology}`)}
          alt='tech icon'
          key={technology}
        />
      )
    })

    return (
      <div className={`p-position-${this.props.position} p-${this.props.slideDirection}-${this.props.projectIndex} p-container`}>
        <h1 className='p-title'>{name}</h1>
        <img 
          className='p-project-img' 
          src={require(`../utils/assets/${image}-laptop.png`)} />
          <div className='p-btns'>
            <a 
              className='p-btn' 
              target="_blank" 
              href={url}>live</a>
            <a 
              className='p-btn' 
              target="_blank" 
              href={github}>repo</a>
            <a 
              className='p-btn' 
              target="_blank" 
              href={spec}>spec</a>
          </div>
        <p className='p-text'>{description}</p>
        <div className='p-tech-icons'>
            { technologiesIcons }
        </div>
      </div>
    )
    
  }
}

export default Project;