import styled from 'styled-components';

import { H1 } from 'components';

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

export const Title = styled(H1)`
  margin-bottom: 13.9rem;
  white-space: nowrap;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 7.8rem;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 6.2rem;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme: { typography } }) => typography.body2.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
  color: ${({ theme: { colors } }) => colors.secondary};
  text-align: center;
  line-height: 4rem;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 40px;
`;

export const FooterLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const Button = styled.button.attrs({ type: 'button' })``;
