import React from 'react';

import H1 from '../H1/H1.layout';

import { Container } from './Heading.styled';

interface Props {
  text: string;
}

const Heading: React.FC<Props> = ({ text }) => (
  <Container>
    <H1 dangerouslySetInnerHTML={{ __html: `${text}` }} />
  </Container>
);

export default Heading;
