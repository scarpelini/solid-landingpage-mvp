import { DefaultTheme } from 'styled-components';
import light from './theme.light';
import dark from './theme.dark';

interface Themes {
  [key: string]: DefaultTheme;
}

const themes: Themes = { light, dark };

export const getThemes = (): Themes => themes;

export const getTheme = (name: string): DefaultTheme => themes[name] || light;

export const setTheme = (name: string, theme: DefaultTheme) =>
  (themes[name] = theme || light);
