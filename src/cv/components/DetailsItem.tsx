import styled from '@emotion/styled';
import { rem } from 'polished';
import { FC } from 'react';
import { Icon } from '@mdi/react';
import { Theme, withTheme } from '../../stores/theme';

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

export const DetailsItemIconRaw = withTheme(
  styled.span<Partial<{
    faded: boolean,
    padding: string | number,
  }> & Theme>(
    `
      display: flex;
      flex-flow: row;
      align-items: center;
    `,
    ({ faded, padding = 6, theme: colors }) => ({
      color: colors[faded ? 'faded' : 'accent'],
      paddingRight: rem(typeof padding === 'string'
        ? parseInt(padding, 10)
        : padding),
    }),
    ({ onClick }) => (onClick ? 'cursor: pointer' : ''),
  ),
);

export const DetailsItem: FC<{
  icon: string,
}> = ({ icon, children }) => (
  <DetailsItemRaw>
    {icon && (
      <DetailsItemIconRaw>
        <Icon path={icon} size="1.2rem" />
      </DetailsItemIconRaw>
    )}
    {children}
  </DetailsItemRaw>
);
