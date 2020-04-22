import React from 'react';
import { useTranslation } from 'react-i18next';

import { A } from 'components';

import {
  Container,
  Subtitle,
  Footer,
  Socials,
  SocialItem,
  Local,
  Text,
  Cta,
  CtaText,
} from './SayHi.styled';

interface Props {
  id: string;
}

const SayHiLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['common', 'sayHi']);

  return (
    <Container {...props}>
      <Subtitle>{t('sayHi:subtitle')}</Subtitle>
      <Cta href={t('common:mailto')}>
        <CtaText dangerouslySetInnerHTML={{ __html: t('sayHi:title') }} />
        <CtaText>{t('sayHi:button.sayHi')}</CtaText>
      </Cta>
      <Footer>
        <Socials>
          <SocialItem>
            <A
              href={'https://www.linkedin.com/company/solidsolutions'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              Linkedin
            </A>
          </SocialItem>
          <SocialItem>
            <A
              href={'https://www.instagram.com/solidsolutions.io/'}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              Instagram
            </A>
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
