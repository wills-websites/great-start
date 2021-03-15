import React, { Component } from "react"
import Container from "../atoms/Container"

class Footer extends Component {
  render() {
    return (
      <Container>
        <footer className="Footer">
          <p>
            © {new Date().getFullYear()},{" "}
            <a href="https://www.willmclean.net">Will McLean</a>
          </p>
        </footer>
      </Container>
    )
  }
}

export default Footer
