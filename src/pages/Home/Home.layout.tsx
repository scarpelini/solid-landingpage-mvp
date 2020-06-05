import React, { useRef } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { GetStaticProps } from 'next';

import {
  Header,
  SectionHome,
  SectionCompanies,
  SectionOurExpertise,
  SectionOurManifesto,
  SectionPartners,
  SectionSayHi,
  SectionTechStack,
} from '~/components';

import { Container } from './Home.styled';

interface Results {
  data: {
    investment_starting_point: string;
    home_title: { text: string }[];
    home_list: { text: string }[];
    our_expertise_title: { text: string }[];
    our_expertise_list: [];
    our_expertise_video: { url: string };
  };
}

interface Data {
  data: {
    results: Results[];
  };
}

const Home: React.FC<Results> = ({ data }) => {
  const sectionExpertiseRef = useRef<HTMLDivElement>(null);

  function handleGoTo(): void {
    window.scrollTo({
      top: sectionExpertiseRef.current?.offsetTop - 101,
      behavior: 'smooth',
    });
  }

  // console.log(data);

  return (
    <>
      <Head>
        <title>SOLID Design and Development for Startups</title>
      </Head>

      <Container>
        <Header data={{ investment: data.investment_starting_point }} />

        <SectionHome
          data={{ title: data.home_title[0].text, list: data.home_list }}
          onClickGoTo={handleGoTo}
        />

        <SectionOurExpertise
          data={{
            title: data.our_expertise_title[0].text,
            list: data.our_expertise_list,
            video: data.our_expertise_video.url,
          }}
        />

        <SectionOurManifesto />
        <SectionTechStack />
        <SectionPartners />
        <SectionCompanies />
        <SectionSayHi />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ref = 'XtpJshAAACMAOt3m';

  const response: Data = await axios.get(
    `http://solid-landingpage-mvp.cdn.prismic.io/api/v2/documents/search?ref=${ref}`,
  );

  const { data } = response.data.results[0];

  return {
    props: {
      data,
    },
  };
};

export default Home;
