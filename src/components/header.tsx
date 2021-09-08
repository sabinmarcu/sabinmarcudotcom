import styled from '@emotion/styled';
import { Link } from 'gatsby-plugin-react-intl';
import {
  FC, useEffect, useMemo, useRef, useState,
} from 'react';
import { pageTransition, pageTransitionFunction } from '../config/constants';
import { usePrevious } from '../hooks/usePrevious';
import {
  ThemeProp,
  ThemeLayoutProp,
  withTheme,
  withThemeLayout,
} from '../stores/theme';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

const HeaderWrapper = withTheme<ThemeProp & { hide: boolean }>(
  styled.header(
    `
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      transition: background ${pageTransition}ms ${pageTransitionFunction}, transform 350ms ease-out;
      z-index: 1000;
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
      @media print {
        display: none;
      }
    `,
    ({ theme: { colors: { primary }, shadows: { header } } }) => ({
      background: primary,
      boxShadow: header,
    }),
    ({ hide }) => (hide
      ? { transform: 'translateY(-100%)' }
      : {}
    ),
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
const wnd = typeof window === 'undefined' ? null : window;

const Header: FC<{
  siteTitle: string,
}> = ({
  siteTitle,
}) => {
  const [scroll, setScroll] = useState<number>(wnd?.scrollY ?? 0);
  const prevScroll = usePrevious(scroll);
  const setScrollRef = useRef<typeof setScroll>();
  useEffect(
    () => {
      setScrollRef.current = setScroll;
    },
    [setScroll],
  );
  useEffect(
    () => {
      const handler = () => {
        const { current: setter } = setScrollRef;
        setter?.(wnd?.scrollY ?? 0);
      };
      wnd?.addEventListener('scroll', handler);
      return () => wnd?.removeEventListener('scroll', handler);
    },
    [],
  );
  const shouldHide = useMemo(
    () => scroll - (prevScroll || 0) > 0,
    [scroll, prevScroll],
  );
  return (
    <HeaderWrapper hide={shouldHide}>
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
};

export default Header;
