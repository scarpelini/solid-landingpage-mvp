import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Source = styled.source``;

export const Container = styled.section`
  padding-top: 19.6rem;

  header {
    margin-bottom: 6.4rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-top: 16.7rem;
    padding-left: 0;
    padding-right: 0;

    header {
      margin-bottom: 10.7rem;
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    h1 {
      max-width: 260px;
    }
  }
`;

export const Text = styled.span`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { typography } }) => typography.h2.fontSize};
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
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { typography } }) => typography.body3.fontSize};
    margin: 0 auto;
    line-height: 6rem;
    text-align: center;
    max-width: 1164px;

    &:nth-of-type(1) {
      margin-bottom: 10.8rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    h2 {
      font-weight: normal;
      text-align: left;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;

    p {
      &:nth-of-type(1) {
        padding: 0 2.7rem;
        margin-bottom: 8.3rem;
      }

      &:nth-of-type(2) {
        margin-bottom: 8.5rem;
        padding: 0 2.7rem;
      }
    }

    h2 {
      font-size: ${({ theme: { typography } }) => typography.body2.fontSize};

      line-height: 5rem;

      &:not(:last-of-type) {
        margin-bottom: 8rem;
      }
    }
  }
`;

export const Video = styled.video`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  margin-top: 9.8rem;
  width: 100%;
  /* height: 72.6rem; */

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 7rem;
    width: auto;
    height: 72.6rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11.9rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 9.4rem;
  }
`;

export const Label = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
`;

export const ButtonShape = styled.span`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  color: ${({ theme: { colors } }) => colors.error};
  margin-top: 1.3rem;
  padding: 2.2rem 4rem;
  width: auto;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover {
    ${ButtonShape} {
      color: ${({ theme: { colors } }) => colors.background};
      background-color: ${({ theme: { colors } }) => colors.error};
    }
  }
`;
