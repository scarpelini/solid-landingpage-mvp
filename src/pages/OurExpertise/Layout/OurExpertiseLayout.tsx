import React from 'react';
import { useTranslation } from 'react-i18next';

import LineAsset1 from 'res/svg/line-1.svg';
import LineAsset2 from 'res/svg/line-2.svg';
import Device from 'res/svg/device.svg';
import { Heading } from 'components';

import {
  Container,
  Content,
  Col,
  List,
  ListItem,
  Title,
  Description,
  Image,
  Lines,
  LinesWrap,
  Line,
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
      <Container {...props}>
        <Lines>
          <LinesWrap>
            <Line src={LineAsset1} />
          </LinesWrap>
          <LinesWrap>
            <Line src={LineAsset2} />
          </LinesWrap>
        </Lines>
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
