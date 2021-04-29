import styled from '@emotion/styled';
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
          padding: `${layout.maxWidth * 0.02}px 0`,
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
          padding: `${layout.maxWidth * 0.01}px 0`,
        },
      }
  ),
);
