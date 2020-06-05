import React from 'react';

import { Container, Wrapper } from './Marquee.styled';

interface Props {
  asset: string;
  time?: string;
  direction?: 'lr' | 'rl';
  alt: string;
}

const Marquee: React.FC<Props> = ({
  asset,
  time = '16s',
  direction = 'lr',
  alt = '',
}) => (
  <Container>
    <Wrapper time={time} direction={direction}>
      <img src={asset} alt={alt} />
    </Wrapper>

    <Wrapper time={time} direction={direction}>
      <img src={asset} alt={alt} />
    </Wrapper>
  </Container>
);

export default Marquee;
