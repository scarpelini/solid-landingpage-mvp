import styled from 'styled-components';

export const Logo = styled.img``;

export const Container = styled.header`
  background-color: ${({ theme: { colors } }) => colors.background};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: -56px;
  left: 0;
  z-index: 10;
  padding: 0 2.4rem;
  width: 100%;
  height: 5.6rem;
  visibility: hidden;
  transition: top 0.25s ease-in-out 0s;

  &.fixed {
    top: 0;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    visibility: visible;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding: 0 1.7rem;
  }
`;

export const Cta = styled.a`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  color: ${({ theme: { colors } }) => colors.error};
  position: relative;
  text-decoration: none;
  font-weight: normal;
  letter-spacing: 0.69pt;
`;
