import Icon from '@mdi/react';
import moment from 'moment';
import styled from '@emotion/styled';
import { mdiCalendarBlank } from '@mdi/js';
import { rem } from 'polished';
import { FC, useMemo } from 'react';
import { colors } from './common';
import { DetailsItemIconRaw, DetailsItemRaw } from './DetailsItem';
import { IntervalType } from './types';

export const IntervalWrapper = styled.div(
  {
    color: colors.faded,
    fontSize: rem(16),
  },
);

const intervalFormat = 'MMM YYYY';
export const Interval: FC<IntervalType> = ({ start, end }) => {
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
