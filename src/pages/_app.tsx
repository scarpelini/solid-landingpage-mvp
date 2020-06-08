import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import { getTheme } from '../theme';

import { Layout } from '~/components';

import 'slick-carousel/slick/slick.css';
import '../styles/typography.css';
import '../styles/custom-slick.css';

import GlobalStyles from '../styles/global.styled';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
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
