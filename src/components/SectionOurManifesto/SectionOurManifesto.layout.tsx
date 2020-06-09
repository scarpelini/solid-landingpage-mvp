import React from 'react';

import { Heading, Button } from '~/components';

import {
  Container,
  Content,
  ContainerVideo,
} from './SectionOurManifesto.styled';

type ListItem = { text: string };

interface Props {
  data: {
    title: string;
    content: ListItem[];
    video: string;
    mailto: string;
  };
}

const SectionOurManifesto: React.FC<Props> = ({ data }) => (
  <Container>
    <Heading text={data.title} />

    {data.content.map((item: ListItem, i: number) => (
      <Content
        key={i.toString()}
        dangerouslySetInnerHTML={{ __html: `${item.text}` }}
      />
    ))}

    <ContainerVideo>
      <video autoPlay muted playsInline loop>
        <source src={data.video} type="video/mp4" />
      </video>
    </ContainerVideo>

    <footer>
      <Button
        href={data.mailto}
        textPreffix="No dream comes true without action."
        label="Book Us Now"
      />
    </footer>
  </Container>
);

export default SectionOurManifesto;
