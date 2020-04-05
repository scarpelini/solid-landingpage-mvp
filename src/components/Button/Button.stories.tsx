import React from 'react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import { getTheme } from 'theme';

export const withText = () => (
  <ThemeProvider theme={getTheme('light')}>
    <Button>Primary</Button>
  </ThemeProvider>
);

export const withEmoji = () => (
  <ThemeProvider theme={getTheme('light')}>
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </ThemeProvider>
);

export default {
  title: 'Button',
};
