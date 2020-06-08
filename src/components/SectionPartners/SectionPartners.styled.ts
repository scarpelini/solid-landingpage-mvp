import styled from 'styled-components';

export const PartnerName = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.typography.subtitle1.fontSize};

  position: relative;
  max-width: 100%;
  line-height: 7.2rem;
  text-align: left;

  a {
    display: inline-block;
    position: relative;
    top: 1px;
    margin-left: 1.4rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.4;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;

    a {
      position: absolute;
      top: auto;
      bottom: -58px;
      left: 14px;
      width: 4rem;
      height: 4rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: ${(props) => props.theme.typography.button2.fontSize};

    margin-top: 3rem;
    padding: 0 0.5rem 0 2.7rem;
    line-height: 3.5rem;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    font-size: ${(props) => props.theme.typography.button1.fontSize};

    padding: 0 1.5;
    line-height: 3rem;
  }
`;

export const Container = styled.section`
  padding-top: 19.6rem;

  .slick-list {
    padding-bottom: 8.9rem;
  }

  header {
    margin-bottom: 19.3rem;
  }

  li {
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    outline: none;

    > img {
      background-color: ${(props) => props.theme.colors.secondary};

      margin-right: 10.4rem;
      width: 42.8rem;
      height: 53.2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    li {
      > img {
        margin-right: 6rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    align-items: flex-start;

    padding-top: 13.3rem;
    padding-right: 2.4rem;
    padding-left: 2.4rem;

    header {
      margin-bottom: 9.8rem;
    }

    h1 {
      max-width: 360px;
    }

    .slider-list {
      padding-bottom: 10rem;
    }

    li {
      flex-direction: column;

      > img {
        margin: 0 auto 6rem auto;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
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

    li {
      > img {
        margin-bottom: 6.5rem;
        width: 28.4rem;
        height: 35.2rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
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

  > div {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.typography.subtitle1.fontSize};

    max-width: 100%;
    line-height: 7.2rem;
    text-align: left;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    > div {
      margin: 0 auto;
      max-width: 550px;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    > div {
      font-size: ${(props) => props.theme.typography.button2.fontSize};

      padding: 0 0.5rem 0 2.7rem;
      line-height: 3.5rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    > div {
      font-size: ${(props) => props.theme.typography.button1.fontSize};

      padding: 0 1.5;
      line-height: 3rem;
    }
  }
`;
