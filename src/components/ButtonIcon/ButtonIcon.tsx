import React from 'react';

import { A as Link, Anchor, Icon } from './ButtonIcon.styled';

interface Props {
  variant?: 'a' | 'link';
  asset: string;
  link?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const ButtonIcon: React.FC<Props> = (props: Props) => {
  const { variant = 'link', asset, link, target, href, rel } = props;

  if (variant === 'a') {
    return (
      <Anchor href={href} target={target} rel={rel}>
        <Icon src={asset} />
      </Anchor>
    );
  }

  return (
    <Link to={`${link}`}>
      <Icon src={asset} />
    </Link>
  );
};

export default ButtonIcon;
