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
  button1: TextStyle;
  button2: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      error: string;
      onPrimary: string;
      onSecondary: string;
      onBackground: string;
      onError: string;
    };
    breakpoints: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
    typography: Typography;
  }
}
