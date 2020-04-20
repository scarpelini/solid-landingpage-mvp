import React from 'react';
import { useTranslation } from 'react-i18next';

import OurExpertise from '../../OurExpertise/OurExpertise';
import OurManifesto from '../../OurManifesto/OurManifesto';
import TechStack from '../../TechStack/TechStack';
import PartnersSay from '../../PartnersSay/PartnersSay';
import Companies from '../../Companies/Companies';
import SayHi from '../../SayHi/SayHi';

import { Container, ButtonGoTo } from 'components';
import {
  Home,
  Title,
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
    <Container>
      <Home>
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
          <ButtonGoTo onClick={() => console.log('Scroll To!')} />
        </Footer>
      </Home>
      <OurExpertise id={'our-expertise'} />
      <OurManifesto id={'our-manifesto'} />
      <TechStack id={'tech-stack'} />
      <PartnersSay id={'partners-say'} />
      <Companies id={'companies'} />
      <SayHi id={'say-hi'} />
    </Container>
  );
};

export default HomeLayout;
