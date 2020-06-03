import 'styled-components';

type FontWeightProps =
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

type FontStyleProps = 'normal' | 'italic';

export interface TextStyle {
  fontFamily: string;
  fontSize?: number | string;
  letterSpacing?: number | string;
  lineHeight?: number | string;
  fontStyle?: FontStyleProps;
  fontWeight?: FontWeightProps;
}

interface Colors {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  background: string;
  error: string;
}

interface Breakpoints {
  mobileS: string;
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

interface Typography {
  h1: TextStyle;
  h1Mobile: TextStyle;
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
    colors: Colors;
    breakpoints: Breakpoints;
    typography: Typography;
  }
}
