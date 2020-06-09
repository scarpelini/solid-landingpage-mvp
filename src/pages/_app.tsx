import React, { ReactElement, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import smoothscroll from 'smoothscroll-polyfill';

import { getTheme } from '../theme';

import { Layout } from '~/components';

import 'slick-carousel/slick/slick.css';
import '../styles/typography.css';
import '../styles/custom-slick.css';

import GlobalStyles from '../styles/global.styled';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <ThemeProvider theme={getTheme('light')}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
