import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const A = styled(Link)`
  transition: opacity 0.25s ease-in-out 0s;

  &:hover {
    opacity: 0.5;
  }
`;

export const Icon = styled.img`
  position: relative;
  top: 14px;
  max-width: 40px;
  max-height: 40px;
`;
