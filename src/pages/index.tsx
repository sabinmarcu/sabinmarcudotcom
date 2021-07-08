import { Link } from 'gatsby-plugin-react-intl';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <FormattedMessage
        defaultMessage="Hi everyone"
        description="some description"
      />
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/cv/">Go to CV [WIP]</Link>
    <br />
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
);

export default IndexPage;
