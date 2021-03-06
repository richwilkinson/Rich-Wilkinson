import React from 'react';
import Navbar from '../../components/header'

function Home() {
    return(
        <>
        <Navbar />
        <div class="content">
        <div class="model">
        <img src="web-development-2.png" alt=""/>
        </div>
        <div class="main-text">
            <h1>Richard Wilkinson</h1>
            <p>My name is Richard Wilkinson, I am a full stack web developer who studied at the University of Miami. This portfolio will guide you through my qualificable skills, knowledge and some info about myself. I am a father of 3 children and am also married. I began studying coding in 2019 as a hobby (via tutorials and documentation). Since then I have really developed a passion to learn more and hone my coding skills. In my spare time I enjoy fishing and anything on the ocean. Please navigate my portfolio and see my latest work and qualificable skills.</p>
            <a href="#" class="portfolio-btn">See My Portfolio</a>
        </div>
        </div>
        </>
    )
}

export default Home;