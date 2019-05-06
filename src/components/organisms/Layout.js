import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Navigation from '../molecules/Navigation';

import GlobalStyles from '../elements/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/styling';

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StaticQuery
          query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
          render={data => (
            <>
              <GlobalStyles/>
              <Header siteTitle={data.site.siteMetadata.title}/>
              <Navigation/>
              <PageTransition>
                <main>{this.props.children}</main>
              </PageTransition>
              <Footer/>
            </>
          )}
        />
      </ThemeProvider>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
