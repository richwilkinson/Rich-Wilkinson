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
                <li><a href="#">Skills</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </nav>
        </section>
        
    )
}
export default Navbar;