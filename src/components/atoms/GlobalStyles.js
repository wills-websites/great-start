import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${props => props.theme.fluidType( 0 )};
      * { box-sizing: border-box; }
  }

  body {
      margin: 0;
      // Use system fonts: https://css-tricks.com/snippets/css/system-font-stack/
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.white};
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
      line-height: 1.1;
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
  
  p,
  ol, ul, li,
  code, kbd, pre, samp {
      line-height: 1.5;
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
      font-weight: bold;
      a { text-decoration: none; }
      a:hover { text-decoration: none; }
  }

  h1, .h1 { ${props => props.theme.fluidType( 4 )}; }
  h2, .h2 { ${props => props.theme.fluidType( 3 )}; }
  h3, .h3 { ${props => props.theme.fluidType( 2 )}; }
  h4, .h4 { ${props => props.theme.fluidType( 1 )}; }
  h5, .h5 { ${props => props.theme.fluidType( 0 )}; }
  h6, .h6 { ${props => props.theme.fluidType( -1 )}; }

  li {
      margin-top: 0;
      margin-bottom: 0;
  }

  small, p.small { ${props => props.theme.fluidType( -1 )}; }
  
  code, kbd, pre, samp {
      font-family: monospace;
      white-space: normal;
  }
  
  ul {
      padding-left: 1rem;
      list-style-type: disc;
  }
  
  ol {
      padding-left: 1rem;
      list-style-type: decimal;
  }
  
  video {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  em, i { font-style: italic; }
  
  strong, b { font-weight: bold; }
  
  blockquote {
      font-weight: bold;
      padding-left: 1rem;
  }
  
  a { color: inherit; }
  
  sup, sub {
      vertical-align: baseline;
      position: relative;
      top: -0.4em;
  }
  
  sub { top: 0.4em; }
  
  label {
      ${props => props.theme.fluidType( -1 )};
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
      ${props => props.theme.fluidType( 0 )};
      padding: 0.2rem 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 1px solid;
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
  
      padding: 0 1rem;
  
      font-family:inherit;
      ${props => props.theme.fluidType( 0 )};
      line-height: 2;
      text-decoration: none;
      white-space: nowrap;
      border: 1px solid;
      border-radius: 2px;
  
      color: inherit;
      background-color: transparent;
      
      &:hover {
          text-decoration: none;
      }
      &.link {
        border: none;
        padding: 0;
        background-color: transparent;
      }
      &.icon {
        border: none;
        padding: 0;
        background-color: transparent;
        svg {
          height: 3rem;
          width: auto;
          display: block;
        }
      }
  }
  
  .errorMsg {
      color: ${props => props.theme.colours.error};
  }
`;

export default GlobalStyle;
