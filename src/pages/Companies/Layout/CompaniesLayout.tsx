import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from 'components';

import { Container, List, ListItem, Asset } from './Companies.styled';

interface Props {
  id: string;
}

interface ListProps {
  picture: string;
  alt: string;
}

const CompaniesLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('companies');

  const list: ListProps[] = t('list', {
    returnObjects: true,
  });

  return (
    <Container {...props}>
      <Heading label={t('title')} />
      <List>
        {list.map((item, i: number) => (
          <ListItem key={`company-${i}`}>
            <Asset src={require(`res/images/companies/${item.picture}`)} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CompaniesLayout;
