import 'i18n/i18n';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from 'theme';
import HomeLayout from './HomeLayout';

export const light = () => (
  <ThemeProvider theme={getTheme('light')}>
    <HomeLayout />
  </ThemeProvider>
);

export const dark = () => (
  <ThemeProvider theme={getTheme('dark')}>
    <HomeLayout />
  </ThemeProvider>
);

export default {
  title: 'Layout/HomeLayout',
};
