import React, { useMemo } from 'react';
import marked from 'marked';

import { Icon } from '@mdi/react';
import { mdiCalendarBlank } from '@mdi/js';

import moment from 'moment';

import { usePageId } from './core';

import {
  DetailsItemRaw,
  DetailsItemIconRaw,
  List,
  ListItem,
  Heading,
  IntervalWrapper,
  Description,
} from './style';

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

export const PositionItem = ({ position, company, interval }) => (
  <ListItem>
    {position && <Heading large>{position}</Heading>}
    {company && <Heading accent>{company}</Heading>}
    <Interval {...interval} />
  </ListItem>
);

export const ExperienceItem = ({
  id,
  name,
  positions,
  description,
  type = 'experience',
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
                company: name,
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
