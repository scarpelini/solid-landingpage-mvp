import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Image = styled.img``;

export const Container = styled.header`
  background-color: ${({ theme: { colors } }) => colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;
  padding-top: 5rem;
  transform: translateX(-50%);
  max-width: 1770px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  text-transform: uppercase;
  letter-spacing: 0.69pt;
  line-height: 1.6rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  ${Text}:first-of-type {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  ${Text}:last-of-type {
    &:after {
      background-color: ${({ theme: { colors } }) => colors.primary};
      content: '';
      display: inline-block;
      position: relative;
      top: -4px;
      margin: 0 2rem;
      width: 4.2rem;
      height: 0.1rem;
    }
  }
`;

export const ButtonBookNow = styled(Link)`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  color: ${({ theme: { colors } }) => colors.error};
  margin-right: 9rem;
  text-decoration: none;
  letter-spacing: 0.69pt;
`;

export const Hamb = styled.button`
  display: block;
  position: relative;
  top: 3px;
  width: 4.2rem;
  height: 2rem;

  &:before,
  &:after {
    background-color: ${({ theme: { colors } }) => colors.primary};
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    display: inline-block;
    width: 4.2rem;
    height: 0.2rem;
  }

  &:after {
    top: 9px;
  }
`;

export const List = styled.ul`
  background-color: ${({ theme: { colors } }) => colors.background};
  display: none;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ListItem = styled.li``;
