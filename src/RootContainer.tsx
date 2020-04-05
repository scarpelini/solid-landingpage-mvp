import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { getTheme as getThemeSelector } from 'redux/modules/settings/selectors';
import { getTheme } from 'theme';
import GlobalStyle from 'theme/styles/globalStyle';
import Routes from 'routes';

const RootContainer = () => {
  const theme = useSelector(getThemeSelector);
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Suspense>
  );
};

export default RootContainer;
