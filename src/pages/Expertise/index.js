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
        <section id="client">
        <div className="client-heading">
          <br></br>
          <br></br>
        <h3>Skills</h3>
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
          <Footer />
        </>
        </>
        )
      }
}

export default Expertise;