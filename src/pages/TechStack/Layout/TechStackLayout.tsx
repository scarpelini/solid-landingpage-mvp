import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './TechStack.styled';

interface Props {}

const TechStackLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['techStack']);

  return (
    <Container>
      <Heading label={t('title')} />
    </Container>
  );
};

export default TechStackLayout;
