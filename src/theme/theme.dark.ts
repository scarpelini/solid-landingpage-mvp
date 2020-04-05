import { DefaultTheme } from 'styled-components';
import typography from './typography';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  colors: {
    primary: '#005efc',
    secondary: '#8e8e8e',
    background: '#121212',
    error: '#ff5656',
    onPrimary: '#fff',
    onSecondary: '#141414',
    onBackground: '#e4e4e4',
    onError: '#fff',
  },
  typography,
  breakpoints,
};

export default theme;
