import styled from '@emotion/styled';
import { rem } from 'polished';
import { FC } from 'react';
import { MdiReactIconComponentType } from 'mdi-react';
import { ThemeColorsProp, withThemeColors } from '../../stores/theme';

export const DetailsItemRaw = styled.div`
  padding-right: ${rem(27)};
  font-size: inherit;
  font-weight: bold;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  color: inherit;
  a, a:link, a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const DetailsItemIconRaw = withThemeColors(
  styled.span<Partial<{
    faded: boolean,
    text: boolean,
    padding: string | number,
  }> & ThemeColorsProp>(
    `
      display: flex;
      flex-flow: row;
      align-items: center;
    `,
    ({
      faded,
      text,
      padding = 6,
      themeColors: colors,
    }) => ({
      color: colors[(faded && 'faded') || (text && 'text') || 'primary'],
      paddingRight: rem(typeof padding === 'string'
        ? parseInt(padding, 10)
        : padding),
    }),
    ({ onClick }) => (onClick ? 'cursor: pointer' : ''),
  ),
);

export const DetailsItem: FC<{
  Icon: MdiReactIconComponentType,
}> = ({ Icon, children }) => (
  <DetailsItemRaw>
    {Icon && (
      <DetailsItemIconRaw>
        <Icon />
      </DetailsItemIconRaw>
    )}
    {children}
  </DetailsItemRaw>
);
