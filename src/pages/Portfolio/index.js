import React, { Component } from 'react';
import Navbar from '../../components/header';
import Footer from '../../components/footer'
import Projects from '../../components/projects';
import ProjectArray from '../../projects.json'

class Portfolio extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      projects: ProjectArray
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <>
        <Navbar/>
        <section id="client">
        <div className="client-heading">
        
        <h3>Projects</h3>
        </div>  
          {this.state.projects.map(project => (
            <Projects
              id={project.id}
              key={project.id}
              name={project.name}
              deployed={project.Deployed}
              description={project.Description}
            />
          ))}
        </section>
        <Footer />
        </>
      );
    }
  }

export default Portfolio;