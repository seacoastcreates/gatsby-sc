import React, { Component } from 'react'
import toggle from './toggle'
import { Link } from 'gatsby';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/work/">Work</Link>
            </li> 
            <li>
              <Link to="/work/">Contact</Link>
            </li> 
          </ul>
        </nav>
      </div>
    )
  }
}
