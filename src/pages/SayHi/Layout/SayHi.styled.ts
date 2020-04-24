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
    header {
      padding-left: 5.2rem;
      padding-right: 5.2rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    header {
      padding-left: 2.4rem;
      padding-right: 2.4rem;

      h1 {
        font-size: 8rem;
        line-height: 9.7rem;
      }
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
    padding-top: 14.8rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    header {
      h1 {
        font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
        max-width: 350px;
        line-height: 8rem;
      }
    }
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body3.fontSize};
  margin: 0 auto 26.9rem auto;
  text-align: center;
  letter-spacing: 0.69pt;

  @media (max-width: 1120px) {
    max-width: 700px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 15.8rem;
    font-size: 2.8rem;
    text-align: left;
    max-width: 330px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding: 0 2.4rem;
    font-size: 2.3rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22.6rem;
  margin-bottom: 10rem;

  @media (max-width: 1049px) {
    padding: 0 2.5rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    order: 2;
  }
`;

export const SocialItem = styled.li`
  a {
    font-weight: normal;
  }

  &:not(:last-child) {
    margin-right: 5.1rem;
  }
`;

export const Local = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    order: 1;
    margin-top: 11.1rem;
    padding: 0 0 14.8rem 2.7rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.onSecondary};
  font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
  font-family: ${({ theme: { typography } }) => typography.body4.fontFamily};
  line-height: 4rem;
  font-weight: normal;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: 2.8rem;
  }
`;

export const CtaText = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-weight: normal;
  display: inline-block;
  position: relative;
  font-size: 11rem;
  letter-spacing: 0.69pt;
  line-height: 10.7rem;
  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:last-of-type {
    &:after {
      background-color: ${({ theme: { colors } }) => colors.primary};
      content: '';
      display: inline-block;
      position: absolute;
      right: 33px;
      bottom: -16px;
      width: 0%;
      height: 0.2rem;
      transition: width 0.25s ease-in-out 0s;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    font-size: 8rem;
    line-height: 9.7rem;

    &:last-of-type {
      &:after {
        bottom: -5px;
        right: 48px;
      }
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
    font-weight: normal;
    line-height: 8rem;

    &:last-of-type {
      margin-bottom: 0;

      &:after {
        right: 37px;
        bottom: 12px;
      }
    }
  }
`;

export const Cta = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;

  &:hover {
    ${CtaText} {
      &:last-of-type {
        &:after {
          left: 1px;
          right: auto;
          width: calc(100% - 3.4rem);
        }
      }
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    &:hover {
      ${CtaText} {
        &:last-of-type {
          &:after {
            left: 24px;
            right: auto;
            width: calc(100% - 7.2rem);
          }
        }
      }
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    &:hover {
      ${CtaText} {
        &:last-of-type {
          &:after {
            right: auto;
            width: calc(100% - 6.1rem);
          }
        }
      }
    }
  }
`;
