import React, { useEffect, useRef } from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { CircleSpinner } from 'react-spinners-kit';

import { Container } from './Loading.styled';

interface Props {
  theme: DefaultTheme;
}

const Loading: React.FC<Props> = ({ theme }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    const root = document.getElementById('root');

    return () => {
      root.classList.remove('block');
    };
  }, []);

  return (
    <Container ref={loadingRef}>
      <CircleSpinner color={theme.colors.primary} size={24} />
    </Container>
  );
};

export default withTheme(Loading);
