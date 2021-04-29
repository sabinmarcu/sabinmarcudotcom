import {
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { Query } from '../config/schema';

export const CVContext = createContext<Query>({} as Query);
export const useCV = () => useContext(CVContext);

export const makePageId = (
  id: string,
  type: ContentTypes,
) => `link-${type}-${id}`;

export const usePageId = (
  id: string,
  type: ContentTypes,
) => useMemo(
  () => makePageId(id, type),
  [id, type],
);

export const useScrollToPageId = (
  id: string,
  type: ContentTypes,
) => {
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

export enum ContentTypes {
  PROJECT,
  EXPERIENCE,
}
