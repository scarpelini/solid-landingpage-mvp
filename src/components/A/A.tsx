import styled from 'styled-components';

const A = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.69pt;
  line-height: 1.6rem;
  cursor: pointer;
  transition: color 0.25s ease-in-out 0s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.onSecondary};
  }

  &:active {
    opacity: 0.55;
  }
`;

export default A;
