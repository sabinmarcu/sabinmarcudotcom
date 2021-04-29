// If you don&aspos;t want to use TypeScript you can delete this file!
import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

type DataProps = {
  site: {
    buildTime: string
  }
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write
      <em>.ts/.tsx</em>
      {' '}
      files for your pages, components etc. Please note that the
      <em>gatsby-*.js</em>
      {' '}
      files (like gatsby-node.js) currently don&aspos;t support TypeScript yet.
    </p>
    <p>
      You&aspos;re currently on the page &lquot;
      {path}
      &lquot; which was built on
      {data.site.buildTime}
      .
    </p>
    <p>
      To learn more, head over to our
      <a href="https://www.gatsbyjs.org/docs/typescript/">documentation about TypeScript</a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
