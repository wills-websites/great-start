import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  padding: 0 2rem;
  > :first-child { margin-top: 0; }
  > :last-child { margin-bottom: 0; }
`;

class Container extends Component {
  render() {
    return (
      <Holder>
        {this.props.children}
      </Holder>
    )
  }
}

export default Container;
