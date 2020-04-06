import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import OurExpertise from '../../OurExpertise/OurExpertise';
import OurManifesto from '../../OurManifesto/OurManifesto';
import TechStack from '../../TechStack/TechStack';
import Partners from '../../Partners/Partners';
import CompaniesWorked from '../../CompaniesWorked/CompaniesWorked';
import SayHi from '../../SayHi/SayHi';

import { Container, H1 } from 'components';

const HomeLayout: React.FC = () => {
  const { t } = useTranslation(['home']);
  return (
    <Container>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/'}>Our Expertise</Link>
        </li>
        <li>
          <Link to={'/'}>Our Manifesto</Link>
        </li>
        <li>
          <Link to={'/'}>Tech Stack</Link>
        </li>
        <li>
          <Link to={'/'}>Partners</Link>
        </li>
        <li>
          <Link to={'/'}>Companies Worked</Link>
        </li>
        <li>
          <Link to={'/'}>Say Hi</Link>
        </li>
      </ul>
      <H1>{t('title')}</H1>
      <OurExpertise />
      <OurManifesto />
      <TechStack />
      <Partners />
      <CompaniesWorked />
      <SayHi />
    </Container>
  );
};

export default HomeLayout;
