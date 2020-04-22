import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLanguage, changeTheme } from 'redux/modules/settings/actions';
// import { getLanguage, getTheme } from 'redux/modules/settings/selectors';
import { useTranslation } from 'react-i18next';
// import { HashLink as Link } from 'react-router-hash-link';

import Logo from 'res/svg/solid-logotype.svg';
// import { A } from 'components';
import {
  Container,
  ButtonLogo,
  Image,
  Text,
  Nav,
  // Hamb,
  Wrap,
  // Toggle,
  // List,
  // ListItem,
  ButtonBookNow,
  // Socials,
  // SocialItem,
} from './Header.styled';

// interface Props {}

const Header: React.FC = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation(['common', 'header']);
  // const dispatch = useDispatch();
  // const language = useSelector(getLanguage);
  // const currentTheme = useSelector(getTheme);
  // const nextLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR';
  // const nextTheme = currentTheme === 'light' ? 'Dark' : 'Light';

  function scrollToTop() {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <Container>
        <Wrap>
          <ButtonLogo onClick={() => scrollToTop()}>
            <Image src={Logo} />
          </ButtonLogo>
          <Nav>
            <Text>{t('header:investment')}</Text>
            <Text>{t('header:immediateAvailability')}</Text>
            <ButtonBookNow href={t('common:mailto')}>
              {t('common:button.bookNow')}
            </ButtonBookNow>
            {/* <Hamb onClick={() => setOpenMenu(!openMenu)} toggle={openMenu} /> */}
          </Nav>
        </Wrap>
        {/* <A onClick={() => dispatch(changeLanguage(nextLanguage))}>
        {nextLanguage}
      </A>
      <A onClick={() => dispatch(changeTheme(nextTheme.toLowerCase()))}>
        {nextTheme}
      </A> */}
        {/* <Toggle toggle={openMenu}>
          <List>
            <ListItem>
              <Link smooth to={'/'}>
                {t('header:menu.0')}
              </Link>
            </ListItem>
            <ListItem>
              <Link smooth to={'/#our-expertise'}>
                {t('header:menu.1')}
              </Link>
            </ListItem>
            <ListItem>
              <Link smooth to={'/#our-manifesto'}>
                {t('header:menu.2')}
              </Link>
            </ListItem>
            <ListItem>
              <Link smooth to={'/#tech-stack'}>
                {t('header:menu.3')}
              </Link>
            </ListItem>
            <ListItem>
              <Link smooth to={'/#partners-say'}>
                {t('header:menu.4')}
              </Link>
            </ListItem>
            <ListItem>
              <Link smooth to={'/#companies'}>
                {t('header:menu.5')}
              </Link>
            </ListItem>
            <ListItem>
              <Link smooth to={'/#say-hi'}>
                {t('header:menu.6')}
              </Link>
            </ListItem>
          </List>
        </Toggle> */}
      </Container>
      {/* <Socials toggle={openMenu}>
        <SocialItem>
          <A href={'#'}>LinkedIn</A>
        </SocialItem>
        <SocialItem>
          <A href={'#'}>Instagram</A>
        </SocialItem>
      </Socials> */}
    </>
  );
};

export default Header;
