export const theme = {
  colours: {
    black: '#373737',
    white: 'white',
    // Links
    link: '#0000ee',
    visited: '#551a8b',
    // Accessibility and forms
    focus: '#4fcd90',
    error: '#d0021b',
  },
  breakpoints: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
  typography: {
    base: 1.6,
    scale: {
      xs: 1.067,
      sm: 1.067,
      md: 1.125,
      lg: 1.125,
    }
  },
  typeStyles: ( exp ) => {
    return `font-size: ${theme.typography.base * Math.pow( theme.typography.scale.xs, exp )}rem;
    @media ( ${theme.breakpoints.sm} ) {
      font-size: ${theme.typography.base * Math.pow( theme.typography.scale.sm, exp )}rem;
    }
    @media ( ${theme.breakpoints.md} ) {
      font-size: ${theme.typography.base * Math.pow( theme.typography.scale.md, exp )}rem;
    }
    @media ( ${theme.breakpoints.lg} ) {
      font-size: ${theme.typography.base * Math.pow( theme.typography.scale.lg, exp )}rem;
    }`
  },
};