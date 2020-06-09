import React, { useEffect, useRef } from 'react';

import { Container } from './HeaderMobile.styled';

interface Props {
  data: {
    mailto: string;
  };
}

const HeaderMobile: React.FC<Props> = ({ data }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const viewHeight = window.innerHeight;

    window.addEventListener('scroll', (): void => {
      if (window.scrollY > viewHeight) {
        return headerRef.current.classList.add('fixed');
      }

      headerRef.current.classList.remove('fixed');
    });
  }, []);

  return (
    <Container ref={headerRef}>
      <img src="/assets/svg/logo-mobile.svg" alt="SOLID" />
      <a href={data.mailto}>Book Now</a>
    </Container>
  );
};

export default HeaderMobile;
