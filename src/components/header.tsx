import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FC } from 'react';
import {
  ThemeColorsProp,
  ThemeLayoutProp, withThemeColors, withThemeLayout,
} from '../stores/theme';
import { ThemeSwitcher } from './ThemeSwitcher';

const HeaderWrapper = withThemeColors<ThemeColorsProp>(
  styled.header(
    `
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
    `,
    ({ themeColors: { primary } }) => ({
      background: primary,
    }),
  ),
);

const HeaderContainer = withThemeLayout<ThemeLayoutProp>(
  styled.div(
    `
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    `,
    ({ themeLayout: { maxWidth } }) => ({
      maxWidth,
    }),
  ),
);

const Header: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ThemeSwitcher />
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
