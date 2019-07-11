import React, { Component } from 'react';
import { Link } from 'gatsby';

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/posts/">Posts</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;