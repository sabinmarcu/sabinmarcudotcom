import { useMemo } from 'react';
import { Colors, CV } from '../style/colors';
import { makeStore } from '../utils/makeStore';

export type Theme = {
  theme: Colors,
};

const store = makeStore<Theme, Colors>()({
  name: 'theme',
  defaultValue: CV,
  handler: ({ defaultValue: colors }) => {
    const theme = useMemo(() => ({ theme: colors || CV }), [colors]);
    return theme;
  },
  selectors: {
    theme: ({ theme }) => theme,
  },
});

export default store;
export const { Provider } = store;
export const { useTheme } = store.hooks;
export const { withTheme } = store.hocs;
