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
`;

export const Text = styled.span`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { typography } }) => typography.h2.fontSize};
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
`;

export const Video = styled.video`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  margin-top: 9.8rem;
  width: 100%;
  /* height: 72.6rem; */
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11.9rem;
`;

export const Label = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
`;

export const Button = styled(Link)`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  background-color: ${({ theme: { colors } }) => colors.error};
  color: ${({ theme: { colors } }) => colors.background};
  margin-top: 1.3rem;
  padding: 2.2rem 4rem;
  width: auto;
  text-transform: uppercase;
  text-decoration: none;
`;
