import styled from '@emotion/styled';
import { rem } from 'polished';
import { ThemeLayoutProp, withThemeLayout } from '../../stores/theme';

export const Header = withThemeLayout(
  styled.header<ThemeLayoutProp>(
    ({ themeLayout: { maxWidth } }) => `
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: ${rem(maxWidth * 0.05)};
    `,
  ),
);

export const HeaderDetails = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
