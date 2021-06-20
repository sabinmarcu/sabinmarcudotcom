import styled from '@emotion/styled';
import { rem } from 'polished';
import { ThemeProp, withTheme } from '../../stores/theme';

export const ListItem = styled.article();

export const List = withTheme(
  styled.section<Partial<{
    plain: boolean,
  }> & ThemeProp>(
    `
      display: grid;
    `,
    ({ plain, theme: { colors: { border }, layout: { maxWidth } } }) => (
      !plain
        ? {
          [ListItem as any]: {
            padding: `${rem(maxWidth * 0.02)} 0`,
          },
          '> *': {
            borderTop: `dashed 1px ${border}`,
            ':first-child': {
              borderTop: 'none',
            },
          },
        }
        : {
          [ListItem as any]: {
            padding: `${rem(maxWidth * 0.01)} 0`,
          },
        }
    ),
  ),
);
