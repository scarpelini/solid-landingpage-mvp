import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AssetLogo from 'res/svg/logo-mobile.svg';
import { Container, Logo, Cta } from './HeaderFixed.styled';

interface Props {
  id?: string;
}

const HeaderFixed: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    const viewHeight = window.innerHeight;
    const headerFixed = document.getElementById('header-fixed');

    window.addEventListener('scroll', () => {
      if (window.scrollY > viewHeight) {
        return headerFixed?.classList.add('fixed');
      }

      headerFixed?.classList.remove('fixed');
    });
  }, []);

  return (
    <Container id={props.id}>
      <Logo src={AssetLogo} />
      <Cta href={t('common:mailto')}>{t('button.bookNow')}</Cta>
    </Container>
  );
};

export default HeaderFixed;
