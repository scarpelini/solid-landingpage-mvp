import React from 'react';
import Head from 'next/head';

import {
  SectionHome,
  SectionCompanies,
  SectionOurExpertise,
  SectionOurManifesto,
  SectionPartners,
  SectionSayHi,
  SectionTechStack,
} from '~/components';

import { Container } from './Home.styled';

const Home: React.FC = () => (
  <>
    <Head>
      <title>SOLID Design and Development for Startups</title>
    </Head>

    <Container>
      <SectionHome />
      <SectionOurExpertise />
      <SectionOurManifesto />
      <SectionTechStack />
      <SectionPartners />
      <SectionCompanies />
      <SectionSayHi />
    </Container>
  </>
);

export default Home;
