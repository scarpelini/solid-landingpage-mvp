import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

interface MenuProps {
  toggle?: boolean;
}

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1770px;
  width: 100%;

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    padding: 0 4rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0 2.6rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    padding: 0 2rem;
  }
`;

export const Image = styled.img`
  position: relative;
  z-index: 11;
`;

export const Container = styled.header`
  background-color: ${({ theme: { colors } }) => colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 3rem 0;
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

  @media ${({ theme: { breakpoints } }) => breakpoints.laptop} {
    ${Text}:first-of-type {
      left: 33%;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    ${Text}:first-of-type, ${Text}:last-of-type {
      display: none;
    }
  }
`;

export const ButtonBookNow = styled(Link)`
  font-family: ${({ theme: { typography } }) => typography.body1.fontFamily};
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  color: ${({ theme: { colors } }) => colors.error};
  /* margin-right: 9rem; */
  text-decoration: none;
  letter-spacing: 0.69pt;

  &:before {
    background-color: ${({ theme: { colors } }) => colors.primary};
    content: '';
    display: inline-block;
    position: relative;
    top: -4px;
    margin: 0 2rem;
    width: 4.2rem;
    height: 0.1rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    margin-right: 3.1rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobileS} {
    margin-right: 2rem;

    &:before {
      margin: 0 1rem;
    }
  }
`;

export const Hamb = styled.button<MenuProps>`
  display: block;
  position: relative;
  top: 3px;
  z-index: 11;
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
    transition: transform 0.25s ease-in-out 0s, top 0.25s ease-in-out 0s,
      left 0.25s ease-in-out 0s;
  }

  &:after {
    top: 9px;
  }

  ${({ toggle }) =>
    toggle &&
    css`
      &:before {
        top: 3px;
        transform: rotate(45deg);
      }

      &:after {
        top: 3px;
        transform: rotate(-45deg);
      }
    `}
`;

export const Toggle = styled.div<MenuProps>`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: height 0.25s ease-in-out 0s;

  ${({ toggle }) =>
    toggle &&
    css`
      height: 100vh;
    `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 15rem;
  max-width: 1281px;
  width: 100%;
  height: auto;
`;

export const ListItem = styled.li`
  &:first-child {
    margin-top: 10rem;
  }

  &:last-child {
    margin-bottom: 10rem;
  }

  &:hover {
    a {
      color: ${({ theme: { colors } }) => colors.primary};
      font-size: 11rem;
    }
  }

  &:not(:last-child) {
    margin-bottom: 16.3rem;
  }

  a {
    color: ${({ theme: { colors } }) => colors.onSecondary};
    font-family: ${({ theme: { typography } }) => typography.h1.fontFamily};
    font-size: ${({ theme: { typography } }) => typography.h1.fontSize};
    display: block;
    text-decoration: none;
    white-space: nowrap;
    transition: font-size 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s;
  }
`;

export const Socials = styled.ul<MenuProps>`
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 50%;
  bottom: 58px;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 1770px;
  width: 100%;
  transition: opacity 0.25s ease-in-out 0.5s, visibility 0.25s ease-in-out 0s;
  pointer-events: none;

  @media ${({ theme: { breakpoints } }) => breakpoints.laptopL} {
    flex-direction: column;
    left: 40px;
    bottom: 30px;
    transform: translateX(0);
  }
`;

export const SocialItem = styled.li`
  pointer-events: auto;

  &:not(:last-child) {
    margin-right: 5.1rem;
  }
`;
