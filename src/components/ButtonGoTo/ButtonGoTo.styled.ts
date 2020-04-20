import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })`
  transition: opacity 0.25s ease-in-out 0s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme: { typography } }) => typography.button1.fontSize};
  color: ${({ theme: { colors } }) => colors.secondary};
  margin-bottom: 3.7rem;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-family: ${({ theme: { typography } }) => typography.button1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  color: ${({ theme: { colors } }) => colors.error};
  text-transform: uppercase;
  letter-spacing: 0.69pt;
`;

export const Icon = styled.img`
  margin-top: 1.2rem;
`;
