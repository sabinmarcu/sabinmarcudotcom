import {
  CVDark,
  CVLight,
  Colors,
  DualColors,
  DefaultLight,
  DefaultDark,
} from './colors';
import { CV as CVLayout, Layout } from './layout';

export type Theme = {
  colors: Colors,
  layout: Layout,
};

export type InputTheme = {
  colors: Colors | DualColors,
  layout: Layout,
};

export const CVTheme: InputTheme = {
  colors: {
    light: CVLight,
    dark: CVDark,
  },
  layout: CVLayout,
};

export const DefaultTheme: InputTheme = {
  colors: {
    light: DefaultLight,
    dark: DefaultDark,
  },
  layout: CVLayout,
};
