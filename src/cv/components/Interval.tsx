import moment from 'moment';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { FC, useMemo } from 'react';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import { DetailsItemIconRaw, DetailsItemRaw } from './DetailsItem';
import { IntervalType } from '../types';
import { ThemeColorsProp, withThemeColors } from '../../stores/theme';

export const IntervalWrapper = withThemeColors(
  styled.div<ThemeColorsProp>(
    ({ themeColors: { faded } }) => ({
      color: faded,
      fontSize: rem(16),
    }),
  ),
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
          <CalendarBlankIcon />
        </DetailsItemIconRaw>
        {intervalString}
      </DetailsItemRaw>
    </IntervalWrapper>
  );
};
