import { Link } from "gatsby";
import React, { Component } from "react";
import Container from "../atoms/Container";

class Header extends Component {
  render() {
    return (
      <Container>
        <header className="Header">
          <h1>
            <Link to="/">Great Start</Link>
          </h1>
        </header>
      </Container>
    );
  }
}

export default Header;
