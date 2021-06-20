import { useMemo } from 'react';
import { Colors, CV as CVColors } from '../style/colors';
import { Layout, CV as CVLayout } from '../style/layout';
import { HOCProp, makeStore } from '../utils/makeStore';

export type DualColors = {
  light: Colors,
  dark: Colors,
};

export type Theme = {
  colors: Colors,
  layout: Layout,
};

export type InputTheme = {
  colors: Colors | DualColors,
  layout: Layout,
};

export type Options = {
  useLocalTheme?: boolean,
};

const defaultTheme = {
  colors: CVColors,
  layout: CVLayout,
};

const store = makeStore<Theme, InputTheme, Options>()({
  name: 'theme',
  defaultValue: defaultTheme,
  handler: ({ defaultValue }) => {
    const theme = useMemo(() => {
      const newTheme = { ...(defaultValue || defaultTheme) };
      let colors: Colors;
      if ('light' in newTheme.colors) {
        colors = newTheme.colors.light;
      } else {
        colors = newTheme.colors;
      }
      return {
        colors,
        layout: newTheme.layout,
      };
    }, [defaultValue]);
    return theme;
  },
  selectors: {
    theme: (theme) => theme,
    themeColors: ({ colors }) => colors,
    themeLayout: ({ layout }) => layout,
  },
});

export default store;
export const { Provider } = store;
export const { useTheme, useThemeColors, useThemeLayout } = store.hooks;
export const { withTheme, withThemeColors, withThemeLayout } = store.hocs;
export type ThemeProp = HOCProp<typeof withTheme>;
export type ThemeColorsProp = HOCProp<typeof withThemeColors>;
export type ThemeLayoutProp = HOCProp<typeof withThemeLayout>;
