import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 18rem;

  header {
    margin-bottom: 6.4rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.typography.body3.fontSize};

    margin-bottom: 10.8rem;
    line-height: 6rem;
    text-align: center;
    white-space: nowrap;
  }

  p {
    color: ${(props) => props.theme.colors.secondary};

    margin: 0 auto;
    line-height: 4.2rem;
    max-width: 733px;

    &:first-of-type {
      margin-bottom: 5.6rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    align-items: flex-start;

    h2 {
      font-size: ${(props) => props.theme.typography.body4.fontSize};
      text-align: left;
    }

    p {
      max-width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-top: 9rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;

    header {
      margin-bottom: 9rem;
    }

    h1 {
      max-width: 310px;
    }

    h2 {
      font-size: ${(props) => props.theme.typography.body2.fontSize};
      font-family: ${(props) => props.theme.typography.body2.fontFamily};

      margin: 7.5rem 0 8.5rem 0;
      font-weight: normal;
      text-align: left;
      line-height: 5rem;
      white-space: normal;

      br {
        display: none;
      }
    }

    p {
      padding: 0 2.2rem 0 2.5rem;
      line-height: 3.5rem;

      &:first-of-type {
        margin-bottom: 7.5rem;
        line-height: 3.5rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    h2 {
      margin: 7.5rem 0;
      font-size: 2.8rem;
      line-height: 4.5rem;

      br {
        display: none;
      }
    }

    p {
      padding: 0 1.5rem;
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1084px;
  width: 100%;

  li {
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    li {
      &:nth-child(1),
      &:nth-child(3) {
        max-width: 170px;
      }

      &:nth-child(2) {
        max-width: 245px;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;

    li {
      &:not(:last-child) {
        margin-bottom: 7.4rem;
      }

      &:nth-child(1) {
        max-width: 93px;
      }

      &:nth-child(2) {
        max-width: 164px;
      }

      &:nth-child(3) {
        max-width: 86px;
      }
    }
  }
`;
