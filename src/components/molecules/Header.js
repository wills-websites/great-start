import {Link} from "gatsby";
import React from "react";
import Container from "../atoms/Container";

function Header() {
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

export default Header;
