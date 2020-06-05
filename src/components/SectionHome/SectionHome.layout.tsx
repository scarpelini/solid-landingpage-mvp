import React from 'react';

import {
  Container,
  Wrapper,
  List,
  Title,
  Footer,
  MobileContext,
  ButtonGoTo,
} from './SectionHome.styled';

type ItemList = { text: string };

interface Props {
  data: {
    title: string;
    list: ItemList[];
  };
  onClickGoTo: () => void;
}

const SectionHome: React.FC<Props> = ({ data, onClickGoTo }) => (
  <Container>
    <Wrapper>
      <Title dangerouslySetInnerHTML={{ __html: `${data.title}` }} />

      <MobileContext>
        <p>Immediate Availability</p>
        <p>Investment starting point ~$10,000</p>
      </MobileContext>

      <List>
        {data.list.map((item: ItemList, i: number) => (
          <li
            key={i.toString()}
            dangerouslySetInnerHTML={{ __html: `${item.text}` }}
          />
        ))}
      </List>

      <Footer>
        <ButtonGoTo onClick={onClickGoTo}>
          <span>We can help make your product real.</span>
          <span>
            <p>Know How</p>
            <img src="/assets/svg/icon-arrow.svg" alt="" />
          </span>
        </ButtonGoTo>
      </Footer>
    </Wrapper>

    <List>
      {data.list.map((item: ItemList, i: number) => (
        <li
          key={i.toString()}
          dangerouslySetInnerHTML={{ __html: `${item.text}` }}
        />
      ))}
    </List>
  </Container>
);

export default SectionHome;
