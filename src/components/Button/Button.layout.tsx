import React from 'react';

import { Container } from './Button.styled';

interface Props {
  href: string;
  textPreffix?: string;
  label: string;
}

const Button: React.FC<Props> = ({ href, textPreffix, label }) => (
  <Container href={href}>
    {textPreffix && <span>{textPreffix}</span>}
    <span>{label}</span>
  </Container>
);

export default Button;
