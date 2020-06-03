import React from 'react';

import { ButtonOutline } from '~/components';

import { Container, Nav, ButtonLogo } from './Header.styled';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <ButtonLogo onClick={() => console.log('click')}>
          <img src="/assets/svg/solid-logotype.svg" alt="SOLID" />
        </ButtonLogo>

        <Nav>
          <ul>
            <li>Investment starting point ~$10,000</li>
            <li>Immediate Availability</li>
            <li>
              <ButtonOutline>Book Now</ButtonOutline>
            </li>
          </ul>
        </Nav>
      </div>
    </Container>
  );
};

export default Header;
