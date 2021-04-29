import { FC } from 'react';
import { ClickStateProps } from '../../style/mixins';
import { Heading } from './Heading';
import { Interval } from './Interval';
import { ListItem } from './List';
import { IntervalType } from './types';

type Common = {
  interval: IntervalType,
};

type PositionProps = {
  position: string,
};

type CompanyProps = {
  company: string,
} & ClickStateProps;

export type PositionItemProps = (
  | (Common & PositionProps)
  | (Common & CompanyProps)
);

const Position: FC<Partial<PositionProps>> = ({
  position,
}) => (position ? <Heading large>{position}</Heading> : null);

const Company: FC<Partial<CompanyProps>> = ({
  company,
  onClick,
}) => (company ? <Heading accent onClick={onClick}>{company}</Heading> : null);

export const PositionItem: FC<PositionItemProps> = ({
  interval,
  ...rest
}) => (
  <ListItem>
    <Position {...rest} />
    <Company {...rest} />
    <Interval {...interval} />
  </ListItem>
);
