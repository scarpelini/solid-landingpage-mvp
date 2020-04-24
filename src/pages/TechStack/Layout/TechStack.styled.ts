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
    font-size: ${({ theme: { typography } }) => typography.body3.fontSize};
    color: ${({ theme: { colors } }) => colors.primary};
    margin-bottom: 10.8rem;
    line-height: 6rem;
    text-align: center;
    white-space: nowrap;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;

    h2 {
      font-size: ${({ theme: { typography } }) => typography.body4.fontSize};
      text-align: left;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
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
      font-family: ${({ theme: { typography } }) =>
        typography.body2.fontFamily};
      font-size: ${({ theme: { typography } }) => typography.body2.fontSize};

      margin: 7.5rem 0 8.5rem 0;
      font-weight: normal;
      text-align: left;
      line-height: 5rem;
      white-space: normal;

      br {
        display: none;
      }
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
  margin: 0 auto;
  line-height: 4.2rem;
  max-width: 733px;

  &:first-of-type {
    margin-bottom: 5.6rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    max-width: 100%;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0 2.2rem 0 2.5rem;

    &:first-of-type {
      margin-bottom: 7.5rem;
      line-height: 3.5rem;
    }

    &:last-of-type {
      line-height: 3.5rem;
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

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    &:nth-child(1),
    &:nth-child(3) {
      max-width: 170px;
    }

    &:nth-child(2) {
      max-width: 245px;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    &:not(:last-child) {
      margin-bottom: 7.4rem;
    }

    &:nth-child(1) {
      max-width: 140px;
    }

    &:nth-child(2) {
      max-width: 247px;
    }

    &:nth-child(3) {
      max-width: 130px;
    }
  }
`;

export const Image = styled.img``;
