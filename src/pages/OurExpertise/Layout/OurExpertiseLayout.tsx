import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './OurExpertise.styled';

interface Props {}

const OurExpertiseLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['ourExpertise']);

  return (
    <Container>
      <Heading label={t('title')} />
    </Container>
  );
};

export default OurExpertiseLayout;
