import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 1;
  padding-top: 4rem;

  header {
    margin-bottom: 6.4rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 11.9rem;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;

    header {
      margin-bottom: 9rem;
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    h1 {
      max-width: 260px;
    }

    footer {
      margin-top: 7.5rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    header {
      margin-bottom: 7.5rem;
    }

    footer a {
      max-width: 290px;
    }
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.typography.h2.fontSize};

  display: block;
  line-height: 4.2rem;

  p {
    margin: 0 auto;
    max-width: 733px;

    &:nth-of-type(1) {
      margin-bottom: 11rem;
    }

    &:nth-of-type(2) {
      margin-bottom: 10.8rem;
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.typography.body3.fontSize};

    margin: 0 auto;
    font-weight: normal;
    line-height: 6rem;
    text-align: center;
    max-width: 1164px;

    &:nth-of-type(1) {
      margin-bottom: 10.8rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    h2 {
      font-weight: normal;
      text-align: left;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;

    p {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        padding: 0 2.7rem;
        margin-bottom: 7.5rem;
        line-height: 3.5rem;
      }
    }

    h2 {
      font-size: ${(props) => props.theme.typography.body2.fontSize};
      line-height: 5rem;

      &:not(:last-of-type) {
        margin-bottom: 7.5rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    p {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        font-size: 1.8rem;
        padding: 0 1.5rem;
        line-height: 3rem;
      }

      &:nth-of-type(2) {
        margin-bottom: 6.1rem;
      }
    }

    h2 {
      font-size: ${(props) => props.theme.typography.subtitle1.fontSize};
      line-height: 4.5rem;
    }
  }
`;

export const ContainerVideo = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  margin-top: 9.8rem;
  width: 100%;
  height: auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    position: relative;
    margin-top: 7.4rem;
    width: 100%;
    height: 41rem;
    overflow: hidden;
  }
`;
