import React, { useMemo, createElement } from 'react';
import marked from 'marked';

import { Icon } from '@mdi/react';
import { mdiCalendarBlank } from '@mdi/js';

import moment from 'moment';

import {
  usePageId,
  makePageId,
  useScrollToPageId,
  contentTypes,
} from './core';

import {
  DetailsItemRaw,
  DetailsItemIconRaw,
  List,
  ListItem,
  Heading,
  IntervalWrapper,
  Description,
  PillList,
  PillGroup,
  Pill,
} from './style';

export const PageLink = ({
  as = 'a', id, type = contentTypes.EXPERIENCE, ...rest
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

export const DetailsItem = ({ icon, children }) => (
  <DetailsItemRaw>
    {icon && (
      <DetailsItemIconRaw>
        <Icon path={icon} size="1.2rem" />
      </DetailsItemIconRaw>
    )}
    {children}
  </DetailsItemRaw>
);

export const PositionItem = ({
  position,
  company,
  interval,
  onClick,
}) => (
  <ListItem>
    {position && <Heading large>{position}</Heading>}
    {company && <Heading accent onClick={onClick}>{company}</Heading>}
    <Interval {...interval} />
  </ListItem>
);

export const ExperienceItem = ({
  id,
  name,
  showName,
  positions,
  description,
  projects,
  type = contentTypes.EXPERIENCE,
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
                    type={contentTypes.PROJECT}
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

export const ProjectItem = ({
  id,
  name,
  from,
  to,
  workExperience: {
    name: workName,
    id: workId,
  },
  type = 'project',
}) => {
  const pageId = usePageId(id, type);
  return (
    <ListItem id={pageId}>
      <PageLink
        as={PositionItem}
        id={workId}
        type={contentTypes.EXPERIENCE}
        {...{
          position: name,
          company: workName,
          interval: { start: from, end: to },
        }}
      />
    </ListItem>
  );
};

const intervalFormat = 'MMM YYYY';
export const Interval = ({ start, end }) => {
  const intervalString = useMemo(
    () => [
      moment(start).format(intervalFormat),
      end
        ? moment(end).format(intervalFormat)
        : 'Present',
    ].join(' - '),
    [start, end],
  );
  return (
    <IntervalWrapper>
      <DetailsItemRaw>
        <DetailsItemIconRaw>
          <Icon path={mdiCalendarBlank} size="1.2rem" />
        </DetailsItemIconRaw>
        {intervalString}
      </DetailsItemRaw>
    </IntervalWrapper>
  );
};
