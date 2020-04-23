import React from 'react';

import { Container, Wrap, Asset } from './Marquee.styled';

interface Props {
  asset?: string;
  time?: string;
}

const Marquee: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Wrap time={props.time}>
        <Asset src={props.asset} />
      </Wrap>
      <Wrap time={props.time}>
        <Asset src={props.asset} />
      </Wrap>
    </Container>
  );
};

export default Marquee;
