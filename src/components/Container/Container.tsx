import React from 'react';

import { Container as Wrapper } from './Container.styled';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = (props: Props) => (
  <Wrapper>{props.children}</Wrapper>
);

export default Container;
