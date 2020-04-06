import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container } from './CompaniesWorked.styled';

interface Props {}

const CompaniesWorkedLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('companiesWorked');

  return (
    <Container>
      <Heading label={t('title')} />
    </Container>
  );
};

export default CompaniesWorkedLayout;
