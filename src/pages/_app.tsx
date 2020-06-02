import { AppProps } from "next/app";

import GlobalStyles from "../styles/Global.styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
