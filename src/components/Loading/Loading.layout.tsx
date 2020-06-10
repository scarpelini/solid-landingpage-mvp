import React, { useEffect } from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { CircleSpinner } from 'react-spinners-kit';

import { Container } from './Loading.styled';

interface Props {
  theme: DefaultTheme;
}

const Loading: React.FC<Props> = ({ theme }) => {
  useEffect(() => {
    const root = document.getElementById('root');

    return () => {
      root.classList.remove('block');
    };
  }, []);

  return (
    <Container>
      <CircleSpinner color={theme.colors.primary} size={24} />
    </Container>
  );
};

export default withTheme(Loading);
