import React from 'react';
import { useTranslation } from 'react-i18next';

import Arrow from 'res/svg/icon-arrow.svg';
import { Button, Description, Span, Label, Icon } from './ButtonGoTo.styled';

interface Props {
  onClick?: () => void;
}

const ButtonGoTo: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['common']);

  return (
    <Button onClick={props.onClick}>
      <Description>{t('button.knowHowDescription')}</Description>
      <Span>
        <Label>{t('button.knowHow')}</Label>
        <Icon src={Arrow} />
      </Span>
    </Button>
  );
};

export default ButtonGoTo;
