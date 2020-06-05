import styled from 'styled-components';

export const ContainerMarquee = styled.div`
  margin: 5rem 0 15.1rem 0;
  display: block;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }
`;

export const ContainerMarqueeMobile = styled.div`
  margin: 2rem 0 6.5rem 0;
  display: none;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    margin-bottom: 6.3rem;
  }
`;

export const Container = styled.section`
  max-height: 1280px;

  header {
    position: relative;
    z-index: 1;
    margin-bottom: 11.2rem;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    max-height: 100%;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-height: 2100px;

    header {
      margin-bottom: 9rem;
    }

    h1 {
      max-width: 320px;

      br {
        display: block;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    padding-right: 1.9rem;

    header {
      margin-bottom: 7.5rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .is-mobile {
    display: none;
    z-index: 2;
    margin-top: -5rem;
    margin-bottom: 9rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    align-items: center;
    flex-direction: column;

    .is-mobile {
      display: block;
    }
  }
`;

export const Col = styled.div`
  position: relative;
  z-index: 1;
  max-width: 50%;
  width: 100%;

  &:last-of-type {
    display: flex;
    justify-content: center;
    z-index: 0;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: 100%;
    width: auto;

    &:first-of-type {
      padding: 0 2.2rem 0 2.7rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    &:first-of-type {
      padding: 0 1.5rem;
    }
  }
`;

export const List = styled.ul`
  li {
    &:not(:last-child) {
      margin-bottom: 8.9rem;
    }
  }

  h3 {
    font-size: ${(props) => props.theme.typography.subtitle1.fontSize};
    font-family: ${(props) => props.theme.typography.subtitle1.fontFamily};

    font-weight: 500;
    margin-bottom: 3.9rem;
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.typography.h2.fontSize};
    font-family: ${(props) => props.theme.typography.body2.fontFamily};

    line-height: 4.2rem;
    max-width: 652px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    li {
      &:not(:last-child) {
        margin-bottom: 7.5rem;
      }
    }

    h3 {
      font-size: ${(props) => props.theme.typography.button2.fontSize};

      margin: 0 0 3rem 0;
      max-width: 260px;
      line-height: 3.5rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }
`;

export const Video = styled.video`
  position: relative;
  top: -70px;
  left: 100px;

  @media ${(props) => props.theme.breakpoints.laptop} {
    width: 80rem;
    top: -30px;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    top: -10px;
    left: 80px;
    width: 65rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 58rem;
    height: 50rem;
    top: 0;
    left: 50px;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    width: 51rem;
    left: 40px;
  }
`;
