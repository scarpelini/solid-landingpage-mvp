import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './Companies.styled';

interface Props {
  id: string;
}

const CompaniesLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('companies');

  return (
    <Container {...props}>
      <Heading label={t('title')} />
    </Container>
  );
};

export default CompaniesLayout;
