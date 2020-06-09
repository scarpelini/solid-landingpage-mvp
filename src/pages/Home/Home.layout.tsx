import React, { useCallback } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

import {
  Header,
  HeaderMobile,
  SectionHome,
  SectionCompanies,
  SectionOurExpertise,
  SectionOurManifesto,
  SectionPartners,
  SectionSayHi,
  SectionTechStack,
} from '~/components';

import Container from './Home.styled';

type Text = { text: string };

type Url = { url: string };

interface Results {
  data: {
    investment_starting_point: string;
    home_title: Text[];
    home_list: Text[];
    our_expertise_title: Text[];
    our_expertise_list: [];
    our_expertise_video: Url;
    manifest_title: Text[];
    manifest_content: Text[];
    manifest_video: Url;
    tech_title: Text[];
    tech_subtitle: Text[];
    tech_list_logo: [];
    tech_quote: Text[];
    tech_description: Text[];
    partners_title: Text[];
    partners_list: [];
    companies_title: Text[];
    companies_list: [];
    sayhi_title: Text[];
    sayhi_subtitle: Text[];
    sayhi_say_hi: Text[];
    sayhi_mailto: Url;
    sayhi_social_list: [];
  };
}

interface DataRef {
  data: {
    refs: {
      ref: string;
    }[];
  };
}

interface Data {
  data: {
    results: Results[];
  };
}

const Home: React.FC<Results> = ({ data }) => {
  const handleGoTo = useCallback(() => {
    window.scrollTo({
      top: document.getElementById('sec-expertise')?.offsetTop - 101,
      behavior: 'smooth',
    });
  }, []);

  const handleScrolToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // console.log(data);

  return (
    <>
      <Container>
        <HeaderMobile data={{ mailto: data.sayhi_mailto.url }} />

        <Header
          data={{
            investment: data.investment_starting_point,
            mailto: data.sayhi_mailto.url,
          }}
          onScrollTop={handleScrolToTop}
        />

        <SectionHome
          data={{ title: data.home_title[0].text, list: data.home_list }}
          onClickGoTo={handleGoTo}
        />

        <SectionOurExpertise
          id="sec-expertise"
          data={{
            title: data.our_expertise_title[0].text,
            list: data.our_expertise_list,
            video: data.our_expertise_video.url,
          }}
        />

        <SectionOurManifesto
          data={{
            title: data.manifest_title[0].text,
            content: data.manifest_content,
            video: data.manifest_video.url,
            mailto: data.sayhi_mailto.url,
          }}
        />

        <SectionTechStack
          data={{
            title: data.tech_title[0].text,
            subtitle: data.tech_subtitle[0].text,
            list: data.tech_list_logo,
            quote: data.tech_quote[0].text,
            description: data.tech_description[0].text,
          }}
        />

        <SectionPartners
          data={{
            title: data.partners_title[0].text,
            list: data.partners_list,
            mailto: data.sayhi_mailto.url,
          }}
        />

        <SectionCompanies
          data={{
            title: data.companies_title[0].text,
            list: data.companies_list,
          }}
        />

        <SectionSayHi
          data={{
            subtitle: data.sayhi_subtitle[0].text,
            title: data.sayhi_title[0].text,
            sayHi: data.sayhi_say_hi[0].text,
            mailTo: data.sayhi_mailto,
            socials: data.sayhi_social_list,
          }}
        />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: object;
}> => {
  const repository = 'solid-landingpage-mvp';

  try {
    const responseRef: DataRef = await axios.get(
      `http://${repository}.cdn.prismic.io/api/v2`,
    );

    const { ref } = responseRef.data.refs[0];

    const response: Data = await axios.get(
      `http://${repository}.cdn.prismic.io/api/v2/documents/search?ref=${ref}`,
    );

    const { data } = response.data.results[0];

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.warn('Error load DATA');
  }

  return null;
};

export default Home;
