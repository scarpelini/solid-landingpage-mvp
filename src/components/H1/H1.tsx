import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${props => props.theme.typography.h1.fontFamily};
  font-size: ${props => props.theme.typography.h1.fontSize};
  color: ${props => props.theme.colors.primary};
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  line-height: 10.7rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    font-size: 6rem;
    line-height: 8.7rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    font-size: 4rem;
    line-height: 8rem;
    text-align: left;
  }
`;

export default H1;
