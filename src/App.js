import React, { Component } from 'react';
import './App.css';
import Hero from './components/HeroComponent';
import About from './components/AboutComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';
import Projects from './components/ProjectsComponent';
import { PROJECTS } from './shared/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS
    };
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Projects projects={this.state.projects} />
        <Contact />
        <Footer />
      </div>
    ); 
  }

}

export default App;
