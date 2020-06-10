import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;

  width: 100vw;
  height: 100vh;
`;
