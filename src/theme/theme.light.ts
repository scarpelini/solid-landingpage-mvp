import { DefaultTheme } from 'styled-components';
import typography from './typography';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  colors: {
    primary: '#000000',
    onPrimary: '#fff',
    secondary: '#7F7F7F',
    onSecondary: '#C1C1C1',
    background: '#ffffff',
    error: '#D61A10',
  },
  typography,
  breakpoints,
};

export default theme;
