export const capitalize = (text: string): string => [text[0].toUpperCase(), text.substr(1)].join('');

export type PrefixType<T extends string, K extends string> = `${T}${Capitalize<K>}`;
export const prefix = <
  T extends string,
  K extends string,
>(prefixStr: T, text: K): PrefixType<T, K> => [
    prefixStr,
    capitalize(text),
  ].join('') as PrefixType<T, K>;
