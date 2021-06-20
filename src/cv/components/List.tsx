import styled from '@emotion/styled';
import { rem } from 'polished';
import { Theme, withTheme } from '../../stores/theme';
import { layout } from '../common';

export const ListItem = styled.article();

export const List = withTheme(
  styled.section<Partial<{
    plain: boolean,
  }> & Theme>(
    `
      display: grid;
    `,
    ({ plain, theme: { border } }) => (
      !plain
        ? {
          [ListItem as any]: {
            padding: `${rem(layout.maxWidth * 0.02)} 0`,
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
            padding: `${rem(layout.maxWidth * 0.01)} 0`,
          },
        }
    ),
  ),
);
