import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import IconLinkedIn from 'res/svg/icon-linkedin.svg';
import { Heading, ButtonMailto, ButtonIcon } from 'components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Container,
  CarouselItem,
  Picture,
  ContainerText,
  PartnerName,
} from './PartnersSay.styled';

interface Props {
  theme: DefaultTheme;
  id: string;
}

interface ListProps {
  picture: string;
  name: string;
  message: string;
  linkedin: string;
}

const PartnersSayLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['partners']);

  const list: ListProps[] = t('list', {
    returnObjects: true,
  });

  return (
    <Container {...props}>
      <Heading label={t('title')} />
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={false}
        emulateTouch={false}
      >
        {list.map((item, i: number) => (
          <CarouselItem key={`partners-say-${i}`}>
            <Picture src={require(`res/images/partners/${item.picture}`)} />
            <ContainerText>
              <Trans i18nKey={`partners:list.${i}.message`} />
              <PartnerName>
                <Trans
                  i18nKey={`partners:list.${i}.name`}
                  components={[
                    <ButtonIcon
                      variant={'a'}
                      key={'icon-linkedIn'}
                      href={item.linkedin}
                      asset={IconLinkedIn}
                      target={'_blank'}
                      rel={'noopener noreferrer'}
                    />,
                  ]}
                />
              </PartnerName>
            </ContainerText>
          </CarouselItem>
        ))}
      </Carousel>
      <ButtonMailto
        title={t('partners:cta.title')}
        label={t('partners:cta.label')}
      />
    </Container>
  );
};

export default withTheme(PartnersSayLayout);
