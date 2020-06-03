import { DefaultTheme } from 'styled-components';

import breakpoints from './breakpoints';
import typography from './typography';

const theme: DefaultTheme = {
  colors: {
    primary: '#005efc',
    onPrimary: '#fff',
    secondary: '#8e8e8e',
    onSecondary: '#141414',
    background: '#121212',
    error: '#ff5656',
  },
  typography,
  breakpoints,
};

export default theme;
