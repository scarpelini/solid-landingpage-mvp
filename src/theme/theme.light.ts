import { DefaultTheme } from 'styled-components';

import breakpoints from './breakpoints';
import typography from './typography';

const theme: DefaultTheme = {
  colors: {
    primary: '#000000',
    onPrimary: '#FFFFFF',
    secondary: '#7F7F7F',
    onSecondary: '#C1C1C1',
    background: '#FFFFFF',
    error: '#D61A10',
  },
  typography,
  breakpoints,
};

export default theme;
