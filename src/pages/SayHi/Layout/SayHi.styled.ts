import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding-top: 19.6rem;
  max-width: 1049px;
  width: 100%;

  header {
    h1 {
      text-align: left;
      font-size: 11rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    header {
      h1 {
        font-size: 8rem;
        line-height: 9.7rem;
      }
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body3.fontSize};
  margin: 0 0 26.9rem 0;
  text-align: center;
  letter-spacing: 0.69pt;
`;

export const SayHi = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-weight: 600;
  display: inline-block;
  position: relative;
  margin-bottom: 22.6rem;
  font-size: 11rem;
  letter-spacing: 0.69pt;
  line-height: 10.7rem;
  text-decoration: none;

  &:after {
    background-color: ${({ theme: { colors } }) => colors.primary};
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 2.4rem);
    height: 0.1rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    font-size: 8rem;
    line-height: 9.7rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 5.1rem;
  }
`;

export const Local = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.onSecondary};
  font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
  font-family: ${({ theme: { typography } }) => typography.body4.fontFamily};
  line-height: 4rem;
`;
