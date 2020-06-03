import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/Global.styled';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
