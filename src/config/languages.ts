import languageName from '@cospired/i18n-iso-languages';
import languagesRaw from './langs.json';

export const languages = languagesRaw.map(({ locale }) => locale);

languages.forEach(
  (language) => {
    try {
      languageName.registerLocale(
        // eslint-disable-next-line global-require,import/no-dynamic-require
        require(`@cospired/i18n-iso-languages/langs/${language}.json`),
      );
    } catch (e) {
      // noop
    }
  },
);
