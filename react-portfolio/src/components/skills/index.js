import React from 'react';

function Skills(props) {
    return(
        <>
        <section id="client">
        <div className="c-box-container">	
        <div className="client-box">
            <h3>{props.name}</h3>
            <div className="star">
                <i className={props.rating}></i>
            </div>
            
            <p>{props.length}</p>
            <p>{props.projects}</p>
        </div>
        </div>
        </section>
        
        </>
    )
}
export default Skills;