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

export const useScrollToPageId = (id, type = 'unknown') => {
  const pageId = useMemo(
    () => makePageId(id, type),
    [id, type],
  );
  const element = useMemo(
    () => document.getElementById(pageId),
    [pageId],
  );
  const handler = useCallback(
    (e) => {
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [element],
  );
  return handler;
};

export const contentTypes = {
  PROJECT: 'project',
  EXPERIENCE: 'experience',
};
