import React from 'react';

import { Container } from './ButtonOutline.styled';

interface Props {
  href: string;
}

const ButtonOutline: React.FC<Props> = ({ children, href }) => (
  <Container href={href}>{children}</Container>
);

export default ButtonOutline;
