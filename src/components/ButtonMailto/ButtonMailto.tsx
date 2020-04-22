import React from 'react';
import { useTranslation } from 'react-i18next';

import { Footer, Label, Button, ButtonShape } from './ButtonMailto.styled';

interface Props {
  title?: string;
  label?: string;
}

const ButtonMailto: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation(['common']);

  return (
    <Footer>
      <Button href={t('common:mailto')}>
        <Label>{props.title}</Label>
        {/* t('common:button.noDreamComes') */}
        {/* t('common:button.BookUsNow') */}
        <ButtonShape>{props.label}</ButtonShape>
      </Button>
    </Footer>
  );
};

export default ButtonMailto;
