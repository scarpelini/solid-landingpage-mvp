import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  section {
    margin: 0 auto;
    max-width: 1392px;
    width: inherit;
  }
`;

const Layout: React.FC = ({ children }) => <Container>{children}</Container>;

export default Layout;
