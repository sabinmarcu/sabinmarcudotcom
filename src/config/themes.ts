import {
  CVTheme,
  DefaultTheme,
  InputTheme,
  Options,
} from '../style/themes';
import { matchUrl } from '../utils/func';
import { languages } from './languages';

type ThemePreset = {
  value: InputTheme,
} & Partial<Options>;

export const defaultTheme: ThemePreset = {
  value: DefaultTheme,
  preferSystemTheme: true,
};
export const themeOverrides: Record<string, ThemePreset> = {
  '/cv': {
    value: CVTheme,
    preferSystemTheme: true,
  },
};

export const determineActiveTheme = (
  pathname: string,
) => matchUrl(pathname, themeOverrides, defaultTheme, languages);
