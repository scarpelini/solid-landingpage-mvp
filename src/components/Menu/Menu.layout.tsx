import React, { useRef } from 'react';

import { Container } from './Menu.styled';

const Menu: React.FC = () => {
  const menuRef = useRef(null);

  return (
    <Container ref={menuRef}>
      <img src="/assets/svg/solid-logotype.svg" alt="SOLID" />
      <a href="/">Book now</a>
    </Container>
  );
};

export default Menu;
