import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${props => props.theme.typography.h1.fontFamily};
  font-size: ${props => props.theme.typography.h1.fontSize};
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  text-align: center;
  line-height: 10.7rem;
`;

export default H1;
