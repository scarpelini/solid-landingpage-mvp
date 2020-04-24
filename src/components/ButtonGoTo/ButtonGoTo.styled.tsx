import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(7px);
  }
`;

export const Icon = styled.img`
  margin-top: 1.2rem;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover {
    ${Icon} {
      animation: ${bounce} 0.3s infinite alternate;
    }
  }
`;

export const Description = styled.p`
  font-size: ${({ theme: { typography } }) => typography.button1.fontSize};
  color: ${({ theme: { colors } }) => colors.secondary};
  margin-bottom: 3.7rem;

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 2.7rem;
  }
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
