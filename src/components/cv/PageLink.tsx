import { createElement, ElementType, FC } from 'react';
import { ContentTypes, makePageId, useScrollToPageId } from './core';

export const PageLink: FC<{
  as: ElementType<any>,
  id: string,
  type: ContentTypes,
}> = ({
  as = 'a',
  id,
  type = ContentTypes.EXPERIENCE,
  ...rest
}) => {
  const onClick = useScrollToPageId(id, type);
  return createElement(as, {
    onClick,
    dataLinkTo: process.env.NODE_ENV === 'development'
      ? makePageId(id, type)
      : undefined,
    ...rest,
  });
};
