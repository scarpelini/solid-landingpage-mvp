export const defaultLocale = 'en-US';

export const supportedLocales = {
  'pt-BR': {
    // common: require('./locales/pt-BR/common.json'),
    // home: require('./locales/pt-BR/home.json'),
  },
  'en-US': {
    common: require('./locales/en-US/common.json'),
    header: require('./locales/en-US/header.json'),
    home: require('./locales/en-US/home.json'),
    ourExpertise: require('./locales/en-US/ourExpertise.json'),
    ourManifesto: require('./locales/en-US/ourManifesto.json'),
    techStack: require('./locales/en-US/techStack.json'),
    partners: require('./locales/en-US/partnersSay.json'),
    companies: require('./locales/en-US/companies.json'),
    sayHi: require('./locales/en-US/sayHi.json'),
  },
};
