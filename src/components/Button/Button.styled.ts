import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  span {
    &:first-of-type {
      color: ${(props) => props.theme.colors.secondary};
    }

    &:last-of-type {
      color: ${(props) => props.theme.colors.background};
      font-family: ${(props) => props.theme.typography.body1.fontFamily};
      font-size: ${(props) => props.theme.typography.body1.fontSize};
      background-color: ${(props) => props.theme.colors.error};
      border: 0.2rem solid ${(props) => props.theme.colors.error};

      margin-top: 1.3rem;
      padding: 2.4rem 4rem;
      width: auto;
      text-transform: uppercase;
      text-decoration: none;
      transition: color 0.2s, background-color 0.2s;
    }
  }

  &:hover {
    span {
      &:last-of-type {
        color: ${(props) => props.theme.colors.error};
        background-color: ${(props) => props.theme.colors.background};
      }
    }
  }
`;
