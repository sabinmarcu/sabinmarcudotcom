import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors, layout } from '../common';

export const ListItem = styled.article();

export const List = styled.section<Partial<{
  plain: boolean,
}>>(
  `
    display: grid;
  `,
  ({ plain }) => (
    !plain
      ? {
        [ListItem as any]: {
          padding: `${rem(layout.maxWidth * 0.02)} 0`,
        },
        '> *': {
          borderTop: `dashed 1px ${colors.border}`,
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
);
