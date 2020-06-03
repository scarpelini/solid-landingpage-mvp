import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = createGlobalStyle`
  ${normalize};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }

  body {
    font-size: 2rem;
    font-family: 'Suisse-Regular', 'Helvetica', 'Arial', sans-serif;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
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

  ::selection {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default globalStyle;
