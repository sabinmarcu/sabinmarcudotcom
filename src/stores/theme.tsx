import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core';
import {
  FC, useMemo, useEffect,
} from 'react';
import { useLocation } from '@reach/router';
import { determineActiveTheme } from '../config/themes';
import { useMatchMedia } from '../hooks/useMatchMedia';
import {
  Colors, ColorVariant, Shadows, ShadowTypes, ThemeVariant,
} from '../style/colors';
import {
  DefaultTheme, InputTheme, ThemeWithShadows,
} from '../style/themes';
import { HOCProp, makeStore } from '../utils/makeStore';
import { pageTransition } from '../config/constants';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type ThemeStore = {
  theme: ThemeWithShadows,
  variant: ThemeVariant | undefined,
  setVariant: (variant: ThemeVariant) => void,
};

const pickShadows = (variant: ColorVariant): Record<ShadowTypes, string> => Object.entries(Shadows)
  .map(([key, { light, dark }]) => [
    key,
    variant === 'light' ? light : dark,
  ])
  .reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {} as any,
  );

const store = makeStore<ThemeStore, InputTheme>()({
  name: 'theme',
  defaultValue: DefaultTheme,
  handler: ({ defaultValue, updateStore }) => {
    const globalDarkTheme = useMatchMedia(['prefers-color-scheme', 'dark']);
    const [variant, setVariant] = useLocalStorage<ThemeVariant>('themeVariant', 'system');
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
      const newTheme = { ...(defaultValue || DefaultTheme) };
      let colors: Colors;
      let shadows: Record<ShadowTypes, string>;
      if ('light' in newTheme.colors) {
        let nextVariant: ColorVariant;
        if (variant === 'system') {
          nextVariant = globalDarkTheme ? 'dark' : 'light';
        } else {
          nextVariant = variant || 'dark';
        }
        colors = newTheme.colors[nextVariant];
        shadows = pickShadows(nextVariant);
      } else {
        shadows = pickShadows('light');
        colors = newTheme.colors;
      }
      return {
        colors,
        shadows,
        layout: newTheme.layout,
      };
    }, [defaultValue, globalDarkTheme, variant]);
    return { theme, variant, setVariant };
  },
  selectors: {
    theme: ({ theme }) => theme,
    themeVariant: ({ variant, setVariant }) => ({ variant, setVariant }),
    themeColors: ({ theme: { colors } }) => colors,
    themeLayout: ({ theme: { layout } }) => layout,
  },
});

export default store;
export const { Update } = store;
export const {
  useTheme,
  useThemeColors,
  useThemeLayout,
  useThemeVariant,
} = store.hooks;
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
      <StylesProvider injectFirst>
        {children}
      </StylesProvider>
    </MUIThemeCustomizer>
  </SiteThemeProvider>
);
Provider.displayName = 'Site Theme Store';
