import { Typography } from './theme';

const primaryFont = 'Integral-Regular';
const secondaryFont = 'Suisse-Regular';
const secondaryMedium = 'Suisse-Medium';

const typography: Typography = {
  h1: {
    fontFamily: primaryFont,
    fontSize: '8rem',
  },
  h2: {
    fontFamily: primaryFont,
    fontSize: '2rem',
  },
  subtitle1: {
    fontFamily: secondaryMedium,
    fontSize: '3rem',
  },
  subtitle2: {
    fontFamily: primaryFont,
    fontSize: '1.5rem',
  },
  body1: {
    fontFamily: primaryFont,
    fontSize: '1.3rem',
  },
  body2: {
    fontFamily: secondaryFont,
    fontSize: '3.4rem',
  },
  body3: {
    fontFamily: secondaryFont,
    fontSize: '5rem',
  },
  button1: {
    fontFamily: primaryFont,
    fontSize: '2rem',
  },
  button2: {
    fontFamily: primaryFont,
    fontSize: '0.9rem',
  },
  caption: {
    fontFamily: primaryFont,
    fontSize: '0.5rem',
  },
  overline: {
    fontFamily: primaryFont,
    fontSize: '0.4rem',
  },
};

export default typography;
