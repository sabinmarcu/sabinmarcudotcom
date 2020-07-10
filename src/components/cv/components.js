import React, { useMemo } from 'react';
import { Icon } from '@mdi/react';

import { mdiCalendarBlank } from '@mdi/js';

import moment from 'moment';
import {
  DetailsItemRaw,
  DetailsItemIconRaw,
  ListItem,
  Heading,
  IntervalWrapper,
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

export const ExperienceItem = ({ position, company, interval }) => (
  <ListItem>
    {position && <Heading large>{position}</Heading>}
    {company && <Heading accent>{company}</Heading>}
    <Interval {...interval} />
  </ListItem>
);

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
