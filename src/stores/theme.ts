import { useMemo } from 'react';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { Colors } from '../style/colors';
import { DefaultTheme, InputTheme, Theme } from '../style/themes';
import { HOCProp, makeStore } from '../utils/makeStore';

export type Options = {
  preferSystemTheme?: boolean,
};

const store = makeStore<Theme, InputTheme, Options>()({
  name: 'theme',
  defaultValue: DefaultTheme,
  handler: ({ defaultValue, preferSystemTheme }) => {
    const globalDarkTheme = useMatchMedia(['prefers-color-scheme', 'dark']);
    const theme = useMemo(() => {
      const newTheme = { ...(defaultValue || DefaultTheme) };
      let colors: Colors;
      if ('light' in newTheme.colors) {
        if (preferSystemTheme && globalDarkTheme) {
          colors = newTheme.colors.dark;
        } else {
          colors = newTheme.colors.light;
        }
      } else {
        colors = newTheme.colors;
      }
      return {
        colors,
        layout: newTheme.layout,
      };
    }, [defaultValue, globalDarkTheme, preferSystemTheme]);
    return theme;
  },
  selectors: {
    theme: (theme) => theme,
    themeColors: ({ colors }) => colors,
    themeLayout: ({ layout }) => layout,
  },
});

export default store;
export const { Provider, Update } = store;
export const { useTheme, useThemeColors, useThemeLayout } = store.hooks;
export const { withTheme, withThemeColors, withThemeLayout } = store.hocs;
export type ThemeProp = HOCProp<typeof withTheme>;
export type ThemeColorsProp = HOCProp<typeof withThemeColors>;
export type ThemeLayoutProp = HOCProp<typeof withThemeLayout>;
