import React, { Component } from 'react';
import Navbar from '../../components/header';
import Footer from '../../components/footer';
import SkillsArray from '../../skills.json';
import Skills from '../../components/skills'

class Expertise extends Component {
    state = {
        skills: SkillsArray
      };

      render(){
        return(
        <>
        <>
        <Navbar/>
        <section id="main">
        <div className="client-heading">
        <span>Skills</span>
        <h3>Known Languages</h3>
        </div>  
          {this.state.skills.map(skill => (
            <Skills
              id={skill.id}
              key={skill.id}
              name={skill.name}
              length={skill.length}
              projects={skill.projects}
              rating={skill.rating}
            />
          ))} 
        </section>
        <div className="client-heading">
        <span>Skills</span>
        <h3>Known Languages</h3>
        </div>  
          {this.state.skills.map(skill => (
            <Skills
              id={skill.id}
              key={skill.id}
              name={skill.name}
              length={skill.length}
              projects={skill.projects}
              rating={skill.rating}
            />
          ))}
          <Footer />
        </>
        </>
        )
      }
}

export default Expertise;