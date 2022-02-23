/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */



// If you remove the below links will automatically scroll to top on click. Very confusing.


import smoothscroll from 'smoothscroll-polyfill';

const transitionDelay = 500;
smoothscroll.polyfill();

export const shouldUpdateScroll = ({
                                routerProps: { location },
                                getSavedScrollPosition,
                              }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || {
        top: 0,
        left: 0,
        behavior: 'smooth'
      })),
      transitionDelay
    )
  }
  return false
};
