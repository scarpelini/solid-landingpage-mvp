import styled from 'styled-components';

export const Container = styled.section`
  header {
    margin-bottom: 11.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    padding-left: 5.2rem;
    padding-right: 5.2rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Col = styled.div`
  max-width: 50%;
  width: 100%;

  &:last-of-type {
    display: flex;
    justify-content: center;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8.9rem;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize};
  margin-bottom: 3.9rem;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: ${({ theme: { typography } }) => typography.h2.fontSize};
  line-height: 4.2rem;
  max-width: 652px;
`;

export const Image = styled.img``;
