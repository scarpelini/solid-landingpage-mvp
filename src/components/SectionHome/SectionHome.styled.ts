import styled, { keyframes } from 'styled-components';

import { H1 } from '~/components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  height: auto;

  > ul {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    align-items: flex-start;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    justify-content: flex-start;
    padding-top: 10.2rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    > ul {
      display: block;
    }
  }

  @media (max-width: 320px) and (max-height: 470px) {
    padding-top: 8.2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: calc(100vh - 10rem);
    padding-top: 10.2rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    justify-content: flex-start;

    padding-top: 0;
    height: calc(100vh - 10rem);

    > ul {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    justify-content: flex-start;
    height: calc(100vh - 4rem);
  }

  @media (min-width: 767px) and (max-height: 775px) {
    padding-top: 10.2rem;
    height: auto;
  }

  @media (min-width: 767px) and (max-height: 567px) {
    height: auto;
  }
`;

export const Title = styled(H1)`
  margin-bottom: 13.9rem;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.laptop} {
    max-width: 850px;
    white-space: normal;

    br {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-bottom: 5rem;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: 3rem;
    max-width: 260px;
  }

  @media (min-width: 1025px) and (max-height: 720px) {
    margin-bottom: 8rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;

  margin: 0 auto 7.8rem auto;

  li {
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.typography.body2.fontFamily};
    font-size: ${(props) => props.theme.typography.body2.fontSize};

    text-align: center;
    line-height: 4rem;

    &:not(:last-child) {
      margin-right: 6.2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    max-width: 1050px;

    li {
      font-size: calc(
        ${(props) => props.theme.typography.body2.fontSize} - 0.9rem
      );
    }
  }

  @media ${(props) => props.theme.breakpoints.laptop} {
    max-width: 930px;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    order: 3;
    flex-direction: column;
    align-items: flex-start;

    margin: 3rem 0 0 0;

    li {
      max-width: 340px;
      text-align: left;

      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 5rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: 4.9rem;
    padding: 0 2.2rem 0 2.7rem;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    padding: 0 1.5rem;

    li {
      font-size: calc(
        ${(props) => props.theme.typography.body2.fontSize} - 1.4rem
      );

      line-height: 3rem;
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 40px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.tablet} {
    order: 2;
    align-self: center;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    bottom: 100px;
  }

  @media (min-width: 767px) and (max-height: 768px) {
    position: relative;
    bottom: 40px;
    margin-top: 5.2rem;
  }

  @media (max-width: 767px) and (max-height: 690px) {
    position: relative;
    bottom: 0;
    margin-top: 5.2rem;
  }

  @media (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    bottom: -20px;
  }

  @media (max-width: 320px) and (max-height: 470px) {
    margin-top: 1.6rem;
  }
`;

export const MobileContext = styled.div`
  display: none;

  p {
    font-family: ${(props) => props.theme.typography.body1.fontFamily};
    font-size: ${(props) => props.theme.typography.body1.fontSize};

    line-height: 2.2rem;
    letter-spacing: 0.69pt;
    text-transform: uppercase;

    &:not(:last-of-type) {
      margin-bottom: 2.2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-left: 2.7rem;
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    padding-left: 1.5rem;
  }

  @media (max-width: 767px) and (max-height: 567px) {
    p:first-of-type {
      display: none;
    }
  }
`;

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(7px);
  }
`;

export const ButtonGoTo = styled.button.attrs({ type: 'button' })`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  text-decoration: none;

  span {
    &:first-of-type {
      font-size: ${(props) => props.theme.typography.button1.fontSize};
      color: ${(props) => props.theme.colors.secondary};

      margin-bottom: 3.7rem;
    }

    &:last-of-type {
      display: flex;
      flex-direction: column;

      p {
        color: ${(props) => props.theme.colors.error};
        font-family: ${(props) => props.theme.typography.button1.fontFamily};
        font-size: ${(props) => props.theme.typography.body1.fontSize};

        text-transform: uppercase;
        letter-spacing: 0.69pt;
      }
    }
  }

  img {
    margin-top: 1.2rem;
  }

  &:hover {
    img {
      animation: ${bounce} 0.3s infinite alternate;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    span:first-of-type {
      margin-bottom: 2.7rem;
    }
  }

  @media (max-width: 320px) and (max-height: 568px) {
    span:first-of-type {
      display: none;
    }
  }
`;
