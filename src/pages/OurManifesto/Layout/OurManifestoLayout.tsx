import React from 'react';
import { useTranslation } from 'react-i18next';

import MovieMp4 from 'res/videos/video.mp4';
// import MovieOgg from 'res/videos/videoogg.ogg';
import { Heading, ButtonMailto } from 'components';

import {
  Container,
  ContainerVideo,
  Text,
  Video,
  Source,
} from './OurManifesto.styled';

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
      <ContainerVideo>
        <Video autoPlay muted playsInline loop>
          <Source src={MovieMp4} type={'video/mp4'} />
          {/* <Source src="movie.ogg" type="video/ogg"> */}
        </Video>
      </ContainerVideo>
      <ButtonMailto
        title={t('common:button.noDreamComes')}
        label={t('common:button.BookUsNow')}
      />
    </Container>
  );
};

export default OurManifestoLayout;
