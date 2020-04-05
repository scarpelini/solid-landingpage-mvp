import styled from 'styled-components';

const A = styled.a`
  display: inline-block;
  padding: 6px;
  cursor: pointer;
  text-decoration: underline;
  transition-duration: 0.1s;
  font-size: ${props => props.theme.typography.button1.fontSize};
  font-weight: ${props => props.theme.typography.button1.fontWeight};
  color: ${props => props.theme.colors.onBackground};

  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.55;
  }

  ::selection {
    color: none;
    background: none;
  }
`;

export default A;
