import { useIntl, changeLocale } from 'gatsby-plugin-react-intl';
import {
  FC, useCallback, useMemo,
} from 'react';
import Flag from 'react-country-flag';
import styled from '@emotion/styled';
import {
  Tooltip, Menu, MenuItem, ListItemText,
} from '@material-ui/core';
import languageName from '@cospired/i18n-iso-languages';
import { StyledButton, StyledListItemIcon } from './ThemeSwitcher';
import languages from '../config/langs.json';
import { useMenu } from '../hooks/useMenu';
import { capitalize } from '../utils/text';
import '../config/languages';

const StyledFlag = styled(Flag)`
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  line-height: 1.2em;
`;

const findCountry = (locale: string): string => languages.find(
  ({ locale: lang }) => lang === locale,
)!.country;

type ArrayElement<T extends Record<any, any>> = T extends (infer R)[] ? R : never;
const LanguageItem = ({
  language,
  onClick,
  currentLocale,
  defaultLocale,
}: {
  currentLocale: string,
  defaultLocale: string,
  onClick: (input: string) => void,
  language: ArrayElement<typeof languages>,
}) => {
  const countryName = useMemo(
    () => capitalize(
      languageName.getName(language.locale, currentLocale)!,
    ),
    [language.locale, currentLocale],
  );
  const countryNameEn = useMemo(
    () => capitalize(
      languageName.getName(language.locale, defaultLocale)!,
    ),
    [language.locale, defaultLocale],
  );
  const onClickImpl = useCallback(
    () => onClick(language.locale),
    [language.locale, onClick],
  );
  return (
    <Tooltip title={countryNameEn}>
      <MenuItem onClick={onClickImpl}>
        <StyledListItemIcon>
          <StyledFlag
            countryCode={language.country}
            svg
            aria-label={countryName}
          />
        </StyledListItemIcon>
        <ListItemText>
          {countryName}
        </ListItemText>
      </MenuItem>
    </Tooltip>
  );
};

export const LanguageSwitcher: FC = () => {
  const { locale, defaultLocale } = useIntl();
  const countryCode = useMemo(
    () => findCountry(locale),
    [locale],
  );
  const countryName = useMemo(
    () => languageName.getName(locale, locale),
    [locale],
  );
  const { onClose, menu, button } = useMenu<HTMLButtonElement>();
  const onClick = useCallback(
    (input: string) => {
      changeLocale(input);
      onClose();
    },
    [onClose],
  );
  return (
    <>
      <Tooltip title="Select language">
        <StyledButton {...button}>
          <StyledFlag
            countryCode={countryCode}
            svg
            aria-label={countryName}
          />
        </StyledButton>
      </Tooltip>
      <Menu {...menu}>
        {languages.map((language) => (
          <LanguageItem
            currentLocale={locale}
            defaultLocale={defaultLocale}
            language={language}
            onClick={onClick}
          />
        ))}
      </Menu>
    </>
  );
};
