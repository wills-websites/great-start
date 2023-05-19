import React, {useEffect} from "react";
import PropTypes from "prop-types";
// import '../utils/fontface.css';

import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import Navigation from "../components/molecules/Navigation";

import GlobalStyles from "../components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import {useWindowSize} from "react-use";

function Index({children}) {
  const size = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty('--windowHeight', `${size.height}px`);
  }, [size]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
