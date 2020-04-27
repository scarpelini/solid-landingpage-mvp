import styled from 'styled-components';

import { H1 } from 'components';

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;

  > ul {
    display: none;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    justify-content: flex-start;
    padding-top: 10.2rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    > ul {
      display: block;
    }
  }
`;

export const Title = styled(H1)`
  margin-bottom: 13.9rem;
  white-space: nowrap;

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    max-width: 850px;
    white-space: normal;

    br {
      display: none;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    margin-bottom: 5rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 4.4rem;
    max-width: 300px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 3rem;
    max-width: 260px;
  }

  @media (min-width: 1025px) and (max-height: 720px) {
    margin-bottom: 8rem;
  }
`;

export const MobileText = styled.p`
  display: none;
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};

  line-height: 2.2rem;
  letter-spacing: 0.69pt;
  text-transform: uppercase;

  &:not(:last-of-type) {
    margin-bottom: 2.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    display: block;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 2.7rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding-left: 1.5rem;
  }

  @media (max-width: 767px) and (max-height: 567px) {
    &:first-of-type {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 auto 7.8rem auto;

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    max-width: 1050px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    max-width: 930px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    order: 3;
    flex-direction: column;
    align-items: flex-start;
    margin: 3rem 0 0 0;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 4.9rem;
    padding: 0 2.2rem 0 2.7rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding: 0 1.5rem;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 6.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    max-width: 340px;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 5rem;
    }
  }
`;

export const Text = styled.p`
  font-family: ${({ theme: { typography } }) => typography.body2.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
  color: ${({ theme: { colors } }) => colors.secondary};
  text-align: center;
  line-height: 4rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    font-size: calc(
      ${({ theme: { typography } }) => typography.body2.fontSize} - 0.9rem
    );
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    text-align: left;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    font-size: calc(
      ${({ theme: { typography } }) => typography.body2.fontSize} - 1.4rem
    );
    line-height: 3rem;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 40px;
  width: 100%;

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    order: 2;
    align-self: center;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    bottom: 100px;
  }

  @media (min-width: 767px) and (max-height: 768px) {
    position: relative;
    bottom: 40px;
    margin-top: 5.2rem;
  }

  @media (max-width: 767px) and (max-height: 690px) {
    position: relative;
    bottom: 0;
    margin-top: 5.2rem;
  }

  @media (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    bottom: -20px;
  }
`;

export const FooterLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const Button = styled.button.attrs({ type: 'button' })``;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    height: calc(100vh - 10rem);
    padding-top: 10.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    justify-content: flex-start;
    padding-top: 0;
    height: calc(100vh - 10rem);

    > ul {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    justify-content: flex-start;
    height: calc(100vh - 4rem);
  }

  @media (min-width: 767px) and (max-height: 775px) {
    padding-top: 10.2rem;
    height: auto;
  }

  @media (max-width: 767px) and (max-height: 567px) {
    height: auto;
  }
`;
