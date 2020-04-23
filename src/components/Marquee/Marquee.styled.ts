import styled, { keyframes } from 'styled-components';

interface Props {
  time?: string;
}

export const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
`;

export const Wrap = styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  height: 9.1rem;
  animation: ${marquee} ${({ time = '16s' }) => time} linear infinite;
`;

export const Asset = styled.img`
  margin-right: 4.5rem;
`;
