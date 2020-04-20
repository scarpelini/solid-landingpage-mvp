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
  ButtonShape,
} from './OurManifesto.styled';

interface Props {
  id: string;
}

const OurManifestoLayout: React.FC<Props> = (props: Props) => {
  const movie = useRef<HTMLVideoElement | null>(null);
  const { t } = useTranslation(['common', 'ourManifesto']);

  useEffect(() => {
    if (movie) {
      // movie.current?.play();
      // movie.current.play();
    }
  }, []);

  return (
    <Container {...props}>
      <Heading label={t('ourManifesto:title')} />
      <Text
        dangerouslySetInnerHTML={{
          __html: t('ourManifesto:text'),
        }}
      />
      <Video ref={movie} autoPlay muted playsInline loop>
        <Source src={Movie} type={'video/mp4'} />
        {/* <source src="movie.ogg" type="video/ogg"> */}
      </Video>
      <Footer>
        <Button to={'/'}>
          <Label>{t('common:button.noDreamComes')}</Label>
          <ButtonShape>{t('common:button.BookUsNow')}</ButtonShape>
        </Button>
      </Footer>
    </Container>
  );
};

export default OurManifestoLayout;
