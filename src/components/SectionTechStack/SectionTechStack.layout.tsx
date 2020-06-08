import React from 'react';

import { Heading } from '~/components';

import { Container, List } from './SectionTechStack.styled';

type ListItem = {
  tech_photo: {
    url: string;
    alt: string;
  };
};

interface Props {
  data: {
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    list: ListItem[];
  };
}

const SectionTechStack: React.FC<Props> = ({ data }) => (
  <Container>
    <Heading text={data.title} />

    <p dangerouslySetInnerHTML={{ __html: `${data.subtitle}` }} />

    <List>
      {data.list.map((item: ListItem, i: number) => (
        <li key={i.toString()}>
          <img src={item.tech_photo.url} alt={item.tech_photo.alt} />
        </li>
      ))}
    </List>

    <h2 dangerouslySetInnerHTML={{ __html: `${data.quote}` }} />

    <p dangerouslySetInnerHTML={{ __html: `${data.description}` }} />
  </Container>
);

export default SectionTechStack;
