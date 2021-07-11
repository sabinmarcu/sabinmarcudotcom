import { Provider } from './src/stores/theme';
import { Background } from './src/components/background';
import { PageTransition } from './src/components/Transition';
import { getPageTransition } from './src/config/pages';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props: { location: { pathname } } }) => (
  <Provider pathname={pathname}>
    <Background />
    <Layout>
      <PageTransition
        location={pathname}
        Transition={getPageTransition(pathname)}
      >
        {element}
      </PageTransition>
    </Layout>
  </Provider>
);
