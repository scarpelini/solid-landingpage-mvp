import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

export default Header;
