import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <section id="main">
            <nav>
            <ul className="menu">
                <li>
                    <NavLink
                    exact
                    to="/home"
                    className="nav-link"
                    activeClassName= "nav-link active"
                  >About Me
                  </NavLink>
                </li>
                <li><NavLink
                    exact
                    to="/portfolio"
                    className="nav-link"
                    activeClassName= "nav-link active"
                  >Projects
                  </NavLink></li>
                <li><NavLink
                    exact
                    to="/skills"
                    className="nav-link"
                    activeClassName= "nav-link active"
                  >Skills
                  </NavLink></li>
                <li><a 
                href="https://github.com/richwilkinson">
                    GitHub
                    </a></li>
                <li><a href="https://www.linkedin.com/in/richard-wilkinson-a14b871b5/">LinkedIn</a></li>
            </ul>
        </nav>
        </section>
        
    )
}
export default Navbar;