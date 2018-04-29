import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink to="/" className="navbar-brand">Expensify</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="is-active" exact={true}>Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/create" className="nav-link" activeClassName="is-active">Create </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/help" className="nav-link" activeClassName="is-active">Help </NavLink>
                    </li>
                </ul>
                <a href="https://ikram-ud-daula-indecision-app.herokuapp.com/" className="btn btn-outline-light btn-sm ml-2">Indecision App</a>
                <button className="btn btn-outline-light btn-sm ml-2">Angular App</button>
            </div>
        </div>
    </nav>
);
 
export default Header;