import styled from '@emotion/styled';
import { rem } from 'polished';
import { ThemeColorsProp, withThemeColors } from '../../stores/theme';

export const Description = withThemeColors(
  styled.div<ThemeColorsProp>(
    ({ themeColors: { faded } }) => `
      color: ${faded};
      font-size: ${rem(20)};
    `,
  ),
);
