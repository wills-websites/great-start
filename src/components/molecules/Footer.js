import React from "react"
import Container from "../atoms/Container"

function Footer() {
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

export default Footer
