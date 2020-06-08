import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.typography.h1.fontFamily};
  font-size: ${(props) => props.theme.typography.h1.fontSize};

  margin: 0;
  text-transform: uppercase;
  text-align: center;
  line-height: 10.7rem;

  @media ${(props) => props.theme.breakpoints.desktop} {
    font-size: 6rem;
    line-height: 8.7rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
    line-height: 8rem;
    text-align: left;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
    line-height: 5.5rem;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    font-size: ${({ theme: { typography } }) => typography.h1Mobile.fontSize};
    line-height: 4.5rem;
  }
`;

export default H1;
