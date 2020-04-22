import React from 'react';
import { useTranslation } from 'react-i18next';

import Arrow from 'res/svg/icon-arrow.svg';
import { Button, Description, Span, Label, Icon } from './ButtonGoTo.styled';

const ButtonGoTo: React.FC = () => {
  const { t } = useTranslation(['common']);

  function scrollWithOffset() {
    const rootElement = document.getElementById('root');
    const target = document.getElementById('our-expertise');

    if (rootElement && target) {
      rootElement.scrollTo({ top: target.offsetTop - 101, behavior: 'smooth' });
    }
  }

  return (
    <Button onClick={() => scrollWithOffset()}>
      <Description>{t('button.knowHowDescription')}</Description>
      <Span>
        <Label>{t('button.knowHow')}</Label>
        <Icon src={Arrow} />
      </Span>
    </Button>
  );
};

export default ButtonGoTo;
