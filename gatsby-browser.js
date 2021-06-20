import { Provider } from './src/stores/theme'; // eslint-disable-line
import { Background } from './src/components/background'; // eslint-disable-line

export const wrapPageElement = ({ element }) => (
  <Provider>
    <Background />
    {element}
  </Provider>
);
