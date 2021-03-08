import React from "react";

function Projects(props) {
    return(
        <section id="client">
        <div className="c-box-container">	
        <div className="client-box">
            <h3>{props.name}</h3>
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            
            <p>{props.description} </p>
            <a href={props.github}>Link to github</a>
        </div>
        </div>
        </section>
    )
}
export default Projects;