import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './PartnersSay.styled';

interface Props {
  id: string;
}

const PartnersSayLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['partners']);

  return (
    <Container {...props}>
      <Heading label={t('title')} />
    </Container>
  );
};

export default PartnersSayLayout;
