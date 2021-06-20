import styled from '@emotion/styled';
import { rem } from 'polished';
import { Theme, withTheme } from '../../stores/theme';

export const Description = withTheme(
  styled.p<Theme>(
    ({ theme: { faded } }) => `
      color: ${faded};
      font-size: ${rem(20)};
    `,
  ),
);
