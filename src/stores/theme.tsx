import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { FC, useMemo, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { determineActiveTheme } from '../config/themes';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { Colors, DualColors } from '../style/colors';
import {
  DefaultTheme, InputTheme, Options, Theme,
} from '../style/themes';
import { HOCProp, makeStore } from '../utils/makeStore';
import { pageTransition } from '../config/constants';

const store = makeStore<Theme, InputTheme, Options>()({
  name: 'theme',
  defaultValue: DefaultTheme,
  handler: ({ defaultValue, preferSystemTheme, updateStore }) => {
    const globalDarkTheme = useMatchMedia(['prefers-color-scheme', 'dark']);
    const { pathname } = useLocation();
    useEffect(
      () => {
        const newTheme = determineActiveTheme(pathname);
        if (defaultValue !== newTheme.value) {
          setTimeout(updateStore, pageTransition, newTheme);
        }
      },
      [pathname, updateStore, defaultValue],
    );
    const theme = useMemo(() => {
      console.log('Theme change', (defaultValue?.colors as DualColors).light?.primary ?? (defaultValue?.colors as Colors).primary ?? 'unknown');
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
export const { Update } = store;
export const { useTheme, useThemeColors, useThemeLayout } = store.hooks;
export const { withTheme, withThemeColors, withThemeLayout } = store.hocs;
export type ThemeProp = HOCProp<typeof withTheme>;
export type ThemeColorsProp = HOCProp<typeof withThemeColors>;
export type ThemeLayoutProp = HOCProp<typeof withThemeLayout>;

const { Provider: SiteThemeProvider } = store;
const MUIThemeCustomizer: FC = ({ children }) => {
  const colors = useThemeColors();
  const muiTheme = useMemo(
    () => createMuiTheme({
      palette: {
        primary: {
          main: colors.primary,
        },
        secondary: {
          main: colors.secondary,
        },
        background: {
          default: colors.background,
          paper: colors.background,
        },
        text: {
          primary: colors.text,
          secondary: colors.faded,
        },
      },
    }),
    [colors],
  );
  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
};
export const Provider: FC<{ pathname: string }> = ({ children, pathname }) => (
  <SiteThemeProvider {...determineActiveTheme(pathname)}>
    <MUIThemeCustomizer>
      {children}
    </MUIThemeCustomizer>
  </SiteThemeProvider>
);
Provider.displayName = 'Site Theme Store';
