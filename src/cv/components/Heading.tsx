import { rem } from 'polished';
import styled from '@emotion/styled';

import {
  clickState,
  AccentStateProps,
  ClickStateProps,
  accentState,
} from '../../style/mixins';
import { makeStylerSet } from '../../utils/styles';
import { ThemeColorsProp, withThemeColors } from '../../stores/theme';
import { pageTransition, pageTransitionFunction } from '../../config/constants';

export type HeadingProps = Partial<{
  isTitle: boolean,
  section: boolean,
  large: boolean,
  compact: boolean,
  inline: boolean,
}> & AccentStateProps & ClickStateProps;

const { makeStyler, combineStylers } = makeStylerSet<HeadingProps & ThemeColorsProp>();

const makeStyles = combineStylers(
  makeStyler(
    { fontSize: rem(18) },
    ({ compact }) => !!compact,
  ),
  makeStyler(
    { justifyContent: 'flex-start' },
    ({ inline }) => !!inline,
  ),
  makeStyler(
    { fontSize: rem(26) },
    ({ large }) => !!large,
  ),
  makeStyler(
    {
      fontSize: rem(41),
      textTransform: 'uppercase',
    },
    ({ isTitle }) => !!isTitle,
  ),
  makeStyler(
    ({ themeColors: { primary } }) => ({
      color: primary,
      borderBottom: 'solid 4px currentColor',
      paddingBottom: rem(5),
      '&:not(:first-of-type)': {
        marginTop: rem(16),
      },
    }),
    ({ section }) => !!section,
  ),
);

export const Heading = withThemeColors(
  styled.h1<HeadingProps & ThemeColorsProp>(
    `
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${rem(22)};  
      margin-bottom: ${rem(6)};
      quotes: "“" "”" "‘" "’";
      transition: all ${pageTransition}ms ${pageTransitionFunction};
    `,
    makeStyles,
    accentState,
    clickState,
  ),
);
