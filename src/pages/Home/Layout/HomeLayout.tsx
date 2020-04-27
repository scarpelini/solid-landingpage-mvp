import React from 'react';
import { useTranslation } from 'react-i18next';

import OurExpertise from '../../OurExpertise/OurExpertise';
import OurManifesto from '../../OurManifesto/OurManifesto';
import TechStack from '../../TechStack/TechStack';
import PartnersSay from '../../PartnersSay/PartnersSay';
import Companies from '../../Companies/Companies';
import SayHi from '../../SayHi/SayHi';

import { Container, ButtonGoTo, HeaderFixed } from 'components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'res/css/custom-slick.css';
import {
  Home,
  Title,
  Wrap,
  List,
  ListItem,
  Text,
  Footer,
  MobileText,
} from './HomeLayout.styled';

const HomeLayout: React.FC = () => {
  const { t } = useTranslation(['header', 'home']);

  const list: string[] = t('home:content', {
    returnObjects: true,
  });

  return (
    <>
      <Container>
        <HeaderFixed id={'header-fixed'} />
        <Home id={'home'}>
          <Wrap>
            <Title
              dangerouslySetInnerHTML={{
                __html: t('home:title'),
              }}
            />
            <MobileText>{t('header:immediateAvailability')}</MobileText>
            <MobileText>{t('header:investment')}</MobileText>
            <List>
              {list.map((item, i: number) => (
                <ListItem key={`homeLayout-${i}`}>
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List>
            <Footer>
              <ButtonGoTo />
            </Footer>
          </Wrap>
          <List>
            {list.map((item, i: number) => (
              <ListItem key={`homeLayout-${i}`}>
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Home>
        <OurExpertise id={'our-expertise'} />
        <OurManifesto id={'our-manifesto'} />
        <TechStack id={'tech-stack'} />
        <PartnersSay id={'partners-say'} />
        <Companies id={'companies'} />
        <SayHi id={'say-hi'} />
      </Container>
    </>
  );
};

export default HomeLayout;
