import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './SayHi.styled';

interface Props {}

const SayHiLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['sayHi']);

  return (
    <Container>
      <Heading label={t('title')} />
    </Container>
  );
};

export default SayHiLayout;
