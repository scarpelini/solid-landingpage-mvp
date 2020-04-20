import 'styled-components';

export interface TextStyle {
  fontFamily: string;
  fontSize?: number | string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing?: number | string;
  lineHeight?: number | string;
}

export interface Typography {
  h1: TextStyle;
  h2: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  body3: TextStyle;
  body4: TextStyle;
  button1: TextStyle;
  button2: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      onPrimary: string;
      secondary: string;
      onSecondary: string;
      background: string;
      error: string;
    };
    breakpoints: {
      mobileS: string;
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
    typography: Typography;
  }
}
