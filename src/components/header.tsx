import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FC } from 'react';
import { pageTransition, pageTransitionFunction } from '../config/constants';
import {
  ThemeProp,
  ThemeLayoutProp,
  withTheme,
  withThemeLayout,
} from '../stores/theme';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

const HeaderWrapper = withTheme<ThemeProp>(
  styled.header(
    `
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      transition: background ${pageTransition}ms ${pageTransitionFunction};
      z-index: 1000;
    `,
    ({ theme: { colors: { primary }, shadows: { header } } }) => ({
      background: primary,
      boxShadow: header,
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
      padding: 1rem 1.25rem;
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
      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
