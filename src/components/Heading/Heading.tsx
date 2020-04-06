import React from 'react';

import { H1 } from 'components';

import { Header } from './Heading.styled';

interface Props {
  label: string;
}

const Heading: React.FC<Props> = (props: Props) => (
  <Header>
    <H1
      dangerouslySetInnerHTML={{
        __html: `${props.label}`,
      }}
    />
  </Header>
);

export default Heading;
