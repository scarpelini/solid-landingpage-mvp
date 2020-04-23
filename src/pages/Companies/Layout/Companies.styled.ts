import styled from 'styled-components';

export const Asset = styled.img`
  margin: 0 auto;
`;

export const Container = styled.section`
  position: relative;
  padding-top: 20.6rem;

  header {
    margin-bottom: 17.5rem;
  }

  .slick-slider {
    display: none;
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

    .slick-slider {
      display: block;
    }

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

  @media (max-width: 1279px) {
    max-width: 664px;
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 31.5rem;
  height: 20rem;
  outline: none;

  &.hp {
    ${Asset} {
      width: 7.5rem;
    }
  }

  &.kia {
    ${Asset} {
      width: 11.5rem;
    }
  }

  &.citroen {
    ${Asset} {
      width: 9.5rem;
    }
  }

  &.globo {
    ${Asset} {
      width: 7.5rem;
    }
  }

  &.campus-party {
    ${Asset} {
      width: 16rem;
    }
  }

  &.visa {
    ${Asset} {
      width: 12.5rem;
    }
  }

  &.unilever {
    ${Asset} {
      width: 8.5rem;
    }
  }

  &.pepsico {
    ${Asset} {
      width: 17rem;
    }
  }

  @media ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 16rem;
  }
`;
