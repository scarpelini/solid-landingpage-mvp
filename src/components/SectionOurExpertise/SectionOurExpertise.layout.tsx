import React from 'react';

import { Heading, Marquee } from '~/components';

import {
  Container,
  ContainerMarquee,
  ContainerMarqueeMobile,
  Content,
  Col,
  List,
  Video,
} from './SectionOurExpertise.styled';

type ListItem = {
  title: { title: string };
  description: { text: string }[];
};

interface Props {
  data: {
    title: string;
    list: ListItem[];
    video: string;
  };
}

const SectionOurExpertise: React.FC<Props> = ({ data }) => (
  <>
    <ContainerMarquee>
      <Marquee
        asset="/assets/svg/line-1.svg"
        time="28s"
        alt="Minimum viable product, Web, APP and API"
      />

      <Marquee
        asset="/assets/svg/line-2.svg"
        time="38s"
        direction="rl"
        alt="CMS, API and Web"
      />
    </ContainerMarquee>

    <ContainerMarqueeMobile>
      <Marquee
        asset="/assets/svg/line-m-1.svg"
        alt="Marketplace and Platform"
      />

      <Marquee
        asset="/assets/svg/line-m-2.svg"
        time="8s"
        direction="rl"
        alt="CMS, API and Web"
      />

      <Marquee
        asset="/assets/svg/line-m-3.svg"
        time="14s"
        alt="Platform and Product"
      />

      <Marquee
        asset="/assets/svg/line-m-4.svg"
        time="30s"
        direction="rl"
        alt="Android and IOS"
      />
    </ContainerMarqueeMobile>

    <Container>
      <Heading text={data.title} />

      <Content>
        <Col>
          <List>
            {data.list.map((item: ListItem, i: number) => (
              <li key={i.toString()}>
                <h3>{item.title}</h3>
                <p>{item.description[0].text}</p>
              </li>
            ))}
          </List>
        </Col>

        <Col>
          <Video autoPlay muted playsInline loop>
            <source src={data.video} type="video/mp4" />
          </Video>
        </Col>
      </Content>
    </Container>
  </>
);

export default SectionOurExpertise;
