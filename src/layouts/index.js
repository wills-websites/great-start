import React, {Component} from "react";
import PropTypes from "prop-types";
// import '../utils/fontface.css';

import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import Navigation from "../components/molecules/Navigation";
import Transition from "../components/atoms/Transition";

import GlobalStyles from "../components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";

function Index({location, children}) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Navigation />
        <Transition location={location}>
          <main>{children}</main>
        </Transition>
        <Footer />
      </>
    </ThemeProvider>
  );
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
