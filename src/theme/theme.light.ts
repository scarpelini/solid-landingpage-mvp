import { DefaultTheme } from 'styled-components';
import typography from './typography';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  colors: {
    primary: '#005efc',
    secondary: '#8e8e8e',
    background: '#fff',
    error: '#ff5656',
    onPrimary: '#fff',
    onSecondary: '#141414',
    onBackground: '#141414',
    onError: '#fff',
  },
  typography,
  breakpoints,
};

export default theme;
