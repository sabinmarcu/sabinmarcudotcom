import marked from 'marked';
import { FC } from 'react';
import { WorkExperience } from '../../config/schema';
import { ContentTypes, usePageId } from '../core';
import { Heading } from './Heading';
import { List, ListItem } from './List';
import { PageLink } from './PageLink';
import { Pill, PillGroup, PillList } from './Pill';
import { PositionItem } from './PositionItem';
import { Description } from './Text';

export type ExperienceItemType = WorkExperience & {
  type?: ContentTypes,
};
export const ExperienceItem: FC<ExperienceItemType> = ({
  id,
  name,
  showName,
  positions,
  description,
  projects,
  type = ContentTypes.EXPERIENCE,
}) => {
  const pageId = usePageId(id, type);
  return (
    <ListItem id={pageId}>
      <List plain>
        {
          positions.map(({
            id: positionId, to, from, name: positionName,
          }) => (
            <PositionItem
              key={positionId}
              {...{
                position: positionName,
                company: showName ? name : undefined,
                interval: { start: from, end: to },
              }}
            />
          ))
        }
      </List>
      {description && (
        <Description
          dangerouslySetInnerHTML={
            { __html: marked(description.markdown) }
          }
        />
      )}
      {projects.length > 0 && (
        <>
          <Heading inline>
            <span>Projects:</span>
            <PillList inline>
              <PillGroup>
                {projects.map(({ id: i, name: n }) => (
                  <PageLink
                    key={i}
                    as={Pill}
                    id={i}
                    type={ContentTypes.PROJECT}
                  >
                    <span>
                      {n}
                    </span>
                  </PageLink>
                ))}

              </PillGroup>
            </PillList>
          </Heading>
        </>
      )}
    </ListItem>
  );
};
