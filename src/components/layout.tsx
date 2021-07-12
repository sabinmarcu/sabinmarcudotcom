/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { FC, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageTransition } from './Transition';
import { getPageTransition } from '../config/pages';

import Header from './header';
import './layout.css';
import { usePrevious } from '../hooks/usePrevious';
import { languages } from '../config/languages';

const Layout: FC<any> = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const path = location?.pathname;
  const previousPath = usePrevious(path);
  const shouldTransition = useMemo(
    () => {
      if (!previousPath || !path) {
        return true;
      }
      const [x, y]: [string[], string[]] = [
        path.substr(1).split('/'),
        previousPath.substr(1).split('/'),
      ].sort((a, b) => b.length - a.length) as [string[], string[]];
      if (!languages.includes(x[0])) {
        return true;
      }
      if (
        !y.reduce(
          (acc, curr, idx) => acc && (curr === x[idx + 1]),
          true,
        )
      ) {
        return true;
      }
      return false;
    },
    [path, previousPath],
  );

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {shouldTransition
        ? (
          <PageTransition
            location={location?.pathname}
            Transition={getPageTransition(location?.pathname)}
          >
            {children}
          </PageTransition>
        )
        : children}
    </>
  );
};

export default Layout;
