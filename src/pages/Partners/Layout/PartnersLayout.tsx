import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './Partners.styled';

interface Props {}

const PartnersLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['partners']);

  return (
    <Container>
      <Heading label={t('title')} />
    </Container>
  );
};

export default PartnersLayout;
