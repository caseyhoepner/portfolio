import React from 'react';
import './Project.css';

const Project = (props) => {
  const { name, description, technologies, url, github, image, spec } = props.data;
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
    <div className='p-container'>
      <div>
        <h1>{name}</h1>
        <img className='p-project-img' src={require(`../utils/assets/${image}.png`)} />
        <button>
          <a target="_blank" href={url}>LIVE</a>
        </button>
        <button>
          <a target="_blank" href={github}>GITHUB</a>
        </button>
        <button>
          <a target="_blank" href={spec}>SPEC</a>
        </button>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <h3>Technologies Used:</h3>
          { technologiesIcons }
        </div>
      </div>
    </div>
  )
}

export default Project;