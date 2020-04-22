import styled from 'styled-components';

import { H1 } from 'components';

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-top: 11rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    height: auto;
  }

  @media (max-height: 690px) {
    padding-top: 11rem;
    height: auto;
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
    margin-bottom: 7.6rem;
    max-width: 300px;
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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 7.8rem;

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
    margin-top: 3rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0 2.2rem 0 2.7rem;
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
      margin-bottom: 7rem;
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
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 40px;

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    order: 2;
    align-self: center;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    position: relative;
    bottom: auto;
    margin-top: 7.4rem;
    margin-bottom: 11.3rem;
  }

  @media (max-height: 690px) {
    position: relative;
  }
`;

export const FooterLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const Button = styled.button.attrs({ type: 'button' })``;
