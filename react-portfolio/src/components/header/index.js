import React from 'react';
import { NavLink } from "react-router-dom";

function navbar() {
    return(
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
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </nav>
    )
}
export default navbar;