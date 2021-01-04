import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      // Set rems
      font-size: 56.25%; // 1rem = 9px
      @media ( ${props => props.theme.breakpoints.sm} ) {
          font-size: 56.25%; // 1rem = 9px
      }
      @media ( ${props => props.theme.breakpoints.md} ) {
          font-size: 62.5%; // 1rem = 10px
      }
      @media ( ${props => props.theme.breakpoints.lg} ) {
          font-size: 62.5%; // 1rem = 10px
      }
      * { box-sizing: border-box; }
  }

  body {
      margin: 2rem;
      // Use system fonts: https://css-tricks.com/snippets/css/system-font-stack/
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.white};
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6,
  p,
  ol, ul, li,
  code, kbd, pre, samp {
      line-height: 1.5;
      margin-top: 2rem;
      margin-bottom: 2rem;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
      font-weight: normal;
      a { text-decoration: none; }
      a:hover { text-decoration: none; }
  }

  h1, .h1 { ${props => props.theme.typeStyles( 5 )}; }
  h2, .h2 { ${props => props.theme.typeStyles( 4 )}; }
  h3, .h3 { ${props => props.theme.typeStyles( 3 )}; }
  h4, .h4 { ${props => props.theme.typeStyles( 2 )}; }
  h5, .h5 { ${props => props.theme.typeStyles( 1 )}; }
  h6, .h6 { ${props => props.theme.typeStyles( 0 )}; }
  p, ul, ol, blockquote { ${props => props.theme.typeStyles( 0 )}; }

  li {
      ${props => props.theme.typeStyles( 0 )};
      margin-top: 0;
      margin-bottom: 0;
  }

  small {  ${props => props.theme.typeStyles( -1 )} }
  
  code, kbd, pre, samp {
      font-family: monospace;
      font-size: 16px;
      white-space: normal;
  }
  
  pre { font-size: 16px; }
  
  ul {
      padding-left: 4rem;
      list-style-type: disc;
  }
  
  ol {
      padding-left: 4rem;
      list-style-type: decimal;
  }
  
  video {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
  
  em, i { font-style: italic; }
  
  strong, b { font-weight: bold; }
  
  blockquote {
      font-weight: bold;
      padding-left: 4rem;
  }
  
  a { color: ${props => props.theme.colours.link}; }
  a:visited { color: ${props => props.theme.colours.visited}; }
  a:hover { color: ${props => props.theme.colours.link}; }
  a:active,
  a:focus {
      color: ${props => props.theme.colours.focus};
      outline: 1px dotted ${props => props.theme.colours.focus};
  }
  
  sup, sub {
      vertical-align: baseline;
      position: relative;
      top: -0.4em;
  }
  
  sub { top: 0.4em; }
  
  label {
      ${props => props.theme.typeStyles( -1 )};
      line-height: 1.2;
      font-weight: normal;
  }
  
  .text-input,
  input[type="text"],
  input[type="password"],
  input[type="date"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="range"],
  input[type="search"],
  input[type="tel"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  textarea {
      display: block;
      font-family:inherit;
      ${props => props.theme.typeStyles( 0 )};
      padding: 0.4rem 1rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: 1px ${props => props.theme.colours.black} solid;
      border-radius: 2px;
      line-height: 1.6;
      background-color: transparent;
      -webkit-appearance: none;
      &:focus {
          border: 1px ${props => props.theme.colours.focus} solid;
      }
  }
  
  .file-input,
  input[type="file"],
  .radio-input,
  input[type="radio"],
  .checkbox-input,
  input[type="checkbox"],
  select {
      font-family:inherit;
  }
  
  .button,
  button,
  input[type="submit"],
  input[type="button"],
  input[type="reset"] {
      display: inline-block;
  
      padding: 0 2rem;
  
      font-family:inherit;
      ${props => props.theme.typeStyles( 0 )};
      line-height: 2;
      text-decoration: none;
      white-space: nowrap;
      border: 1px solid;
      border-radius: 2px;
  
      color: ${props => props.theme.colours.link};
      background-color: transparent;
  
      &:focus {
          color: ${props => props.theme.colours.focus};
          outline: 1px dotted ${props => props.theme.colours.focus};
      }
      &:hover {
          text-decoration: none;
      }
      &:visited {
          text-decoration: none;
          color: ${props => props.theme.colours.visited};
      }
      &:active {
          text-decoration: none;
          color: inherit;
      }
  }
  
  .errorMsg {
      color: ${props => props.theme.colours.error};
  }
`;

export default GlobalStyle;
