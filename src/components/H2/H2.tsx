import styled from 'styled-components';

const H2 = styled.h2`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: normal;
`;

export default H2;
