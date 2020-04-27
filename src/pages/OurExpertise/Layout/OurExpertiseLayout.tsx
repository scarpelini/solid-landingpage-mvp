import React from 'react';
import { useTranslation } from 'react-i18next';

import Line1 from 'res/svg/line-1.svg';
import Line2 from 'res/svg/line-2.svg';
import LineM1 from 'res/svg/line-m-1.svg';
import LineM2 from 'res/svg/line-m-2.svg';
import LineM3 from 'res/svg/line-m-3.svg';
import LineM4 from 'res/svg/line-m-4.svg';
import Movie1 from 'res/videos/device.mp4';
import Movie2 from 'res/videos/device.ogg';

import { Heading, Marquee, ButtonMailto } from 'components';

import {
  Container,
  ContainerMarquee,
  ContainerMarqueeMobile,
  Content,
  Col,
  List,
  ListItem,
  Title,
  Description,
  Video,
  Source,
} from './OurExpertise.styled';

interface Props {
  id: string;
}

interface ListProps {
  title: string;
  description: string;
}

const OurExpertiseLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['ourExpertise']);

  const list: ListProps[] = t('ourExpertise:list', {
    returnObjects: true,
  });

  return (
    <>
      <ContainerMarquee>
        <Marquee asset={Line1} />
        <Marquee asset={Line2} direction={'rl'} />
      </ContainerMarquee>
      <ContainerMarqueeMobile>
        <Marquee asset={LineM1} />
        <Marquee asset={LineM2} time={'8s'} direction={'rl'} />
        <Marquee asset={LineM3} time={'14s'} />
        <Marquee asset={LineM4} time={'30s'} direction={'rl'} />
      </ContainerMarqueeMobile>
      <Container {...props}>
        <Heading label={t('title')} />
        <Content>
          <Col>
            <List>
              {list.map((item, i: number) => (
                <ListItem key={`our-expertise-${i}`}>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                </ListItem>
              ))}
            </List>
          </Col>
          <Col>
            <Video autoPlay muted playsInline loop>
              <Source src={Movie1} type={'video/mp4'} />
              <Source src={Movie2} type={'video/ogg'} />
            </Video>
          </Col>
          <ButtonMailto
            className={'is-mobile'}
            title={t('cta.title')}
            label={t('cta.label')}
          />
        </Content>
      </Container>
    </>
  );
};

export default OurExpertiseLayout;
