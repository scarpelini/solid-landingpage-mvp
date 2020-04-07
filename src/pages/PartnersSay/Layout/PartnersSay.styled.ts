import styled from 'styled-components';

export const PartnerName = styled.p``;

export const Container = styled.section`
  padding-top: 19.6rem;

  header {
    margin-bottom: 19.3rem;
  }

  .carousel {
    .slider-wrapper {
      padding-bottom: 8.9rem;
    }

    .slide {
      background-color: transparent;
    }

    img {
      width: 42.8rem;
      height: 53.2rem;
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
`;

export const Picture = styled.img`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  margin-right: 10.4rem;
`;
