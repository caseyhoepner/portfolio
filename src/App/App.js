import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Intro from '../Intro';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Project from '../Project';
import { projectData } from '../utils/projectData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Route exact path='/' component={Intro} />
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/' component={Skills} />
        <Route exact path='/' component={Projects} />
        <Route exact path='/:name' render={({match}) => {
          const { name } = match.params;
          const project = projectData.find(project => (
            project.name === name))
          return (
            <Project {...project} />
            )
          }} />
        <Route  path='/' component={Footer} />
      </div>
    );
  }
}

export default App;