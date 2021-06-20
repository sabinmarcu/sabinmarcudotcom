import styled from '@emotion/styled';
import { rem } from 'polished';
import { ThemeLayoutProp, withThemeLayout } from '../../stores/theme';

export const Container = withThemeLayout<ThemeLayoutProp>(
  styled.section(
    ({ themeLayout: layout }) => layout,
    `
    margin: 0 auto;
    padding: ${rem(20)};
    box-sizing: border-box;
    min-height: 100vh;
    font-size: ${rem(16)};
    font-family: 'Lato';
  `,
  ),
);

export const MainColumn = styled.section();
export const SecondaryColumn = styled.aside();
export const TwoColumns = withThemeLayout(
  styled.section<ThemeLayoutProp>(
    ({ themeLayout: { maxWidth } }) => `
    display: grid;
    grid-template-columns: 2fr minmax(${rem(maxWidth * 0.35)}, 1fr);
    grid-gap: ${rem(maxWidth * 0.05)};
  `,
    ({ themeLayout: { maxWidth } }) => ({
      '@media not print': {
        [`@media (max-width: ${rem(maxWidth * 0.5)})`]: {
          gridTemplateColumns: '1fr',
          [SecondaryColumn as any]: {
            gridRow: '1/2',
          },
        },
      },
    }),
  ),
);
