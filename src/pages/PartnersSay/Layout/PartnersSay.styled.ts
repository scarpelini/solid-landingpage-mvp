import styled from 'styled-components';

export const PartnerName = styled.p`
  position: relative;

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-top: 3.9rem;
    width: 100%;

    a {
      position: absolute;
      bottom: -36px;
      left: 50%;
      transform: translateX(-50%);
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

  .carousel {
    img {
      width: auto;
    }

    .slider-wrapper {
      padding-bottom: 8.9rem;
    }

    .slide {
      background-color: transparent;
    }

    .control-dots {
      .dot {
        background-color: ${({ theme: { colors } }) => colors.primary};
        border: 0.2rem solid ${({ theme: { colors } }) => colors.primary};
        margin: 0 1.1rem 0 0;
        width: 1rem;
        height: 1rem;
        outline: none;
        box-shadow: none;
        opacity: 1;
        transition: background-color 0.25s ease-in-out 0s,
          border-color 0.25s ease-in-out 0s;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          background-color: ${({ theme: { colors } }) => colors.background};
          border-color: ${({ theme: { colors } }) => colors.primary};
        }
      }

      .dot.selected {
        background-color: ${({ theme: { colors } }) => colors.background};
        border-color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;

    header {
      margin-bottom: 9.8rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    padding-top: 13.3rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;

    h1 {
      max-width: 360px;
    }

    .carousel {
      .control-dots {
        margin-bottom: 0;
      }

      .slider-wrapper {
        padding-bottom: 10rem;
      }
    }
  }
`;

export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p,
  ${PartnerName} {
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize};
    max-width: 810px;
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
      padding: 0 2.7rem;
      line-height: 4.5rem;
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
`;
