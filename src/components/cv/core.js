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
  const handler = useCallback(
    (e) => {
      const doc = typeof document === 'undefined' ? null : document;
      if (!doc) {
        return;
      }
      const element = doc.getElementById(pageId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [pageId],
  );
  return handler;
};

export const contentTypes = {
  PROJECT: 'project',
  EXPERIENCE: 'experience',
};
