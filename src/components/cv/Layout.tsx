import styled from '@emotion/styled';
import { rem } from 'polished';
import { layout } from './common';

export const Container = styled.section(
  layout,
  `
    margin: 0 auto;
    padding: ${rem(20)};
    box-sizing: border-box;
    min-height: 100vh;
    font-size: ${rem(16)};
    font-family: 'Lato';
  `,
);

export const MainColumn = styled.section();
export const SecondaryColumn = styled.aside();
export const TwoColumns = styled.section(
  `
    display: grid;
    grid-template-columns: 2fr minmax(${layout.maxWidth * 0.35}px, 1fr);
    grid-gap: ${layout.maxWidth * 0.05}px;
  `,
  {
    [`@media (max-width: ${layout.maxWidth * 0.5}px)`]: {
      gridTemplateColumns: '1fr',
      [SecondaryColumn as any]: {
        gridRow: '1/2',
      },
    },
  },
);
