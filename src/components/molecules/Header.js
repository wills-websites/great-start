import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <header className="Header">
            <h1>
              <Link to="/">
                {this.props.siteTitle}
              </Link>
            </h1>
          </header>
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
