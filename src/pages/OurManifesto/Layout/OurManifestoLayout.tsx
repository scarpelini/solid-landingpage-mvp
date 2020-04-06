import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Movie from 'res/videos/video.mp4';
import { Heading } from 'components';

import {
  Container,
  Text,
  Video,
  Source,
  Footer,
  Label,
  Button,
} from './OurManifesto.styled';

interface Props {
  id: string;
}

const OurManifestoLayout: React.FC<Props> = (props: Props) => {
  const movie = useRef(null);
  const { t } = useTranslation(['common', 'ourManifesto']);

  useEffect(() => {
    console.log(movie.current);
  }, []);

  return (
    <Container {...props}>
      <Heading label={t('ourManifesto:title')} />
      <Text
        dangerouslySetInnerHTML={{
          __html: t('ourManifesto:text'),
        }}
      />
      <Video ref={movie}>
        <Source src={Movie} type="video/mp4" />
        {/* <source src="movie.ogg" type="video/ogg"> */}
      </Video>
      <Footer>
        <Label>{t('common:button.noDreamComes')}</Label>
        <Button to={'/'}>{t('common:button.BookUsNow')}</Button>
      </Footer>
    </Container>
  );
};

export default OurManifestoLayout;
