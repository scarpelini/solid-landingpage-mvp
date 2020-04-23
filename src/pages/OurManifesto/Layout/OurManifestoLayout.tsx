import React from 'react';
import { useTranslation } from 'react-i18next';

import Movie from 'res/videos/video.mp4';
import { Heading, ButtonMailto } from 'components';

import { Container, Text, Video, Source } from './OurManifesto.styled';

interface Props {
  id: string;
}

const OurManifestoLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['common', 'ourManifesto']);

  return (
    <Container {...props}>
      <Heading label={t('ourManifesto:title')} />
      <Text
        dangerouslySetInnerHTML={{
          __html: t('ourManifesto:text'),
        }}
      />
      <Video autoPlay muted playsInline loop>
        <Source src={Movie} type={'video/mp4'} />
        {/* <source src="movie.ogg" type="video/ogg"> */}
      </Video>
      <ButtonMailto
        title={t('common:button.noDreamComes')}
        label={t('common:button.BookUsNow')}
      />
    </Container>
  );
};

export default OurManifestoLayout;
