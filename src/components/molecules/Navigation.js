import React, { Component } from "react"
import { Link } from "gatsby"
import Container from "../atoms/Container"

class Navigation extends Component {
  render() {
    return (
      <Container>
        <nav className="Navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/form/">Contact Form</Link>
            </li>
          </ul>
        </nav>
      </Container>
    )
  }
}

export default Navigation
