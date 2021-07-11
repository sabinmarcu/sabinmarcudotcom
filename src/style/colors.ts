export const CVDark: Colors = {
  primary: '#0080d0',
  secondary: '#1f789c',
  text: '#ccc',
  background: '#222',
  paper: '#444',
  faded: '#666',
  border: '#444',
};

export const CVLight: Colors = {
  primary: '#704214',
  secondary: '#72243D',
  text: '#000',
  background: '#fff',
  paper: '#eee',
  faded: '#888',
  border: '#ccc',
};

export const DefaultDark: Colors = {
  primary: '#663399',
  secondary: '#72243D',
  text: '#ccc',
  background: '#222',
  paper: '#444',
  faded: '#666',
  border: '#444',
};

export const DefaultLight: Colors = {
  primary: '#663399',
  secondary: '#72243D',
  text: '#000',
  background: '#fff',
  paper: '#eee',
  faded: '#888',
  border: '#ccc',
};

export type ThemeVariant = 'light' | 'dark' | 'system';
export type ColorVariant = Exclude<ThemeVariant, 'system'>;

export type DualColors = Record<ColorVariant, Colors>;

export type Colors = {
  primary: string,
  secondary: string,
  text: string,
  faded: string,
  background: string,
  paper: string,
  border: string,
};
