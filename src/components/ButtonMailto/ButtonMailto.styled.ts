import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11.9rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 9.4rem;
  }
`;
export const Label = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
`;

export const ButtonShape = styled.span`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  color: ${({ theme: { colors } }) => colors.error};
  margin-top: 1.3rem;
  padding: 2.2rem 4rem;
  width: auto;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover {
    ${ButtonShape} {
      color: ${({ theme: { colors } }) => colors.background};
      background-color: ${({ theme: { colors } }) => colors.error};
    }
  }
`;
