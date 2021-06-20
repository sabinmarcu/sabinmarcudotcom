export const CVDark: Colors = {
  primary: '#0080d0',
  secondary: '#1f789c',
  text: '#ccc',
  background: '#222',
  faded: '#666',
  border: '#444',
};

export const CVLight: Colors = {
  primary: '#704214',
  secondary: '#72243D',
  text: '#000',
  background: '#fff',
  faded: '#888',
  border: '#ccc',
};

export const DefaultDark: Colors = {
  primary: '#0080d0',
  secondary: '#1f789c',
  text: '#ccc',
  background: '#222',
  faded: '#666',
  border: '#444',
};

export const DefaultLight: Colors = {
  primary: 'rebeccapurple',
  secondary: '#72243D',
  text: '#000',
  background: '#fff',
  faded: '#888',
  border: '#ccc',
};

export type DualColors = {
  light: Colors,
  dark: Colors,
};

export type Colors = {
  primary: string,
  secondary: string,
  text: string,
  faded: string,
  background: string,
  border: string,
};
