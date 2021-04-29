import { FC } from 'react';
import { Project } from '../../config/schema';
import { ContentTypes, usePageId } from '../core';
import { ListItem } from './List';
import { PageLink } from './PageLink';
import { PositionItem } from './PositionItem';

export type ProjectItemProps = Project
& {
  type?: ContentTypes
};
export const ProjectItem: FC<ProjectItemProps> = ({
  id,
  name,
  from,
  to,
  workExperience,
  type = ContentTypes.PROJECT,
}) => {
  const pageId = usePageId(id, type);
  return (
    <ListItem id={pageId}>
      <PageLink
        as={PositionItem}
        id={workExperience!.id}
        type={ContentTypes.EXPERIENCE}
        {...{
          position: name,
          company: workExperience!.name,
          interval: { start: from, end: to },
        }}
      />
    </ListItem>
  );
};
