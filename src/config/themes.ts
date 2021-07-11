import {
  CVTheme,
  DefaultTheme,
  InputTheme,
  Options,
} from '../style/themes';

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
): { value: InputTheme } & Partial<Options> => Object.entries(themeOverrides)
  .find(([key]) => new RegExp(`^(/[^/]+)?${key}`).test(pathname))?.[1] || defaultTheme;
