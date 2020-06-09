import React from 'react';
import Slider from 'react-slick';

import { Heading, Button } from '~/components';

import {
  Container,
  ContainerText,
  PartnerName,
} from './SectionPartners.styled';

type Text = { text: string };

type ListItem = {
  partner_name: Text[];
  partner_description: Text[];
  partner_photo: { url: string };
  partner_linkedin: { url: string };
  partner_group: string;
};

interface Props {
  data: {
    title: string;
    list: ListItem[];
    mailto: string;
  };
}

const SectionPartners: React.FC<Props> = ({ data }) => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnDotsHover: true,
  };

  return (
    <Container>
      <Heading text={data.title} />

      <Slider {...settings}>
        {data.list.map((item: ListItem, i: number) => (
          <li key={i.toString()}>
            <img src={item.partner_photo.url} alt="Add alt attr" />

            <ContainerText>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${item.partner_description[0].text}`,
                }}
              />

              <PartnerName>
                {item.partner_name[0].text}{' '}
                <a
                  href={item.partner_linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/svg/icon-linkedin.svg"
                    alt={`Open ${item.partner_name} LinkedIn`}
                  />
                </a>
                <br />
                {item.partner_group}
              </PartnerName>
            </ContainerText>
          </li>
        ))}
      </Slider>

      <footer>
        <Button
          href={data.mailto}
          textPreffix="Don't waste time overthinking."
          label="Schedule a Meeting"
        />
      </footer>
    </Container>
  );
};

export default SectionPartners;
