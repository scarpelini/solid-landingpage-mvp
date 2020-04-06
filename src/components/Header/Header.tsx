import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLanguage, changeTheme } from 'redux/modules/settings/actions';
// import { getLanguage, getTheme } from 'redux/modules/settings/selectors';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

import Logo from 'res/svg/solid-logotype.svg';
import {
  Container,
  Image,
  Text,
  Nav,
  Hamb,
  List,
  ListItem,
  ButtonBookNow,
} from './Header.styled';

interface Props {}

const Header: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['common', 'header']);
  // const dispatch = useDispatch();
  // const language = useSelector(getLanguage);
  // const currentTheme = useSelector(getTheme);
  // const nextLanguage = language === 'pt-BR' ? 'en-US' : 'pt-BR';
  // const nextTheme = currentTheme === 'light' ? 'Dark' : 'Light';

  return (
    <Container>
      <Image src={Logo} />
      <Nav>
        <Text>{t('header:investment')}</Text>
        <Text>{t('header:immediateAvailability')}</Text>
        <ButtonBookNow to={'/'}>{t('common:button.bookNow')}</ButtonBookNow>
        <Hamb />
        <List>
          <ListItem>
            <Link smooth to={'/'}>
              {t('menu.0')}
            </Link>
          </ListItem>
          <ListItem>
            <Link smooth to={'/#our-expertise'}>
              {t('menu.1')}
            </Link>
          </ListItem>
          <ListItem>
            <Link smooth to={'/#our-manifesto'}>
              {t('menu.2')}
            </Link>
          </ListItem>
          <ListItem>
            <Link smooth to={'/#tech-stack'}>
              {t('menu.3')}
            </Link>
          </ListItem>
          <ListItem>
            <Link smooth to={'/#partners-say'}>
              {t('menu.4')}
            </Link>
          </ListItem>
          <ListItem>
            <Link smooth to={'/#companies'}>
              {t('menu.5')}
            </Link>
          </ListItem>
          <ListItem>
            <Link smooth to={'/#say-hi'}>
              {t('menu.6')}
            </Link>
          </ListItem>
        </List>
      </Nav>
      {/* <A onClick={() => dispatch(changeLanguage(nextLanguage))}>
        {nextLanguage}
      </A>
      <A onClick={() => dispatch(changeTheme(nextTheme.toLowerCase()))}>
        {nextTheme}
      </A> */}
    </Container>
  );
};

export default Header;
