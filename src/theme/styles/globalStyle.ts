import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    font-family: 'Suisse-Regular', 'Helvetica', 'Arial', sans-serif;
    font-size: 2rem;
  }

  button {
    user-select: none;
    background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    user-select: none;
  }

  p {
    margin: 0;
  }

  #root {
    overflow-x: hidden;
    height: 100%;
  }

  ::selection {
    color: ${({ theme: { colors } }) => colors.background};
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export default GlobalStyle;
