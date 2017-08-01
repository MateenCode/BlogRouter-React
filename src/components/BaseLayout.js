import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';


 export default class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">


              <nav className="nav">


              <NavLink to ='/'> BlogSeesh </NavLink>
              <NavLink to ='/CreatePost' > PostSeesh </NavLink>
              <NavLink to ='/ShowPost' > ShowAllSeesh </NavLink>


              </nav>

                 {this.props.children}

      </div>

    );
  }
}
