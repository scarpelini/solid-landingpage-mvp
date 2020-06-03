import styled from 'styled-components';

export const Container = styled.button`
  color: ${(props) => props.theme.colors.error};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  border: 0.2rem solid ${(props) => props.theme.colors.error};

  transition: color 0.2s, background-color 0.2s;

  position: relative;
  padding: 2.4rem 4.9rem;
  text-decoration: none;
  font-weight: normal;
  letter-spacing: 0.69pt;

  &:hover {
    color: ${({ theme: { colors } }) => colors.background};
    background-color: ${({ theme: { colors } }) => colors.error};
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    margin-right: 0;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-bottom: 2.2rem;
    padding-right: 0;
    border: 0;

    &:hover {
      color: ${({ theme: { colors } }) => colors.error};
      background-color: ${({ theme: { colors } }) => colors.background};
    }
  }
`;
