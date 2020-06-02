import Head from "next/head";

import { Container } from "./Home.styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>MVP SSR</title>
      </Head>

      <Container>
        <h1>MVP Solid Solutions</h1>
      </Container>
    </>
  );
}
