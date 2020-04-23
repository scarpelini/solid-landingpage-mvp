import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { Heading } from 'components';

import { Container, List, ListItem, Asset } from './Companies.styled';

interface Props {
  id: string;
}

interface ListProps {
  className: string;
  picture: string;
  alt: string;
}

const CompaniesLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('companies');

  const list: ListProps[] = t('list', {
    returnObjects: true,
  });

  const settings = {
    dots: true,
    arrows: false,
    rows: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container {...props}>
      <Heading label={t('title')} />
      <List>
        {list.map((item, i: number) => (
          <ListItem key={`company-${i}`} className={item.className}>
            <Asset
              src={require(`res/svg/logos/${item.picture}`)}
              alt={item.alt}
            />
          </ListItem>
        ))}
      </List>
      <Slider {...settings}>
        {list.map((item, i: number) => (
          <ListItem key={`company-${i}`} className={item.className}>
            <Asset
              src={require(`res/svg/logos/${item.picture}`)}
              alt={item.alt}
            />
          </ListItem>
        ))}
      </Slider>
    </Container>
  );
};

export default CompaniesLayout;
