import styled from 'styled-components';

export const Asset = styled.img`
  position: relative;
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
    padding: 9rem 0 0 0;

    .slick-slider {
      display: block;
      padding-bottom: 5rem;
    }

    header {
      padding-left: 2.5rem;

      h1 {
        max-width: 380px;
      }
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
    height: 13rem;

    &.hp {
      ${Asset} {
        width: 8.5rem;
      }
    }

    &.kia {
      ${Asset} {
        width: 13.5rem;
      }
    }

    &.citroen {
      ${Asset} {
        width: 12.5rem;
      }
    }

    &.globo {
      ${Asset} {
        width: 8.5rem;
      }
    }

    &.campus-party {
      ${Asset} {
        width: 19rem;
      }
    }

    &.visa {
      ${Asset} {
        width: 13.7rem;
      }
    }

    &.unilever {
      ${Asset} {
        width: 12rem;
      }
    }

    &.pepsico {
      ${Asset} {
        width: 25rem;
        left: -20px;
      }
    }
  }
`;
