import styled, { css, keyframes } from 'styled-components';

interface WrapperProps {
  time?: string;
  direction?: 'lr' | 'rl';
}

export const marqueeLF = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

export const marqueeRL = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  position: relative;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  flex-shrink: 0;

  position: relative;
  height: 9.1rem;
  white-space: nowrap;

  img {
    margin-right: 4.5rem;
  }

  animation: ${({ time, direction }) =>
    direction === 'lr'
      ? css`
          ${marqueeLF} ${time} linear infinite
        `
      : css`
          ${marqueeRL} ${time} linear infinite
        `};
`;
