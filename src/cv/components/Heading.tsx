import { rem } from 'polished';
import styled from '@emotion/styled';

import {
  clickState,
  AccentStateProps,
  ClickStateProps,
} from '../../style/mixins';
import { makeStylerSet } from '../../utils/styles';
import { accentMixin } from '../common';
import { Theme, withTheme } from '../../stores/theme';

export type HeadingProps = Partial<{
  isTitle: boolean,
  section: boolean,
  large: boolean,
  compact: boolean,
  inline: boolean,
}> & AccentStateProps & ClickStateProps;

const { makeStyler, combineStylers } = makeStylerSet<HeadingProps & Theme>();

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
    ({ theme: { main } }) => ({
      color: main,
      borderBottom: `solid 4px ${main}`,
      paddingBottom: rem(5),
      '&:not(:first-of-type)': {
        marginTop: rem(16),
      },
    }),
    ({ section }) => !!section,
  ),
);

export const Heading = withTheme(
  styled.h1<HeadingProps & Theme>(
    `
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${rem(22)};  
      margin-bottom: ${rem(6)};
      quotes: "“" "”" "‘" "’";
    `,
    makeStyles,
    accentMixin,
    clickState,
  ),
);
