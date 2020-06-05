import React from 'react';

import { Container } from './Button.styled';

interface Props {
  textPreffix?: string;
  label: string;
}

const Button: React.FC<Props> = ({ textPreffix, label }) => (
  <Container href="/">
    {textPreffix && <span>{textPreffix}</span>}
    <span>{label}</span>
  </Container>
);

export default Button;
