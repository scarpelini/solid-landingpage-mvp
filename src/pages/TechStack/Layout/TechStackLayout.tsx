import React from 'react';
import { useTranslation } from 'react-i18next';

import AssetReact from 'res/svg/react.svg';
import AssetNodeJS from 'res/svg/nodejs.svg';
import AssetJavaScript from 'res/svg/javascript.svg';
import { Heading } from 'components';

import { Container, Text, List, ListItem, Image } from './TechStack.styled';

interface Props {
  id: string;
}

const TechStackLayout: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['techStack']);

  return (
    <Container {...props}>
      <Heading label={t('title')} />
      <Text
        dangerouslySetInnerHTML={{
          __html: t('text.0'),
        }}
      />
      <List>
        <ListItem>
          <Image src={AssetReact} />
        </ListItem>
        <ListItem>
          <Image src={AssetNodeJS} />
        </ListItem>
        <ListItem>
          <Image src={AssetJavaScript} />
        </ListItem>
      </List>
      <Text
        dangerouslySetInnerHTML={{
          __html: t('text.1'),
        }}
      />
    </Container>
  );
};

export default TechStackLayout;
