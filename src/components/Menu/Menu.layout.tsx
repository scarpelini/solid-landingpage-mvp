import React, { useEffect } from 'react';

import { Container } from './Menu.styled';

const Menu: React.FC = () => {
  useEffect(() => {
    // const viewHeight = window.innerHeight;
    // const headerFixed = document.getElementById('header-fixed');
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > viewHeight) {
    //     return headerFixed?.classList.add('fixed');
    //   }
    //   headerFixed?.classList.remove('fixed');
    // });
  }, []);

  return (
    <Container>
      {/* <img src={AssetLogo} />
      <a href="/">Book now</a> */}
    </Container>
  );
};

export default Menu;
