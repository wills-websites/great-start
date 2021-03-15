import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import Navigation from "../components/molecules/Navigation";
import Transition from "../components/atoms/Transition";

import GlobalStyles from "../components/atoms/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/styling";

class Index extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Header/>
          <Navigation/>
          <Transition location={this.props.location}>
            <main>{this.props.children}</main>
          </Transition>
          <Footer/>
        </>
      </ThemeProvider>
    );
  }
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
