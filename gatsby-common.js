import { Provider } from './src/stores/theme';
import { Background } from './src/components/background';

export const wrapPageElement = ({ element, props: { location: { pathname } } }) => (
  <Provider pathname={pathname}>
    <Background />
    {element}
  </Provider>
);
