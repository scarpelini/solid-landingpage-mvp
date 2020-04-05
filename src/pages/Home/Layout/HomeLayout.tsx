import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, H1 } from 'components';

const HomeLayout: React.FC = () => {
  const { t } = useTranslation(['home']);
  return (
    <Layout>
      <H1>{t('home:title')}</H1>
    </Layout>
  );
};

export default HomeLayout;
