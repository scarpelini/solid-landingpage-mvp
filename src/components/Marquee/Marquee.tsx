import React from 'react';

import { Container, Wrap, Asset } from './Marquee.styled';

interface Props {
  asset?: string;
  time?: string;
  direction?: 'lf' | 'rl';
}

const Marquee: React.FC<Props> = (props: Props) => {
  const { asset, time = '16s', direction = 'lf' } = props;

  return (
    <Container>
      <Wrap time={time} direction={direction}>
        <Asset src={asset} />
      </Wrap>
      <Wrap time={time} direction={direction}>
        <Asset src={asset} />
      </Wrap>
    </Container>
  );
};

export default Marquee;
