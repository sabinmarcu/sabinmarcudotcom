import { Provider } from './src/stores/theme';
import { Background } from './src/components/background';
import { PageTransition } from './src/components/Transition';
import { getPageTransition } from './src/config/pages';
import { pageTransition } from './src/config/constants';

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

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), pageTransition);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      pageTransition,
    );
  }
  return false;
};
