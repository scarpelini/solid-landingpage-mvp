import { DefaultTheme } from 'styled-components';

import light from './theme.light';
import dark from './theme.dark';

interface Themes {
  [key: string]: DefaultTheme;
}

interface SetTheme {
  name: string;
  theme: DefaultTheme;
}

const themes: Themes = { light, dark };

const getThemes = (): Themes => themes;

const getTheme = (name: string): DefaultTheme => themes[name] || light;

const setTheme = ({ name, theme }: SetTheme): void => {
  themes[name] = theme || light;
};

export { getThemes, getTheme, setTheme };
