import styled from 'styled-components';

export const Source = styled.source``;

export const Container = styled.section`
  max-height: 1280px;

  header {
    position: relative;
    z-index: 1;
    margin-bottom: 11.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    max-height: 100%;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-height: 2100px;

    header {
      margin-bottom: 9rem;
    }

    h1 {
      max-width: 320px;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding-right: 1.9rem;

    header {
      margin-bottom: 7.5rem;
    }
  }
`;

export const ContainerMarquee = styled.div`
  margin: 5rem 0 15.1rem 0;
  display: block;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`;

export const ContainerMarqueeMobile = styled.div`
  margin: 2rem 0 6.5rem 0;
  display: none;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: block;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    margin-bottom: 6.3rem;
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

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
    align-items: center;

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

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    max-width: 100%;
    width: auto;

    &:first-of-type {
      padding: 0 2.2rem 0 2.7rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    &:first-of-type {
      padding: 0 1.5rem;
    }
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8.9rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    &:not(:last-child) {
      margin-bottom: 7.5rem;
    }
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize};
  font-family: ${({ theme: { typography } }) =>
    typography.subtitle1.fontFamily};

  font-weight: 500;
  margin-bottom: 3.9rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: ${({ theme: { typography } }) => typography.button2.fontSize};
    margin: 0 0 3rem 0;
    max-width: 260px;
    line-height: 3.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { typography } }) => typography.h2.fontSize};
  font-family: ${({ theme: { typography } }) => typography.body2.fontFamily};
  line-height: 4.2rem;
  max-width: 652px;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    line-height: 3.5rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 1.8rem;
    line-height: 3rem;
  }
`;

export const Image = styled.img`
  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 4rem;
  }
`;

export const Video = styled.video`
  position: relative;
  top: -70px;
  left: 100px;

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    width: 80rem;
    top: -30px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    top: -10px;
    left: 80px;
    width: 65rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 58rem;
    top: 0;
    left: 50px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    width: 51rem;
    left: 40px;
  }
`;
