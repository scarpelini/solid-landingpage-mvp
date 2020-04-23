import React from 'react';
import { useTranslation } from 'react-i18next';

import Line1 from 'res/svg/line-1.svg';
import Line2 from 'res/svg/line-2.svg';
import LineM1 from 'res/svg/line-m-1.svg';
import LineM2 from 'res/svg/line-m-2.svg';
import LineM3 from 'res/svg/line-m-3.svg';
import LineM4 from 'res/svg/line-m-4.svg';
import Device from 'res/svg/device.svg';

import { Heading, Marquee } from 'components';

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
  Image,
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

  const list: ListProps[] = t('list', {
    returnObjects: true,
  });

  return (
    <>
      <ContainerMarquee>
        <Marquee asset={Line1} />
        <Marquee asset={Line2} />
      </ContainerMarquee>
      <ContainerMarqueeMobile>
        <Marquee asset={LineM1} />
        <Marquee asset={LineM2} />
        <Marquee asset={LineM3} time={'24s'} />
        <Marquee asset={LineM4} />
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
            <Image src={Device} />
          </Col>
        </Content>
      </Container>
    </>
  );
};

export default OurExpertiseLayout;
