export const CVDark: Colors = {
  primary: '#0080d0',
  secondary: '#1f789c',
  text: '#ccc',
  textContrast: '#fff',
  background: '#222',
  paper: '#444',
  faded: '#666',
  border: '#444',
};

export const CVLight: Colors = {
  primary: '#704214',
  secondary: '#72243D',
  text: '#000',
  textContrast: '#fff',
  background: '#fff',
  paper: '#eee',
  faded: '#888',
  border: '#ccc',
};

export const DefaultDark: Colors = {
  primary: '#663399',
  secondary: '#72243D',
  text: '#ccc',
  textContrast: '#fff',
  background: '#222',
  paper: '#444',
  faded: '#666',
  border: '#444',
};

export const DefaultLight: Colors = {
  primary: '#663399',
  secondary: '#72243D',
  text: '#000',
  textContrast: '#fff',
  background: '#fff',
  paper: '#eee',
  faded: '#888',
  border: '#ccc',
};

export const Shadows = {
  header: {
    light: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    dark: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
  },
};

export type ThemeVariant = 'light' | 'dark' | 'system';
export type ColorVariant = Exclude<ThemeVariant, 'system'>;

export type DualColors = Record<ColorVariant, Colors>;

export type Colors = {
  primary: string,
  secondary: string,
  text: string,
  textContrast: string,
  faded: string,
  background: string,
  paper: string,
  border: string,
};
