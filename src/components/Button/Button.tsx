import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.error};
  color: ${({ theme: { colors } }) => colors.background};
  padding: 2.5rem 4rem;
  width: auto;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.2;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.75;
  }
`;

export default Button;
