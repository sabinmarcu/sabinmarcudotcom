export const languages: string[] = require.context('../i18n', false)
  .keys()
  .map((it: string) => it.match(/.*\/([^.]+)$/))
  .filter(Boolean)
  .map((it: RegExpMatchArray) => it[1]);
console.log({ languages });
