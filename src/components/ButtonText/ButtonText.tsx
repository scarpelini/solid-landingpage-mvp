import React from 'react';

import { Container, Title } from './ButtonText.styled';

interface Props {}

const ButtonText: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Title>ButtonText</Title>
    </Container>
  );
};

export default ButtonText;
