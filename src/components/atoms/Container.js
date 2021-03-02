import React, { Component } from "react"
import styled from "styled-components"

const Holder = styled.div`
  max-width: ${(props) => props.theme.typography.maxScreen}px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;
  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`

class Container extends Component {
  render() {
    return <Holder>{this.props.children}</Holder>
  }
}

export default Container
