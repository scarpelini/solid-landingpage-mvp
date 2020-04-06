export const defaultLocale = 'pt-BR';

export const supportedLocales = {
  'pt-BR': {
    common: require('./locales/pt-BR/common.json'),
    home: require('./locales/pt-BR/home.json'),
  },
  'en-US': {
    common: require('./locales/en-US/common.json'),
    home: require('./locales/en-US/home.json'),
    ourExpertise: require('./locales/en-US/ourExpertise.json'),
    ourManifesto: require('./locales/en-US/ourManifesto.json'),
    techStack: require('./locales/en-US/techStack.json'),
    partners: require('./locales/en-US/partners.json'),
    companiesWorked: require('./locales/en-US/companiesWorked.json'),
    sayHi: require('./locales/en-US/sayHi.json'),
  },
};
