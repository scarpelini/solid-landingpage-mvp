import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${props => props.theme.typography.h1.fontFamily};
  font-size: ${props => props.theme.typography.h1.fontSize};
  color: ${props => props.theme.colors.primary};
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: normal;
  line-height: 10.7rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    font-size: 6rem;
    line-height: 8.7rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
    line-height: 8rem;
    text-align: left;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    font-family: ${({ theme: { typography } }) => typography.h1.fontFamily};
    font-weight: normal;
  }
`;

export default H1;
