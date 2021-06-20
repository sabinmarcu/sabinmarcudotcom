export const capitalize = (text: string): string => [text[0].toUpperCase(), text.substr(1)].join('');
export const prefix = (prefixStr: string, text: string) => [
  prefixStr,
  capitalize(text),
].join('');
