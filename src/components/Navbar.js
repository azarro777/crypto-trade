import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
            Crypto Trader
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;