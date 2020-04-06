import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18rem;

  header {
    margin-bottom: 6.4rem;
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

  h2 {
    font-size: ${({ theme: { typography } }) => typography.body3.fontSize};
    color: ${({ theme: { colors } }) => colors.primary};
    margin-bottom: 10.8rem;
    line-height: 6rem;
    text-align: center;
    white-space: nowrap;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1084px;
  width: 100%;
`;

export const ListItem = styled.li``;

export const Image = styled.img``;
