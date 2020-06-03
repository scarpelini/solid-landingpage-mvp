import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 3rem 0;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 7rem;
    max-width: 1770px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    > div {
      padding: 0 4rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    background-color: transparent;
    position: absolute;

    > div {
      padding: 0 2.6rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    padding: 1.9rem 0;

    > div {
      padding: 0 2rem;
    }
  }
`;

export const ButtonLogo = styled.button.attrs({ type: 'button' })`
  img {
    position: relative;
    z-index: 11;
    height: 4.2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    display: inherit;
    align-items: inherit;
  }

  li {
    font-family: ${(props) => props.theme.typography.body1.fontFamily};
    font-size: ${(props) => props.theme.typography.body1.fontSize};

    text-transform: uppercase;
    letter-spacing: 0.69pt;
    font-weight: normal;
    line-height: 1.6rem;

    &:nth-child(1) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &:nth-child(2) {
      margin-right: 3.1rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    li {
      &:nth-child(1) {
        left: 33%;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    li {
      &:nth-child(1),
      &:nth-child(2) {
        display: none;
      }
    }
  }
`;
