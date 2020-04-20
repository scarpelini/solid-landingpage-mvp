const size = {
  mobileS: '425px',
  mobile: '767px',
  tablet: '1023px',
  laptop: '1279px',
  laptopL: '1440px',
  desktop: '1770px',
};

const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default breakpoints;
