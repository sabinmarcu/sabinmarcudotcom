import { Provider } from './src/stores/theme';
import { Background } from './src/components/background';
import { PageTransition } from './src/components/Transition';
import { getPageTransition } from './src/config/pages';

export const wrapPageElement = ({ element, props: { location: { pathname } } }) => (
  <Provider>
    <Background />
    <PageTransition
      location={pathname}
      Transition={getPageTransition(pathname)}
    >
      {element}
    </PageTransition>
  </Provider>
);
