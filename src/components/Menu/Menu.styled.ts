import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 2.4rem;
  width: 100%;
  height: 5.6rem;
  transition: top 0.25s ease-in-out 0s;

  > a {
    color: ${(props) => props.theme.colors.error};
    font-family: ${(props) => props.theme.typography.body1.fontFamily};
    font-size: ${(props) => props.theme.typography.body1.fontSize};

    position: relative;
    text-decoration: none;
    font-weight: normal;
    letter-spacing: 0.69pt;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    visibility: visible;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    padding: 0 1.7rem;
  }
`;
