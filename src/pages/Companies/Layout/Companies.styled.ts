import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 20.6rem;

  header {
    margin-bottom: 17.5rem;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    align-items: flex-start;
    padding-left: 5.2rem;
    padding-right: 5.2rem;

    header {
      margin-bottom: 7.1rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 12.6rem 2.5rem 0 2.5rem;

    header h1 {
      max-width: 324px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1263px;
  background-color: black;

  @media (max-width: 1279px) {
    max-width: 664px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31.5rem;
  height: 20rem;
`;

export const Asset = styled.img``;
