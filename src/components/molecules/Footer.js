import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p>© {new Date().getFullYear()}, <a href="https://www.willmclean.net">Will McLean</a></p>
      </footer>
    )
  }
}

export default Footer;