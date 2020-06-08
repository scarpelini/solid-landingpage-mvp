import React, { useCallback } from 'react';
import Slider from 'react-slick';

import { Heading } from '~/components';

import { Container, List, ListItem } from './SectionCompanies.styled';

type ListItem = {
  company_photo: {
    url: string;
    name: string;
  };
};

interface Props {
  data: {
    title: string;
    list: ListItem[];
  };
}

const SectionCompanies: React.FC<Props> = ({ data }) => {
  const name = useCallback((filename: string): string => {
    return filename.replace('.svg', '');
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    rows: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container>
      <Heading text={data.title} />

      <List>
        {data.list.map((item: ListItem, i: number) => (
          <ListItem
            key={i.toString()}
            className={name(item.company_photo.name)}
          >
            <img
              src={item.company_photo.url}
              alt={name(item.company_photo.name)}
            />
          </ListItem>
        ))}
      </List>

      <Slider {...settings}>
        {data.list.map((item, i: number) => (
          <ListItem
            key={i.toString()}
            className={name(item.company_photo.name)}
          >
            <img
              src={item.company_photo.url}
              alt={name(item.company_photo.name)}
            />
          </ListItem>
        ))}
      </Slider>
    </Container>
  );
};

export default SectionCompanies;
