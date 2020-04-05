import styled from 'styled-components';

const H2 = styled.h2`
  color: ${({ theme: { colors } }) => colors.onBackground};
`;

export default H2;
