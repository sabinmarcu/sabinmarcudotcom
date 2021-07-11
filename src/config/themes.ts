import {
  CVTheme,
  DefaultTheme,
  InputTheme,
} from '../style/themes';
import { matchUrl } from '../utils/func';
import { languages } from './languages';

type ThemePreset = {
  value: InputTheme,
};

export const defaultTheme: ThemePreset = {
  value: DefaultTheme,
};
export const themeOverrides: Record<string, ThemePreset> = {
  '/cv': {
    value: CVTheme,
  },
};

export const determineActiveTheme = (
  pathname: string,
) => matchUrl(pathname, themeOverrides, defaultTheme, languages);
