import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${props => props.theme.typography.h1.fontFamily};
  font-size: ${props => props.theme.typography.h1.fontSize};
  font-weight: ${props => props.theme.typography.h1.fontWeight};
  color: ${props => props.theme.colors.onBackground};

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    font-size: calc(${props => props.theme.typography.h1.fontSize} + 2rem);
  }
`;

export default H1;
