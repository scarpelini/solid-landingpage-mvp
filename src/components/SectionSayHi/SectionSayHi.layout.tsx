import React from 'react';

import { Container, Cta, CtaText, Socials, Local } from './SectionSayHi.styled';

type ListItem = {
  sayhi_social: {
    text: string;
    spans: { data: { url: string } }[];
  }[];
};

interface Props {
  data: {
    subtitle: string;
    title: string;
    sayHi: string;
    mailTo: { url: string };
    socials: ListItem[];
  };
}

const SectionSayHi: React.FC<Props> = ({ data }) => (
  <Container>
    <h2>{data.subtitle}</h2>

    <Cta href={data.mailTo.url}>
      <CtaText dangerouslySetInnerHTML={{ __html: `${data.title}` }} />
      <CtaText>{data.sayHi}</CtaText>
    </Cta>

    <footer>
      <Socials>
        {data.socials.map((item: ListItem, i: number) => (
          <li key={i.toString()}>
            <a
              href={item.sayhi_social[0].spans[0].data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.sayhi_social[0].text}
            </a>
          </li>
        ))}
        <li />
      </Socials>

      <Local>
        <p>São Paulo</p>
        <p>Brazil</p>
      </Local>
    </footer>
  </Container>
);

export default SectionSayHi;
