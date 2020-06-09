import React from 'react';

import { ButtonOutline } from '~/components';

import { Container, Nav, ButtonLogo } from './Header.styled';

interface Props {
  data: {
    investment: string;
    mailto: string;
  };
  onScrollTop(): void;
}

const Header: React.FC<Props> = ({ data, onScrollTop }) => {
  return (
    <Container>
      <div>
        <ButtonLogo onClick={onScrollTop}>
          <img src="/assets/svg/solid-logotype.svg" alt="SOLID" />
        </ButtonLogo>

        <Nav>
          <ul>
            <li>{data.investment}</li>
            <li>Immediate Availability</li>
            <li>
              <ButtonOutline href={data.mailto}>Book Now</ButtonOutline>
            </li>
          </ul>
        </Nav>
      </div>
    </Container>
  );
};

export default Header;
