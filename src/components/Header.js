import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActivePath: location.pathname
        };
    }

    linkClicked = () => {
        this.setState(()=>({isActivePath:location.pathname}));
    };
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Expensify</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li onClick={this.linkClicked} className={`nav-item ${this.state.isActivePath==='/dashboard'||this.state.isActivePath==='/'?'active':''}`}>
                                <NavLink to="/dashboard" className="nav-link" activeClassName="no-class">Home </NavLink>
                            </li>
                            <li onClick={this.linkClicked}  className={`nav-item ${this.state.isActivePath==='/create'?'active':''}`}>
                                <NavLink to="/create" className="nav-link" activeClassName="no-class">Create </NavLink>
                            </li>
                            <li onClick={this.linkClicked}  className={`nav-item ${this.state.isActivePath==='/about'?'active':''}`}>
                                <NavLink to="/about" className="nav-link" activeClassName="no-class">About </NavLink>
                            </li>
                        </ul>
                        <a href="https://ikram-ud-daula-indecision-app.herokuapp.com/" className="btn btn-outline-light btn-sm ml-2">Indecision App</a>
                        <a href="https://ikram-ud-daula-angularjs.herokuapp.com/" target="_blank" className="btn btn-outline-light btn-sm ml-2">Angular App</a>
                        <button 
                            onClick={this.props.startLogout}
                            className="btn btn-outline-danger btn-sm ml-2">Logout</button>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);