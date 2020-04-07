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
    margin-bottom: 7.3rem;
  }

  @media (min-width: 1025px) and (max-height: 720px) {
    margin-bottom: 8rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 7.8rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    max-width: 1050px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    max-width: 930px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    flex-direction: column;
    align-items: flex-start;
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

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    font-size: calc(
      ${({ theme: { typography } }) => typography.body2.fontSize} - 1rem
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
    align-self: center;
  }
`;

export const FooterLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const Button = styled.button.attrs({ type: 'button' })``;
