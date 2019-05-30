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
    const liveIcon = getLiveIcon();

    function getLiveIcon() {
      if(url != '') {
        return (
          <a 
            className='p-btn' 
            target="_blank" 
            href={url}>live
          </a>
        )
      }
    }

    const technologiesIcons = technologies.map(technology => {
      return (
        <img 
          className='p-tech-icon'
          src={require(`../utils/assets/technologies/${technology}`)}
          alt='tech icon'
          key={technology}
        />
      )
    })

    return (
      <div className={`p-position-${this.props.position} p-${this.props.slideDirection}-${this.props.projectIndex} p-container`}>
        <div className='p-project-content'>
          <h1 className='p-title'>{name}</h1>
          <div className='p-images'>
            <img 
              onClick={this.props.back}
              className='pp-back-icon pp-icon' 
              src={require('../utils/assets/back.svg')} />
            <img 
              className='p-project-img' 
              src={require(`../utils/assets/${image}-laptop.png`)} />
            <img 
              onClick={this.props.next}
              className='pp-next-icon pp-icon' 
              src={require('../utils/assets/next.svg')} />
          </div>
            <div className='p-btns'>
              { liveIcon }
              <a 
                className='p-btn' 
                target="_blank" 
                href={github}>repo</a>
            </div>
          <p className='p-text'>{description}</p>
          <div className='p-tech-icons'>
              { technologiesIcons }
          </div>
        </div>
      </div>
    )
    
  }
}

export default Project;