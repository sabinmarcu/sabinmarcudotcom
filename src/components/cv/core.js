import {
  createContext, useContext, useMemo, useCallback,
} from 'react';

export const CVContext = createContext({});
export const useCV = () => useContext(CVContext);

export const makePageId = (id, type = 'unknown') => `link-${type}-${id}`;
export const usePageId = (id, type = 'unknown') => useMemo(
  () => makePageId(id, type),
  [id, type],
);

export const useScrollToPageId = (id, type = 'unknown') => useCallback(
  () => document.getElementById(makePageId(id, type))
    .scrollIntoView({ behavior: ' smooth' }),
  [id, type],
);
