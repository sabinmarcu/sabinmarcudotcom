import styled from '@emotion/styled';
import { rem } from 'polished';
import { pageTransition, pageTransitionFunction } from '../../config/constants';
import { ThemeColorsProp, withThemeColors } from '../../stores/theme';
import { clickState, ClickStateProps } from '../../style/mixins';

export const PillList = styled.div<Partial<{
  inline: boolean,
}>>(
  {
    flexFlow: 'column nowrap',
    fontSize: rem(16),
    fontWeight: 'normal',
  },
  ({ inline }) => (inline
    ? {
      display: 'inline-flex',
      padding: `0 ${rem(10)}`,
    }
    : { display: 'flex' }
  ),
);

export const PillGroup = styled.div(`
  padding: ${rem(2)} 0;
  overflow: hidden;
`);

export const Pill = withThemeColors(
  styled.span<
  Partial<{
    oneLine: boolean,
  } & ClickStateProps> & ThemeColorsProp
  >(
    `
      display: inline-flex;
      align-items: center;
      margin: ${rem(2)};
      > span {
        padding: ${rem(6)};
      }
      > div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
      }
    `,
    ({ oneLine, themeColors: { border, background } }) => (oneLine
      ? `
        justify-content: space-between;
        width: 100%;
      `
      : `
        background: ${background};
        justify-content: center;
        border: solid 1px ${border};
        border-radius: ${rem(12)};
        transition: all ${pageTransition}ms ${pageTransitionFunction};
      `),
    clickState,
  ),
);

export const PillSeparator = withThemeColors(
  styled.span<ThemeColorsProp>(
    ({ themeColors: { border } }) => `
      display: block;
      margin: 0 ${rem(5)};
      height: 100%;
      width: 1px;
      background: ${border};
    `,
  ),
);
