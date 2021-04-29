import { rem } from 'polished';
import styled from '@emotion/styled';

import {
  clickState,
  AccentStateProps,
  ClickStateProps,
} from '../../style/mixins';
import { makeStylerSet } from '../../utils/styles';
import { accentMixin, colors } from './common';

export type HeadingProps = Partial<{
  isTitle: boolean,
  section: boolean,
  large: boolean,
  compact: boolean,
  inline: boolean,
}> & AccentStateProps & ClickStateProps;

const { makeStyler, combineStylers } = makeStylerSet<HeadingProps>();

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
    {
      color: colors.main,
      borderBottom: `solid 4px ${colors.main}`,
      paddingBottom: rem(5),
      '&:not(:first-of-type)': {
        marginTop: rem(16),
      },
    },
    ({ section }) => !!section,
  ),
);

export const Heading = styled.h1<HeadingProps>(
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
);
