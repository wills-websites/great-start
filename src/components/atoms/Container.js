import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
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
