import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding-top: 20.6rem;

  .slick-slider {
    display: none;
  }

  header {
    margin-bottom: 17.5rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    align-items: flex-start;
    padding-left: 5.2rem;
    padding-right: 5.2rem;

    header {
      margin-bottom: 7.1rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 9rem 0 0 0;

    .slick-slider {
      display: block;
      padding-bottom: 3rem;
    }

    header {
      padding-left: 2.5rem;

      h1 {
        max-width: 275px;
      }

      br {
        display: none;
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

  img {
    position: relative;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
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
    img {
      width: 7.5rem;
    }
  }

  &.kia {
    img {
      width: 11.5rem;
    }
  }

  &.citroen {
    img {
      width: 9.5rem;
    }
  }

  &.globo {
    img {
      width: 7.5rem;
    }
  }

  &.campus-party {
    img {
      width: 16rem;
    }
  }

  &.visa {
    img {
      width: 12.5rem;
    }
  }

  &.unilever {
    img {
      width: 8.5rem;
    }
  }

  &.pepsico {
    img {
      width: 17rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 13rem;

    &.hp {
      img {
        width: 8.5rem;
      }
    }

    &.kia {
      img {
        width: 13.5rem;
      }
    }

    &.citroen {
      img {
        width: 12.5rem;
      }
    }

    &.globo {
      img {
        width: 8.5rem;
      }
    }

    &.campus-party {
      img {
        width: 19rem;
      }
    }

    &.visa {
      img {
        width: 13.7rem;
      }
    }

    &.unilever {
      img {
        width: 12rem;
      }
    }

    &.pepsico {
      img {
        width: 25rem;
        left: -20px;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileS} {
    height: 13rem;

    &.hp {
      img {
        width: 6.2rem;
      }
    }

    &.kia {
      img {
        width: 10.5rem;
      }
    }

    &.citroen {
      img {
        width: 9.5rem;
      }
    }

    &.globo {
      img {
        width: 6.5rem;
      }
    }

    &.campus-party {
      img {
        width: 15rem;
      }
    }

    &.visa {
      img {
        width: 9.9rem;
      }
    }

    &.unilever {
      img {
        width: 8.7rem;
      }
    }

    &.pepsico {
      img {
        width: 18.1rem;
        left: -5px;
      }
    }
  }
`;
