import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  header {
    margin-bottom: 11.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;

    header {
      margin-bottom: 9.9rem;
    }

    h1 {
      max-width: 320px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  max-width: 50%;
  width: 100%;

  &:last-of-type {
    display: flex;
    justify-content: center;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    max-width: 100%;
    width: auto;

    &:first-of-type {
      padding: 0 2.2rem 0 2.7rem;
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
`;

export const marquee = keyframes`
  from {
    transform: translate3d(calc(-25% + 20vw), 0, 0);
  }
  to {
    transform: translate3d(calc(-50% + 20vw), 0, 0);
  }
`;

export const Lines = styled.div`
  position: relative;
  margin: 8.7rem 0 15.1rem 0;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin: 9.4rem 0 11.6rem 0;
  }
`;

export const LinesWrap = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translate3d(calc(-25% + 20vw), 0, 0);
  animation: ${marquee} 5s linear infinite;
`;

export const Image = styled.img`
  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 4rem;
  }
`;

export const Line = styled.img`
  max-width: initial;
  transform: translateX(-20%);
`;
