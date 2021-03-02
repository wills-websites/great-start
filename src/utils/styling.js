export const theme = {
  colours: {
    black: "#373737",
    white: "white",
    // Accessibility and forms
    focus: "#4fcd90",
    error: "#d0021b",
  },
  typography: {
    min: 16,
    max: 24,
    minScreen: 400,
    maxScreen: 1200,
    scale: {
      min: 1.067,
      max: 1.125,
    },
  },
  // https://www.smashingmagazine.com/2016/05/fluid-typography/
  fluidType: (exp) => {
    return `
      font-size: ${
        theme.typography.min * Math.pow(theme.typography.scale.min, exp)
      }px;
      @media screen and (min-width: ${theme.typography.minScreen}px ) {
        font-size: calc( ${
          theme.typography.min * Math.pow(theme.typography.scale.min, exp)
        }px + (${
      theme.typography.max * Math.pow(theme.typography.scale.max, exp)
    } - ${
      theme.typography.min * Math.pow(theme.typography.scale.min, exp)
    })*(100vw - ${theme.typography.minScreen}px)/(${
      theme.typography.maxScreen
    } - ${theme.typography.minScreen}) );
      }
      @media screen and (min-width: ${theme.typography.maxScreen}px ) {
        font-size: ${
          theme.typography.max * Math.pow(theme.typography.scale.max, exp)
        }px;
      }
      `
  },
  breakpoints: {
    sm: "min-width: 576px",
    md: "min-width: 768px",
    lg: "min-width: 992px",
    xl: `min-width: 1200px`,
  },
}
