import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from 'theme';
import AboutLayout from './AboutLayout';

export const light = () => (
  <ThemeProvider theme={getTheme('light')}>
    <AboutLayout />
  </ThemeProvider>
);

export const dark = () => (
  <ThemeProvider theme={getTheme('dark')}>
    <AboutLayout />
  </ThemeProvider>
);

export default {
  title: 'Layout/AboutLayout',
};
