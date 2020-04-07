import React from 'react';

import { A, Icon } from './ButtonIcon.styled';

interface Props {
  asset: string;
  link?: string;
}

const ButtonIcon: React.FC<Props> = (props: Props) => (
  <A to={`${props.link}`}>
    <Icon src={props.asset} />
  </A>
);

export default ButtonIcon;
