import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 0 24px;
  min-width: 64px;
  height: 48px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition-duration: 0.2s;

  /* Theme color */
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};

  /* Typography */
  font-family: ${props => props.theme.typography.button1.fontFamily};
  font-size: ${props => props.theme.typography.button1.fontSize};
  font-style: ${props => props.theme.typography.button1.fontStyle};
  font-weight: ${props => props.theme.typography.button1.fontWeight};

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
