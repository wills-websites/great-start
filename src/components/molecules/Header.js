import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Container from '../atoms/Container';

class Header extends Component {
  render() {
    return (
      <Container>
        <header className="Header">
          <h1>
            <Link to="/">
              {this.props.siteTitle}
            </Link>
          </h1>
        </header>
      </Container>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header
