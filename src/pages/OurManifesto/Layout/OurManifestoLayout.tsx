import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './OurManifesto.styled';

interface Props {}

const OurManifestoLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['ourManifesto']);

  return (
    <Container>
      <Heading label={t('title')} />
    </Container>
  );
};

export default OurManifestoLayout;
