/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageTransition } from './Transition';
import { getPageTransition } from '../config/pages';

import Header from './header';
import './layout.css';

const Layout: FC<any> = ({ children, location: { pathname } }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageTransition
        location={pathname}
        Transition={getPageTransition(pathname)}
      >
        {children}
      </PageTransition>
    </>
  );
};

export default Layout;
