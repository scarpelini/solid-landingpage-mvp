import styled from 'styled-components';

export const PartnerName = styled.p`
  position: relative;

  a {
    display: inline-block;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-top: 3.9rem;
    width: 100%;

    a {
      position: absolute;
      bottom: -58px;
      left: 14px;
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const Container = styled.section`
  padding-top: 19.6rem;

  header {
    margin-bottom: 19.3rem;
  }

  .slick-list {
    padding-bottom: 8.9rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding-top: 13.3rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;

    align-items: flex-start;

    header {
      margin-bottom: 9.8rem;
    }

    h1 {
      max-width: 360px;
    }

    .slider-list {
      padding-bottom: 10rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-top: 9rem;

    .slick-list {
      padding-bottom: 14rem;
    }

    header {
      margin-bottom: 9rem;
    }

    footer {
      margin-top: 9.6rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding-left: 1.8rem;
    padding-right: 1.8rem;

    .slick-list {
      padding-bottom: 7rem;
    }

    header {
      margin-bottom: 7.5rem;
    }
  }
`;

export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

export const CarouselItem = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  outline: none;

  p,
  ${PartnerName} {
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize};
    max-width: 100%;
    line-height: 7.2rem;
    text-align: left;
  }

  ${PartnerName} {
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    flex-direction: column;

    p,
    ${PartnerName} {
      margin: 0 auto;
      max-width: 550px;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    p,
    ${PartnerName} {
      font-size: ${({ theme: { typography } }) => typography.button2.fontSize};
      padding: 0 0.5rem 0 2.7rem;
      line-height: 3.5rem;
    }

    ${PartnerName} {
      margin-top: 3rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    p,
    ${PartnerName} {
      font-size: ${({ theme: { typography } }) => typography.button1.fontSize};
      padding: 0 1.5;
      line-height: 3rem;
    }
  }
`;

export const Picture = styled.img`
  margin-right: 10.4rem;
  width: 42.8rem;
  height: 53.2rem;
  background-color: ${({ theme: { colors } }) => colors.secondary};

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    margin-right: 6rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin: 0 auto 6rem auto;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 28.4rem;
    height: 35.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 6.5rem;
  }
`;
