import React from 'react';

import { Container } from './ButtonOutline.styled';

const ButtonOutline: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default ButtonOutline;
