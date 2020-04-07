import React from 'react';
import { useTranslation } from 'react-i18next';

import { Heading, A } from 'components';

import {
  Container,
  SayHi,
  Subtitle,
  Footer,
  Socials,
  SocialItem,
  Local,
  Text,
} from './SayHi.styled';

interface Props {
  id: string;
}

const SayHiLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['common', 'sayHi']);

  return (
    <Container {...props}>
      <Subtitle>{t('sayHi:subtitle')}</Subtitle>
      <Heading label={t('sayHi:title')} />
      <SayHi href="#">{t('sayHi:button.sayHi')}</SayHi>
      <Footer>
        <Socials>
          <SocialItem>
            <A href="#">Linkedin</A>
          </SocialItem>
          <SocialItem>
            <A href="#">Instagram</A>
          </SocialItem>
        </Socials>
        <Local>
          <Text>{t('common:city')}</Text>
          <Text>{t('common:country')}</Text>
        </Local>
      </Footer>
    </Container>
  );
};

export default SayHiLayout;
