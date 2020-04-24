import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }

  body {
    -webkit-tap-highlight-color: transparent;
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
    /* height: 100%; */
    /* scroll-behavior: smooth; */
  }

  ::selection {
    color: ${({ theme: { colors } }) => colors.background};
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export default GlobalStyle;
